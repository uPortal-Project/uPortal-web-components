Basique usage

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
<script src="DEPLOYED_PATH/action-favorites.js?v=0.1.0"></script>

  <action-favorites fname="" chan-id="" is-favorite="" favorite-api-url="" call-on-toggle-fav=""></action-favorites>

```

* fname: Optional, to set a functional name class on component
* chanId: Required, id of the channel, used in favorite request
* is-favorite: Required, default is false, needed to get the initial state if the channel is in favorites
* favoriteApiUrl: Optional, usefull to override the default request based on a different contextPath than "/uPortal/"
* callOnToggleFav: Optional, usefull to call a function after the favorites action is pressed and the request succeed.
