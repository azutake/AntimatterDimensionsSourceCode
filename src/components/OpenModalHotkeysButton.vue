<script>
export default {
  name: "OpenModalHotkeysButton",
  methods: {
    handleClick() {
      Modal.hotkeys.show();
    }
  }
};
</script>

<template>
  <i18n
    path="message.pressKeyToOpenHotkeyList"
    class="c-options-tab__hotkeys-link"
    tag="p"
    @click="handleClick"
  >
    <template #question>
      <kbd>?</kbd>
    </template>
  </i18n>
</template>
