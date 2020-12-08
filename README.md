# 安装
npm install

# 运行
> node v12.5.0
1，运行服务端：node server.js
2，运行客户端：node client.js

# 描述
修改client.js最后一行，改变使用的库
```
sendPost(0) // 使用 urllib
//sendPost(1) //使用 axios
```

# 本人运行的结果
- sendPost(0) // 使用 urllib
```
res ====
{
  code: 0,
  msg: 'Request Body: {"token":"20aa89bc9c1369a56","catid":"24","req_query":"","req_headers":["",""],"id":"11"}'
}
```

- sendPost(1) //使用 axios
```
res ====
{
  code: 0,
  msg: 'Request Body: {"token":"20aa89bc9c1369a56","catid":"24","req_query":[{"name":"source","required":"1","example":"wx","desc":"来源改了ba"}],"req_headers":[{"name":"Content-Type","value":"application/json"},{"name":"X-say","value":"are you ok","example":"hi","desc":"问候"}],"id":"11"}'
}
```