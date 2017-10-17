## vt-menu

基于 vue2.x 的 导航， 支持嵌套

### 功能
- 多级菜单导航
- 提供一种主题
- 提供外层class 自定义主题

## Install 

```bash
npm install -D vt-menu
```


## Usage

```example
<style>
.ui-menu--vertical{
    width: 300px;
}
.ui-menu--vertical > .ui-menu__item{
    padding-left: 30px;
}
</style>
<template>
    <Menus mode="vertical">
        <Submenu open>
            <span slot="title">vue-tools</span>
            <Item><a href='https://github.com/vue-tools/vue-http'>vue-http</a></Item>
            <Item><a href='https://github.com/vue-tools/vt-cell'>vt-cell</a></Item>
            <Item><a href='https://github.com/vue-tools/vt-tabs'>vt-tabs</a></Item>
            <Item><a href='https://github.com/vue-tools/vt-button'>vt-button</a></Item>
            <Item><a href='https://github.com/vue-tools/vt-alert'>vt-alert</a></Item>
        </Submenu>
        <Item>
            <a href="https://github.com/halojs">halojs</a>
        </Item>
    </Menus>
</template>
<script>
    import { Menus, Item, Submenu } from 'vt-menu'
    export default{
        components: {
            Menus,
            Item,
            Submenu
        }
    }
</script>
```

## Interface

暴露组件： Menus, Item, Submenu， 其中 Menus是主体，需要组合使用。请查看上述 [Usage](#Usage)

## Menus

```interface
props:
  mode:
    type: String
    default: 'vertical'
    description: 标记菜单是横向还是竖向，默认是竖向
slots:
  default:
    description: 使用`Submenu`, `Item`组件，组合菜单结构
```

## Item

```interface
slots:
  default:
    description: 记录组件的html片段
```

## Submenu

```interface
props:
  open:
    type: Boolean
    default: false
    description: 展开菜单栏
slots:
  default:
    description: 菜单栏下的子菜单html片段
```