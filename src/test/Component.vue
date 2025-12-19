<template>
  <Component
    id="test"
    v-bind:is="props.name"
    v-for="i in [1, 2, 3, 4, 5, 6]"
    v-bind:key="i"
    v-bind:active-bind="true"
    class="class-name"
    disabled
    name="component"
    test="true"
    test2
    v-on:click="onClick"
  />
  {{ test }}
  string
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>();

const emits = defineEmits<{
  good: () => void
}>();

function onClick() {
  emits('good');
}
</script>
