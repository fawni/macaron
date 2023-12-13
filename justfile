set windows-shell := ["pwsh.exe", "-NoLogo", "-Command"]

_default:
    @just --list

build:
    pnpm build

watch:
    pnpm build --watch

publish: (build)
    pnpm publish --access public