import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const versionDirectory = resolve(scriptDirectory, "..");
const assetPath = resolve(versionDirectory, "assets/operator-room.stl");
const readmePath = resolve(versionDirectory, "README.md");

function vector(from, to) {
  return [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function normal(a, b, c) {
  const product = cross(vector(a, b), vector(a, c));
  const length = Math.hypot(...product) || 1;
  return product.map((value) => Number((value / length).toFixed(6)));
}

function formatNumber(value) {
  const rounded = Number(value.toFixed(6));
  return Object.is(rounded, -0) ? "0" : String(rounded);
}

function vertex(values) {
  return `      vertex ${values.map(formatNumber).join(" ")}`;
}

function facet(a, b, c) {
  return [
    `  facet normal ${normal(a, b, c).map(formatNumber).join(" ")}`,
    "    outer loop",
    vertex(a),
    vertex(b),
    vertex(c),
    "    endloop",
    "  endfacet",
  ].join("\n");
}

function box(minX, minY, minZ, maxX, maxY, maxZ) {
  const p = [
    [minX, minY, minZ],
    [maxX, minY, minZ],
    [maxX, maxY, minZ],
    [minX, maxY, minZ],
    [minX, minY, maxZ],
    [maxX, minY, maxZ],
    [maxX, maxY, maxZ],
    [minX, maxY, maxZ],
  ];

  return [
    [p[0], p[2], p[1]], [p[0], p[3], p[2]],
    [p[4], p[5], p[6]], [p[4], p[6], p[7]],
    [p[0], p[1], p[5]], [p[0], p[5], p[4]],
    [p[1], p[2], p[6]], [p[1], p[6], p[5]],
    [p[2], p[3], p[7]], [p[2], p[7], p[6]],
    [p[3], p[0], p[4]], [p[3], p[4], p[7]],
  ].map((triangle) => facet(...triangle));
}

function triangularPrism(x, y, z, length, width, height) {
  const p = [
    [x, y - width / 2, z],
    [x, y + width / 2, z],
    [x + length, y, z],
    [x, y - width / 2, z + height],
    [x, y + width / 2, z + height],
    [x + length, y, z + height],
  ];

  return [
    [p[0], p[2], p[1]], [p[3], p[4], p[5]],
    [p[0], p[1], p[4]], [p[0], p[4], p[3]],
    [p[1], p[2], p[5]], [p[1], p[5], p[4]],
    [p[2], p[0], p[3]], [p[2], p[3], p[5]],
  ].map((triangle) => facet(...triangle));
}

const facets = [
  // Shared plane and perimeter rails.
  ...box(-12, -9, -0.35, 12, 9, 0),
  ...box(-12, -9, 0, 12, -8.7, 0.45),
  ...box(-12, 8.7, 0, 12, 9, 0.45),
  ...box(-12, -8.7, 0, -11.7, 8.7, 0.45),
  ...box(11.7, -8.7, 0, 12, 8.7, 0.45),

  // Raised routes make the shared plane legible while orbiting.
  ...box(-0.35, 1.5, 0, 0.35, 6.1, 0.16),
  ...box(1.2, -0.3, 0, 7.1, 0.3, 0.16),
  ...box(-7.2, -5.5, 0, -1.2, -4.9, 0.16),

  // Focus 00: a central beacon on a stepped plinth.
  ...box(-1.5, -1.5, 0, 1.5, 1.5, 0.55),
  ...box(-0.9, -0.9, 0.55, 0.9, 0.9, 4.8),

  // Interface 01: a low, wide control block.
  ...box(-9.4, 4.3, 0, -5.8, 7.0, 2.1),
  ...box(-8.7, 3.8, 0, -6.5, 4.3, 0.8),

  // Media 02: offset twin towers.
  ...box(5.9, 4.2, 0, 7.7, 6.3, 3.3),
  ...box(8.0, 4.8, 0, 9.5, 6.7, 4.2),

  // Render 03: a portal with a visible opening.
  ...box(6.2, -7.1, 0, 7.3, -4.0, 3.4),
  ...box(9.4, -7.1, 0, 10.5, -4.0, 3.4),
  ...box(7.3, -7.1, 2.55, 9.4, -4.0, 3.4),

  // A low player marker establishes a forward direction.
  ...triangularPrism(-8.6, -5.2, 0.18, 2.4, 1.6, 0.5),
];

const stl = [
  "solid operator_console_world",
  ...facets,
  "endsolid operator_console_world",
  "",
].join("\n");

await writeFile(assetPath, stl);

const readme = await readFile(readmePath, "utf8");
const scene = `<!-- scene:start -->\n\`\`\`stl\n${stl}\`\`\`\n<!-- scene:end -->`;
const scenePattern = /<!-- scene:start -->[\s\S]*<!-- scene:end -->/;

if (!scenePattern.test(readme)) {
  throw new Error("Could not find the README scene markers.");
}

const updatedReadme = readme.replace(scenePattern, scene);
await writeFile(readmePath, updatedReadme);
console.log(`Generated ${facets.length} facets in ${assetPath}`);
