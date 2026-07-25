import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const username = process.env.GITHUB_USERNAME || "evantayloryates";
const token = process.env.GITHUB_TOKEN;
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = resolve(scriptDirectory, "../assets");

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": `${username}-profile-telemetry`,
  "X-GitHub-Api-Version": "2026-03-10",
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${path}`);
  }

  return response.json();
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function shortDate(value) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(value))
    .toUpperCase();
}

function unique(values) {
  return [...new Set(values)];
}

function renderTelemetry({ profile, events, routes, theme }) {
  const dark = theme === "dark";
  const palette = dark
    ? {
        background: "#080a10",
        panel: "#111621",
        border: "#2a3445",
        primary: "#f0f4fa",
        secondary: "#8d9aae",
        accent: "#6fffd2",
        hot: "#ff647c",
        grid: "#ffffff",
      }
    : {
        background: "#edf3f5",
        panel: "#ffffff",
        border: "#c2d0d6",
        primary: "#102436",
        secondary: "#566c79",
        accent: "#007f72",
        hot: "#d82f53",
        grid: "#102436",
      };

  const routeRows = routes
    .slice(0, 3)
    .map((repo, index) => {
      const y = 240 + index * 50;
      return `<circle cx="721" cy="${y - 5}" r="5" fill="${palette.accent}"/>
        <text x="738" y="${y}" class="route">${escapeXml(repo.name)}</text>
        <text x="1107" y="${y}" text-anchor="end" class="date">${shortDate(repo.pushed_at)}</text>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 460" role="img" aria-labelledby="title desc">
  <title id="title">Taylor Yates — live public GitHub telemetry</title>
  <desc id="desc">A self-hosted panel reports public repositories, followers, recent event sample size, and recently active public repositories.</desc>
  <defs>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M30 0H0V30" fill="none" stroke="${palette.grid}" stroke-opacity=".035"/>
    </pattern>
    <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="6" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      text { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      .label { fill: ${palette.secondary}; font-size: 11px; letter-spacing: 2px; }
      .value { fill: ${palette.primary}; font-family: Arial, Helvetica, sans-serif; font-size: 34px; font-weight: 800; }
      .route { fill: ${palette.primary}; font-size: 14px; }
      .date { fill: ${palette.secondary}; font-size: 10px; letter-spacing: 1px; }
    </style>
  </defs>
  <rect width="1200" height="460" rx="22" fill="${palette.background}"/>
  <rect width="1200" height="460" rx="22" fill="url(#grid)"/>
  <rect x="34" y="34" width="1132" height="392" rx="12" fill="${palette.panel}" stroke="${palette.border}"/>

  <text x="66" y="76" class="label">LIVE PUBLIC SIGNAL / GITHUB REST API</text>
  <circle cx="1129" cy="69" r="6" fill="${palette.accent}" filter="url(#glow)"/>
  <text x="1068" y="73" class="date">ONLINE</text>

  <text x="64" y="145" fill="${palette.primary}" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="800">TAYLOR YATES</text>
  <text x="66" y="179" class="label">${escapeXml(profile.company || "SPACEBACK")} / ${escapeXml(profile.location || "NEW YORK")}</text>

  <g transform="translate(66 222)">
    <rect width="180" height="115" rx="8" fill="${palette.background}" stroke="${palette.border}"/>
    <rect x="198" width="180" height="115" rx="8" fill="${palette.background}" stroke="${palette.border}"/>
    <rect x="396" width="180" height="115" rx="8" fill="${palette.background}" stroke="${palette.border}"/>
    <text x="18" y="30" class="label">PUBLIC REPOS</text>
    <text x="216" y="30" class="label">FOLLOWERS</text>
    <text x="414" y="30" class="label">EVENT SAMPLE</text>
    <text x="18" y="79" class="value">${profile.public_repos}</text>
    <text x="216" y="79" class="value">${profile.followers}</text>
    <text x="414" y="79" class="value">${events.length}</text>
    <path d="M18 96h144M216 96h144M414 96h144" stroke="${palette.accent}" stroke-width="3"/>
  </g>

  <path d="M672 204v151" stroke="${palette.border}"/>
  <text x="710" y="212" class="label">RECENT PUBLIC ROUTES</text>
  ${routeRows}

  <rect x="66" y="377" width="1068" height="24" rx="4" fill="${palette.background}" stroke="${palette.border}"/>
  <circle cx="83" cy="389" r="4" fill="${palette.hot}"/>
  <text x="96" y="393" class="date">SELF-HOSTED SVG · UPDATES ONLY WHEN PUBLIC DATA CHANGES · NO VISITOR TRACKING</text>
</svg>
`;
}

const [profile, repositories, events] = await Promise.all([
  github(`/users/${username}`),
  github(`/users/${username}/repos?per_page=100&type=owner&sort=pushed`),
  github(`/users/${username}/events/public?per_page=30`),
]);

const eventRepositories = unique(
  events
    .map((event) => event.repo?.name?.split("/").pop())
    .filter(Boolean)
);

const publicOwnedRepositories = repositories.filter(
  (repository) => !repository.fork && repository.name !== username
);

const routes = unique([
  ...eventRepositories,
  ...publicOwnedRepositories.map((repository) => repository.name),
])
  .map((name) => publicOwnedRepositories.find((repository) => repository.name === name))
  .filter(Boolean)
  .slice(0, 3);

await mkdir(outputDirectory, { recursive: true });

for (const theme of ["light", "dark"]) {
  const svg = renderTelemetry({ profile, events, routes, theme });
  await writeFile(resolve(outputDirectory, `telemetry-${theme}.svg`), svg);
}

console.log(`Updated telemetry for ${username}: ${routes.map((repo) => repo.name).join(", ")}`);
