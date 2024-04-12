set windows-shell := ["pwsh.exe", "-NoLogo", "-Command"]

_default:
    @just --list

build:
    bun i
    bun bundle

watch:
    bun run build --watch

publish: (build)
    @# TODO: use bun
    pnpm publish --access public
