const baseUrl = process.cwd();
const router = require('koa-router')();
const topicService = require(baseUrl + '/service/topic.js').topicService;

router.prefix('/topic')

router.get('/lists', topicService.lists);
router.post('/create', topicService.create);
router.post('/update', topicService.update);
router.post('/delete', topicService.delete);

module.exports = router