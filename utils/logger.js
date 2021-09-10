/*
 * @LastEditTime: 2021-09-10 11:12:01
 * @Description: 日志封装
 */
const path = require("path");
const log4j = require('log4js')
const levels = {
    'trace': log4j.levels.TRACE,
    'debug': log4j.levels.DEBUG,
    'info': log4j.levels.INFO,
    'warn': log4j.levels.WARN,
    'error': log4j.levels.ERROR,
    'fatal': log4j.levels.FATAL
}

// log4js配置
log4j.configure({
    appenders: {
        console: { type: 'console' },
        info: {
            type: "dateFile",
            filename: path.resolve(".", "logs", "info", "info"),
            pattern: "yyyy-MM-dd.log",
            encoding: "utf-8",
            alwaysIncludePattern: true,
        },
        error: {
            type: "dateFile",
            filename: path.resolve(".", "logs", "error", "error"),
            pattern: "yyyy-MM-dd.log",
            encoding: "utf-8",
            alwaysIncludePattern: true,
        }
    },
    categories: {
        default: {
            appenders: ['console'],
            level: 'debug'
        },
        info: {
            appenders: ['info', 'console'],
            level: 'info'
        },
        error: {
            appenders: ['error', 'console'],
            level: 'error'
        }
    }
})

/**
 * @description: debug日志
 * @param {*} content 日志内容
 * @return {*}
 */
exports.debug = (content) => {
    let logger = log4j.getLogger('debug')
    logger.level = levels.debug
    logger.debug(content)
}


/**
 * @description: info日志
 * @param {*} content 日志内容
 * @return {*}
 */
exports.info = (content) => {
    let logger = log4j.getLogger('info')
    logger.level = levels.info
    logger.info(content)
}
/**
 * @description: error日志
 * @param {*} content 日志内容
 * @return {*}
 */
exports.error = (content) => {
    let logger = log4j.getLogger('error')
    logger.level = levels.error
    logger.error(content)
}
