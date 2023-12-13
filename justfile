set windows-shell := ["pwsh.exe", "-NoLogo", "-Command"]

_default:
    @just --list

build:
    pnpm i
    pnpm bundle

watch:
    pnpm build --watch

publish: (build)
    pnpm publish --access public