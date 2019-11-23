<template>
    <div>
        <Header/>
        <TopLogo/>
        <div class="main-container">
            <b-container>
                <b-row>
                    <b-col>
                        <div class="nav">
                            <b-nav vertical pills>
                                <b-nav-item v-for="tab in tabs" :key="tab.id" :active="selectedTab===tab.id" v-on:click="changeTab(tab)">
                                    <img :src="getImgUrl(tab)" class="img-fluid" />
                                </b-nav-item>
                            </b-nav>
                        </div>
                    </b-col>
                    <b-col cols="9">
                        <Menu title="Menu" v-if="viewtag==='menu'" :menu="menu" />
                        <Item title="Item" v-if="viewtag==='item'"/>
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
    import Header from "../../components/Header";
    import TopLogo from "../../components/TopLogo";
    import Cart from "./components/cart";
    import Menu from "./components/menu";
    import Item from "./components/item";
    import {getMenu} from "@/api/menu";

    export default {
        name: 'layout',
        components: {Header, TopLogo, Cart, Menu, Item},
        data() {
            return {
                selectedTab:0,
                tabs : {},
                menu: Object

            }
        },
        computed: {
            viewtag: function() {
                return this.$store.getters.viewtag;
            }
        },
        created() {
                getMenu().then( response => {
                    this.tabs = response.data;
                    if (this.tabs.length > 0) {
                        this.changeTab(this.tabs[0])
                    }
                }).catch(error => {
                    console.log(error);
                });
        },
        methods: {
            getImgUrl(tab) {
                return require("@/assets/images/"+tab.img);
            },
            changeTab(tab) {
                this.$store.dispatch('setViewtag', 'menu');
                this.selectedTab = tab.id;
                this.menu = tab;
            }
        }
    }
</script>

<style scoped>
    .nav {
        margin: auto;
    }

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
