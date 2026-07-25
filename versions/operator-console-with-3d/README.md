<p align="center">
  <img
    src="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-with-3d/assets/console.svg"
    alt="Taylor's creative systems operator console"
    width="100%"
  />
</p>

```console
$ whoami
Taylor Yates — full-stack engineer, media-tool builder, systems untangler

$ location
New York, NY

$ current_process
Building creative technology at Spaceback
```

### `man taylor`

I build the parts between **“this should be possible”** and **“this works every
time.”** Most often, that means product interfaces, media pipelines, render
infrastructure, and the operational glue that lets all three behave like one
system.

```yaml
inputs:
  - product questions with technical consequences
  - video, motion, and campaign data
  - workflows that have outgrown manual operation

runtime:
  interface: [React, TypeScript, HTML, CSS]
  services: [Rails, Node.js, PostgreSQL, Redis]
  media: [WebCodecs, MediaSource, Canvas, WebGL, ExtendScript]
  operations: [AWS, Docker, GitHub Actions, observability]

returns:
  - tools with a clear point of view
  - systems that explain themselves
  - fewer mysterious render failures
```

<details>
  <summary><code>$ ./about --verbose</code></summary>
  <br />

  I’m interested in software that touches a medium, not only a database:
  timelines, players, compositors, renderers, creative editors, and the systems
  behind them. I’m equally happy tracing a production failure through a queue
  as I am tuning the interaction that caused the job to exist.

  The recurring goal is simple: make powerful machinery feel direct.
</details>

### `open_channel`

```text
email  →  evantayloryates@gmail.com
github →  github.com/evantayloryates
```

### `/dev/spatial-console`

The console opens into a small systems yard: one focused beacon and three test
structures on a shared plane. The model itself is native GitHub—not a video,
screenshot, or third-party widget.

<p align="center">
  <img
    src="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-with-3d/assets/spatial-hud.svg"
    alt="Control map for navigating Taylor's spatial console"
    width="100%"
  />
</p>

| Viewer input | Spatial equivalent |
| --- | --- |
| Drag | Look around from the pinned orbit camera |
| Right-drag | Translate left, right, up, or down |
| Scroll | Move forward or backward |
| Viewer mode | Switch among solid, surface-angle, and wireframe views |

<sub>GitHub owns the viewer controls, so the arrow cluster above is a control
map rather than a clickable overlay. The native inputs are the functional
controls.</sub>

[OPEN THE SCENE IN GITHUB’S FULL 3D VIEWER](https://github.com/evantayloryates/evantayloryates/blob/master/versions/operator-console-with-3d/assets/operator-room.stl)

<!-- scene:start -->
```stl
solid operator_console_world
  facet normal 0 0 -1
    outer loop
      vertex -12 -9 -0.35
      vertex 12 9 -0.35
      vertex 12 -9 -0.35
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 -9 -0.35
      vertex -12 9 -0.35
      vertex 12 9 -0.35
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 -9 0
      vertex 12 -9 0
      vertex 12 9 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 -9 0
      vertex 12 9 0
      vertex -12 9 0
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 -9 -0.35
      vertex 12 -9 -0.35
      vertex 12 -9 0
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 -9 -0.35
      vertex 12 -9 0
      vertex -12 -9 0
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 -9 -0.35
      vertex 12 9 -0.35
      vertex 12 9 0
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 -9 -0.35
      vertex 12 9 0
      vertex 12 -9 0
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 9 -0.35
      vertex -12 9 -0.35
      vertex -12 9 0
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 9 -0.35
      vertex -12 9 0
      vertex 12 9 0
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 9 -0.35
      vertex -12 -9 -0.35
      vertex -12 -9 0
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 9 -0.35
      vertex -12 -9 0
      vertex -12 9 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 -9 0
      vertex 12 -8.7 0
      vertex 12 -9 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 -9 0
      vertex -12 -8.7 0
      vertex 12 -8.7 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 -9 0.45
      vertex 12 -9 0.45
      vertex 12 -8.7 0.45
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 -9 0.45
      vertex 12 -8.7 0.45
      vertex -12 -8.7 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 -9 0
      vertex 12 -9 0
      vertex 12 -9 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 -9 0
      vertex 12 -9 0.45
      vertex -12 -9 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 -9 0
      vertex 12 -8.7 0
      vertex 12 -8.7 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 -9 0
      vertex 12 -8.7 0.45
      vertex 12 -9 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 -8.7 0
      vertex -12 -8.7 0
      vertex -12 -8.7 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 -8.7 0
      vertex -12 -8.7 0.45
      vertex 12 -8.7 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 -8.7 0
      vertex -12 -9 0
      vertex -12 -9 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 -8.7 0
      vertex -12 -9 0.45
      vertex -12 -8.7 0.45
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 8.7 0
      vertex 12 9 0
      vertex 12 8.7 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 8.7 0
      vertex -12 9 0
      vertex 12 9 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 8.7 0.45
      vertex 12 8.7 0.45
      vertex 12 9 0.45
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 8.7 0.45
      vertex 12 9 0.45
      vertex -12 9 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 8.7 0
      vertex 12 8.7 0
      vertex 12 8.7 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 8.7 0
      vertex 12 8.7 0.45
      vertex -12 8.7 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 8.7 0
      vertex 12 9 0
      vertex 12 9 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 8.7 0
      vertex 12 9 0.45
      vertex 12 8.7 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 9 0
      vertex -12 9 0
      vertex -12 9 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 9 0
      vertex -12 9 0.45
      vertex 12 9 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 9 0
      vertex -12 8.7 0
      vertex -12 8.7 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 9 0
      vertex -12 8.7 0.45
      vertex -12 9 0.45
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 -8.7 0
      vertex -11.7 8.7 0
      vertex -11.7 -8.7 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -12 -8.7 0
      vertex -12 8.7 0
      vertex -11.7 8.7 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 -8.7 0.45
      vertex -11.7 -8.7 0.45
      vertex -11.7 8.7 0.45
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -12 -8.7 0.45
      vertex -11.7 8.7 0.45
      vertex -12 8.7 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 -8.7 0
      vertex -11.7 -8.7 0
      vertex -11.7 -8.7 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -12 -8.7 0
      vertex -11.7 -8.7 0.45
      vertex -12 -8.7 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -11.7 -8.7 0
      vertex -11.7 8.7 0
      vertex -11.7 8.7 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -11.7 -8.7 0
      vertex -11.7 8.7 0.45
      vertex -11.7 -8.7 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -11.7 8.7 0
      vertex -12 8.7 0
      vertex -12 8.7 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -11.7 8.7 0
      vertex -12 8.7 0.45
      vertex -11.7 8.7 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 8.7 0
      vertex -12 -8.7 0
      vertex -12 -8.7 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -12 8.7 0
      vertex -12 -8.7 0.45
      vertex -12 8.7 0.45
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 11.7 -8.7 0
      vertex 12 8.7 0
      vertex 12 -8.7 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 11.7 -8.7 0
      vertex 11.7 8.7 0
      vertex 12 8.7 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 11.7 -8.7 0.45
      vertex 12 -8.7 0.45
      vertex 12 8.7 0.45
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 11.7 -8.7 0.45
      vertex 12 8.7 0.45
      vertex 11.7 8.7 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 11.7 -8.7 0
      vertex 12 -8.7 0
      vertex 12 -8.7 0.45
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 11.7 -8.7 0
      vertex 12 -8.7 0.45
      vertex 11.7 -8.7 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 -8.7 0
      vertex 12 8.7 0
      vertex 12 8.7 0.45
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 12 -8.7 0
      vertex 12 8.7 0.45
      vertex 12 -8.7 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 8.7 0
      vertex 11.7 8.7 0
      vertex 11.7 8.7 0.45
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 12 8.7 0
      vertex 11.7 8.7 0.45
      vertex 12 8.7 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 11.7 8.7 0
      vertex 11.7 -8.7 0
      vertex 11.7 -8.7 0.45
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 11.7 8.7 0
      vertex 11.7 -8.7 0.45
      vertex 11.7 8.7 0.45
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -0.35 1.5 0
      vertex 0.35 6.1 0
      vertex 0.35 1.5 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -0.35 1.5 0
      vertex -0.35 6.1 0
      vertex 0.35 6.1 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -0.35 1.5 0.16
      vertex 0.35 1.5 0.16
      vertex 0.35 6.1 0.16
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -0.35 1.5 0.16
      vertex 0.35 6.1 0.16
      vertex -0.35 6.1 0.16
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -0.35 1.5 0
      vertex 0.35 1.5 0
      vertex 0.35 1.5 0.16
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -0.35 1.5 0
      vertex 0.35 1.5 0.16
      vertex -0.35 1.5 0.16
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 0.35 1.5 0
      vertex 0.35 6.1 0
      vertex 0.35 6.1 0.16
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 0.35 1.5 0
      vertex 0.35 6.1 0.16
      vertex 0.35 1.5 0.16
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 0.35 6.1 0
      vertex -0.35 6.1 0
      vertex -0.35 6.1 0.16
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 0.35 6.1 0
      vertex -0.35 6.1 0.16
      vertex 0.35 6.1 0.16
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -0.35 6.1 0
      vertex -0.35 1.5 0
      vertex -0.35 1.5 0.16
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -0.35 6.1 0
      vertex -0.35 1.5 0.16
      vertex -0.35 6.1 0.16
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 1.2 -0.3 0
      vertex 7.1 0.3 0
      vertex 7.1 -0.3 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 1.2 -0.3 0
      vertex 1.2 0.3 0
      vertex 7.1 0.3 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 1.2 -0.3 0.16
      vertex 7.1 -0.3 0.16
      vertex 7.1 0.3 0.16
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 1.2 -0.3 0.16
      vertex 7.1 0.3 0.16
      vertex 1.2 0.3 0.16
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 1.2 -0.3 0
      vertex 7.1 -0.3 0
      vertex 7.1 -0.3 0.16
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 1.2 -0.3 0
      vertex 7.1 -0.3 0.16
      vertex 1.2 -0.3 0.16
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 7.1 -0.3 0
      vertex 7.1 0.3 0
      vertex 7.1 0.3 0.16
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 7.1 -0.3 0
      vertex 7.1 0.3 0.16
      vertex 7.1 -0.3 0.16
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 7.1 0.3 0
      vertex 1.2 0.3 0
      vertex 1.2 0.3 0.16
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 7.1 0.3 0
      vertex 1.2 0.3 0.16
      vertex 7.1 0.3 0.16
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 1.2 0.3 0
      vertex 1.2 -0.3 0
      vertex 1.2 -0.3 0.16
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 1.2 0.3 0
      vertex 1.2 -0.3 0.16
      vertex 1.2 0.3 0.16
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -7.2 -5.5 0
      vertex -1.2 -4.9 0
      vertex -1.2 -5.5 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -7.2 -5.5 0
      vertex -7.2 -4.9 0
      vertex -1.2 -4.9 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -7.2 -5.5 0.16
      vertex -1.2 -5.5 0.16
      vertex -1.2 -4.9 0.16
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -7.2 -5.5 0.16
      vertex -1.2 -4.9 0.16
      vertex -7.2 -4.9 0.16
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -7.2 -5.5 0
      vertex -1.2 -5.5 0
      vertex -1.2 -5.5 0.16
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -7.2 -5.5 0
      vertex -1.2 -5.5 0.16
      vertex -7.2 -5.5 0.16
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -1.2 -5.5 0
      vertex -1.2 -4.9 0
      vertex -1.2 -4.9 0.16
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -1.2 -5.5 0
      vertex -1.2 -4.9 0.16
      vertex -1.2 -5.5 0.16
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -1.2 -4.9 0
      vertex -7.2 -4.9 0
      vertex -7.2 -4.9 0.16
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -1.2 -4.9 0
      vertex -7.2 -4.9 0.16
      vertex -1.2 -4.9 0.16
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -7.2 -4.9 0
      vertex -7.2 -5.5 0
      vertex -7.2 -5.5 0.16
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -7.2 -4.9 0
      vertex -7.2 -5.5 0.16
      vertex -7.2 -4.9 0.16
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -1.5 -1.5 0
      vertex 1.5 1.5 0
      vertex 1.5 -1.5 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -1.5 -1.5 0
      vertex -1.5 1.5 0
      vertex 1.5 1.5 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -1.5 -1.5 0.55
      vertex 1.5 -1.5 0.55
      vertex 1.5 1.5 0.55
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -1.5 -1.5 0.55
      vertex 1.5 1.5 0.55
      vertex -1.5 1.5 0.55
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -1.5 -1.5 0
      vertex 1.5 -1.5 0
      vertex 1.5 -1.5 0.55
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -1.5 -1.5 0
      vertex 1.5 -1.5 0.55
      vertex -1.5 -1.5 0.55
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 1.5 -1.5 0
      vertex 1.5 1.5 0
      vertex 1.5 1.5 0.55
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 1.5 -1.5 0
      vertex 1.5 1.5 0.55
      vertex 1.5 -1.5 0.55
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 1.5 1.5 0
      vertex -1.5 1.5 0
      vertex -1.5 1.5 0.55
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 1.5 1.5 0
      vertex -1.5 1.5 0.55
      vertex 1.5 1.5 0.55
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -1.5 1.5 0
      vertex -1.5 -1.5 0
      vertex -1.5 -1.5 0.55
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -1.5 1.5 0
      vertex -1.5 -1.5 0.55
      vertex -1.5 1.5 0.55
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -0.9 -0.9 0.55
      vertex 0.9 0.9 0.55
      vertex 0.9 -0.9 0.55
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -0.9 -0.9 0.55
      vertex -0.9 0.9 0.55
      vertex 0.9 0.9 0.55
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -0.9 -0.9 4.8
      vertex 0.9 -0.9 4.8
      vertex 0.9 0.9 4.8
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -0.9 -0.9 4.8
      vertex 0.9 0.9 4.8
      vertex -0.9 0.9 4.8
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -0.9 -0.9 0.55
      vertex 0.9 -0.9 0.55
      vertex 0.9 -0.9 4.8
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -0.9 -0.9 0.55
      vertex 0.9 -0.9 4.8
      vertex -0.9 -0.9 4.8
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 0.9 -0.9 0.55
      vertex 0.9 0.9 0.55
      vertex 0.9 0.9 4.8
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 0.9 -0.9 0.55
      vertex 0.9 0.9 4.8
      vertex 0.9 -0.9 4.8
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 0.9 0.9 0.55
      vertex -0.9 0.9 0.55
      vertex -0.9 0.9 4.8
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 0.9 0.9 0.55
      vertex -0.9 0.9 4.8
      vertex 0.9 0.9 4.8
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -0.9 0.9 0.55
      vertex -0.9 -0.9 0.55
      vertex -0.9 -0.9 4.8
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -0.9 0.9 0.55
      vertex -0.9 -0.9 4.8
      vertex -0.9 0.9 4.8
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -9.4 4.3 0
      vertex -5.8 7 0
      vertex -5.8 4.3 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -9.4 4.3 0
      vertex -9.4 7 0
      vertex -5.8 7 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -9.4 4.3 2.1
      vertex -5.8 4.3 2.1
      vertex -5.8 7 2.1
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -9.4 4.3 2.1
      vertex -5.8 7 2.1
      vertex -9.4 7 2.1
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -9.4 4.3 0
      vertex -5.8 4.3 0
      vertex -5.8 4.3 2.1
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -9.4 4.3 0
      vertex -5.8 4.3 2.1
      vertex -9.4 4.3 2.1
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -5.8 4.3 0
      vertex -5.8 7 0
      vertex -5.8 7 2.1
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -5.8 4.3 0
      vertex -5.8 7 2.1
      vertex -5.8 4.3 2.1
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -5.8 7 0
      vertex -9.4 7 0
      vertex -9.4 7 2.1
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -5.8 7 0
      vertex -9.4 7 2.1
      vertex -5.8 7 2.1
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -9.4 7 0
      vertex -9.4 4.3 0
      vertex -9.4 4.3 2.1
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -9.4 7 0
      vertex -9.4 4.3 2.1
      vertex -9.4 7 2.1
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -8.7 3.8 0
      vertex -6.5 4.3 0
      vertex -6.5 3.8 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -8.7 3.8 0
      vertex -8.7 4.3 0
      vertex -6.5 4.3 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -8.7 3.8 0.8
      vertex -6.5 3.8 0.8
      vertex -6.5 4.3 0.8
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -8.7 3.8 0.8
      vertex -6.5 4.3 0.8
      vertex -8.7 4.3 0.8
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -8.7 3.8 0
      vertex -6.5 3.8 0
      vertex -6.5 3.8 0.8
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex -8.7 3.8 0
      vertex -6.5 3.8 0.8
      vertex -8.7 3.8 0.8
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -6.5 3.8 0
      vertex -6.5 4.3 0
      vertex -6.5 4.3 0.8
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -6.5 3.8 0
      vertex -6.5 4.3 0.8
      vertex -6.5 3.8 0.8
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -6.5 4.3 0
      vertex -8.7 4.3 0
      vertex -8.7 4.3 0.8
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex -6.5 4.3 0
      vertex -8.7 4.3 0.8
      vertex -6.5 4.3 0.8
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -8.7 4.3 0
      vertex -8.7 3.8 0
      vertex -8.7 3.8 0.8
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex -8.7 4.3 0
      vertex -8.7 3.8 0.8
      vertex -8.7 4.3 0.8
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 5.9 4.2 0
      vertex 7.7 6.3 0
      vertex 7.7 4.2 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 5.9 4.2 0
      vertex 5.9 6.3 0
      vertex 7.7 6.3 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 5.9 4.2 3.3
      vertex 7.7 4.2 3.3
      vertex 7.7 6.3 3.3
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 5.9 4.2 3.3
      vertex 7.7 6.3 3.3
      vertex 5.9 6.3 3.3
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 5.9 4.2 0
      vertex 7.7 4.2 0
      vertex 7.7 4.2 3.3
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 5.9 4.2 0
      vertex 7.7 4.2 3.3
      vertex 5.9 4.2 3.3
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 7.7 4.2 0
      vertex 7.7 6.3 0
      vertex 7.7 6.3 3.3
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 7.7 4.2 0
      vertex 7.7 6.3 3.3
      vertex 7.7 4.2 3.3
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 7.7 6.3 0
      vertex 5.9 6.3 0
      vertex 5.9 6.3 3.3
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 7.7 6.3 0
      vertex 5.9 6.3 3.3
      vertex 7.7 6.3 3.3
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 5.9 6.3 0
      vertex 5.9 4.2 0
      vertex 5.9 4.2 3.3
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 5.9 6.3 0
      vertex 5.9 4.2 3.3
      vertex 5.9 6.3 3.3
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 8 4.8 0
      vertex 9.5 6.7 0
      vertex 9.5 4.8 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 8 4.8 0
      vertex 8 6.7 0
      vertex 9.5 6.7 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 8 4.8 4.2
      vertex 9.5 4.8 4.2
      vertex 9.5 6.7 4.2
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 8 4.8 4.2
      vertex 9.5 6.7 4.2
      vertex 8 6.7 4.2
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 8 4.8 0
      vertex 9.5 4.8 0
      vertex 9.5 4.8 4.2
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 8 4.8 0
      vertex 9.5 4.8 4.2
      vertex 8 4.8 4.2
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 9.5 4.8 0
      vertex 9.5 6.7 0
      vertex 9.5 6.7 4.2
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 9.5 4.8 0
      vertex 9.5 6.7 4.2
      vertex 9.5 4.8 4.2
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 9.5 6.7 0
      vertex 8 6.7 0
      vertex 8 6.7 4.2
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 9.5 6.7 0
      vertex 8 6.7 4.2
      vertex 9.5 6.7 4.2
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 8 6.7 0
      vertex 8 4.8 0
      vertex 8 4.8 4.2
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 8 6.7 0
      vertex 8 4.8 4.2
      vertex 8 6.7 4.2
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 6.2 -7.1 0
      vertex 7.3 -4 0
      vertex 7.3 -7.1 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 6.2 -7.1 0
      vertex 6.2 -4 0
      vertex 7.3 -4 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 6.2 -7.1 3.4
      vertex 7.3 -7.1 3.4
      vertex 7.3 -4 3.4
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 6.2 -7.1 3.4
      vertex 7.3 -4 3.4
      vertex 6.2 -4 3.4
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 6.2 -7.1 0
      vertex 7.3 -7.1 0
      vertex 7.3 -7.1 3.4
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 6.2 -7.1 0
      vertex 7.3 -7.1 3.4
      vertex 6.2 -7.1 3.4
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 7.3 -7.1 0
      vertex 7.3 -4 0
      vertex 7.3 -4 3.4
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 7.3 -7.1 0
      vertex 7.3 -4 3.4
      vertex 7.3 -7.1 3.4
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 7.3 -4 0
      vertex 6.2 -4 0
      vertex 6.2 -4 3.4
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 7.3 -4 0
      vertex 6.2 -4 3.4
      vertex 7.3 -4 3.4
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 6.2 -4 0
      vertex 6.2 -7.1 0
      vertex 6.2 -7.1 3.4
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 6.2 -4 0
      vertex 6.2 -7.1 3.4
      vertex 6.2 -4 3.4
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 9.4 -7.1 0
      vertex 10.5 -4 0
      vertex 10.5 -7.1 0
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 9.4 -7.1 0
      vertex 9.4 -4 0
      vertex 10.5 -4 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 9.4 -7.1 3.4
      vertex 10.5 -7.1 3.4
      vertex 10.5 -4 3.4
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 9.4 -7.1 3.4
      vertex 10.5 -4 3.4
      vertex 9.4 -4 3.4
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 9.4 -7.1 0
      vertex 10.5 -7.1 0
      vertex 10.5 -7.1 3.4
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 9.4 -7.1 0
      vertex 10.5 -7.1 3.4
      vertex 9.4 -7.1 3.4
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 10.5 -7.1 0
      vertex 10.5 -4 0
      vertex 10.5 -4 3.4
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 10.5 -7.1 0
      vertex 10.5 -4 3.4
      vertex 10.5 -7.1 3.4
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 10.5 -4 0
      vertex 9.4 -4 0
      vertex 9.4 -4 3.4
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 10.5 -4 0
      vertex 9.4 -4 3.4
      vertex 10.5 -4 3.4
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 9.4 -4 0
      vertex 9.4 -7.1 0
      vertex 9.4 -7.1 3.4
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 9.4 -4 0
      vertex 9.4 -7.1 3.4
      vertex 9.4 -4 3.4
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 7.3 -7.1 2.55
      vertex 9.4 -4 2.55
      vertex 9.4 -7.1 2.55
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex 7.3 -7.1 2.55
      vertex 7.3 -4 2.55
      vertex 9.4 -4 2.55
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 7.3 -7.1 3.4
      vertex 9.4 -7.1 3.4
      vertex 9.4 -4 3.4
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 7.3 -7.1 3.4
      vertex 9.4 -4 3.4
      vertex 7.3 -4 3.4
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 7.3 -7.1 2.55
      vertex 9.4 -7.1 2.55
      vertex 9.4 -7.1 3.4
    endloop
  endfacet
  facet normal 0 -1 0
    outer loop
      vertex 7.3 -7.1 2.55
      vertex 9.4 -7.1 3.4
      vertex 7.3 -7.1 3.4
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 9.4 -7.1 2.55
      vertex 9.4 -4 2.55
      vertex 9.4 -4 3.4
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex 9.4 -7.1 2.55
      vertex 9.4 -4 3.4
      vertex 9.4 -7.1 3.4
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 9.4 -4 2.55
      vertex 7.3 -4 2.55
      vertex 7.3 -4 3.4
    endloop
  endfacet
  facet normal 0 1 0
    outer loop
      vertex 9.4 -4 2.55
      vertex 7.3 -4 3.4
      vertex 9.4 -4 3.4
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 7.3 -4 2.55
      vertex 7.3 -7.1 2.55
      vertex 7.3 -7.1 3.4
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 7.3 -4 2.55
      vertex 7.3 -7.1 3.4
      vertex 7.3 -4 3.4
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex -8.6 -6 0.18
      vertex -6.2 -5.2 0.18
      vertex -8.6 -4.4 0.18
    endloop
  endfacet
  facet normal 0 0 -1
    outer loop
      vertex -8.6 -6 0.68
      vertex -8.6 -4.4 0.68
      vertex -6.2 -5.2 0.68
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -8.6 -6 0.18
      vertex -8.6 -4.4 0.18
      vertex -8.6 -4.4 0.68
    endloop
  endfacet
  facet normal 1 0 0
    outer loop
      vertex -8.6 -6 0.18
      vertex -8.6 -4.4 0.68
      vertex -8.6 -6 0.68
    endloop
  endfacet
  facet normal -0.316228 -0.948683 0
    outer loop
      vertex -8.6 -4.4 0.18
      vertex -6.2 -5.2 0.18
      vertex -6.2 -5.2 0.68
    endloop
  endfacet
  facet normal -0.316228 -0.948683 0
    outer loop
      vertex -8.6 -4.4 0.18
      vertex -6.2 -5.2 0.68
      vertex -8.6 -4.4 0.68
    endloop
  endfacet
  facet normal -0.316228 0.948683 0
    outer loop
      vertex -6.2 -5.2 0.18
      vertex -8.6 -6 0.18
      vertex -8.6 -6 0.68
    endloop
  endfacet
  facet normal -0.316228 0.948683 0
    outer loop
      vertex -6.2 -5.2 0.18
      vertex -8.6 -6 0.68
      vertex -6.2 -5.2 0.68
    endloop
  endfacet
endsolid operator_console_world
```
<!-- scene:end -->
