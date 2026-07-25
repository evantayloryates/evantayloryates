<p align="center">
  <img
    src="https://raw.githubusercontent.com/evantayloryates/evantayloryates/master/versions/operator-console-signal-map/assets/uplink.svg"
    alt="Taylor Yates — New York signal uplink"
    width="100%"
  />
</p>

```text
UPLINK  NYC       OPERATOR  TAYLOR YATES       SIGNAL  CREATIVE SYSTEMS
```

## Coordinates are concrete. The loop is conceptual.

I’m a full-stack engineer at **Spaceback**, working from New York across product
interfaces, browser media, backend services, rendering, and operations.

The interactive map below uses real New York coordinates as the canvas for the
feedback loop I care about: **product → media → systems → product**. Pan, zoom,
and inspect it directly in GitHub.

```geojson
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "title": "Taylor / New York",
        "description": "Creative systems uplink",
        "marker-color": "#ff4f64",
        "marker-size": "large",
        "marker-symbol": "star"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-74.0060, 40.7128]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "product → media → systems → product",
        "stroke": "#3ddbd9",
        "stroke-width": 5,
        "stroke-opacity": 0.9
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [-74.0060, 40.7128],
          [-73.9442, 40.6782],
          [-73.8648, 40.7380],
          [-74.0060, 40.7128]
        ]
      }
    }
  ]
}
```

<sub>The map is rendered by GitHub’s native GeoJSON viewer, not a screenshot or third-party embed.</sub>

### Signal layers

| Layer | Carries |
| --- | --- |
| Product | Intent, constraints, interaction, judgment |
| Media | Time, pixels, codecs, playback, compositing |
| Systems | Rails, Node.js, PostgreSQL, Redis, queues |
| Return path | Logs, traces, metrics, and production evidence |

<details>
  <summary><code>OPEN LOCAL INVENTORY</code></summary>
  <br />

  [`cinematic-display`](https://github.com/evantayloryates/cinematic-display) ·
  [`bialetti`](https://github.com/evantayloryates/bialetti) ·
  [`.hammerspoon`](https://github.com/evantayloryates/.hammerspoon) ·
  [`dotfiles`](https://github.com/evantayloryates/dotfiles)
</details>

`COMMS` [evantayloryates@gmail.com](mailto:evantayloryates@gmail.com)
