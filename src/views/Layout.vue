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
        </div>
    </div>

</template>

<script>
    import Header from "../components/Header";
    import TopLogo from "../components/TopLogo";
    import NavBar from "../components/NavBar";

    export default {
        name: 'layout',
        components: {Header, TopLogo, NavBar},
    }
</script>

<style scoped>
    .main-container {
        display: inline;
        margin: auto;
        width: 90vw;
        background-color: transparent !important;
    }

</style>
