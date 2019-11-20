<template>
    <div>
        <Header/>
        <TopLogo/>
        <div class="colls">
            <button type="button" class="button_tag" v-on:click="redirect('payment')">Eat Here</button>
            <br/><br/>
            <button type="button" class="button_tag" v-on:click="redirect('menu')">Take Away</button>
        </div>
    </div>
</template>
<script>
    import Header from "../components/Header";
    import TopLogo from "../components/TopLogo";

    export default {
        name: 'EatWay',
        components: {Header, TopLogo},
        created() {
            console.log("eatway: "+this.$store.getters.eatway);
            console.log("payemnt: "+this.$store.getters.payment);
        },
        methods: {
            redirect(path) {
                this.$store.dispatch('setEatWay', path);
                this.$router.push({ path: path || '/' });
            }
        }
    }
</script>
<style scoped>
    .colls {
        margin-left: 12px;
        margin-top: -80px;;
        margin-right: 12px;
        height: 322px;
    }

    button.button_tag {
        width: 100%;
        padding: 35px;
        position: relative;
        top: 244px;
        font-size: 60px;
        background: #754c48;
        color: white;
        font-family: 'Vollkorn', serif;
    }

</style>
