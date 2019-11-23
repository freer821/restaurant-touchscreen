<template>
    <div class="shop-item" v-on:click="showDetail">
        <img class="shop-item-image" :src="getImgUrl(menu.img)" alt="">
        <div class="shop-item-details">
            <span class="shop-item-price">{{menu.price}}</span>
            <span class="shop-item-title">{{menu.name}}</span>
        </div>
    </div>
</template>

<script>
    import {getMenu} from "@/api/menu";

    export default {
        name: "MenuItem",
        props: {
            menu: Object
        },
        methods: {
            getImgUrl(img) {
                return require("@/assets/images/"+img);
            },
            showDetail: function () {
                getMenu(this.menu.id).then(response => {
                    this.$store.dispatch('setCurrentMenu', response.data);
                    this.$store.dispatch('setViewtag', 'menu');
                }).catch(error => {

                });
            }
        }
    }
</script>

<style scoped>
    .shop-item {
        margin: 30px;
    }

    .shop-item-image {
        height: 100px;
    }

    .shop-item-details {
        display: flex;
        align-items: center;
        padding: 5px;
    }

    .shop-item-title {
        display: block;
        width: 100%;
        text-align: right;
        font-weight: bold;
        font-size: 1em;
        color: #333;
        margin-bottom: 15px;
    }

    .shop-item-price {
        display: block;
        width: 100%;
        text-align: left;
        font-weight: bold;
        font-size: 1em;
        color: #333;
        margin-bottom: 15px;
    }
</style>
