<template>
    <div class="navbar">
        <div style="padding: 20px">
            <el-row :gutter="20">
                <el-col :span="6"> <img src="~@/assets/images/g1.png" ></el-col>
                <el-col :span="6"><img src="~@/assets/images/g2.png" ></el-col>
                <el-col :span="6"><img src="~@/assets/images/g3.png" ></el-col>
                <el-col :span="6"><img src="~@/assets/images/g4.png" ></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style lang="scss" scoped>
    .navbar {
        height: #{$navBarHeight};
        overflow: hidden;
        position: relative;
        background-color: #2e130a;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
    }
    .el-col {
        text-align:center;
    }
</style>
