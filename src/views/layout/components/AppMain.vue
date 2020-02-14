<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key () {
                return this.$route.path
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-main {
        /* 50= navbar  50  */
    /*min-height: calc(100vh - #{$navBarHeight}); */
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
        background: url('~@/assets/images/back.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
}

.fixed-header + .app-main {
    padding-top: #{$navBarHeight};
}

</style>
