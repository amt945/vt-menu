<style src="./style.css"></style>
<template>
    <li :class="classObj">
        <slot></slot>
    </li>
</template>
<script>
    export default{
        data(){
            return {
                classObj: ['ui-menu__item']
            }
        },
        mounted() {
            if(location.href.indexOf(this.$el.querySelector('a').href) > -1){
                this.classObj.push('ui-menu__item--active')
                this.$parent.openParent()
            }
        }
    }
</script>