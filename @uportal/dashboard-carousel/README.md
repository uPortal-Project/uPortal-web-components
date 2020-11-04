# Dashboard Carousel

[![NPM Version](https://img.shields.io/npm/v/@uportal/dashboard-carousel.svg)](https://www.npmjs.com/package/@uportal/dashboard-carousel)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__dashboard-carousel/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__dashboard-carousel)
[![Build Status](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

## Demo

<https://uportal-contrib.github.io/uPortal-web-components/en/components/dashboard-carousel/demo>

## Installation

```bash
# install with npm
npm install @uportal/dashboard-carousel

# install with yarn
yarn add @uportal/dashboard-carousel
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__dashboard-carousel</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__dashboard-carousel:{version number goes here}'
```

## Usage

```html
<!-- this uses the unpkg cdn, this could alternatively use resource server as a cdn -->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/dashboard-carousel"></script>

<dashboard-carousel></dashboard-carousel>
```

### Options

- `debug` (optional, boolean, default: false): when enabled debug mode skips oauth authentication.
- `layout-api-url` (optional, string, default: "/uPortal/api/v4-3/dlm/layout.json"): url to layout for carousel to use.
- `region-name` (optional, string, default: "dashboard"): name of the region in the layout that should be displayed.

### Theming

Currently this component supports [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for overriding button colors. Defining the following variables will change the colors for the component accordingly. They will fall back to the colors described below.

You should define this in your custom stylesheet.

fg = foreground (text)
bg = background

```css
:root {
  --dash-carousel-btn-bg-color: #007bff; // Used for background and border
  --dash-carousel-btn-fg-color: #fff; // Default text color
  --dash-carousel-btn-bg-active-color: white; // border remains same as background color
  --dash-carousel-btn-fg-active-color: black; // active text color
}
```
