const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());




app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true,
}));

app.listen(PORT, ()=>
    console.log('Server listening on port: ' + PORT)
);