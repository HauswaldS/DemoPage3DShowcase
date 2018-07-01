<template>
    <el-header>
        <el-row :gutter="10" align="middle" type="flex" justify="center">
            <el-col :xs="5" :sm="8" :md="{span:14, push:4}">
                <AppMenu :logo="logo"/>
            </el-col>
            <el-col :xs="{span:10, push:1}" :sm="8" :md="{span:3, pull:14}" class="app-logo">
                <img :src="logo">
            </el-col>
            <el-col :xs="8" :sm="8" :md="6" class="menu-buttons-container">
                <el-row type="flex" align="middle" justify="end">
                    <el-col :xs="10" :sm="10">
                        <el-button icon="el-icon-goods" plain><span class="hidden-xs-only">Cart</span></el-button>
                    </el-col>
                    <el-col :xs="10" :sm="10">
                        <el-button :icon="showSearchBar ?'el-icon-close' :'el-icon-search'" plain
                                   @click="showSearchBar = !showSearchBar">
                            <span class="hidden-xs-only">Search</span>
                        </el-button>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="24">
                <HeaderSearchbar :isActive="showSearchBar"/>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    import Logo from '../../assets/images/logo.jpg';
    import AppMenu from './AppMenu.vue';
    import HeaderSearchbar from './HeaderSearchbar.vue';

    export default {
        name: 'AppHeader',
        data() {
            return {
                logo: Logo,
                showSearchBar: false
            }
        },
        components: {
            AppMenu,
            HeaderSearchbar
        }
    }
</script>

<style scoped>
    header.el-header {
        z-index: 10000;
        position: fixed;
        width: 100%;
        height: 70px !important;
        padding: .5rem 0;
        background: white;
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    header.el-header .el-row:first-of-type {
        max-width: 1600px;
        margin: 0 auto!important;
    }

    header.el-header .el-button {
        border: 0;
    }

    header.el-header .app-logo img {
        display: block;
        margin: 0 auto;
        width: 65%;
        max-width: 85px;
    }

    header.el-header .el-row {
        flex-wrap: wrap;
    }

    .el-badge__content.is-fixed {
        top: 10px;
        right: 20px;
    }

    header.el-header .menu-buttons-container .el-row .el-col {
        display: flex;
        justify-content: flex-end;
    }

    header.el-header .menu-buttons-container .el-row .el-col:last-of-type {
        display: block;
    }

</style>

