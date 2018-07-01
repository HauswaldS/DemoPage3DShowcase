<template>
    <div class="more-products-slider-container">
        <template v-if="title">
            <h2>{{ title}}</h2>
            <hr>
        </template>
        <el-carousel
                ref="carousel_products"
                :height="carouselHeight"
                :autoplay="false"
                indicator-position="none">
            <el-carousel-item v-for="(productGroup, index) in productsGroup" :key="index">
                <el-container>
                    <el-row type="flex" :gutter="10">
                        <el-col v-for="product in productGroup"
                                :key="product.title"
                                :xs="24" :sm="12" :md="8" :lg="6"
                                class="product-card">
                            <el-card shadow="hover" :body-style="{padding:'0'}">
                                <img :src="product.image" class="image">
                                <div>
                                    <h3>Canapé {{product.title}}</h3>
                                    <span class="price">{{product.price}}€</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-container>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: 'MoreProductsCarousel',
        data() {
            return {
                productsGroup: [],
                nbProductsPerGroup: 0,
                windowWidth: 0,
                currentBreakpoint: 'xs',
            }
        },
        watch: {
            'windowWidth'(width) {
                if (width < 576 && this.nbProductsPerGroup !== this.xsNbProduct) {
                    this.nbProductsPerGroup = this.xsNbProduct;
                    this.currentBreakpoint = 'xs';
                }
                else if ((width >= 576 && width < 768) && this.nbProductsPerGroup !== this.smNbProduct) {
                    this.nbProductsPerGroup = this.smNbProduct;
                    this.currentBreakpoint = 'sm';
                }
                else if ((width >= 768 && width < 992) && this.nbProductsPerGroup !== this.mdNbProduct) {
                    this.nbProductsPerGroup = this.mdNbProduct;
                    this.currentBreakpoint = 'md';
                }
                else if (width >= 992 && this.nbProductsPerGroup !== this.lgNbProduct) {
                    this.nbProductsPerGroup = this.lgNbProduct;
                    this.currentBreakpoint = 'lg';
                } else if (width >= 1200 && this.nbProductsPerGroup !== this.xlNbProduct) {
                    this.nbProductsPerGroup = this.xlNbProduct;
                    this.currentBreakpoint = 'xl';
                }
            },
            'nbProductsPerGroup'(newNb) {
                this.productsGroup = [];
                this.products.forEach((product, index) => {
                    if (index === 0 || index % newNb === 0) this.productsGroup.push([product]);
                    else this.productsGroup[this.productsGroup.length - 1].push(product);
                });
                this.productsGroup.forEach((productGroup, index) => {
                    if (productGroup.length !== this.nbProductsPerGroup) {
                        productGroup.push(this.productsGroup[index - 1][0]);
                    }
                })
            }
        },
        props: {
            title: {
                type: String,
                required: false
            },
            products: {
                type: Array,
                required: true
            },
            xsNbProduct: {
                type: Number,
                required: false,
                default: 1
            },
            smNbProduct: {
                type: Number,
                required: false,
                default: 2
            },
            mdNbProduct: {
                type: Number,
                required: false,
                default: 3
            },
            lgNbProduct: {
                type: Number,
                required: false,
                default: 4
            },
            xlNbProduct: {
                type: Number,
                required: false,
                default: 4
            },
        },
        methods: {
            getWindowWidth() {
                this.windowWidth = document.documentElement.clientWidth;
            }
        },
        computed: {
            carouselHeight() {
                return this.currentBreakpoint === 'xs' ? '375px' :
                    this.currentBreakpoint === 'sm' ? '275px' :
                        this.currentBreakpoint === 'md' ? '225px' :
                            this.currentBreakpoint === 'lg' ? '300px' : '350px'
            }
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);
                //Init
                this.getWindowWidth()
            })
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }

    }
</script>

<style scoped>
    .more-products-slider-container {
        max-width: 1600px;
        margin: 0 auto;
    }

    .more-products-slider-container .el-carousel {
        margin: 1rem 0;
        overflow: hidden;
    }

    .more-products-slider-container h2 {
        margin-bottom: .5rem;
    }

    .more-products-slider-container hr {
        width: 50%;
        opacity: .4;
        margin: 0;
    }

    .product-card img {
        width: 100%;
    }

    .product-card .el-card__body h3 {
        margin: .5rem;
        text-align: center;
    }

    .product-card .el-card__body span {
        display: inline-block;
        width: 100%;
        text-align: center;
        padding-bottom: .5rem
    }

</style>