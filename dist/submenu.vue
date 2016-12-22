<style src="./style.css"></style>
<template>
    <li :class="itemClass">
        <div class="vt-menu__title"
             @click="toggle">
            <slot name="title"></slot>
            <span :class="arrowClass" v-if="arrow">
                <slot name="arrow"></slot>
            </span>
        </div>
        <ul v-show="active" class="vt-menu__children">
            <slot></slot>
        </ul>
    </li>
</template>
<script>
    export default{
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                active: this.open
            }
        },
        methods: {
            toggle(){
                this.active = !this.active
            },
            openParent(){
                this.toggle()
                if(this.$parent.openParent) {
                    this.$parent.openParent()
                }
            }
        },
        computed: {
            arrow(){
                return this.$slots.default && this.$slots.default.length > 0
            },
            itemClass(){
                let cls = ['vt-menu__item']
                this.active && cls.push('vt-menu--open')
                return cls
            },
            arrowClass(){
                let cls = ['vt-menu__arrow']
                this.active && cls.push('vt-menu__arrow--open')
                return cls
            }
        }
    }
</script>