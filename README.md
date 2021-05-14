# Portable-Air-Conditioner

[![](https://github.com/eddievandeer/Portable-Air-Conditioner/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/eddievandeer/Portable-Air-Conditioner/actions)

采用“心静自然凉”算法开发的新型便携式空调，让你在炎炎夏日中时刻保持清凉！

部署在云端，低功耗低排放，贯彻节能减排思想

## 产品特色

### 优点

- 随时随地打开空调
- 跨平台，支持手机、平板、电脑
- 操作简单，安装便捷

### 缺点

- 由于“心静自然凉”算法太过超前，现在的人类还不能理解，以至于制冷效果因人而异

## 安装

你可以随意使用 `iframe` 来为你的网站安装本产品：

~~~html
<iframe width="100%" height="740" src="https://eddievandeer.github.io/Portable-Air-Conditioner/"></iframe>
~~~

> 今后会将该项目转移至自己的服务器上，注意更改地址

## 技术栈

[Vue3](https://v3.vuejs.org/) + [Vuex4](https://next.vuex.vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)

## TODO List

- [x] 能效标识
- [x] 空调及遥控器音效
- [x] 限制空调温度范围
- [x] 扫风动画（上下扫风、左右扫风）
- [ ] 控制扫风的固定
- [ ] 保存空调的状态（将使用localstorage实现）

- [ ] 拖拽遥控器

- [ ] 提示温度过高或过低
- [ ] 亮暗模式切换（或者出个皮肤功能也不错？）

## 引用

在看到了 [云游君](https://github.com/YunYouJun) 的 [air-conditioner](https://github.com/YunYouJun/air-conditioner) 项目后受到启发，想着自己写一个Vue版本的，顺便拿来练练TypeScript和Tailwind CSS，于是诞生了本项目

项目中使用的素材来源如下：

- 数字字体: [Digital 7](https://www.dafont.com/digital-7.font)，Free for personal use
- 空调工作声: [Air Extractor Fan | freesound](https://freesound.org/people/InspectorJ/sounds/403664/)