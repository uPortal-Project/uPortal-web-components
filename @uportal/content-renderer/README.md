# Content Renderer(s)

[![NPM Version](https://img.shields.io/npm/v/@uportal/content-renderer.svg)](https://www.npmjs.com/package/@uportal/content-renderer)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__content-renderer/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__dashboard-carousel)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

## Demo

<https://uportal-contrib.github.io/uPortal-web-components/en/components/content-renderer/demo>

## Installation

```bash
# install with npm
npm install @uportal/content-renderer

# install with yarn
yarn add @uportal/content-renderer
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__content-renderer</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__content-renderer:{version number goes here}'
```

## Usage

```html
<!-- this uses the unpkg cdn, this could alternatively use resource server as a cdn -->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/content-renderer"></script>
```

### Portlet renderer

```html
<content-portlet-renderer
  portlet-html-url="{portlet-url}"></content-portlet-renderer>
```

### uPortal home style 'widget' renderer

```html
<content-widget-renderer
  template="{widgetTemplate string}",
  config="{widgetConfig object}",
  type="{widgetType string}",
  url="{widgetUrl string}",
></content-widget-renderer>
```

### Options

- `debug` (optional, boolean, default: false): when enabled debug mode skips oauth authentication.
