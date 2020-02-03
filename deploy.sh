#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to a custom domain
echo 'www.utmhacklab.tech' > CNAME

git push -f git@github.com:utm-hacklab/utm-hacklab.github.io.git master

cd -
