<template>
    <el-footer>
        <el-container>
            <el-row type="flex" :gutter="15">
                <el-col :span="24" class="main-menu">
                    <a :href="menuItem.name" :key="menuItem.name"
                       v-for="menuItem in mainMenuItems">{{menuItem.name}}</a>
                </el-col>
                <el-col :xs="24" :sm="12" class="newsletter-container">
                    <h3>Subscribe to Our Newsletter</h3>
                    <el-input placeholder="Email Address" v-model="newsletter.email">
                        <i slot="prepend" class="el-icon-message"></i>
                        <el-button slot="append" icon="el-icon-arrow-right"></el-button>
                    </el-input>
                </el-col>
                <el-col :xs="24" :sm="12" class="socials-container">
                    <div>
                        <h3>Follow Us</h3>
                        <span>Get inspired everyday on the go</span>
                    </div>
                    <a v-for="socialItem in socialItems" :key="socialItem.icon" :href="socialItem.icon">
                        <i :class="socialItem.icon"></i>
                    </a>
                </el-col>
                <el-col :xs="24" class="sub-menu">
                    <a :href="subMenuItem.name" :key="subMenuItem.name" v-for="subMenuItem in subMenuItems">{{subMenuItem.name}}</a>
                </el-col>
            </el-row>
        </el-container>
    </el-footer>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                newsletter: {
                    email: ''
                },
                mainMenuItems: [
                    {
                        name: 'FAQ'
                    },
                    {
                        name: 'Shipping & Returns'
                    },
                    {
                        name: 'Product Care'
                    },
                    {
                        name: 'Press'
                    },
                    {
                        name: 'Contact'
                    },
                ],
                subMenuItems: [
                    {
                        name: '@290Ronin|2018'
                    },
                    {
                        name: 'Privacy Policy'
                    },
                    {
                        name: 'Terms & Conditions'
                    },
                ],
                socialItems: [
                    {
                        icon: 'fab fa-instagram'
                    },
                    {
                        icon: 'fab fa-twitter'
                    },
                    {
                        icon: 'fab fa-facebook'
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    footer.el-footer {
        width: 100%;
        background: white;
        height: auto !important;
        -webkit-box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    }

    footer.el-footer .el-row {
        max-width: 1600px;
        margin: 1rem auto!important;
        margin-bottom: .5rem;
        flex-wrap: wrap;
    }

    footer.el-footer .main-menu {
        margin: 1rem auto;
        text-align: center;
    }

    footer.el-footer .main-menu a {
        color: #454445;
        text-decoration: none;
        padding: .5rem 1rem;
        display: inline-block;
    }

    footer.el-footer .sub-menu {
        text-align: center;
        margin-top: 1.5rem;
    }

    footer.el-footer .sub-menu a {
        color: #454445;
        text-decoration: none;
        opacity: .5;
        font-size: .8rem;
        padding: .5rem .5rem;
        display: inline-block;
    }

    footer.el-footer .el-input {
        width: 80%;
    }

    footer.el-footer input.el-input__inner {
        border-left: 1px solid white !important;
    }

    footer.el-footer .socials-container h3 {
        margin-bottom: .5rem;
    }

    footer.el-footer .socials-container span {
        font-size: .9rem;
        margin-bottom: .5rem;
    }

    footer.el-footer .socials-container i {
        font-size: 1.2rem;
        padding: .5rem;
        color: #000;
    }

    footer.el-footer .newsletter-container,
    footer.el-footer .socials-container {
        text-align: center;
        margin-top: .5rem;
    }
</style>