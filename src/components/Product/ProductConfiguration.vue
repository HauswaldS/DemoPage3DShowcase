<template>
    <el-container class="product-configurations-container">
        <el-row type="flex">
            <el-col :xs="24" v-for="configurationType in configurationsGroupedByTypes"
                    :key="configurationType.type.label">
                <el-container class="configuration-type-container">
                    <el-row type="flex" :gutter="5">
                        <el-col :xs="24">
                            <h4>{{configurationType.type.label}} | <span>{{configurationTypeSelected(configurationType).label}}</span>
                            </h4>
                        </el-col>
                        <el-col :xs="4"
                                :sm="4"
                                @click.native="selectConfiguration(configuration)"
                                :class="{'configuration-selected': isSelected(configuration), 'configuration-not-available': !isAvailable(configuration)}"
                                v-for="configuration in  configurationType.configurations"
                                :key="configuration.label">
                            <img :title="configuration.label"
                                 v-tippy="{ placement : 'top',  arrow: true }"
                                 v-if="configuration.image" :src="configuration.image" alt="">
                            <p v-else> {{configuration.label}}</p>
                        </el-col>
                    </el-row>
                </el-container>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    export default {
        name: 'ProductConfiguration',
        data() {
            return {
                configurationsGroupedByTypes: [],
                currentConfiguration: [],
                currentConfigurationAccepts: []
            }
        },
        props: {
            configurations: {
                type: Array,
                required: true
            }
        },
        methods: {
            configurationChanges() {
                this.$emit('configurationChanges', this.currentConfiguration);
            },
            selectConfiguration(configuration) {
                if (this.isSelected(configuration) || !this.isAvailable(configuration)) return;
                this.currentConfiguration = this.currentConfiguration.map(c => {
                    if (configuration.type.id === c.type.id) return configuration;
                    else return c;
                });
                this.setCurrentConfigurationAccept();
                this.configurationChanges();
            },
            setCurrentConfigurationAccept() {
                this.currentConfigurationAccepts = [].concat.apply([], this.currentConfiguration.map(c => c.configurations));
            },
            configurationTypeSelected(configurationType) {
                return this.currentConfiguration.find(c => c.type.id === configurationType.type.id)
            },
            isSelected(configuration) {
                return this.currentConfiguration.find(c => configuration.id === c.id);
            },
            isAvailable(configuration) {
                return this.currentConfigurationAccepts.includes(configuration.id);
            }
        },
        created() {
            //TODO: Poor naming here
            let configurationTypesFiltered = [];
            this.configurations.forEach(configuration => {
                if (!configurationTypesFiltered.includes(configuration.type.id)) {
                    configurationTypesFiltered.push(configuration.type.id);
                    this.configurationsGroupedByTypes.push({
                        type: configuration.type,
                        configurations: [configuration]
                    })
                } else {
                    this.configurationsGroupedByTypes.forEach(c => {
                        if (c.type.id === configuration.type.id) c.configurations.push(configuration);
                    })
                }
            });


            this.configurationsGroupedByTypes.forEach(configurationType => {
                if (!this.currentConfiguration.length) {
                    this.currentConfiguration.push(configurationType.configurations[0]);
                } else {
                    configurationType.configurations.some(configuration => {
                        if (this.currentConfigurationAccepts.includes(configuration.id)) {
                            this.currentConfiguration.push(configuration);
                            return true;
                        } else return false
                    })
                }
                this.setCurrentConfigurationAccept();
            });

            this.configurationChanges();
        }
    }
</script>

<style scoped>
    .el-container .el-row {
        flex-wrap: wrap;
    }

    .configuration-type-container h4 {
        margin-bottom: .5rem;
    }

    .configuration-type-container h4 span {
        font-size: .9rem;
    }

    .configuration-type-container img {
        width: 100%;
        height: 50px;
        border: 1px solid #e4e4e4;
        overflow: hidden;
        border-radius: 5%;
        cursor: pointer;
    }

    .configuration-type-container .configuration-selected img {
        border: 1px solid #409eff;
    }

    .configuration-type-container .configuration-not-available img {
        opacity: .4;
        cursor: initial;
    }


</style>