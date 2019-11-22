<template>
    <div>
        <Header/>
        <TopLogo/>
        <div class="main-container">
            <b-container>
                <b-row>
                    <b-col>
                        <NavBar/>
                    </b-col>
                    <b-col cols="9">
                        <router-view/>
                    </b-col>
                </b-row>
            </b-container>
            <div class="cart-container">
                <Cart />
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import TopLogo from "../components/TopLogo";
    import NavBar from "../components/NavBar";
    import Cart from "../components/Cart";
    export default {
        name: 'layout',
        components: {Header, TopLogo, NavBar, Cart},
    }
</script>

<style scoped>
    .main-container {
        margin: auto;
        width: 90vw;
        background-color: transparent !important;
    }
    .cart-container {
        margin-top:20px;
        width: 100%;
    }

    .cart-container .empty {
        font-size: 3em;
        width: 100%;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }


</style>
