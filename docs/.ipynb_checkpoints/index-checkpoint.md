# Oclip 使用文档

文档主页: <https://oclip.github.io/docs/>

## 安装

### Linux

执行下面的安装命令, `oclip` 将会安装在 `~/.local/bin/oclip`

```
curl -s https://oclip.hanxi.info/install | bash -- /dev/stdin token passwd
```

可以直接在这个页面获取安装命令 <https://oclip.hanxi.info/admin>

### Windows

在[这里下载](https://github.com/oclip/oclip-client/releases) `oclip.exe`, 拷贝到某个目录 ( 比如: `D:\oclip\oclip.exe` ) 运行即可.

- 系统图标菜单栏设置 `Auto Startup` 设置为开机启动.
- 点击 `Open Config` 打开配置文件.

## 配置

配置文件路径为 `~/.oclip` (windows 下为 `C:\用户\用户名\.oclip`) , 如下示例:

```
token=eyJhbGciOis
passwd=4dxxxx
domain=oclip.hanxi.info
```

- `token` 从 <http://oclip.hanxi.info> 申请得到
- `passwd` 自己设置的数据加密密码
- `domain` oclip 服务器地址, 自己搭建服务器时才需要修改
