<template>
    <el-container direction="vertical">
        <AppHeader/>
        <el-main>
            <Product :product="product"/>
        </el-main>
        <AppFooter/>
    </el-container>
</template>

<script>
    import BlackPanther from './assets/images/materials/black_panther.jpg';
    import RedVelvet from './assets/images/materials/red_velvet.jpg';
    import LimeGreen from './assets/images/materials/lime_green.jpg';

    import Aluminium from './assets/images/materials/alu.jpg';
    import Wood from './assets/images/materials/bois.jpg';


    import AppHeader from './components/Shared/AppHeader.vue';
    import Product from './components/Product/Product.vue';
    import AppFooter from './components/Shared/AppFooter.vue';

    export default {
        name: 'App',
        data() {
            return {
                product: {
                    title: 'Ingumar',
                    subtitle: 'designed by Gorgio Moroder',
                    description: "Habillé de tissu Lift (45% coton, 40% acrylique, 5% fibres, 10% polyamide), passepoil contrasté. Dossiers à double profondeur avec mécanisme à balancier (existe en version fixe), accoudoirs mobiles. Coussins d'assise capitonnés mousse HR bi-densité 35-40 kg/m³ et ouate. Coussin d'accoudoirs capitonnés mousse HR 45kg/m³ et ouate. Structure métal, bois massif et multiplis. Suspension sangles élastiques HR. Existe dans d'autres dimensions, canapés droits et pouf.",
                    price: 3853,
                    configurations: [
                        {
                            id: 1,
                            type: {
                                id: 1,
                                value: 'fabric',
                                label: 'Fabric'
                            },
                            value: 'black_panther',
                            label: 'Black panther',
                            image: BlackPanther,
                            price: 234,
                            configurations: [4]
                        },
                        {
                            id: 2,
                            type: {
                                id: 1,
                                value: 'fabric',
                                label: 'fabric'
                            },
                            value: 'lime_green',
                            label: 'Lime Green',
                            image: LimeGreen,
                            price: 134,
                            configurations: [4]
                        },
                        {
                            id: 3,
                            type: {
                                id: 1,
                                value: 'fabric',
                                label: 'fabric'
                            },
                            value: 'red_velvet',
                            label: 'Red Velvet',
                            image: RedVelvet,
                            price: 563,
                            configurations: [4, 5]
                        },
                        {
                            id: 4,
                            type: {
                                id: 2,
                                value: 'foot',
                                label: 'Foot'
                            },
                            value: 'aluminium',
                            label: 'Aluminium',
                            image: Aluminium,
                            price: 442,
                            configurations: [1, 2, 3]
                        },
                        {
                            id: 5,
                            type: {
                                id: 2,
                                value: 'foot',
                                label: 'Foot'
                            },
                            value: 'wood',
                            label: 'Wood',
                            image: Wood,
                            price: 122,
                            configurations: [3]
                        },
                    ]
                }
            }
        },
        computed: {},
        components: {
            AppHeader,
            Product,
            AppFooter
        }
    }
</script>

<style>
    body {
        font-size: 16px;
        margin: 0;
        font-family: 'Montserrat', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #454445;
        background: #FFFFFA;
    }

    .el-main {
        overflow: hidden!important;
    }

    .sub-menu-container {
        width: 100% !important;
        max-width: 1200px !important;
        border: 0 !important;
    }

    @media all and (min-width: 1200px) {
        body {
            font-size: 18px;
        }
    }

    @media all and (min-width: 1600px) {
        body {
            font-size: 20px;
        }
    }

</style>
