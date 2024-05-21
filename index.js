import * as net from 'net';
import axios from 'axios';

const HOST = "127.0.0.1";
const PORT = 7200;

const server = net.createServer((socket) => {
    socket.on('connectionAttempt', () => {
        console.log('Connection attempted');
    });

    socket.on('connect', () => {
        console.log('Connection made');
    });

    socket.on('data', async (data) => {
        const cdrData = Array.from(data).map(code => String.fromCharCode(code)).join('');
        await axios.get('https://api-dev01.quantumloopai.co.uk/v1/webhook/3cx-call', { cdrData });
        socket.end();
    });

    socket.on('timeout', () => {
        console.log('timeout');
    })

    socket.on('close', (data) => {
        console.log(data);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server Rolling on ${HOST}:${PORT}`);
});