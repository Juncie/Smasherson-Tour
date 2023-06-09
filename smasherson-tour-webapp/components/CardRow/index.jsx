import Image from "next/image";
import Header from "../Header";
import Card from "../Cards";

export default function CardRow() {
  return (
    <div className="bg-gray-800 bg-opacity-40 outline outline-1 outline-gray-700 p-4 rounded-sm">
      <div className="container mx-auto flex flex-col space-y-4">
        <Header
          title="Upcoming Events"
          subtitle="Stay up to date with the latest tour events!"
          btnTitle="View All"
          titleColor="light"
          titleSize="4xl"
        />
        <div className="flex flex-row overflow-x-scroll gap-4 p-4">
          <Card
            image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rU5A-efkK8ljIkXsQe8GmQ_FSQGBHYDaWNVfXyhDTOrNHu80IxCJ4OSeLBndtOPMXQAv6Aod_jTa1Ld3r9W8DAshEUUA=s1600"
            title="Long Drive Championship"
            description="May 1, 2021"
          />
          <Card
            image="https://drive.google.com/uc?export=download&id=1DrOVC0auFOyUrin5APPG6qy3XuDM5e5y"
            title="Elite Tour"
            description="Aug 13, 2021"
          />
          <Card
            image="https://source.unsplash.com/random/640x425/?golf"
            title="Event 1"
          />
          <Card
            image="https://source.unsplash.com/random/640x425/?golf"
            title="Event 1"
          />
          <Card
            image="https://source.unsplash.com/random/640x425/?golf"
            title="Event 1"
          />
        </div>
      </div>
    </div>
  );
}
