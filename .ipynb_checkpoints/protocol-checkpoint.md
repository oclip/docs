# 协议

协议采用 [msgpack](https://msgpack.org) 格式(类似json-rpc)， 通过 websocket 进行传输。

```lua
local proto = {
  method = method,
  params = params or {}
}
local data = msgpack.pack(proto)
websocket.send(data)
```
 
 
## 1. 握手协议
 
```lua
local proto = {
  method = 'auth',
  params = {token}
}
```

`token` 从配置文件 `~/.oclip` 中读取, 从这里获得 <https://oclip.hanxi.info/admin>

## 2. 复制数据到服务器

```lua
local proto = {
  method = 'copy',
  params = {enc_text}
}
```

`enc_text` 是本地经过 `aes-128-cbc` 加密后的文本，密码从 `~/.oclip` 中读取。

## 3. 接收服务器推送的数据

```lua
local proto = {
  method = 'paste',
  params = {enc_text}
}
```

`enc_text` 是加密过的数据，需要解密后再写入本地粘贴板。

