<template>
    <div class="container">
        <div class="card shopping-cart">
            <div class="card-header bg-dark text-light">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                Shipping cart
            </div>
            <div class="card-body">
                <Product v-for="product in products" :key="product.id" :product="product"/>
            </div>
            <div class="card-footer">
                <div class="coupon col-md-5 col-sm-5 no-padding-left float-left">
                    <div class="row">
                        <div class="col-6">
                            <input type="text" class="form-control" placeholder="cupone code">
                        </div>
                        <div class="col-6">
                            <input type="submit" class="btn btn-default" value="Use cupone">
                        </div>
                    </div>
                </div>
                <div class="float-right" style="margin: 10px">
                    <div class="float-right" style="margin: 5px">
                        Total price: <b>{{total_price }}€</b>
                    </div>
                    <b-button @click="show=true" variant="primary">Checkout</b-button>
                </div>
            </div>
        </div>
        <b-modal
                v-model="show"
                title="Checkout"
                :header-bg-variant="headerBgVariant"
                :header-text-variant="headerTextVariant"
                :body-bg-variant="bodyBgVariant"
                :body-text-variant="bodyTextVariant"
                :footer-bg-variant="footerBgVariant"
                :footer-text-variant="footerTextVariant"
        >
            <b-container fluid>
                <b-row class="mb-1">
                    <b-col cols="3">Total Price:</b-col>
                    <b-col cols="6" align-content="center"><span class="">{{total_price}} €</span></b-col>
                </b-row>

                <b-row class="mb-1">
                    <b-col cols="3">Eating</b-col>
                    <b-col cols="6">
                        <b-form-group >
                            <b-form-radio-group v-model="eatingway" name="radio-sub-component-1">
                                <b-form-radio value="eat_here" >Eat Here</b-form-radio>
                                <b-form-radio value="take_away">Take Away</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row class="mb-1">
                    <b-col cols="3">Payment:</b-col>
                    <b-col cols="6">
                        <b-form-group >
                            <b-form-radio-group v-model="payment" name="radio-sub-component-2">
                                <b-form-radio value="card" >Card</b-form-radio>
                                <b-form-radio value="cash">Cash</b-form-radio>
                            </b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

            </b-container>

            <template v-slot:modal-footer>
                <div class="w-100">
                    <p class="float-left">Guten Appetit</p>
                    <b-button
                            variant="primary"
                            size="sm"
                            class="float-right"
                            @click="submit"
                    >
                        Submit
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
    import Product from "./Product";

    export default {
        name: "Cart",
        components: {Product},
        data() {
            return {
                show: false,
                variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
                headerBgVariant: 'dark',
                headerTextVariant: 'light',
                bodyBgVariant: 'light',
                bodyTextVariant: 'dark',
                footerBgVariant: 'warning',
                footerTextVariant: 'dark',
                eatingway: 'eat_here',
                payment:'card'
            }
        },
        computed: {
            products: function () {
                return this.$store.getters.current_cart.products;
            },
            total_price: function () {
                return this.$store.getters.current_cart.total_price;
            }
        },
        methods: {
            submit: function () {
                this.$store.dispatch('cleanCurrentCart');
                this.show=false
            }
        }
    }
</script>

<style scoped>
    .card-header {
        margin: 0px;
    }

    .shopping-cart {
        margin-top: 20px;
    }
    .card-body {
        margin: 0px;
        overflow-y: auto;
        max-height: 350px;
    }
</style>

