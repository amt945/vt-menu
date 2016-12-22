<style src="./style.css"></style>
<template>
    <li :class="classObj">
        <slot></slot>
    </li>
</template>
<script>
    export default{
        render(h) {
            return h('li', {
                class: 'vt-menu__item'
            }, this.$slots.default)
        },
        data(){
            return {
                classObj: ['vt-menu__item']
            }
        },
        mounted() {
            if(location.href.indexOf(this.$el.querySelector('a').href) > -1){
                this.classObj.push('vt-menu__item--active')
                this.$parent.openParent()
            }
        }
    }
</script>