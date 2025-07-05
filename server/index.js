const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors'); // чтобы клиент мог обращаться к серверу с другого порта

const app = new Koa();
const router = new Router();

app.use(cors());

router.get('/data', (ctx) => {
  ctx.body = {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Иван Иванов',
    info: 'Разработчик интерфейсов'
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});