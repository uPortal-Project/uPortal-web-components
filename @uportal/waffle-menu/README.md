# Waffle Menu

[![NPM Version](https://img.shields.io/npm/v/@uportal/waffle-menu.svg)](https://www.npmjs.com/package/@uportal/waffle-menu)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__waffle-menu/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.webjars.npm/uportal__waffle-menu)
[![Build Status](https://github.com/uPortal-contrib/uPortal-web-components/workflows/CI/badge.svg)](https://github.com/uPortal-contrib/uPortal-web-components/actions?workflow=CI)

## Demo

<https://uportal-project.github.io/uPortal-web-components/en/components/waffle-menu/demo>

## Development

```bash
# clone the repository if you haven't already
git clone https://github.com/uPortal-contrib/uPortal-web-components

# navigate to the waffle menu folder
cd uPortal-web-components/@uportal/waffle-menu

# install the goods
npm install

# start the app
npm start
```

## Build

Pretty simple:

`npm run build`

This will compile your JavaScript in to `build/static/js/main.{buildnumbers}.js`

## Usage

After building, grab the compiled javascript files and place it on your page.
You can now place `<waffle-menu>` anywhere on your page.

Since `<waffle-menu>` is a web component, it's usage is demonstrated in the `uPortal-web-components/@uportal/waffle-menu/public/index.html` file.

In `index.html`, you'll see that `<waffle-menu />` is hard coded in place. There's supporting javascript on the page to assist in testing the component. A `json` variable is assigned in the header containing an array of objects as data for each of the links. Below the component, javascript is used to assign attributes to the component itself.

Here's the guts of that html file:

```html
<waffle-menu
  debug="true"
  button-color="red"
  url="/proxy/uPortal/api/v4-3/dlm/portletRegistry.json?categoryId=local.21"
></waffle-menu>
```

### slots

This component supports slots for a header and footer element above and below the list of icons.

```html
<waffle-menu oidc-url="https://example.com/uPortal/api/v5-1/userinfo">
  <div slot="header">Header goes here</div>
  <div slot="footer">
    <a href="">Footer goes here</a>
  </div>
</waffle-menu>
```

##### Notice

We have a `/proxy/` leading the `url` attribute. This is a developer convenience to be able to query against your local running instance of uPortal. The proxy is configured in `package.json`:

```json
  "proxy": {
    "/proxy": {
      "target": "http://localhost:8080",
      "changeOrigin": true,
      "pathRewrite": {
        "^/proxy": "/"
      }
    }
  },
```

## Attributes

`<waffle-menu>` takes the following attributes:

### `oidc-url`

```html
<waffle-menu
  oidc-url="https://example.com/uPortal/api/v5-1/userinfo"
></waffle-menu>
```

### `button-color`

applies a color to the waffle menu button. Useful if you want to avoid specifying the color in CSS.
If not set, `button-color` defaults to `#ffffff`.

Example:

`<waffle-menu button-color="#ffffff">`

### `menu-background-color`

applies a color to the waffle menu dropdown. Useful if you want to avoid specifying the color in CSS.
If not set, `menu-background-color` defaults to `#e0e0e0`.

Example:

`<waffle-menu menu-background-color="#99aa99">`

### `url`

Fully qualified url pointing to the API where `<waffle-menu>` can find data in portlet registry format.

Example:

```html
<waffle-menu
  url="/uPortal/api/v4-3/dlm/portletRegistry.json?categoryId=local.21"
></waffle-menu>
```

### `context-portlet-url`

Common URI or URL path to target a portlet inside the portal, the fname will be appended. The default value is
`/uPortal/p/`.

Example:

```html
<waffle-menu context-portlet-url="/portal/p/"></waffle-menu>
```

### `debug`

Disable open id connect for testing.

:warning: For testing purposes only, do not use this in production.

Example:

```html
<waffle-menu debug="true"></waffle-menu>
```

## Internal JSON structure

The JSON structure for the data is pretty simple. It's an array of objects, and each object containing 3 or 4 properties.

### JSON object properties

| Property Name | Description                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `type`        | Either `box` or `footer`. Tells `<waffle-menu>` where in the menu to display the link. |
| `link`        | The url of the link item in the menu.                                                  |
| `label`       | The label to display for the link.                                                     |
| `image`       | The url of an image to use for `box` links.                                            |

### Waffle specific portlet parameters

For the image, the Waffle Menu searches for a `waffleIconUrl`, then `iconUrl`, and then falls back to the provided `default property`.

For text, the Waffle Menu searches for a `waffleLabel`, and falls back to the portlet's `title`.
