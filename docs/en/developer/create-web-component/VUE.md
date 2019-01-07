# Creating a Vue Web Component

> The Progressive JavaScript Framework

<https://vuejs.org>

## Advantages

- Vue has official support for web components
- Vue components are compact, usually under 50kb apiece

## Trade offs

- Vue does not embed the framework in the component
  - this requires a secondary import
  - can lead to version conflict

## Prerequisites

- [Git][]
- [Node.js][] (using [NVM][] is recommended)
- [Vue CLI][]

## Step-by-Step Guide

Start by using the following commands to setup a new Web Component project in Vue.

```sh
# clone the repository if you haven't already
git clone https://github.com/uPortal-contrib/uPortal-web-components

# install vue cli if you haven't already
npm install --global @vue/cli

# navigate to the packages folder
cd uPortal-web-components/@uportal

# generate a new application template
# replace {component-name} with the desired name for the component
vue create {component-name} --default

# navigate into newly created component folder
cd {component-name}

# add additional dependencies for legacy browser support
npm install --save-dev @babel/{cli,plugin-transform-runtime,preset-env}
```

### Edit _package.json_

Update the `scripts` section to generate a web component automatically.

```diff
- "build": "vue-cli-service build",
+ "prebuild": "babel node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js -o node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js",
+ "build": "vue-cli-service build --name {component-name} --target wc src/components/{component-name}.vue",
```

> **NOTE:** The `prebuild` script transpiles an internal Vue library for Internet Explorer support.

Add top-level `main` and `source` attributes.

```diff
+ "main": "dist/{component-name}.js",
+ "source": "src/components/{component-name}.vue",
```

### Edit _babel.config.js_

Create or open _babel.config.js_ in an editor.

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
};
```

Done!
There is now a new component added to the project.

Use `npm install` and `npm run serve` to start a demo web server and follow the [Vue guide][] to see how to build a component

## Additional Steps for Web Components in `uPortal-web-components` (This Project)

If you're creating a Web Component with the intention of contributing it to this project, you should
also perform the following steps.

### Edit _package.json_

Update the `name` of the component to include the `@uportal/` prefix.

```diff
- "name": "{component-name}",
+ "name": "@uportal/{component-name}",
```

Remove `private` (if present), and add top-level `version`, `publishConfig`, `repository`, `bugs`,
and `homepage` attributes.

```diff
- "private": true,
+ "version": "{current-version}",
+ "publishConfig": {
+   "access": "public"
+ },
+ "repository": {
+   "type": "git",
+   "url": "git+https://github.com/uPortal-contrib/uPortal-web-components.git"
+ },
+ "bugs": {
+   "url": "https://github.com/uPortal-contrib/uPortal-web-components/issues"
+ },
+ "homepage": "https://github.com/uPortal-contrib/uPortal-web-components#readme"
```

### Edit _README.md_ (Component-Level)

Add badges for _NPM Version_, _Maven Central_, and _Build Status_.

```diff
+[![NPM Version](https://img.shields.io/npm/v/@uportal/{component-name}.svg)](https://www.npmjs.com/package/@uportal/{component-name})
+[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__{component-name}/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__{component-name})
+[![Build Status](https://travis-ci.org/uPortal-contrib/uPortal-web-components.svg?branch=master)](https://travis-ci.org/uPortal-contrib/uPortal-web-components)
```

[git]: https://git-scm.com/download
[node.js]: https://nodejs.org/en/download/
[nvm]: https://github.com/creationix/nvm#readme
[vue cli]: https://github.com/vuejs/vue-cli
[vue guide]: https://vuejs.org/v2/guide/
