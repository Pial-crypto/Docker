const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({ ok: true, message: 'Hello CI/CD 👋' }));

module.exports = app;
