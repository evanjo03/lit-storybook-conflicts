## Purpose

Showcases an issue found when using @web/dev-server-storybook along with lit and legacy versions of lit down the dependency tree. Seems to be related to: https://github.com/open-wc/open-wc/issues/2322.

This application was created with the @open-wc generator and comes with storybook and lit@2. I created a separate package _also_ created with the @open-wc generator that uses legacy lit dependencies (`lit-html@^1.0.0` and `lit-element@^2.2.1`). In all other ways, it is untouched. The code for the legacy package can be found [here](https://github.com/evanjo03/a-lit-legacy-component).

There seems to be some dependency conflict around lit-html that occurs when using @web/dev-server-storybook, as running `npm run storybook` returns the error below. Note that `npm run start` works without any issue.

![storybook error](https://user-images.githubusercontent.com/42701217/156242295-464aba01-3b8f-4bfa-b1c7-507cdf2184b5.JPG)

## Reproducing the Error:

```sh
git clone https://github.com/evanjo03/lit-storybook-conflicts.git

cd lit-storybook-conflicts

npm i

npm run storybook
```

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)
