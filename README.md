<p align="center">
  <img
    src="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-playhead-3d/assets/playhead.svg"
    alt="Taylor Yates — three-dimensional playhead inspection"
    width="100%"
  />
</p>

```text
OBJECT  PLAYHEAD-01       MATERIAL  INTENT + CODE       VIEW  INTERACTIVE
```

## A profile with another dimension.

I’m **Taylor Yates**, a full-stack engineer at **Spaceback** working across
creative interfaces, browser media, render systems, and production
infrastructure.

The playhead below is not an image. GitHub turns the ASCII STL source into a
native interactive 3D viewer. Drag to inspect the object and switch between the
viewer’s solid and wireframe modes.

```stl
solid creative_playhead
  facet normal 0 0 -1
    outer loop
      vertex 0 0 0
      vertex 0 3 0
      vertex 4 1.5 0
    endloop
  endfacet
  facet normal 0 0 1
    outer loop
      vertex 0 0 1
      vertex 4 1.5 1
      vertex 0 3 1
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 0 0 0
      vertex 0 0 1
      vertex 0 3 1
    endloop
  endfacet
  facet normal -1 0 0
    outer loop
      vertex 0 0 0
      vertex 0 3 1
      vertex 0 3 0
    endloop
  endfacet
  facet normal 0.351 0.936 0
    outer loop
      vertex 0 3 0
      vertex 0 3 1
      vertex 4 1.5 1
    endloop
  endfacet
  facet normal 0.351 0.936 0
    outer loop
      vertex 0 3 0
      vertex 4 1.5 1
      vertex 4 1.5 0
    endloop
  endfacet
  facet normal 0.351 -0.936 0
    outer loop
      vertex 4 1.5 0
      vertex 4 1.5 1
      vertex 0 0 1
    endloop
  endfacet
  facet normal 0.351 -0.936 0
    outer loop
      vertex 4 1.5 0
      vertex 0 0 1
      vertex 0 0 0
    endloop
  endfacet
endsolid creative_playhead
```

### Object specification

| Face | Represents |
| --- | --- |
| Front | The interaction a person can see and control |
| Depth | Media, services, queues, and render machinery |
| Reverse | Logs, traces, and evidence returning from production |
| Point | A dependable creative output |

> [!NOTE]
> GitHub renders STL, Mermaid, GeoJSON, and TopoJSON directly inside Markdown,
> but interactive STL profiles remain unusually rare.

`MATERIALS` React · TypeScript · Rails · Node.js · WebCodecs · WebGL · AWS<br />
`CONTACT` [evantayloryates@gmail.com](mailto:evantayloryates@gmail.com)
