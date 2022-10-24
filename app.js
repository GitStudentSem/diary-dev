const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const { networkInterfaces } = require('os');

const app = express();

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        });

        app.listen(PORT, () => {
            console.log(`====== сервер запущен ======: ${PORT}`);
        });
    } catch (error) {
        console.log(`====== ошибка сервера ======: ${error.message}`);
        process.exit(1);
    }
};

start();
