<template>
    <div>
        <el-button icon="fa fa-bars" plain class="hidden-md-and-up" @click="showMenu = !showMenu"></el-button>
        <transition name="slideLeft" mode="out-in">
            <div class="vertical-menu" v-if="showMenu">
                <img v-if="logo" :src="logo" class="menu-logo">
                <el-menu>
                    <template v-for="(menuItem, menuItemIndex) in menuItems">
                        <template v-if="menuItem.subItems.length">
                            <el-submenu :index="'menuItemIndex'" :key="menuItem.title">
                                <template slot="title">
                                    <i v-if="menuItem.icon" :class="menuItem.icon"></i>
                                    <span>{{menuItem.title}}</span>
                                </template>
                                <template v-if="menuItem.subItems.length">
                                    <el-submenu v-for="(subItem, subItemIndex) in menuItem.subItems"
                                                :index="`${menuItemIndex}-${subItemIndex}`"
                                                :key="subItem.title">
                                        <template slot="title">
                                            <i v-if="subItem.icon" :class="subItem.icon"></i>
                                            <span>{{subItem.title}}</span>
                                        </template>
                                        <template v-if="subItem.items.length">
                                            <el-menu-item v-for="(subItemItem, subItemItemIndex) in subItem.items"
                                                          :index="`${menuItemIndex}-${subItemIndex}-${subItemItemIndex}`"
                                                          :key="subItemItemIndex">
                                                {{subItemItem.title}}
                                            </el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="`${menuItemIndex}`" :key="menuItem.title">
                                <i v-if="menuItem.icon" :class="menuItem.icon"></i>
                                <span slot="title">{{menuItem.title}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
                <hr>
                <el-button plain><i class="fa fa-user"></i>Login</el-button>
            </div>
        </transition>
        <transition name="fadeIn" mode="out-in">
            <div class="overlay" v-if="showMenu" @click="showMenu = false"></div>
        </transition>
        <el-menu :default-active="activeIndex" class="hidden-sm-and-down" mode="horizontal">
            <template v-for="(menuItem, menuItemIndex) in menuItems">
                <template v-if="menuItem.subItems.length">
                    <el-submenu :index="'menuItemIndex'"
                                :key="menuItem.title"
                                popper-class="sub-menu-container">
                        <template slot="title">
                            <i v-if="menuItem.icon" :class="menuItem.icon"></i>
                            <span>{{menuItem.title}}</span>
                        </template>
                        <el-container>
                            <el-row type="flex" :gutter="10">
                                <el-col :md="6" v-for="(subItem) in menuItem.subItems"
                                        :key="subItem.title">
                                    <a class="sub-menu-title" :href="subItem.title">
                                        <div></div>
                                        <i :class="subItem.icon"></i>
                                        {{subItem.title}}
                                    </a>
                                    <a class="sub-menu-item" v-for="subMenuItem in subItem.items"
                                       :key="subMenuItem.title">
                                        <div></div>
                                        {{subMenuItem.title}}</a>
                                </el-col>
                            </el-row>
                        </el-container>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="`${menuItemIndex}`" :key="menuItem.title">
                        <i v-if="menuItem.icon" :class="menuItem.icon"></i>
                        <span slot="title">{{menuItem.title}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'AppMenu',
        data() {
            return {
                menuItems: [
                    {
                        path: 'produits',
                        title: 'Produits',
                        icon: '',
                        subItems: [
                            {
                                title: 'Sejour',
                                icon: 'fa fa-couch',
                                items: [
                                    {
                                        path: 'canapes',
                                        title: 'Canapés & Convertible',
                                        icon: ''
                                    },
                                    {
                                        path: 'fauteils',
                                        title: 'Fauteils',
                                        icon: ''
                                    },
                                    {
                                        path: 'tables_basses',
                                        title: 'Tables Basses',
                                        icon: ''
                                    },
                                    {
                                        path: 'meubles_tv',
                                        title: 'Meubles TV',
                                        icon: ''
                                    }
                                ]
                            },
                            {
                                title: 'Salle à manger',
                                icon: 'fa fa-bath',
                                items: [
                                    {
                                        path: 'chaises_tabourets',
                                        title: 'Chaises, Tabourets, Bancs',
                                        icon: ''
                                    },
                                    {
                                        path: 'table_de_repas',
                                        title: 'Table de Repas',
                                        icon: ''
                                    },
                                    {
                                        path: 'buffet_coloones_vaisseliers',
                                        title: 'Buffet, colonnes, vaisseliers',
                                        icon: ''
                                    },
                                    {
                                        path: 'bureaux',
                                        title: 'Bureaux',
                                        icon: ''
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'designers',
                        title: 'Designers',
                        icon: '',
                        subItems: []
                    },
                    {
                        path: "createur_ambiance",
                        title: "Créateur d'ambiance",
                        icon: '',
                        subItems: []
                    },
                    {
                        path: "a_propos",
                        title: "A propos",
                        icon: '',
                        subItems: []
                    },
                ],
                activeIndex:'1',
                showMenu: false,

            }
        },
        props: {
            logo: {
                type: String,
                required: false
            }
        }
    }
</script>

<style scoped>
    .el-button {
        border: 0;
    }

    .vertical-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 300px;
        background: #FFFFFA;
        z-index: 100;
        overflow-y: scroll;
    }

    .vertical-menu .el-menu i {
        font-size: 2rem;
        padding-right: 1rem;
    }

    .vertical-menu button {
        width: 100%;
        text-align: left;
    }

    .vertical-menu .el-button i {
        padding-right: .5rem;
        font-size: 1rem;
    }

    .vertical-menu .menu-logo {
        display: block;
        width: 100%;
        max-width: 100px;
        margin: .5rem auto;
    }

    .vertical-menu hr {
        opacity: .4;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, .5);
        z-index: 99;
        overflow: hidden;
    }

    .slideLeft-enter-active, .slideLeft-leave {
        transform: translateX(0px);
        transition: all .7s ease-in;
    }

    .slideLeft-enter, .slideLeft-leave-active {
        transform: translateX(-500px);
        transition: all .7s ease-in;
    }

    .fadeIn-enter-active, .fadeIn-leave {
        opacity: 1;
        transition: all .7s ease-in;
    }

    .fadeIn-enter, .fadeIn-leave-active {
        opacity: 0;
        transition: all .7s ease-in;
    }

    .el-submenu.is-opened > .el-submenu__title:first-of-type span,
    .el-submenu.is-opened > .el-submenu__title:first-of-type i {
        color: #409EFF;
    }

    @media all and (min-width: 992px) {

        .sub-menu-container .el-container {
            padding: 1rem 2rem;
            padding-top: 0;
        }

        .sub-menu-container .el-container .el-row {
            width: 100%;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-title {
            position: relative;
            display: inline-block;
            color: rgb(69, 68, 69);
            text-decoration: none;
            font-size: 1.5rem;
            margin-top: 1rem;
            margin-bottom: .5rem;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-title div {
            display: block;
            position: absolute;
            height: 10%;
            width: 100%;
            bottom: 0;
            left: 0;
            background: rgb(255, 87, 41);
            transform: scaleX(0);
            transform-origin: left;
            transition: all ease-in .3s;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-title:hover div {
            transform: scaleX(1);
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-title:hover i {
            transition: all ease-in .3s;
            color: rgb(255, 87, 41);
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-title i {
            padding-right: 1rem;
        }

        .sub-menu-container .el-container .el-row .el-col hr {
            width: 90%;
            opacity: .5;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-item {
            position: relative;
            padding: .5rem;
            display: block;
            color: rgba(69, 68, 69, 0.5);
            transition: ease-in .3s;
            cursor: pointer;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-item:hover {
            color: white;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-item div {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 90%;
            background: #409EFF;
            transform: scaleX(0);
            transform-origin: left;
            transition: ease-in .3s;
            z-index: -1;
        }

        .sub-menu-container .el-container .el-row .el-col a.sub-menu-item:hover div {
            transform: scaleX(1);
        }
    }

    @media all and (min-width: 992px) and (max-width: 1038px) {
        .el-menu-item {
            padding: 0 15px;
        }
    }


</style>