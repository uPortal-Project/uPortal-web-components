<template>
  <a
    :href="href"
    class="profile-item list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    v-if="!!href"
  >
    <slot></slot>
  </a>
  <div
    class="profile-item list-group-item d-flex justify-content-between align-items-center"
    v-else
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'user-profile-item',
  props: {
    href: { type: String, required: false }
  }
};
</script>
