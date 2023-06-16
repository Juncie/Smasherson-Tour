import Image from "next/image";
import Header from "@/components/Header";
import EventSlider from "@/components/EventSlider";
import ActionButton from "@/components/ActionButton";
import VideoPlayer from "@/components/VideoPlayer";
import LeaderboardTabs from "@/components/Leaderboard-Tabs";


export default function Home(props) {
  let s = `The Smasherson Tour is a golf tour for the rest of us. We are
                the non-traditional golfers. We are the golfers who don't take
                ourselves too seriously. We are the golfers who are just as
                likely to hit a 300 yard drive as we are to hit a 300 yard
                slice, and that's okay because here, we celebrate the slice.`;
let eventData = [
  {
    title: "Smashers Championship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
  },

  {
    title: "2V2s at the Ranch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
  },

  {
    title: "Long Drive Contest",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
  },

  {
    title: "Clostest to the Pin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus",
  },
]

const VIDEO_URL = "https://www.youtube.com/watch?v=pXUaXXIr2Ms";


  return (
    <main className="flex flex-col gap-16 pb-12 container mx-auto background-gradient lg:max-w-screen-2xl">
      <section className="flex gap-4 flex-col">
        <div className="text-center space-y-4">
          <span className="bg-blue-100 text-blue-500 text-xs font-medium px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Powered by Toptracer
          </span>
          <h1 className="text-6xl font-extrabold dark:text-white text-center ">
            Home of Golf's <br /> Non-Traditional Champions
          </h1>
          <p className="text-center text-gray-400 text-md dark:text-white max-w-4xl mx-auto">
            {s}
          </p>
          <div className="inline-flex gap-2">
            <ActionButton
              children="Join the Tour"
              className="bg-blue-500 hover:bg-blue-300 transition duration-200 ease-in-out"
            />
            <ActionButton children="View Events" variant="outline" />
          </div>
        </div>

        <div className=" rounded-md overflow-x-hidden  no-scrollbar">
          <div className="flex justify-center h-scroll gap-4">
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
              alt="Tragic Golfer"
              width={600}
              height={600}
              className="rounded-md shadow-xl"
            />
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r6B4_XHK49TnzaJPHb3trjmrg4rE3ZZB8V4UXujU1j91gd2jCzjGmXaxDexFCxCIHd_nIud7n-vV-AOOUtb0z10W9n=s1600"
              alt="Tragic Golfer"
              width={600}
              height={600}
              className="rounded-md shadow-xl flex-"
            />
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
              alt="Tragic Golfer"
              width={600}
              height={600}
              className="rounded-md shadow-xl"
            />
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r6B4_XHK49TnzaJPHb3trjmrg4rE3ZZB8V4UXujU1j91gd2jCzjGmXaxDexFCxCIHd_nIud7n-vV-AOOUtb0z10W9n=s1600"
              alt="Tragic Golfer"
              width={600}
              height={600}
              className="rounded-md shadow-xl flex-"
            />
          </div>
        </div>
      </section>
      <section id="welcome">
        <div className="container space-y-8">
          <div className="flex justify-between">
            <h2 className="text-5xl font-bold basis-2/4">
              Welcome to the Smasherson Golf Tour
            </h2>
            <p className="basis-1/4">
            Lorem ipsum dolor sit amet consectetur. Consectetur in feugiat habitasse quis. Suspendisse convallis semper facilisis sed dictum morbi et. Iaculis et. 
            </p>
          </div>
          <VideoPlayer url={VIDEO_URL}/>
        </div>
      </section>

      <section id="Featured Events" className="no-scrollbar">
        <EventSlider data={eventData} />
      </section>

      <section id="Leaderboards" className="">        
        <LeaderboardTabs  />
      </section>
    </main>
  );
}
