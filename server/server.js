import express from 'express';
import cors from 'cors'; //When the backend and frontend run on different ports, It allows to send data between two ports easily
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

// const PORT = process.env.PORT || 8000;

DBConnection();

// app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () => console.log(`Server is running on PORT ${port}`));