import Home from '.'

export default {
    title: 'Components/Pages/Home',
    component: Home,
}

const Template = (args) => <Home {...args} />
export const Default = Template.bind({})

Default.args = {
    slides: [
        {
            id: 1,
            slideTitle: 'Smash Golf Tour',
            slideSubtitle: 'Subtitle 1',
            imageURL: 'https://dummyimage.com/1280x720/333/333',
        },
        {
            id: 2,
            slideTitle: 'Slide 2',
            slideSubtitle: 'Subtitle 2',
            imageURL: 'https://dummyimage.com/1280x720/333/333',
        },
        {
            id: 3,
            slideTitle: 'Slide 3',
            slideSubtitle: 'Subtitle 3',
            imageURL: 'https://dummyimage.com/1280x720/333/333/',
        },
    ],
}
