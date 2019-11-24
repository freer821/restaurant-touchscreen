<template>
    <section class="container content-section">
        <h2 class="section-header">{{ menu.label }}</h2>
        <Dish  v-for="d in menu.content" :key="d.name" :dish="d"/>
        <div class="float-right">
            <div class="float-left" style="margin: 5px">
                    <strong>Price: <span class="totals-value">{{menu.price}} €</span></strong>
            </div>
            <b-button variant="primary" v-on:click="addtocart">Add to Cart</b-button>
        </div>
    </section>
</template>

<script>
    import Dish from "./Dish";
    export default {
        name: "index",
        components: {Dish},
        computed: {
            menu: function () {
                return this.$store.getters.current_menu
            }
        },
        methods:{
            addtocart: function () {
                this.$store.dispatch('addMenuIntoCart');
                this.$store.dispatch('setViewtag', 'category');
                this.$store.dispatch('cleanCurrentMenu');
            }
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
    .totals-value {
        width: 21%;
    }


</style>
