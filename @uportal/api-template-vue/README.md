# api-template-vue

[![NPM Version](https://img.shields.io/npm/v/@uportal/api-template-vue.svg)](https://www.npmjs.com/package/@uportal/api-template-vue)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__api-template-vue/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__api-template-vue)
[![Build Status](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

## Installation

```bash
# install with npm
npm install @uportal/api-template-vue

# install with yarn
yarn add @uportal/api-template-vue
```

_install with maven_

```xml
<dependency>
    <groupId>org.webjars.npm</groupId>
    <artifactId>uportal__api-template-vue</artifactId>
    <version>{version number goes here}</version>
</dependency>
```

_install with gradle_

```gradle
compile 'org.webjars.npm:uportal__api-template-vue:{version number goes here}'
```

## Usage as Web Component

The component requires a `data-api-url` (URL to acquire a JSON payload).

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@uportal/api-template-vue"></script>

<api-template-vue data-api-url="/uPortal/api/v5-0/people/me">
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ data.displayName[0] }}</h3>
      <table class="table">
        <caption>
          User attributes
        </caption>
        <tbody>
          <tr>
            <td>username:</td>
            <td>{{ data.username[0] }}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{{ data.mail[0] }}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{{ data.telephoneNumber[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</api-template-vue>
```

### Options

- `data-api-url` (required, string): URL of the REST API that provides JSON data to the template.

### Slot Content

The default slot defines the Vue-based template containing the markup that will appear on the page.
