<template>
    <section class="container content-section">
        <h2 class="section-header">{{ menu.label }}</h2>
        <div class="dish-container">
            <Dish  v-for="d in menu.content" :key="d.name" :dish="d"/>
        </div>
    </section>
</template>

<script>
    import Dish from "./Dish";
    export default {
        name: "index",
        components: {Dish},
        data() {
            return {
                menu: {}
            }
        },
        created() {
            this.menu = this.$store.getters.current_menu
        }

    }
</script>

<style scoped>
    .content-section {
        margin: 1em;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1.5em;
    }

    .section-header {
        border: 2px solid white;
        font-family: "Metal Mania";
        font-weight: normal;
        color: white;
        text-align: center;
        font-size: 3.5em;
        background-color: black;
        margin-bottom: 1em;
    }

</style>
