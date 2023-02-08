import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const { name } = request.query;

  return response.json({ id, name });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server started on ${process.env.APP_API_URL}`);
});
