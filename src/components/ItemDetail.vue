<template>
    <div class="shop-item" v-on:click="checkdetail">
        <img class="shop-item-image" src="~@/assets/images/r2.png"  alt="">
        <div class="shop-item-details">
            <span class="shop-item-price">$6.99</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        methods: {
            checkdetail: function() {
                this.$router.push({name: 'detail', params: {title: 'Menus'}});
            }
        }
    }
</script>

<style scoped>
    .shop-item {
        margin: 30px;
    }
    .shop-item-title {
        display: block;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 1.5em;
        color: #333;
        margin-bottom: 15px;
    }

    .shop-item-image {
        height: 100px;
    }

    .shop-item-details {
        display: flex;
        align-items: center;
        padding: 5px;
    }

    .shop-item-price {
        flex-grow: 1;
        color: #333;
    }
</style>
