<template>
    <svg
        :style="{
            width: width ? width : '24px',
            height: height ? height : '24px',
        }"
    >
        <use :xlink:href="'#icon-' + type" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
type T = {
    type: string;
    color?: string;
    width?: string;
    height?: string;
};

defineProps<T>();
</script>

<style scoped lang="scss"></style>
