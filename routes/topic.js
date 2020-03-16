const baseUrl = process.cwd();
const router = require('koa-router')();
const topicService = require(`${ baseUrl }/service/topic.js`).topicService;
const helper = require(`${baseUrl}/routes/helper/helper.js`).helper;
const configs = require(`${baseUrl}/routes/helper/topic.js`).topicRouters;

const r = helper(configs, router);

module.exports = r;