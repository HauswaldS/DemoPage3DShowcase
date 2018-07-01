<template>
    <el-container class="product-gallery-container">
        <el-row type="type">
            <el-col :xs="24" :md="{span:18, push:6}">
                <el-carousel
                        ref="carousel"
                        :autoplay="autoplay"
                        indicator-position="none"
                        arrow="never"
                        :height="carouselHeight"
                        @change="slideChange">
                    <el-carousel-item v-for="image in images" :key="image">
                        <div :style="{backgroundImage: `url(${image})`}"></div>
                    </el-carousel-item>
                    <el-button type="primary">See in 3D</el-button>
                </el-carousel>
            </el-col>
            <el-col :xs="24" :md="{span:6, pull:18}" class="carousel-options">
                <el-row type="flex" :gutter="gutterWidth">
                    <el-col :xs="6" :sm="12" :md="24"
                            v-for="(image, index) in images"
                            :key="image"
                            :class="{imageSelected: indexImageSelected === index}">
                        <img :src="image" @click="setActiveImage(index)">
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    // TODO: Try and export the windowWidth watcher and currentBreakpoint prop into a mixin
    export default {
        name: 'ProductGallery',
        props: {
            images: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                autoplay: true,
                indexImageSelected: 0,
                windowWidth: 0,
                currentBreakpoint: 'xs'
            }
        },
        watch: {
            'windowWidth'(width) {
                if (width < 576) {
                    this.nbProductsPerGroup = this.xsNbProduct;
                    this.currentBreakpoint = 'xs';
                }
                else if ((width >= 576 && width < 768)) {
                    this.nbProductsPerGroup = this.smNbProduct;
                    this.currentBreakpoint = 'sm';
                }
                else if ((width >= 768 && width < 992)) {
                    this.nbProductsPerGroup = this.mdNbProduct;
                    this.currentBreakpoint = 'md';
                }
                else if (width >= 992) {
                    this.nbProductsPerGroup = this.lgNbProduct;
                    this.currentBreakpoint = 'lg';
                }
            },
        },
        methods: {
            getWindowWidth() {
                this.windowWidth = document.documentElement.clientWidth;
            },
            slideChange(imageIndex) {
                this.indexImageSelected = imageIndex;
            },
            setActiveImage(imageIndex) {
                if (this.autoplay) this.autoplay = false;
                this.$refs.carousel.setActiveItem(imageIndex);
            }
        },
        computed: {
            carouselHeight() {
                return this.currentBreakpoint === 'xs' ? '250px!important' :
                    (this.currentBreakpoint === 'sm' || this.currentBreakpoint === 'md') ? '300px!important' : '400px!important'
            },
            gutterWidth() {
                return this.currentBreakpoint === 'xs' ? 10 :
                    this.currentBreakpoint === 'sm' ? 15 : 20
            },
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
    /*XS*/
    .product-gallery-container {
        margin: -20px;
        margin-top: 0;
    }

    .product-gallery-container .el-row,
    .product-gallery-container .carousel-options .el-row {
        flex-wrap: wrap;
        margin: 0 !important;
    }

    .product-gallery-container .el-carousel {
        overflow: hidden;
    }

    .product-gallery-container .el-carousel div {
        width: 100%;
        height: 100%;
        background-size: cover;
        border-radius: 2%;
    }

    .product-gallery-container .carousel-options {
        margin-top: 1rem;
    }

    .product-gallery-container .carousel-options .el-col {
        cursor: pointer;
    }

    .product-gallery-container .carousel-options .el-col.imageSelected img {
        border: 1px solid #409eff;
    }

    .product-gallery-container .carousel-options img {
        width: 100%;
        border: 1px solid #e4e4e4;
        overflow: hidden;
        border-radius: 2%;
    }

    .product-gallery-container .el-button {
        z-index: 999;
        position: absolute;
        top: 10px;
        left: 10px;
    }


    /*SM*/
    @media all and (min-width: 768px) {
        .product-gallery-container {
            margin: 0 !important;
        }

        .product-gallery-container .carousel-options {
            margin-top: 1rem;
        }
    }

    @media all and (min-width: 992px) {

        .product-gallery-container .carousel-options {
            margin-top: 0rem;
        }
    }

</style>