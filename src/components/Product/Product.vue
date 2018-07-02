<template>
    <el-container>
        <el-row type="flex">
            <el-col :span="24">
                <ProductHeroImage
                        :title="product.title"
                        :subtitle="product.subtitle"
                        :image="heroImage"/>
            </el-col>
            <el-col :span="24" class="hidden-sm-and-up product-title-container">
                <h1 v-if="product.title"> {{product.title}}</h1>
                <template v-if="product.subtitle">
                    <hr>
                    <h2 v-if="product.subtitle"> {{product.subtitle}}</h2>
                </template>
            </el-col>
            <el-col :span="24" class="product-informations-container">
                <el-row type="flex">
                    <el-col :xs="24" class="breadcrumb-container  hidden-xs-only">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item>Acceuil</el-breadcrumb-item>
                            <el-breadcrumb-item>Produits</el-breadcrumb-item>
                            <el-breadcrumb-item>Séjour</el-breadcrumb-item>
                            <el-breadcrumb-item>Canapés & Convertibles</el-breadcrumb-item>
                            <el-breadcrumb-item>Ingumar</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="14" :lg="15" :xl="17">
                        <ProductGallery :images="images"/>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="10" :lg="9" :xl="7">
                        <el-container class="product-configurator-container">
                            <el-row type="flex" :gutter="20">
                                <el-col :span="24">
                                    <h3 class="product-price">{{currentPrice}}€</h3>
                                </el-col>
                                <el-col :span="24" v-if="product.configurations">
                                    <ProductConfiguration
                                            :configurations="product.configurations"
                                            @configurationChanges="onConfigurationChanges"
                                    />
                                </el-col>
                                <el-col :xs="24" class="product-cta">
                                    <el-button type="success"><i class="fa fa-cart-plus"></i>Add to Cart</el-button>
                                </el-col>
                                <!--TODO:Export into his own component-->
                                <el-col :xs="24" class="product-description">
                                    <h2>Description</h2>
                                    <hr>
                                    <p>
                                        <span> {{product.description.slice(0, 120)}}</span>
                                        <span v-if="!descriptionReadMore">...</span>
                                        <el-collapse-transition>
                                    <span v-show="descriptionReadMore" class="description-more">
                                        {{product.description.slice(120, product.description.length)}}
                                    </span>
                                        </el-collapse-transition>
                                        <span @click="descriptionReadMore = !descriptionReadMore">Lire {{ descriptionReadMore ? 'moins':'plus'}}</span>
                                    </p>
                                </el-col>
                            </el-row>
                        </el-container>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :xs="24">
                <BannerCta
                        text="Créer votre salon en ligne"
                        link="Cliquez ici"
                        linkText="Cliquez ici"
                />
            </el-col>
            <el-col :xs="24" style="overflow: hidden">
                <MoreProductsCarousel
                        title="In the same Category"
                        :products="products"
                />
            </el-col>
        </el-row>
    </el-container>
</template>
<script>
    import HeroImage from '../../assets/images/canape3.jpg';
    import Image1 from '../../assets/images/canape1.jpg';
    import Image2 from '../../assets/images/canape2.jpg';
    import Image3 from '../../assets/images/canape4.jpg';
    import Image4 from '../../assets/images/canape6.jpg';

    import ProductHeroImage from './ProductHeroImage.vue';
    import ProductGallery from './ProductGallery.vue';
    import ProductConfiguration from './ProductConfiguration.vue';
    import BannerCta from '../Shared/BannerCta.vue';
    import MoreProductsCarousel from './MoreProductsCarousel.vue';

    export default {
        name: 'Product',
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                heroImage: HeroImage,
                currentPrice: 0,
                descriptionReadMore: false,
                products: [
                    {
                        title: 'Isengard',
                        price: 6116,
                        image: Image1
                    },
                    {
                        title: 'Hector',
                        price: 1245,
                        image: Image2
                    },
                    {
                        title: 'Eros',
                        price: 4877,
                        image: Image3
                    },
                    {
                        title: 'Hemmer',
                        price: 2896,
                        image: Image4
                    },
                    {
                        title: 'Ranelid',
                        price: 785,
                        image: Image1
                    },
                    {
                        title: 'Ohlind',
                        price: 1235,
                        image: Image3
                    },
                    {
                        title: 'Rydahl',
                        price: 475,
                        image: Image4
                    },
                    {
                        title: 'Sandberg',
                        price: 4555,
                        image: Image2
                    },
                ],
                images: [
                    Image1,
                    Image2,
                    Image3,
                    Image4
                ]
            }
        },
        methods: {
            onConfigurationChanges(newConfiguration) {
                //TODO:  change the images displayed also
                this.currentPrice = newConfiguration.map(c => c.price).reduce((pricePrev, priceCurrent) => pricePrev + priceCurrent) + this.product.price;
            }
        },
        components: {
            ProductHeroImage,
            ProductGallery,
            ProductConfiguration,
            BannerCta,
            MoreProductsCarousel
        },
        created() {
            if (!this.product.configurations.length) this.currentPrice = this.product.price;
        }
    }

</script>


<style scoped>
    .el-row {
        flex-wrap: wrap !important;
    }

    .product-title-container {
        background: rgb(255, 87, 41);
        color: white;
        padding: 10px;
        margin: 0 -20px;
        width: 100vw;
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }

    .product-title-container hr {
        width: 50%;
        opacity: .5;
        margin-left: 0;
    }

    .product-title-container h1 {
        font-size: 2.618rem;
        margin: 1rem 0;
        margin-top: 20px;
    }

    .product-title-container h2 {
        font-size: 1.618rem;
    }

    .product-informations-container {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        max-width: 1600px;
        height: 80vh;
        max-height: 1000px;
    }

    .product-configurator-container {
        margin: 1rem 0;
    }

    .product-configurator-container .product-price {
        font-size: 2.5rem;
        margin-bottom: -1rem;
        margin-top: 1rem;
    }

    .product-configurator-container .el-row {
        margin: 0;
    }

    .product-cta {
        padding-top: 1rem;
    }

    .product-cta .el-button {
        width: 100%;
    }

    .product-cta .el-button i {
        font-size: 1.2rem;
        padding-right: 1rem;
    }

    .product-description h2 {
        margin-bottom: .5rem;
    }

    .product-description hr {
        opacity: .4;
        width: 50%;
        margin: 0;
    }

    .product-description .description-more {
        display: inline
    }

    .product-description p span:last-of-type {
        color: #409EFF;
        cursor: pointer;
    }

    .breadcrumb-container .el-breadcrumb {
        padding-left: 1rem;
        padding-bottom: 1rem;
    }

    @media all and (min-width: 768px) {

        .product-configurator-container {
            margin-top: 0;
        }

        .product-configurator-container .el-row:first-of-type {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }

        .product-configurator-container .product-price {
            margin-top: 0;
        }
    }


</style>