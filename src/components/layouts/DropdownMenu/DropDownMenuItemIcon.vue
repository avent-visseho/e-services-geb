<template>
  <div class="col">
    <a class="dropdown-icon-item" href="#">
      <img :src="src" :alt="alt">
      <span>{{_title}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "DropDownMenuItemIcon",
  props: {
    _title: String,
    alt: {
      type: String,
      default: (props) => props._title,
    },
    src: {
      type: String,
    },
  },
};
</script>
