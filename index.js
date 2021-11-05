/*
 * @LastEditTime: 2021-11-05 15:20:24
 * @Description: entry
 */

const localtunnel = require('localtunnel');

const logger = require("./utils/logger");

(async () => {
    const portList = [
        // { port: 5901, subdomain: "novnc", local_host: "localhost" },
        // { port: 18022, subdomain: "d-linux" },
        { subdomain: "qmyxpay2", port: 8078, local_host: "192.168.20.132" },
    ];
    portList.forEach(item => {
        localtunnel({ port: item.port, subdomain: item.subdomain, local_host: item.local_host }).then(tunnel => {
            // the assigned public url for your tunnel
            // i.e. https://abcdefgjhij.localtunnel.me
            logger.info(`expose ${item.local_host}:${item.port} successful! the url is "${tunnel.url}"`)

            tunnel.on('close', () => {
                logger.info("tunnels are closed");
            });
            tunnel.on('request', request => {
                logger.info(request);
            });
            tunnel.on('error', error => {
                logger.error(error);
            });
            // tunnel.close();
        })
    });
})();

// Options to bypass this page:
// Set and send a Bypass-Tunnel-Reminder request header (its value can be anything).
// or, Set and send a custom / non-standard browser User-Agent request header.