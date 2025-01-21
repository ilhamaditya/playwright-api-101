const pino = require('pino');

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true, // Untuk membuat output berwarna
        },
    },
    level: 'info', // Atur level log (info, debug, warn, error)
});

module.exports = logger;
