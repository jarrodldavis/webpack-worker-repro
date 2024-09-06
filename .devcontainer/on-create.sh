#!/bin/zsh
set -euo pipefail

echo '==> Fixing directory permissions...'
sudo chown -v "$(id -un)":"$(id -gn)" .. .

echo '==> Removing global packages...'
npm ls --global --json \
    | jq --raw-output '.dependencies // [] | keys | .[] | select(. != "pnpm")' \
    | xargs npm uninstall --global

echo '==> Setting up pnpm...'
pnpm config set store-dir ~/.local/share/pnpm/store
pnpm config set manage-package-manager-versions
pnpm --version

echo '==> Installing pnpm dependencies...'
CI=1 FORCE_COLOR=1 pnpm install

echo '==> Done!'
