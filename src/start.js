/**
 * @file 入口
 * @author ielgnaw <wuji0223@gmail.com>
 */

import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';

import config from './config';

function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
    return launch().then(chrome => {
        flags.port = chrome.port;
        return lighthouse(url, flags, config).then(
            results => chrome.kill().then(() => results)
        );
    });
}

const flags = {};
launchChromeAndRunLighthouse('http://ielgnaw.com', flags, config).then(results => {
    console.log(results.audits['imagecount-audit']);
});
