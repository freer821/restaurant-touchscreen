<template>
    <div class="shop-item" v-on:click="checkdetail">
        <img class="shop-item-image" :src="getImgUrl(item.img)" alt="">
        <div class="shop-item-details">
            <span class="shop-item-price">{{item.price}}</span>
            <span class="shop-item-title">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            item: Object
        },
        methods: {
            getImgUrl(img) {
                return require("@/assets/images/"+img);
            },
            checkdetail: function () {
                this.$store.dispatch('setViewtag', 'item');
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
