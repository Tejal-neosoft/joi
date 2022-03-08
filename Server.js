import express from 'express';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import bookRoute from './bookRoute.js';

dotenv.config();
const app = express();
app.use(express.json());

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB)
		.then((con) => console.log(`Database Connected: ${process.env.DB}`))
		.catch((err) => console.log(err));
};
connectDatabase();
app.use('/library', bookRoute);

app.listen(process.env.PORT, () => {
	console.log(`App is listeningon port ${process.env.PORT}`);
});
