<template>
    <div class="cta-banner"
         data-aos="fade-up"
         data-aos-duration="1500"
         data-aos-once="true"
         :style="{backgroundImage: image ? `url(${backgroundImage})`: '', backgroundColor: color}">
        <h2 :style="{color: textColor}">{{text}}</h2>
        <el-button v-if="link" :href="link" :style="{color: color, borderColor: color}">
            <i v-if="linkIcon" :class="linkIcon"></i>
            {{linkText}}
        </el-button>
    </div>
</template>

<script>
    export default {
        name: 'CtaBanner',
        props: {
            image: {
                type: String,
                required: false
            },
            color: {
                type: String,
                required: false,
                default: '#FF5729'
            },
            text: {
                type: String,
                required: true,
            },
            textColor: {
                type: String,
                required: false,
                default: "#FFF"
            },
            link: {
                type: String,
                required: false
            },
            linkText: {
                type: String,
                required: false
            },
            linkIcon: {
                type: String,
                required: false
            },
        }
    }
</script>

<style scoped>
    .cta-banner {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 15vh;
        margin: 1rem -20px;
        padding: 1rem 0;
    }

    .cta-banner h2 {
        width: 100%;
        text-align: center;
    }

    @media all and (min-width: 768px) {
        .cta-banner {
            margin: 4rem -20px;
        }
    }
</style>