import * as Koa from 'koa';
import { load } from '../../src/index';

const app = new Koa();
app.use(load('/api', `${__dirname}/router`, { verbose: true }).routes());
export default app.listen(9100);
console.log('Server started: http://localhost:9100');
