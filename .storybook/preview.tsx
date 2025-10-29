import type {Preview} from "@storybook/react-vite";
import {BADGE, defaultBadgesConfig} from "../src";

const preview: Preview = {
    parameters: {
        badgesConfig: {
            [BADGE.BETA]: {
                ...defaultBadgesConfig[BADGE.BETA],
                tooltip: {
                    title: 'This is Beta',
                    desc: 'Be ready to receive updates frequently and leave a feedback',
                    links: [
                        {title: 'Read more', href: 'http://path/to/your/docs'},
                        {
                            title: 'Leave feedback', onClick: () => {
                                alert('thanks for the feedback')
                            }
                        }]
                }
            },
            [BADGE.DEPRECATED]: {
                ...defaultBadgesConfig[BADGE.DEPRECATED],
                tooltip: 'This component is deprecated, please avoid using it.'
            }
        }
    }
};

export default preview;
