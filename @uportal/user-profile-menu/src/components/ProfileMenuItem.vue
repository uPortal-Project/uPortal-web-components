<template>
  <a :href="href" class="profile-item profile-item-action">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'profile-item',
  props: {
    href: { type: String, required: true }
  }
};
</script>
<style lang="scss" scoped>
.profile-item {
  $border-style: 1px solid rgba(0, 0, 0, 0.125);
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border-top: $border-style;
  border-bottom: $border-style;
  border-right: 0px;
  border-left: 0px;

  &.profile-item-action {
    color: #495057;
    text-align: inherit;
    text-decoration: none;

    &:hover {
      z-index: 1;
      color: #495057;
      text-decoration: none;
      background-color: #f8f9fa;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
