<template>
    <div class="navbar">
        hallo navbar
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style lang="scss" scoped>
    .navbar {
        height: #{$navBarHeight};
        overflow: hidden;
        position: relative;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }
</style>
