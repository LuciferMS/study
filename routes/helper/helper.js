const helper = (configs, routers) => {
    if(configs.prefix) routers.prefix(configs.prefix);
    configs.urls.forEach((config) => {
        if(config.type === 'get') routers.get(config.url, config.handler);
        else if(config.type === 'post') routers.post(config.url, config.handler);
    })
    return routers;
}

module.exports.helper = helper;