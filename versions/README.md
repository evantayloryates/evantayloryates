# README versions

Each folder is a self-contained profile direction. The root `README.md` is the
published copy selected by `scripts/set-readme-version`.

| Slug | Family role | Direction | Character |
| --- | --- | --- | --- |
| [`editorial-cut`](./editorial-cut/README.md) | Base | Independent magazine profile | Minimal, opinionated, writing-led |
| [`editorial-cut-contact-sheet`](./editorial-cut-contact-sheet/README.md) | Iteration | Film contact sheet | Capabilities become frames in a deliberately sequenced body of work |
| [`editorial-cut-liner-notes`](./editorial-cut-liner-notes/README.md) | Iteration | Album liner notes | Practice and public source become Side A and Side B |
| [`operator-console`](./operator-console/README.md) | Base | Live production console | Technical, playful, code-as-biography |
| [`operator-console-multiview`](./operator-console-multiview/README.md) | Iteration | Broadcast control room | Six feeds make the full production visible at once |
| [`operator-console-patchbay`](./operator-console-patchbay/README.md) | Iteration | Physical signal router | Inputs and outputs are visibly connected across the stack |

## Archive

Earlier directions remain available for reference but are intentionally hidden
from the interactive selector:

- [Original starting point](./.archive/original/README.md)
- [Signal Chain](./.archive/signal-chain/README.md)

## Switch the published version

Run the script without arguments to open the numbered selector. The active
version is highlighted; enter a number to publish that version immediately.

```sh
./scripts/set-readme-version
```

You can also select a version directly by slug:

```sh
./scripts/set-readme-version signal-chain
```

The normal command copies the selected version into the root, commits the root
README and selected version folder, and pushes the profile's default branch to
`origin`. Run `./scripts/set-readme-version list` to see all available slugs.

By default, the script copies the selected version to the root because GitHub
does not reliably render a root README that is a symbolic link. To switch
locally without committing or pushing, use `--local`:

```sh
./scripts/set-readme-version editorial-cut --local
```

For local-only symlink experimentation, `--symlink` is also available:

```sh
./scripts/set-readme-version operator-console --symlink
```
