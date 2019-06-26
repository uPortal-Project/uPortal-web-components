# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][]

## [1.32.0][] - 2019-06-26

### Features

- **waffle-menu**: now has its own `waffleIconUrl` and `waffleLabel` portlet parameters, which can customize `iconUrl` and `title` respectively (#363)

### Fixes

- **dashboard-carousel**: ensure slides are evenly sized (#364)

### Chores

- update dependencies (#360, #361, #361)

## [1.31.1][] - 2019-06-20

### Fixes

- **content-renderer**: transpile handlebars to work on IE (#358)

## [1.31.0][] - 2019-06-18

### Features

- **dashboard-carousel**: allow slick carousel to be configured through an attribute (#344)
- **content-renderer**: create a new rendering components for content (#346, #347, #349)
- **content-carousel**: allow customization of styles using CSS variables (#348, #354, #357)

### Fixes

- **esco-content-menu**: ensure events for favorites are emitted (#343)
- **esco-content-menu**: prevent favorite event from bubbling up (#352)
- **content-renderer**: transpile `ky` to support IE/Edge (#355)
- **dashboard-carousel**: transpile `ky` to support IE/Edge (#355)
- **content-carousel**: ensure styles are scoped to prevent styles leaking in IE/Edge (#356)

### Documentation

- Update demo page dependencies (#335)

### Chores

- Update dependencies (#336, #337, #339, #340, #341, #342, #353)

## [1.30.1][] - 2019-05-29

### Fixes

- Added css variable to slick-item height (#331)

### Testing

- Remove eslint react (#330)

### Chores

- Add nvmrc (#334)
- Dependency updates (#221)
- Lock file maintenance (#331, #333)

## [1.30.0][] - 2019-05-23

### Features

-Implement flex-based layout for the content-carousel (#327)

## [1.29.0][] - 2019-05-21

### Features

- Add choice to show favorites into a slider or not in the esco-content-menu (#303)
- Add slot on content-user part in the esco-content-menu (#303)
- Added support for custom i18n messages (#326)
- Added vars to control display of specific elements (#323)

### Fixes

- Detect lang from main document lang property in the esco-content-menu (#303)
- Set matchSorter to ACRONYM in the esco-content-grid (#325)
- Fixed esco-content custom sort order (#329)

### Style

- Add slot on header-buttons in the esco-content-menu (#303)
- Add css variable to customize the flex-grid in the esco-content-menu (#303)
- Add prop for background contrast in the esco-content-menu (#303)
- remove margin auto to flex justified content in the esco-content-menu (#303)

### Documentation

- Fix empty slots examples, end tag is required (#303)

### Chores

- Dependency updates (#319, #320, #322, #324)
- Lock file maintenance (#318, #321, #328)

## [1.28.0][] - 2019-05-03

### Feature

- Support custom card sizes in esco content grid, configurable via CSS variables (#317)
- Add typings for oidc and portlet registry utils (#314, #315)

### Chore

- Dependency updates (#308, #316)

## [1.27.0][] - 2019-04-22

### Feature

- Support partial term matching and ranking in the `esco-content-menu` (#312)

### Fix

- Fix recursion on swipper (#295)
- Swap order of initials on `user-profile-menu` to first then last (#296)
- Update `waffle-menu` to include '...' in `truncateTitle` when necessary (#299)
- Fix scaling of large user images in the `user-profile-menu` (#309)

### Docs

- Added "quick new deployment" instructions to Appendix (#278)

### Chore

- Lock file maintenance (#294, #298, #300, #301, #307)
- Dependency updates (#291, #297, #302, #304, #305, #306, #301, #311)

## [1.26.2][] - 2019-03-21

### Fix

- Correct the waffle menu slots for header and footer (#290)

### Docs

- Enhance info about publish-webjar (#289)

### Chore

- Update `build` script and `source` setting to match other modules (#288)
- Dependency updates (#287)

## [1.26.1][] - 2019-03-19

### fix

- Fixed issue where empty slots were still displayed (#282)
- Fixed size of dashboard content items & css variables for buttons (#283)
- Use correct param `AlternativeMaximizedLink` + a few improvements (#285)

### Docs

- Replace symlink to provide docs on npm site (#281)

### Chore

- Lock file maintenance (#284)
- Update Font Awesome (#286)

## [1.26.0][] - 2019-03-14

### Feature

- **user-profile-menu**: Add the user profile menu, a slot based user settings dropdown (#279).

### Chore

- Dependency updates (#276, #277, #280)

## [1.25.0][] - 2019-02-25

### Feature

- Make dashboard carousel buttons skinnable with CSS variables (#273)

### fix

- Set content-carousel hero images to stretch with object-fit (#272)

### Docs

- Cleaned up VUE.md and added quick build instructions (#262)

### Style

- Format markdown using prettier
- Lowercase markdown header links

### Chore

- Enable renovate lockfile maintainance (#270)
- Update dependencies (#265, #269, #271, #274, #275)

## [1.24.0][] - 2019-02-06

### Feature

- **api-template-vue**: Wrap JSON returned by the specified REST API in a guaranteed object called `data` (#250).
- **waffle-menu**: Refactor the component from React to Vue (#259)

### Fix

- **api-template-vue**: Make axios resove promises even for non-200 status (#259)

### Test

- CI test on lts and stable node, and on osx and windows (#260)

### Docs

- Updated the docs for creating web components with Vue (#251)
- Provide the french translation of vue.js guide + fix in title hierarchy in the english doc (#255)

### Chore

- Update dependencies (#240, #252, #253, #256)

## [1.23.0][] - 2019-02-06

### Feature

- **content-carousel**: Add authenticated RSS strategy, allows accessing student specific feeds (#238).

### Fix

- **dashboard-carousel**: Set inner width to ensure slides render on mobile and tablet screens (#243).

### Docs

- Translate documentation into French (#247).
- Clarifications on creating a Vue web components (#246).

### Chore

- Update dependencies (#239, #241, #244, #245, #248, #249)

## [1.22.1][] - 2019-01-23

### Fix

- **esco-content-menu**: include style adjustments to make grid component fit well in overall menu (#230).

### Docs

- **api-template-vue** Improve accessibility of sample code (#234).

### Chore

- update dependencies (#232, #233, #235, #236, #237).

## [1.22.0][] - 2019-01-14

### Feature

- **api-template-vue**: a new portal component that can render an arbitary vue template with arbitrary portal API data, the web component equivalent of simple JSP portlet (#225)
- **esco-content-menu**: content menu can now be run in debug mode without a running portal (#244).
- **dashboard-carousel**: region that dashboard will read from is now configurable (#214).

### Docs

- **esco-content-menu**: follow symlinks between documentation pages (#228, #229).
- **dashboard-carousel**: component is now listed in top level readme (#215).
- **dashboard-carousel**: component now has a demo provided in documentation (#216, #217).

### Refactor

- **esco-content-menu**: Menu as switched from marketplace API to portlet registry API (#224).
- **dashboard-carousel**: clarify variable name (#213)

### Chore

- update gradle wrapper to version 5.1.1 (#220, #226).
- update ky to version 0.6.0 (#218).

## [1.21.2][] - 2019-01-07

### Fix

- **dashboard-carousel**: tie debug mode of portlet renderer to dashboard carousel, so component can be demoed without uPortal (#212).

### Build

- **dashboard-carousel**: set `source` and `main` so npm and maven can simplify path lookup (#211).

## [1.21.1][] - 2019-01-06

### Fix

- **esco-content-menu**: correct event names for the remote category element (#205)
- **dashboard-carousel**: added `@uportal` prefix to package name (#206).
- **dashboard-carousel**: transpile vue component wrapper, correct root export of component (#209).
- **dashboard-carousel**: update sample data to match what uPortal provides (#210).

### Docs

- **dashboard-carousel**: add ci, npm, and maven badges to readme (#207).

## [1.21.0][] - 2019-01-04

### Feature

- **dashboard-carousel**: a brand new component, that gets a list of folders from a region in the _layout.json_, each folder is a carousel slide, each slide can have several portlets, whose content will be rendered as cards (#200).
- **esco-content-menu**: New category filter component, can be added anywhere on the page, will update the grid component filters (#201).

### Docs

- update vue guide to include details on how to polyfill the web component wrapper (#202)

### Chore

- Update vue cli service (#203)

## [1.20.0][] - 2019-01-04

### Feature

- **esco-content-menu**: add `hide-title` option to the `esco-content-grid` (#195).

### Fix

- **esco-content-menu**: correct conditional from `ng-if` to `v-if` (#186).
- **esco-content-menu**: IE style fixes (#187).
- **esco-content-menu**: better sizing for mobile users being able to click (#191).
- **esco-content-menu**: Allow background color to be inherited (#197).

### Build

- Allow webjar snapshots to be generated using Gradle (#193).

### Chore

- dependency upgrades (#182, #183, #189, #190, #199)

## [1.19.1][] - 2018-12-12

### Build

- update babel configuration to build IE compatible code (#180).
- add missing vue web component wrapper transpile step (#180).

## [1.19.0][] - 2018-12-06

### Feature

- **esco-content-menu**: show spinner while content loads (#176).
- **esco-content-menu**: allow category filter to be displayed in footer (#174).

### Fix

- Update `npm-run-all` to prevent possibility of installing insecure sub-dependency (#172).
- **esco-content-menu**: allow content to add ellipsis when content is overflowing (#171).

### Build

- **eyebrow-user-info**: ensure ES5 compatible code is generated (#179)

### Refactor

- **esco-content-menu**: use lodash to access deeply nested attributes (#178).

### Documentation

- Add Jeff Sittler as a committer (#175).

## [1.18.2][] - 2018-11-21

### Fix

- **esco-content-menu**: return empty list on exception from favorites and portlets API (#168).
- **esco-content-menu**: avoid mutating props (#169).

### Refactor

- **esco-content-menu**: remove unused datalist polyfill (#168)
- **esco-content-menu**: remove unused watcher (#168)

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

[unreleased]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.32.0...HEAD
[1.32.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.31.1...v1.32.0
[1.31.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.31.0...v1.31.1
[1.31.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.30.1...v1.31.0
[1.30.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.30.0...v1.30.1
[1.30.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.29.0...v1.30.0
[1.29.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.28.0...v1.29.0
[1.28.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.27.0...v1.28.0
[1.27.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.26.2...v1.27.0
[1.26.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.26.1...v1.26.2
[1.26.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.26.0...v1.26.1
[1.26.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.25.0...v1.26.0
[1.25.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.24.0...v1.25.0
[1.24.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.23.0...v1.24.0
[1.23.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.22.1...v1.23.0
[1.22.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.22.0...v1.22.1
[1.22.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.21.2...v1.22.0
[1.21.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.21.1...v1.21.2
[1.21.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.21.0...v1.21.1
[1.21.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.20.0...v1.21.0
[1.20.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.19.1...v1.20.0
[1.19.1]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.19.0...v1.19.1
[1.19.0]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.18.2...v1.19.0
[1.18.2]: https://github.com/uPortal-contrib/uPortal-web-components/compare/v1.18.1...v1.18.2
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
