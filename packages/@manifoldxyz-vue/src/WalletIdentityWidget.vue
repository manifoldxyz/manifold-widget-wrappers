<script setup lang="ts">
import { computed } from 'vue';
import { WalletIdentityWidgetDataAttributes } from './shared/types';
import Widget from './Widget.vue';

interface Props extends WalletIdentityWidgetDataAttributes {
  version: string;
}
const props = defineProps<Props>();
const dataAttributes = computed(() => {
  return {
    ...props,
    widget: 'm-wallet-identity',
  };
});
</script>
<template>
  <Widget :version="props.version" :data-attributes="dataAttributes"></Widget>
</template>
