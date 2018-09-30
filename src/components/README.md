
# 组件使用文档

* keep learning!
* welcome to add your component!

## authorization调用方法
```
    this.$invoke('authorization', 'openLayer');
```

* 在拦截器里配置登录失效状态码后，即可应对token失效情况
* 优化弹出动画
* 自定义样式


## toast调用方法
```
    // 基础用法,当前options只有duration（显示的时长）
    this.$invoke('toast', func, message, options);
    // 进阶1
    this.$invoke('toast', 'success', 'simple-toast success', { duration: 3000 }).then(data => {
        console.log(data)
    })
    // in async function
    let data = await this.$invoke('toast', 'error', 'simple-toast error', { duration: 5000 })
    console.log(data)
    // 进阶2
    mixins = [toast.mixin]
    // this.$infoTip(message)
    this.$infoTip('simple-toast info')
    //this.$errorTip(message, options)
    this.$errorTip('simple-toast error', { duration: 3000 }).then(data => {
        console.log(data)
      })
    // in async function
    let  data = await this.$warningTip('simple-toast warning', { duration: 3000 })
    console.log(data)
```
- mixin了四个函数 $successTip、$infoTip、$warningTip、$errorTip
- options参数当前只有 duration（显示的时长）

* PS: 如果components的名字不为toast，使用上述Mixin的四个函数时，需要在data里面添加toastTagName:[toast的组件名]
