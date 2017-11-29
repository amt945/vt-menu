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
            const athor = this.$el.querySelector('a')
            // 处理菜单url和location.href匹配展开父菜单
            if(athor && location.href.indexOf(athor.href) > -1) {
                this.classObj.push('ui-menu__item--active')
                if(typeof this.$parent.openParent === 'function') {
                    this.$parent.openParent()    
                }
            }
        }
    }
</script>