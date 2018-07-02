<template>
    <div class="hero-image-container" :style="{backgroundImage: `url(${image})`}">
        <div class="title-container" data-aos="slide-right" data-aos-duration="1500" data-aos-once="true">
            <div class="hidden-xs-only">
                <h1 v-if="title"> {{title}}</h1>
                <hr>
                <h2 v-if="subtitle"> {{subtitle}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import aos from 'aos';

    export default {
        name: 'HeroImage',
        props: {
            title: {
                type: String,
                required: false
            },
            subtitle: {
                type: String,
                required: false
            },
            image: {
                type: String,
                required: true
            }
        },
        mounted() {
            aos.init();
        }
    }
</script>

<style scoped>
    .hero-image-container h1 {
        /*width: 100%;*/
        font-size: 2.618rem;
        margin: 1rem 0;
        margin-top: 20px;
        color: white;
    }

    .hero-image-container h2 {
        /*width: 100%;*/
        font-size: 1.618rem;
        color: white;
    }

    .hero-image-container hr {
        background: white;
        margin: 0;
        opacity: .5;
        width: 100%;
        max-width: 200px;
    }

    .hero-image-container {
        background-position: center center;
        background-size: cover;
        height: 60vh;
        width: 100vw;
        margin: -20px;
        margin-bottom: 0;
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .hero-image-container .title-container div {
        display: none;
    }

    @media all and (min-width: 768px) {
        .hero-image-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 3rem;
            -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero-image-container .title-container {
            width: 100%;
            max-width: 1600px;
        }

        .hero-image-container .title-container div {
            display: flex;
            width: 33%;
            padding: 10px;
            border-top-right-radius: 3%;
            border-bottom-right-radius: 3%;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: flex-end;
            margin-bottom: 2rem;
            background: rgb(255, 87, 41);
        }
    }

    @media all and (min-width: 1200px) {
        .hero-image-container {
            height: 75vh;
        }
    }

    @media all and (min-width: 1600px) {
        .hero-image-container .title-container div {
            border-bottom-left-radius: 3%;
            border-top-left-radius: 3%;
        }
    }
</style>