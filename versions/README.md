# README versions

Each folder is a self-contained profile direction. The root `README.md` is the
published copy selected by `scripts/set-readme-version`.

| Slug | Direction | Character |
| --- | --- | --- |
| [`original`](./original/README.md) | Archived starting point | The exact README that was present before this exploration |
| [`signal-chain`](./signal-chain/README.md) | Cinematic systems map | Visual, polished, media-engineering-forward |
| [`operator-console`](./operator-console/README.md) | Live production console | Technical, playful, code-as-biography |
| [`editorial-cut`](./editorial-cut/README.md) | Independent magazine profile | Minimal, opinionated, writing-led |

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
