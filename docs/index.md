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

如果是使用自己搭建的服务器 https://github.com/oclip/oclip-server-lite ，可能需要这样配置：

```
domain=ws://192.168.0.2:2601/server
token=93ee8c86-b883-46f2-ad22-2c270376bd07
passwd=123456
```

## Tmux 配置

参考 [hanxi/dotfiles](https://github.com/hanxi/dotfiles)

```
setw -g mode-keys vi
bind-key -T copy-mode-vi v send-keys -X begin-selection
bind-key -T copy-mode-vi y send -X copy-pipe-and-cancel "~/.local/bin/oclip -i"
bind-key ] run-shell "~/.local/bin/oclip -o | tmux load-buffer -" \; paste-buffer ;
```

## Neovim 配置

参考 [hanxi/dotfiles](https://github.com/hanxi/dotfiles)

```viml
"neovim clipborad{
let g:clipboard = {
            \'copy': { '+': 'oclip -i', '*': 'oclip -i' },
            \'paste': { '+': 'oclip -o', '*': 'oclip -o' },
            \'name': 'oclip',
            \}
"}
```

## 在 Vim 上使用
安装`TTTPOB/vim-fakeclip`，并在`.vimrc`文件中加入
```viml
"Declare the use of oclip
let g:fakeclip_platform = 'oclip'
```
