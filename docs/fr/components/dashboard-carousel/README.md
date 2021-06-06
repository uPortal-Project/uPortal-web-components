# Dashboard Carousel

[![NPM Version](https://img.shields.io/npm/v/@uportal/dashboard-carousel.svg)](https://www.npmjs.com/package/@uportal/dashboard-carousel)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__dashboard-carousel/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__dashboard-carousel)
[![Build Status](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

## Démonstration

<https://uportal-project.github.io/uPortal-web-components/en/components/dashboard-carousel/demo>

## Installation

```bash
# installer avec npm
npm install @uportal/dashboard-carousel

# installer avec yarn
yarn add @uportal/dashboard-carousel
```

_installer avec maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__dashboard-carousel</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_installer avec gradle_

```gradle
compile 'org.webjars.npm:uportal__dashboard-carousel:{version number goes here}'
```

## Utilisation

```html
<!-- ceci utilise le cdn unpkg, ceci pourrait alternativement utiliser le serveur de ressources comme un cdn -->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/dashboard-carousel"></script>

<dashboard-carousel></dashboard-carousel>
```

### Options

- `debug` (optionnelle, boolean, default: false): lorsque le mode débogage est activé, l'authentification oauth n'est pas activée.
- `layout-api-url` (optionnelle, string, default: "/uPortal/api/v4-3/dlm/layout.json"): url de mise en page pour l'utilisation du carrousel.
- `region-name` (optionnelle, string, default: "dashboard"): le nom de la région dans laquelle le contenu sera affichée.
