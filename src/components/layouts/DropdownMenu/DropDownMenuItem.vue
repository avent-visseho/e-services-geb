<template>

  <a
    href="javascript:void(0);"
    class="dropdown-item notify-item language"
    :data-lang="lang"
  >
    <img :src="src" :alt="alt" class="me-1" height="12" />
    <span class="align-middle">{{ word }}</span>
  </a>

  <p>hello</p>
</template>

<script>

export default {
  name: "DropDownMenuItem",
  props: {
    lang: String,
    word: String,
    alt: {
      type: String,
      default: "user-image",
    },
    src: {
      type: String,
    },
  },
};
</script>
