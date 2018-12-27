var Client = require('ssh2').Client;

var connection = new Client();

connection.on('ready', () => {
    console.log('connection ready');
    connection.forwardOut('0.0.0.0', 2222, '192.168.0.181', 22, (err) => {
        if (err) console.error(err);

        console.log('listening...');
    });
}).on('tcp connection', (info, accept, reject) => {
    console.log('incoming tcp connection');
    console.dir(info);

    accept().on('close', () => {
        console.log('closed');
    });
}).connect({
    host: 'wxh.tplinkdns.com',
    port: 22,
    username: 'pi'
});

