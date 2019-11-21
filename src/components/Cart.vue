<template>
    <div class="container">
        <div class="card shopping-cart">
            <div class="card-header bg-dark text-light">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                Shipping cart
            </div>
            <div class="card-body">
                <Product />
                <Product />
                <Product />
                <Product />

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
                    <a href="" class="btn btn-success float-right">Checkout</a>
                    <div class="float-right" style="margin: 5px">
                        Total price: <b>50.00€</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Product from "./Product";
    export default {
        name: "Cart",
        components:{ Product }
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
