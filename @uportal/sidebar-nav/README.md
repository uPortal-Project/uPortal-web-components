# Sidebar Nav

[![NPM Version](https://img.shields.io/npm/v/@uportal/user-profile-menu.svg)](https://www.npmjs.com/package/@uportal/user-profile-menu)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__user-profile-menu/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__user-profile-menu)
[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```<span class="x x-first x-last">bash</span>
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage as Vue component

The component source can also be imported and used directly within other Vue projects.

```js
import contentCarousel from '@uportal/sidebar-nav/src/components/SidebarNav';
```

This package requires an attribute `link-data-url`
This attribute should reference a JSON file with the following structure:

```
"topics": [
  {
      "title": "Test Item",
      "links": [
          {
              "title": "Link Title",
              "url": "/"
          },
          {
              "title": "Link Title",
              "url": "/"
          }
      ]
  },
  {
      "title": "Test Item",
      "links": [
          {
              "title": "Link Title",
              "url": "/"
          }
      ]
  }
]
```
