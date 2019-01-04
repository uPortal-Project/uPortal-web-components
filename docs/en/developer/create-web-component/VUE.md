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

## Setup

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
npm install @babel/{cli,plugin-transform-runtime,preset-env}
```

open _package.json_ in an editor
edit the scripts section to automatically generate a web component

```diff
- "build": "vue-cli-service build",
+ "prebuild": "babel node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js -o node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js",
+ "build": "vue-cli-service build --name {component-name} --target wc",
```

create or open _babel.config.js_ in an editor.

```js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
};
```

Done!
There is now a new component added to the project.

Use `npm install` and `npm run serve` to start a demo web server and follow the [Vue guide][] to see how to build a component

[git]: https://git-scm.com/download
[node.js]: https://nodejs.org/en/download/
[nvm]: https://github.com/creationix/nvm#readme
[vue cli]: https://github.com/vuejs/vue-cli
[vue guide]: https://vuejs.org/v2/guide/
