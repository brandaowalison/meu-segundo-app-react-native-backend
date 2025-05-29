require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/db/connect');
// const ocorrenciaRouter = require('./src/routes/ocorrencia.route');

const PORT = process.env.PORT || 3000;
const app = express(cors());

app.use(cors());
app.use(express.json());

// app.use('/api/ocorrencia', ocorrenciaRouter);

const startServer = async() => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server in running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(`Error starting the server on http://localhost:${PORT}`, error);
        process.exit(1);
    }
};

startServer;