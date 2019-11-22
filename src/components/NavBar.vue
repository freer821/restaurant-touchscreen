<template>
    <div class="nav">
        <b-nav vertical pills>
            <b-nav-item :active="tab===1" v-on:click="tab=1"><img src="~@/assets/images/r1.png" class="img-fluid">
            </b-nav-item>
            <b-nav-item :active="tab===2" v-on:click="tab=2"><img src="~@/assets/images/q1.png" class="img-fluid">
            </b-nav-item>
            <b-nav-item :active="tab===3" v-on:click="tab=3"><img src="~@/assets/images/s1.png" class="img-fluid">
            </b-nav-item>
            <b-nav-item :active="tab===4" v-on:click="tab=4"><img src="~@/assets/images/t1.png" class="img-fluid">
            </b-nav-item>
            <b-nav-item :active="tab===5" v-on:click="tab=5"><img src="~@/assets/images/s1.png" class="img-fluid">
            </b-nav-item>
        </b-nav>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                tab: 1
            }
        },
        watch: {
            tab: function (newValue) {
                switch (newValue) {
                    case 1:
                        this.$router.push({name: 'list', params: {title: 'Menus'}});
                        break;
                    case 2:
                        this.$router.push({name: 'list', params: {title: 'Bagels'}});
                        break;
                    case 3:
                        this.$router.push({name: 'list', params: {title: 'Suppen'}});
                        break;
                    case 4:
                        this.$router.push({name: 'list', params: {title: 'Salat'}});
                        break;
                    case 5:
                        this.$router.push({name: 'list', params: {title: 'Drink'}});
                        break;
                    case 6:
                        this.$router.push({name: 'list', params: {title: 'Dissert'}});
                        break;
                    default:
                        this.$router.push({name: 'list', params: {title: 'Menus'}});
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .nav {
        margin: auto;
    }

</style>
