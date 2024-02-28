import express from 'express';
import { checkDuplicates } from './utils';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(checkDuplicates([1,2,3,4]));
  // return checkDuplicates([1,2,3,4]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});