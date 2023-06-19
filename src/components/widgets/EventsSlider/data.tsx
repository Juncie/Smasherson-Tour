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
            image: event1,
            imgAlt: 'Clostest to the Pin',
            slug: 'clostest-to-the-pin',
            date: '2021-10-10',
            href: 'events/clostest-to-the-pin',
        },
          {
            title: 'Scramble',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: event2,
            imgAlt: 'Scramble',
            slug: 'scramble',
            date: '2021-10-10',
            href: 'events/scramble',
        },
        {
            title: 'Longest Drive',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: event3,
            imgAlt: 'Longest Drive',
            slug: 'longest-drive',
            date: '2021-10-10',
            href: 'events/longest-drive',
        },
      
        {
            title: 'Stroke Play',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: event4,
            imgAlt: 'Stroke Play',
            slug: 'stroke-play',
            date: '2021-10-10',
            href: 'events/stroke-play',
        },
    ],
};
      