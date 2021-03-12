# /bin/bash
set -e
cp /nr_conf/flows.json .

node node_modules/node-red/red.js -s /nr_conf/settings.js -userDir .
