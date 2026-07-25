<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-live-telemetry/assets/telemetry-dark.svg"
  />
  <source
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
    srcset="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-live-telemetry/assets/telemetry-light.svg"
  />
  <img
    src="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-live-telemetry/assets/telemetry-light.svg"
    alt="Taylor Yates — live public GitHub telemetry"
    width="100%"
  />
</picture>

```text
SOURCE  GITHUB REST API       HOST  THIS REPOSITORY       THEME  AUTOMATIC
```

## A profile that reports its own state.

I’m **Taylor Yates**, a full-stack engineer at **Spaceback** building creative
interfaces, media systems, render infrastructure, and the feedback paths
between them.

The panel above is generated inside this repository from GitHub’s public user,
repository, and event APIs. It is stored as ordinary SVG—not served by a
visitor-tracking widget—and automatically selects a light or dark asset to
match your GitHub theme.

### Stable signal

| Channel | Working material |
| --- | --- |
| Interface | React, TypeScript, interaction systems |
| Media | WebCodecs, MediaSource, Canvas, WebGL |
| Services | Rails, Node.js, PostgreSQL, Redis, queues |
| Production | AWS, Docker, rendering, CI, observability |

<details>
  <summary><code>HOW THE TELEMETRY WORKS</code></summary>
  <br />

  1. A dependency-free Node script calls GitHub’s public REST endpoints.
  2. It writes deterministic light and dark SVGs into this version’s assets.
  3. A scheduled GitHub Action commits only when the public signal changes.
  4. A `<picture>` element lets GitHub choose the asset for the viewer’s theme.

  [Inspect the generator](./scripts/build-telemetry.mjs) ·
  [Inspect the workflow](../../.github/workflows/update-profile-telemetry.yml)
</details>

> [!NOTE]
> GitHub’s public event API is intentionally not real-time. The panel is a
> compact public signal, not a surveillance counter.

`CONTACT` [evantayloryates@gmail.com](mailto:evantayloryates@gmail.com)
· `SOURCE` [github.com/evantayloryates](https://github.com/evantayloryates)
