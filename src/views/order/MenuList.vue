<template>
    <section class="container content-section">
        <h2 class="section-header">{{ title }}</h2>
        <div class="shop-items">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </section>
</template>

<script>
    import MenuItem from "./MenuItem";
    export default {
        name: "MenuList",
        props: {
            title: String,
            redirect: String,
        },
        components: { MenuItem },
    }
</script>

<style scoped>
    .content-section {
        margin: 1em;
    }

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1.5em;
    }

    .section-header {
        border: 2px solid white;
        font-family: "Metal Mania";
        font-weight: normal;
        color: white;
        text-align: center;
        font-size: 3.5em;
        background-color: black;
    }

    .shop-items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>
