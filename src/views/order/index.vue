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
                                <b-nav-item v-for="tab in tabs" :key="tab.id" :active="selectedTab===tab.id"
                                            v-on:click="changeTab(tab)">
                                    <img :src="getImgUrl(tab)" class="img-fluid"/>
                                </b-nav-item>
                            </b-nav>
                        </div>
                    </b-col>
                    <b-col cols="9">
                        <Category v-if="viewtag==='category'" :category="category"/>
                        <Menu v-if="viewtag==='menu'"/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="cart-container">
            <Cart/>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import TopLogo from "../../components/TopLogo";
    import Cart from "./components/cart";
    import Menu from "./components/menu";
    import Category from "./components/category";
    import {getCategories} from "@/api/category"

    export default {
        name: 'layout',
        components: {Header, TopLogo, Cart, Menu, Category},
        data() {
            return {
                selectedTab: 0,
                tabs: [],
                category: Object

            }
        },
        computed: {
            viewtag: function () {
                return this.$store.getters.viewtag;
            }
        },
        created() {
            getCategories().then(response => {
                this.tabs = response.data;
                if (this.tabs.length > 0) {
                    this.changeTab(this.tabs[0])
                }
            })
        },
        methods: {
            getImgUrl(tab) {
                return require("@/assets/images/" + tab.img);
            },
            changeTab(tab) {
                this.$store.dispatch('setViewtag', 'category');
                this.selectedTab = tab.id;
                this.category = tab;
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
        height: 780px;
        overflow-y: auto;
    }

    .cart-container {
        margin-top: 20px;
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
