<style src="./style.css"></style>
<template>
    <ul class="vt-menu" :class="classObj">
        <slot></slot>
    </ul>
</template>
<script>
    /**
     * @description support class to define your theme
     * @props mode vertical horizontal
     */
    export default{
        props: {
            mode: {
                type: String,
                default: 'vertical'
            }
        },
        computed: {
            classObj() {
                return {
                    'vt-menu--vertical': this.mode == 'vertical',
                    'vt-menu--horizontal': this.mode == 'horizontal'
                }
            }
        }
    }
</script>