/**
 * @file imagecount gatherer
 * @author ielgnaw <wuji0223@gmail.com>
 */

import lighthouse from 'lighthouse';
const Gatherer = lighthouse.Gatherer;

export default class ImageCount extends Gatherer {

    afterPass(options, loadData) {
        return options.driver.querySelectorAll('img').then(nodeList => {
            return nodeList.length;
        });
    }
}
