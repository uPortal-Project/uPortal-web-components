# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

### Feature

- **content-carousel**: Add text title support for carousel items (#28).

### Build

- **open-id-connect**: generate [CJS](https://nodejs.org/docs/latest/api/modules.html), [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), and [UMD](https://github.com/umdjs/umd), as well as providing an ES2018 source version (#30).

### Test

- ESlint upgraded to version 5 (#29)

## [1.2.0][] - 2018-06-19

### Feature

- **content-carousel**: Add RSS strategy for content carousel (#22, #24, #25).

### Fix

- **open-id-connect**: Allow components leveraging open id connect helper to run off a different host and port than uPortal (#26).

## [1.1.0][] - 2018-06-14

### Feature

- **content-carousel**: Code reworked to use a strategy pattern for getting content from different sources (#17).
- **content-carousel**: Code reworked into Typescript and Sass to provide better developer abstractions (#17).

### Build

- **open-id-connect**: Manually tree shake `json-web-token` to reduce bundle size (#15).
- Replace `yarn` with `npm` as package manager (#16).
- **open-id-connect** switch `jsonwebtoken` for `jwt-decode` to further reduce size (#21).
- **open-id-connect** rename `src` folder to `esm` and `dist` to `node` to better reflect their intended platform (#21).

### Documentation

- Add more information on project conventions.
- Add required `lerna` step to setup guide.
- Add guides for creating web components in:
  - no framework
  - Angular
  - Polymer
  - Preact
  - React
  - Svelte
  - Vue

### Test

- Ensure that subprojects are bootstraped into lerna on the continuous integration server.

## [1.0.2][] - 2018-05-28

### Documentation

- Add webjar version badge to each component _README.md_.

### Test

- Update Jest test library to version 23.
- Update ESLint plugin Jest to version 23.

## [1.0.1][] - 2018-05-23

### Fix

- **content-carousel**: Ensure `browserslist` support query can be handled by Vue CLI service.

## [1.0.0][] - 2018-05-23

### Documentation

- Add release notes in _CHANGELOG.md_.
- Add links to component documentation from _README.md_.
- Add a guide for creating a Vue web component.

### Build

- Upgrade build to leverage Babel 7.

### Test

- Ensure test processes leverage Babel 7.
- Correct commit message checking script on Travis CI.

## [0.0.9][] - 2018-05-22

### Documentation

- Links have been updated to reflect repository move from `ChristianMurphy` to `uPortal-contrib`.

## [0.0.8][] - 2018-05-18

### Feature

- **content-carousel**: Add a new layer of styles, giving slides more visual weight.

### Fix

- **open-id-connect**: Add babel polyfill to support async await on older browsers.

### Documentation

- Update project name from `uPortal-components` to `uPortal-web-components`.
- Document people with write access in _COMMITTERS.md_.

## [0.0.7][] - 2018-05-09

### Fix

- **open-id-connect**: Ensure that errors are correctly passed back in callback mode.

### Documentation

- Add NPM version badge to each package _README_.

## [0.0.6][] - 2018-05-09

### Fix

- **open-id-connect**: Ensure that transforms are applied only to decoded tokens.

## [0.0.5][] - 2018-05-09

### Feature

- **open-id-connect**: Allow properties to have custom transforms applied during decoding.

### Documentation

- **open-id-connect**: Add examples for new `propertyTransforms` option.

## [0.0.4][] - 2018-05-09

### Fix

- **open-id-connect**: Fix getter for grabbing token out of Open ID Connect API call.

## [0.0.3][] - 2018-05-09

### Fix

- **open-id-connect**: Make callback optional.

## [0.0.2][] - 2018-05-09

### Build

- **content-carousel**: Ensure babel build is run during package publishing process.
- **content-carousel**: Ensure `browserslist` is valid.

## [0.0.1][] - 2018-05-09

### Features

- **open-id-connect**: Initial version of an OpenID Connect helper script to use in web components and JavaScript modules.
- **content-carousel**: Initial version of content carousel, a carousel based portlet metadata display system.

[unreleased]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.9...v1.0.0
[0.0.9]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/c92ab0b39ccd841c3aa75c9e510d1fa62ed5e562...v0.0.1
