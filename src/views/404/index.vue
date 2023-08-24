<template>
    <h1>404</h1>
    <Identify @updateIdentifyCode="setIdentifyCode" />
</template>

<script setup lang="ts">
const setIdentifyCode = (value: string) => {
    console.log(value)
}
</script>

<style scoped lang="scss"></style>