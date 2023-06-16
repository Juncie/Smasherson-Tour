import EventSlider from ".";

export default {
    title: "Components/EventSlider",
    component: EventSlider,
};

export const Main = (args) => <EventSlider {...args} />;
Main.args = {
    data: [
        {
          title: "Smashers Championship",
          image: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
        },
    
        {
          title: "Card Title",
          image: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
        },
    
        {
          title: "Card Title",
          image: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
        },
    
        {
          title: "Card Title",
          image: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
        },
      ]
};