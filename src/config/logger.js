import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import fs from "fs";


const logDirectory = "logs";
if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory);
}


const logFormat = winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});


const consoleFormat = winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      logFormat
);


const dailyRotateTransport = new DailyRotateFile({
      filename: `${logDirectory}/application-%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
});


const logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
            winston.format.timestamp(),
            logFormat
      ),
      transports: [
            new winston.transports.Console({ format: consoleFormat }),
            new winston.transports.File({ filename: `${logDirectory}/error.log`, level: "error" }),
            new winston.transports.File({ filename: `${logDirectory}/combined.log` }),
            dailyRotateTransport
      ],
});

export default logger;
