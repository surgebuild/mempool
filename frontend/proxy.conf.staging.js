const fs = require('fs');

const PROXY_CONFIG = require('./proxy.conf');

PROXY_CONFIG.forEach(entry => {
  entry.target = entry.target.replace('mempool.signet.surge.dev', 'mempool-staging.fra.mempool.space');
  entry.target = entry.target.replace('liquid.network', 'liquid-staging.fra.mempool.space');
});

module.exports = PROXY_CONFIG;
