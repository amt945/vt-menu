<style src="./style.css"></style>
<template>
    <ul class="ui-menu" :class="classObj">
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
                    'ui-menu--vertical': this.mode == 'vertical',
                    'ui-menu--horizontal': this.mode == 'horizontal'
                }
            }
        }
    }
</script>