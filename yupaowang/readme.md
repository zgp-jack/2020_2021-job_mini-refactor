## 鱼泡网小程序开发文档说明

### 在src目录下面开发

##### REDUX 相关

actions/ 操作redux的行为方法

constants/ redux类型声明文件

reducers/ 自定义redux状态机

store/ redux状态机挂载器


##### 配置文件

config/ 配置文件夹 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---minis/ 小程序独立配置文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---pages/ 页面配置文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---index 全局配置文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---inter 接口声明文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---store 缓存名配置文件

##### 页面文件

pages/ 页面文件

components/ 页面组件管理

subpackage/ 小程序分包管理

hooks/ 自定义hooks  请使用useXxxx声明

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---code 验证码

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---map 地图

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---publish 发布

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---realname 实名

##### 资源文件

images/ 静态图片文件

models/ 静态数据文件

styles/ 静态样式文件

utils/  逻辑js文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---api 接口地址文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---build 打包类型文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---helper 常用函数助手文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---msg 信息提问文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---request 接口请求文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---source 第三方库文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---subscribeToNews 订阅信息文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---upload 图片上传文件

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---v 共用验证文件

#### 开发注意事项

1.所有的ios小程序都不能充值

2.所有的积分不足跳转都是去到获取积分，而非充值

3.百度类小程序发布需要勾选基础版本未3.180.14及以上

#### 如何新建一个小程序

1.yupaowang/src/config/minis中以标识符新建一个配置文件，然后根据需要调整

2.yupaowang/project.config.js中声明当前小程序的appid,projectname等关键字段信息

3.yupaowang/package.json中，scripts里面配置自己的相关编译命令

#### 测试注意事项

1.检查 数据 是否是线上

2.检查 会员中心 是否含有 清理缓存

3.检查 小程序配置工种 是否正确

4.检查 充值、发布、邀请流程

5.检查 上传图片正确