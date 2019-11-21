<template>
    <section class="container content-section">
        <h2 class="section-header">{{ title }}</h2>
        <Attribute />
        <Attribute />
        <Attribute />
        <Attribute />
        <Attribute />
        <Attribute />

    </section>
</template>

<script>
    import Attribute from "./Attribute";
    export default {
        name: "ItemDetail",
        props: {
            title: String
        },
        components: {Attribute},
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
        margin-bottom: 1em;
    }

</style>
