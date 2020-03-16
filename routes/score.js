const baseUrl = process.cwd();
const router = require('koa-router')();
const helper = require(`${baseUrl}/routes/helper/helper.js`).helper;
const configs = require(`${baseUrl}/routes/helper/score.js}`).scoreRouter

const r = helper(configs, router);

module.exports = r;