<!-- 全局组件  组件名要小写 因为html模板不区分大小写-->
Vue.component("getmoneycomponent",{
    // 全局组件()  组件：html css js组成 的前端功能模块，比如登录，注册
    template:'<button v-on:click="money++">点击赚钱+,你赚了{{money}}$</button>',
    // 返回值是函数，所以每个组件实例的数据可以彼此隔离，互不影响。
    data() {
        return {
            money:0,
        }
    }
});


Vue.component("getmoneycomponent",{
    // 全局组件()  组件：html css js组成 的前端功能模块，比如登录，注册
    template:'<button v-on:click="money++">点击赚钱+,你赚了{{money}}$</button>',
    // 返回值是函数，所以每个组件实例的数据可以彼此隔离，互不影响。
    data() {
        return {
            money:0,
        }
    }
});