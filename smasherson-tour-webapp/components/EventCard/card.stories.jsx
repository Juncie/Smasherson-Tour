import EventCard from ".";

export default {
  title: "Components/Cards",
  component: EventCard,
};

export const BoxedCard = (args) => <EventCard {...args} />;
BoxedCard.args = {
  image:
    "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600",
};
