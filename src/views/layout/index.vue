<template>
    <div class="app-wrapper">
        <div class="fixed-header">
            <Navbar />
        </div>
        <app-main />
    </div>
</template>

<script>
    import { AppMain, Navbar } from './components'

    export default {
        name: 'Layout',
        components: {
            Navbar,
            AppMain
        }
    }
</script>

<style lang="scss" scoped>
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: 100%;
        transition: width 0.28s;
    }
</style>
