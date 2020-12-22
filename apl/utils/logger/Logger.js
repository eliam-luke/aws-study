'use strict';

const winston = require('winston');

const customLevels = {
    levels: {
      trace: 5,
      debug: 4,
      info: 3,
      warn: 2,
      error: 1,
      fatal: 0,
    },
    colors: {
      trace: 'white',
      debug: 'green',
      info: 'green',
      warn: 'yellow',
      error: 'red',
      fatal: 'red',
    },
   };
    
   const formatter = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    winston.format.splat(),
    winston.format.printf((info) => {
      const { timestamp, level, message, ...meta } = info;
    
      return `${timestamp} [${level}] ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
      }`;
    }),
   );
    
   class Logger {
   
    constructor(env) {
      this.isDevEnvironment = env === 'dev' ? true : false;
      const prodTransport = new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
      });
      const transport = new winston.transports.Console({
        format: formatter,
      });
      this.logger = winston.createLogger({
        level: this.isDevEnvironment ? 'trace' : 'error',
        levels: customLevels.levels,
        transports: [this.isDevEnvironment ? transport : prodTransport],
      });
      winston.addColors(customLevels.colors);
    }
    
    trace(msg, meta = null) {
      this.logger.log('trace', msg, meta);
    }
    
    debug(msg, meta = null) {
      this.logger.debug(msg, meta);
    }
    
    info(msg, meta = null) {
      this.logger.info(msg, meta);
    }
    
    warn(msg, meta = null) {
      this.logger.warn(msg, meta);
    }
    
    error(msg, meta = null) {
      this.logger.error(msg, meta);
    }
    
    fatal(msg, meta = null) {
      this.logger.log('fatal', msg, meta);
    }
   }
    
   module.exports = new Logger(process.env.DEV_NAME);
