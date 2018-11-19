# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

## [1.18.1][] - 2018-11-19

### Fix

- **esco-content-menu**: correct inverted is request okay check (#167).

## [1.18.0][] - 2018-11-18

### Feature

- **esco-content-menu**: allow esco content grid, running independent of menu to display and update favorites (#165, #166).

### Fix

- **esco-content-menu**: avoid calling trim on undefined value (#162).

### Style

- Allow prettier to format html files (#164)

## [1.17.0][] - 2018-11-08

### Feature

- **esco-content-grid**: support custom sort order using `escoMenuOrder` portlet parameter (#161).

### Refactor

- **esco-content-menu**: leverage `async await` in more places (#161).
- **esco-content-menu**: update `fetchPortlet` utility to use parameters and return instead of `this` (#159).

### Chore

- update eslint plugin jest (#158).

## [1.16.2][] - 2018-11-06

### Fix

- **content-carousel**: include font in package (#157).

### Chore

- Update rollup to version 0.67.0 (#156).

## [1.16.1][] - 2018-10-31

### Build

- **esco-content-menu**: remove unneeded `babel-plugin-transform-custom-element-classes`, babel 7 supports extending built ins by default (#155).
- **content-carousel**: remove unneeded `babel-plugin-transform-custom-element-classes`, babel 7 supports extending built ins by default (#155).
- **eyebrow-user-info**: remove unneeded `babel-plugin-transform-custom-element-classes`, babel 7 supports extending built ins by default (#155).

### Chore

- Update renovate configuration, to give each major version dependency bump its own PR (#153).
- Update vue prettier formatting preset dependency (#152).

## [1.16.0][] - 2018-10-29

### Feature

- **esco-content-menu**: enhance search with category functionality (#149).

### Style

- **esco-content-menu**: improved styling on mobile search (#151).

### Build

- **esco-content-menu**: tree shake font awesome icons to prevent bundle bloat (#148).

### Chore

- update lint staged to version 8 (#150).

## [1.15.0][] - 2018-10-29

### Feature

- **esco-content-menu**: allow portlets to be added to favorites in small mode (#143)

### Fix

- **content-carousel**: document the need to include the theme stylesheet outside the shadow dom (#147).

### Style

- **esco-content-menu**: reduce font size in small mode (#143)

### Build

- **content-carousel**: include stylesheet inside the component bundle(#147).

### Chore

- update `remark-cli` to version 6 (#141).

## [1.14.2][] - 2018-10-24

### Fix

- **esco-content-menu**: fix icons not shown (#140).

### Build

- Webjar releases are now automated through `npm run npm run publish-webjar` (#138).
- **eyebrow-user-info**: ensure extra polyfills component requires are included (#139).

### Chore

- **esco-content-menu**: update font awesome (#140).

## [1.14.1][] - 2018-10-17

### Fix

- **content-carousel**: ensure title is always passed through.
- **content-carousel**: open links in a new tab by default (#137).

## [1.14.0][] - 2018-10-17

### Feature

- **esco-content-menu**: add new `size` property to content grid and portlet card (#136).

## [1.13.7][] - 2018-10-16

### Docs

- **open-id-connect**: note polyfills required for ES5 support (#134).

### Refactor

- **open-id-connect**: replace `axios` library with whatwg `fetch` (#133).

### Style

- Update to latest Google Code style for JavaScript (#132).

## [1.13.6][] - 2018-10-15

### Fix

- **content-carousel**: Ensure `fit-to-container` matches parent container width (#129).
- **esco-content-menu**: Allow multiple components with translations be added to a page (#131).

### Refactor

- Extract polyfills from components, polyfills must be applied by the page (#130).

## [1.13.5][] - 2018-10-10

### Fix

- **esco-content-menu**: Add `noopener noreferrer` to external links (#124).
- **waffle-menu**: Support web component standard version 1 (#118, #128).

## [1.13.4][] - 2018-10-02

### Fix

- correctly access value from token (#119).

### Docs

- Include webjars as part of release process.

### Refactor

- **esco-content-menu**: get sample data from API to avoid including in bundle (#119).
- **esco-content-menu** use vue font awesome to reduce impact of fonts on bundle size (#119).

## [1.13.3][] - 2018-09-24

### Build

- remove `prepublishOnly` scripts, they make the release process run longer than
  two factor authentication stays active, causing release failures (#114).

### Docs

- document release process (#114).

### Fix

- Transform `@vue/web-component-wrapper` so it is compatible with IE11 (#109).
- Allow Vue to include polyfills for `@uportal/open-id-connect` (#111).

### Style

- Apply check style to inline scss in Vue templates (#109).
- Apply Vue strongly recommended lint rules (#109).
- Use tslint for styling Typescript files (#109).
- Improve ignores for linters so formatting is faster and more stable (#109).

## [1.13.2][] - 2018-09-22

### Chore

- Update node modules (#108).

### Test

- Run a test build on CI (#108).

## [1.13.1][] - 2018-09-20

### Fix

- **esco-content-grid**: setup `contextApiUrl` inside the content grid (#104).

## [1.13.0][] - 2018-09-20

### Feature

- **esco-content-menu**: `esco-content-grid` can now be run as a stand alone component (#103).

### Style

- **esco-content-menu**: format code so tags each appear on a new line (#102).
- **esco-content-menu**: leverage optional chaining syntax (#103).
- **esco-content-menu**: align stylesheets more with stylelint standard (#103).

## [1.12.1][] - 2018-09-18

### Fix

- **eyebrow-user-info**: provide working image link for local development (#100).

### Build

- **esco-content-menu**: correct main file definition in package (#98).
- **esco-content-menu**: run build as part of publish process (#99).
- **eyebrow-user-info**: run build as part of publish process (#99).

### Docs

- **esco-content-menu**: correct usage examples with `esco` prefix (#98).

### Style

- **eyebrow-user-info**: apply stylelint standard to stylesheets (#100).

### Chore

- update dependencies (#94).

## [1.12.0][] - 2018-09-17

### Feature

- **esco-content-menu**: Display a menu for a new kind of navigation: from favorites and browsable portlet list (#92).
- **eyebrow-user-info**: Web component to display into eyebrow menu a user information menu with profile picture and more (#92).

### Docs

- Julien Gribonvald (@gribonvald) has been added as a committer (#93).

### Chore

- Updated project dependencies (#90).

## [1.11.1][] - 2018-09-04

### Fix

- **waffle-menu**: support alternative maximized links (#89).
- **content-carousel**: support alternative maximized links (#89).

## [1.11.0][] - 2018-09-04

### Feature

- **content-carousel**: add fallback color for if image is missing (#84).
- **content-carousel**: add hero style slides template (#84).

### Fix

- **content-carousel**: fix background image display (#84).

### Refactor

- **content-carousel**: move inline styles to sass (#84).

### Chore

- update babel eslint to version 9 (#85).

## [1.10.1][] - 2018-08-29

### Style

- **content-carousel**: variable width is now enabled by default (#82).
- **content-carousel**: default border style has been improved to look more like Cal Poly Pomona and Contented UI mockups (#82).

### Fix

- **content-carousel**: links now have `slick-title` styles applied by default (#82).

### Documentation

- **content-carousel**: include a note on usage with variable width (#82).

### Chore

- update dependencies

## [1.10.0][] - 2018-08-29

### Feature

- **content-carousel**: support `header`, `empty`, and `slide` slots (#81).
- **content-carousel**: update default slide markup to be more flexible (#67).

### Documentation

- **content-carousel**: revamp documentation to more explicitly spell out what options and slots are available (#81).
- **content-carousel**: ensure web component examples include closing tag (#77).

### Refactor

- **content-carousel**: move sass styles into their own file (#81).

## [1.9.3][] - 2018-08-28

### Fix

- **content-carousel**: add a graceful fallback when slick carousel is slow to init (#76).
- **content-carousel**: correct destination link in portlet strategy (#75).
- **content-carousel**: render `description` as html (#74).

### Style

- include typescript files in prettier pre commit hook (#76).

## [1.9.2][] - 2018-08-28

### Refactor

- **content-carousel**: make empty results configurable via slot (#72).

### Fix

- **content-carousel**: ensure vue slick can reference itself in web component mode (#73).

### Docs

- use cannonical unpkg url generated starting with version 1.9.0
- add link to waffle menu demo from README

## [1.9.1][] - 2018-08-27

### Build

- re-release 1.9.0 because build scripts did not run as expected

## [1.9.0][] - 2018-08-27

### Feature

- **content-carousel**: support configurable background color (#69).

### Style

- **waffle-menu** improve default styles and make dropdown more material UI like (#66).

### Build

- **content-carousel**: add default entry point set to the built code (#61).
- **waffle-menu**: add default entry point set to the built code (#61).
- **content-carousel**: start local dev server with `npm start` to match docs (#70).
- show a warning if an outdated version of Node.js or npm is used to build code (#70).
- automatically add prettier formatted files during precommit hook (#71).

### Docs

- **content-carousel**: update example usage for web components and vue.
- **content-carousel**: add a live demo to documentation (#61).
- **waffle-menu**: add a live demo to documentation (#62).
- update required version of Node.js for overall build to Node.js 10.9.0 (#70).

### Test

- re-enable commitlint check without lerna scopes

## [1.8.0][] - 2018-08-22

### Feature

- **waffle-menu**: support for a configurable default icon to display (#59).
- **waffle-meu**: support configurable truncation of text (#59).

### Fix

- **portlet-registry-to-array**: ensure portlet array has unique `fname` (#57).
- **content-carousel**: support `slick-options` in web component mode (#60).

### Test

- disable commitlint `commit-msg` hook until lerna 3 is supported (#58).

### Docs

- add uPortal committers, Chris P, Phil B, and Ryan M to committers list (#58).

## [1.7.4][] - 2018-08-17

### Build

- force rebuild and republish all packages to ensure fixes for 1.7.1, 1.7.2, and 1.7.3 have been applied with new lerna options.

## [1.7.3][] - 2018-08-17

### Fix

- **content-carousel**: resolve typescript errors in component.

### Build

- add `requireScripts` option to lerna to make sure build scripts run during release.

## [1.7.2][] - 2018-08-17

### Fix

- **content-carousel**: ensure slick options are parsed to an object (#56).
- **content-carousel**: ensure open id connect token is sent with portlet registry API request (#56).

## [1.7.1][] - 2018-08-17

### Test

- remove work around for upstream jest bug

## [1.7.0][] - 2018-08-17

### Feature

- **portlet-registry-to-array**: new utility to help flatten the registry tree into an array (#55).

### Fix

- **waffle-menu**: drop deprecated `category` attribute (#54).
- **waffle-menu**: leverage portlet registry utility (#55).
- **content-carousel**: leverage portlet registry utility (#55).

### Build

- **waffle-menu**: set produced filename to `waffle-menu` (#54).

### Docs

- **waffle-menu**: add badges to readme.
- **content-carousel**: give example usage as a web component (#52).
- **waffle-menu**: document uPortal proxy used for local testing (#54).

## [1.6.0][] - 2018-08-02

### Feature

- **waffle-menu**: a new component, the waffle menu, this component offers an app launcher experience from a dropdown (#33).

### Docs

- Document how to create and use WebJars (#48).
- Include new component documentation on the GitHub pages site (#46).

### Style

- Apply Google code style to content carousel and waffle menu (#33).

## [1.5.0][] - 2018-07-29

### Feature

- **content-carousel**: `passthrough` mode which allows arbitrary content to be added as carousel slides (#41).

### Fix

- **open-id-connect**: include a scoped version of regenerator runtime to allow usage of `async` (#44).

### Build

- **content-carousel**: ensure that build is run before the package is published (#45).

## [1.4.0][] - 2018-07-26

### Feature

- **content-carousel**: input strategy is now consistently managed with the `type` and `source` attributes (#39).

### Fix

- **content-carousel**: ensure carousel updates when its contents update (#38).

## [1.3.1][] - 2018-07-16

### Build

- **open-id-connect**: do not include babel polyfill by default, including polyfill causes conflicts when multiple components using oidc helper are loaded on the page at the same time (#36).
- Use [`npm ci`](https://docs.npmjs.com/cli/ci) to install dependencies, this is both faster and structure will exactly match the lockfile (#35)

## [1.3.0][] - 2018-06-28

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

[unreleased]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.18.1...HEAD
[1.18.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.18.0...v1.18.1
[1.18.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.17.0...v1.18.0
[1.17.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.16.2...v1.17.0
[1.16.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.16.1...v1.16.2
[1.16.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.16.0...v1.16.1
[1.16.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.15.0...v1.16.0
[1.15.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.14.2...v1.15.0
[1.14.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.14.1...v1.14.2
[1.14.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.14.0...v1.14.1
[1.14.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.7...v1.14.0
[1.13.7]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.6...v1.13.7
[1.13.6]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.5...v1.13.6
[1.13.5]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.4...v1.13.5
[1.13.4]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.3...v1.13.4
[1.13.3]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.2...v1.13.3
[1.13.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.1...v1.13.2
[1.13.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.13.0...v1.13.1
[1.13.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.12.1...v1.13.0
[1.12.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.12.0...v1.12.1
[1.12.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.11.1...v1.12.0
[1.11.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.11.0...v1.11.1
[1.11.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.10.1...v1.11.0
[1.10.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.10.0...v1.10.1
[1.10.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.9.3...v1.10.0
[1.9.3]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.9.2...v1.9.3
[1.9.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.9.1...v1.9.2
[1.9.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.9.0...v1.9.1
[1.9.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.8.0...v1.9.0
[1.8.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.7.4...v1.8.0
[1.7.4]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.7.3...v1.7.4
[1.7.3]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.7.2...v1.7.3
[1.7.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.7.1...v1.7.2
[1.7.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.7.0...v1.7.1
[1.7.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.2.0...v1.3.0
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
