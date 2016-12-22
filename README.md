## vue pc多级菜单导航
---
### 功能
- 多级菜单导航
- 提供一种主题
- 提供外层class 自定义主题

### 使用
```vue
<template>
    <Menus mode="vertical">
        <Submenu>
            <span slot="title">菜单1</span>
            <i slot="arrow">&gt;</i>
            <Item><router-link :to="{path: '/submenu2'}">子菜单2</router-link></Item>
            <Item><router-link :to="{path: '/submenu3'}">子菜单3</router-link></Item>
            <Item><router-link :to="{path: '/submenu4'}">子菜单4</router-link></Item>
            <Item><router-link :to="{path: '/submenu5'}">子菜单5</router-link></Item>
            <Item><router-link :to="{path: '/components/transfer'}">子菜单 - 穿梭框</router-link></Item>
        </Submenu>
        <Item><router-link :to="{path: '/menu2'}">菜单2</router-link></Item>
    </Menus>
</template>
<script>
    export default{
        components: {
            Menus: require('dist/menu.vue'),
            Item: require('dist/item.vue'),
            Submenu: require('dist/submenu.vue')
        }
    }
</script>
```