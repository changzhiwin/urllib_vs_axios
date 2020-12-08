'use strict';

const Koa = require('koa')
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody());
app.use(ctx => {
  let res =  `Request Body: ${JSON.stringify(ctx.request.body)}`;
  console.log(res)
  ctx.body = {code: 0, msg: res};
});

app.listen(3000);