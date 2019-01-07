# uPortal Components

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

- [Content Carousel](components/content-carousel/README.md)
- [Dashboard Carousel](components/dashboard-carousel/README.md)
- [Waffle Menu](components/waffle-menu/README.md)

## Utilities

- [Open ID Connect](components/open-id-connect/README.md)
- [Portlet Registry to Array](components/portlet-registry-to-array/README.md)

## Contribute

uPortal Components are built by people just like you! Check out [CONTRIBUTING.md][] for ways to get started.

Want to chat with the community and contributors? Join us in [Slack][] and the [Mailing List][]!

## Additional Topics

- [Local Project Setup](developer/SETUP.md)
- [Project Automation Tools](developer/AUTOMATION.md)
- [Project Conventions and Practices](developer/CONVENTIONS.md)
- [Working with WebJars](developer/WEBJARS.md)
- Create a Web Component:
  - [without a framework](developer/create-web-component/PLAIN.md)
  - [in Angular](developer/create-web-component/ANGULAR.md)
  - [in Polymer](developer/create-web-component/POLYMER.md) :star:
  - [in Preact](developer/create-web-component/PREACT.md) :star:
  - [in React](developer/create-web-component/REACT.md)
  - [in Svelte](developer/create-web-component/SVELTE.md)
  - [in Vue](developer/create-web-component/VUE.md) :star:

:star: Recommended

[contributing.md]: ../../CONTRIBUTING.md
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
