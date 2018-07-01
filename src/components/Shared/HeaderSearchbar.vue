<template>
    <el-collapse-transition>
        <div v-show="isActive" class="search-bar">
            <el-input placeholder="Search by keyword, style, mood, etc ..." v-model="searchValue">
                <el-button slot="append" icon="el-icon-search" plain></el-button>
            </el-input>
        </div>
    </el-collapse-transition>
</template>

<script>
    export default {
        data() {
            return {
                searchValue: ''
            }
        },
        props: {
            isActive: {
                type: Boolean,
                required: false,
                default: false
            }
        }
    }
</script>

<style scoped>
    .el-button {
        border: 0;
    }

    .search-bar {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: auto;
        top: 60px;
        left: 0;
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 2%;
        border-bottom-right-radius: 2%;
    }

    .search-bar .el-input {
        padding: 10px;
        width: 97%;
    }

</style>