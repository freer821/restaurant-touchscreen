<template>
    <div class="container">
        <div class="card shopping-cart">
            <div class="card-header bg-dark text-light">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                Shipping cart
            </div>
            <div class="card-body">
                <Product/>
                <Product/>
                <Product/>
                <Product/>

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
                        Total price: <b>50.00€</b>
                    </div>
                    <b-button @click="show=true" variant="primary">Checkout</b-button>
                </div>
            </div>
        </div>
        <b-modal
                v-model="show"
                title="Modal Variants"
                size="huge"
                :header-bg-variant="headerBgVariant"
                :header-text-variant="headerTextVariant"
                :body-bg-variant="bodyBgVariant"
                :body-text-variant="bodyTextVariant"
                :footer-bg-variant="footerBgVariant"
                :footer-text-variant="footerTextVariant"
        >
            <b-container fluid>
                <b-row class="mb-1 text-center">
                    <b-col cols="3"></b-col>
                    <b-col>Background</b-col>
                    <b-col>Text</b-col>
                </b-row>

                <b-row class="mb-1">
                    <b-col cols="3">Header</b-col>
                    <b-col>
                        <b-form-select
                                v-model="headerBgVariant"
                                :options="variants"
                        ></b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select
                                v-model="headerTextVariant"
                                :options="variants"
                        ></b-form-select>
                    </b-col>
                </b-row>

                <b-row class="mb-1">
                    <b-col cols="3">Body</b-col>
                    <b-col>
                        <b-form-select
                                v-model="bodyBgVariant"
                                :options="variants"
                        ></b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select
                                v-model="bodyTextVariant"
                                :options="variants"
                        ></b-form-select>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="3">Footer</b-col>
                    <b-col>
                        <b-form-select
                                v-model="footerBgVariant"
                                :options="variants"
                        ></b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select
                                v-model="footerTextVariant"
                                :options="variants"
                        ></b-form-select>
                    </b-col>
                </b-row>
            </b-container>

            <template v-slot:modal-footer>
                <div class="w-100">
                    <p class="float-left">Modal Footer Content</p>
                    <b-button
                            variant="primary"
                            size="sm"
                            class="float-right"
                            @click="show=false"
                    >
                        Close
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
                footerTextVariant: 'dark'
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
    .modal .modal-huge {
        max-width: 2000px;
        width: 2000px;
    }
</style>

