# uPortal Web Components

[![GitHub CI](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

> A collection of reusable, standardized, and accessible [web components][] for [uPortal][]

## Installation

There are couple options for installing components:

- a [node][] package through [npm][] or [yarn][]
- a [webjar][] through [gradle][] or [maven][]

```bash
# install with npm
npm install @uportal/{package name goes here}

# install with yarn
yarn add @uportal/{package name goes here}
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__{package name goes here}</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__{package name goes here}:{version number goes here}'
```

## Usage

To install any component, add a tag with the component's name, and a script tag pointing to the JavaScript bundle for that component.

For example an `example-component` would be loaded by adding

```html
<example-component></example-component>
<script src="node_modules/@uportal/example-component/dist/js/example-component.js"></script>
```

## Components

- [API Template Vue](@uportal/api-template-vue/README.md)
- [Content Carousel](@uportal/content-carousel/README.md)
- [Dashboard Carousel](@uportal/dashboard-carousel/README.md)
- [ESCO Content Menu](@uportal/esco-content-menu/README.md)
- [Eyebrow User Info](@uportal/eyebrow-user-info/README.md)
- [Waffle Menu](@uportal/waffle-menu/README.md)
- [User Profile Menu](@uportal/user-profile-menu/README.md)

## Utilities

- [Open ID Connect](@uportal/open-id-connect/README.md)
- [Portlet Registry to Array](@uportal/portlet-registry-to-array/README.md)

## Contribute

uPortal Components are built by people just like you! Check out [CONTRIBUTING.md][] for ways to get started.

Want to chat with the community and contributors? Join us in [Slack][] and the [Mailing List][]!

## Additional Topics

- [Local Project Setup](docs/en/developer/SETUP.md)
- [Using -SNAPSHOT Builds in uPortal-start](docs/en/developer/SNAPSHOT.md)
- [Project Automation Tools](docs/en/developer/AUTOMATION.md)
- [Project Conventions and Practices](docs/en/developer/CONVENTIONS.md)

[contributing.md]: CONTRIBUTING.md
[gradle]: https://docs.gradle.org
[mailing list]: https://groups.google.com/a/apereo.org/forum/#!forum/uportal-user
[maven]: http://maven.apache.org/
[node]: https://nodejs.org
[npm]: https://docs.npmjs.com/
[slack]: https://apereo.slack.com
[uportal]: https://github.com/Jasig/uPortal
[web components]: https://www.webcomponents.org/introduction
[webjar]: https://www.webjars.org/
[yarn]: https://yarnpkg.com/en/
