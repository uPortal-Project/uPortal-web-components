# uPortal Components

[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

> Une collection des [web components][] pour[uPortal][][] réutilisables, normalisés et accessibles pour[uPortal][].

## Installation

Il existe deux options pour l'installation des composants :

- via [node][] paquet à travers [npm][] ou [yarn][]
- via [webjar][] à travers [gradle][] ou [maven][]

```bash
# installation avec npm
npm install @uportal/{nom du paquet ici}

# installation avec yarn
yarn add @uportal/{nom du paquet ici}
```

_installation avec maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__{package name goes here}</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_installation avec gradle_

```gradle
compile 'org.webjars.npm:uportal__{package name goes here}:{version number goes here}'
```

## Utilisation

Pour installer n'importe quel composant, ajoutez une balise avec le nom du composant, et une balise script pointant vers le paquet JavaScript pour ce composant.

Par exemple, un `example-component` serait chargé en ajoutant

```html
<example-component></example-component>
<script src="node_modules/@uportal/example-component/dist/js/example-component.js"></script>
```

## Composants

- [Content Carousel](components/content-carousel/README.md)
- [Dashboard Carousel](components/dashboard-carousel/README.md)
- [ESCO Content Menu](components/esco-content-menu/README.md)
- [Eyebrow User Info](components/eyebrow-user-info/README.md)
- [Waffle Menu](components/waffle-menu/README.md)

## Utilitaires

- [Open ID Connect](components/open-id-connect/README.md)
- [Portlet Registry to Array](components/portlet-registry-to-array/README.md)

## Contribuer

Les composants du uPortal sont construits par des gens comme vous ! Consultez[CONTRIBUTING.md][] pour savoir comment commencer.
Vous voulez discuter avec la communauté et les contributeurs ? Rejoignez-nous dans [Slack][] et sur la [Mailing List][][] !

## Sujets supplémentaires

- [Local Project Setup](developer/SETUP.md)
- [Project Automation Tools](developer/AUTOMATION.md)
- [Project Conventions and Practices](developer/CONVENTIONS.md)
- [Working with WebJars](developer/WEBJARS.md)
- Créer un Web Component:
  - [without a framework](developer/create-web-component/PLAIN.md)
  - [in Angular](developer/create-web-component/ANGULAR.md)
  - [in Polymer](developer/create-web-component/POLYMER.md) :star:
  - [in Preact](developer/create-web-component/PREACT.md) :star:
  - [in React](developer/create-web-component/REACT.md)
  - [in Svelte](developer/create-web-component/SVELTE.md)
  - [in Vue](developer/create-web-component/VUE.md) :star:

:star: Recommandé

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
