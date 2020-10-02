<template>
  <div class="p-4">
    <div class="p-4">
      <WidgetRenderer
        debug
        :template="widget.template"
        :config="widget.config"
      />
    </div>
    <div class="p-4">
      <PortletRenderer debug :portlet-html-url="portletUrl" />
    </div>
  </div>
</template>

<script>
import WidgetRenderer from './components/WidgetRenderer.vue';
import PortletRenderer from './components/PortletRenderer.vue';

export default {
  name: 'App',
  components: {
    WidgetRenderer,
    PortletRenderer,
  },
  data: () => ({
    widget: {
      config: {
        text: 'foo bar baz: I am being rendered by the widget renderer!',
      },
      template: `<p>{{ config.text }}</p>`,
    },
    portletUrl: '/portlet.html',
  }),
};
</script>

<style lang="scss"></style>
