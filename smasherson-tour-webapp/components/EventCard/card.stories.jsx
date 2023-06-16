import EventCard from ".";

export default {
  title: "Components/Cards",
  component: EventCard,
};

export const EventsCard = (args) => <EventCard {...args} />;
EventsCard.args = {
  image:
    "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600",
};
