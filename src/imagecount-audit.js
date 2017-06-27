/**
 * @file imagecount audit
 * @author ielgnaw <wuji0223@gmail.com>
 */

import lighthouse from 'lighthouse';
const Audit = lighthouse.Audit;

export default class ImageCountAudit extends Audit {
    static get meta() {
        return {
            category: 'MyCustomCategory',
            name: 'imagecount-audit',
            description: 'Find how many img elements on the page.',
            helpText: 'This is helpText',
            requiredArtifacts: ['ImageCount']
        };
    }

    static audit(artifacts) {
        const imageCount = artifacts.ImageCount;

        return {
            rawValue: true,
            score: imageCount < 10 ? 99 : 50
        };
    }
}
