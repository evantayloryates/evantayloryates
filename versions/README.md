# README versions

Each folder is a self-contained profile direction. The root `README.md` is the
published copy selected by `scripts/set-readme-version`.

| Slug | Family role | GitHub-native hook | Character |
| --- | --- | --- | --- |
| [`operator-console`](./operator-console/README.md) | Base | Code-as-biography | Technical, playful production console |
| [`operator-console-live-telemetry`](./operator-console-live-telemetry/README.md) | Iteration | Scheduled REST API → theme-aware SVG | A quiet, self-hosted live status surface |
| [`operator-console-playhead-3d`](./operator-console-playhead-3d/README.md) | Iteration | Interactive ASCII STL model | A portfolio disguised as a draggable object |
| [`operator-console-schematic`](./operator-console-schematic/README.md) | Iteration | Native Mermaid sequence diagram | An executable-looking system schematic |
| [`operator-console-signal-map`](./operator-console-signal-map/README.md) | Iteration | Interactive GeoJSON map | A geographic signal field rooted in NYC |

The telemetry workflow lives at
[`.github/workflows/update-profile-telemetry.yml`](../.github/workflows/update-profile-telemetry.yml)
because GitHub only discovers Actions from that repository-level directory. Its
generator and output assets remain encapsulated in the version folder.

## Archive

Earlier directions remain available for reference but are intentionally hidden
from the interactive selector:

- [Original starting point](./.archive/original/README.md)
- [Signal Chain](./.archive/signal-chain/README.md)
- [Editorial Cut](./.archive/editorial-cut/README.md)
- [Editorial Cut — Contact Sheet](./.archive/editorial-cut-contact-sheet/README.md)
- [Editorial Cut — Liner Notes](./.archive/editorial-cut-liner-notes/README.md)
- [Operator Console — Multiview](./.archive/operator-console-multiview/README.md)
- [Operator Console — Patchbay](./.archive/operator-console-patchbay/README.md)

## Switch the published version

Run the script without arguments to open the numbered selector. The active
version is highlighted; enter a number to publish that version immediately.

```sh
./scripts/set-readme-version
```

You can also select a version directly by slug:

```sh
./scripts/set-readme-version operator-console
```

The normal command copies the selected version into the root, commits the root
README and selected version folder, and pushes the profile's default branch to
`origin`. Run `./scripts/set-readme-version list` to see all available slugs.

By default, the script copies the selected version to the root because GitHub
does not reliably render a root README that is a symbolic link. To switch
locally without committing or pushing, use `--local`:

```sh
./scripts/set-readme-version operator-console --local
```

For local-only symlink experimentation, `--symlink` is also available:

```sh
./scripts/set-readme-version operator-console --symlink
```
