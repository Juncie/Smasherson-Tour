import Carousel from '.'

export default {
    title: 'Components/Carousel',
    component: Carousel,
}

const Template = (args) => <Carousel {...args} />
export const Default = Template.bind({})
Default.args = {
    slides: [
        {
            id: 1,
            slideTitle: 'Smash Golf Tour',
            slideSubtitle: 'Subtitle 1',
            imageURL: 'https://dummyimage.com/1250x750/000/000',
        },
        {
            id: 2,
            slideTitle: 'Slide 2',
            slideSubtitle: 'Subtitle 2',
            imageURL: 'https://dummyimage.com/1250x750/000/000',
        },
        {
            id: 3,
            slideTitle: 'Slide 3',
            slideSubtitle: 'Subtitle 3',
            imageURL: 'https://dummyimage.com/1250x750/000/000/',
        },
        {
            id: 4,
            slideTitle: 'Slide 4',
            slideSubtitle: 'Subtitle 4',
            imageURL: 'https://dummyimage.com/1250x750/000/000/',
        },
        {
            id: 5,
            slideTitle: 'Slide 5',
            slideSubtitle: 'Subtitle 5',
            imageURL: 'https://dummyimage.com/1250x750/000/000/',
        },
        // Add more slides as needed
    ],
}
