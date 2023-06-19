import event1 from '~/assets/images/event-cards/event1.jpg'
import event2 from '~/assets/images/event-cards/event2.jpg'
import event3 from '~/assets/images/event-cards/event3.jpg'
import event4 from '~/assets/images/event-cards/event4.jpg'
import { EventSliderProps } from '.';

export const eventsSliderData: EventSliderProps = {
    sectionTitle: 'Featured Events',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli.',
    data: [
        {
            title: 'Clostest to the Pin',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image:{
                src: event1,
                alt: 'Clostest to the Pin',
            },
            imgAlt: 'Clostest to the Pin',
            slug: 'clostest-to-the-pin',
            date: '2021-10-10',
            href: 'events/clostest-to-the-pin',
        },
          {
            title: 'Scramble',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: {
                src: event2,
                alt: 'Scramble',
            },
            imgAlt: 'Scramble',
            slug: 'scramble',
            date: '2021-10-10',
            href: 'events/scramble',
        },
        {
            title: 'Longest Drive',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: {
                src: event3,
                alt: 'Longest Drive',
            },
            imgAlt: 'Longest Drive',
            slug: 'longest-drive',
            date: '2021-10-10',
            href: 'events/longest-drive',
        },
      
        {
            title: 'Stroke Play',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: {
                src: event4,
                alt: 'Stroke Play',
            },
            imgAlt: 'Stroke Play',
            slug: 'stroke-play',
            date: '2021-10-10',
            href: 'events/stroke-play',
        },
    ],
};
      