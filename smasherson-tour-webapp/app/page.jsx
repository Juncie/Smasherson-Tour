"use client";
import Image from "next/image";
import Header from "@/components/Header";
import ActionButton from "@/components/ActionButton";
import VideoPlayer from "@/components/VideoPlayer";
import LeaderboardTabs from "@/components/Leaderboard-Tabs";
import { Card } from "flowbite-react";


export default function Home(props) {

const VIDEO_URL = "https://www.youtube.com/watch?v=pXUaXXIr2Ms";


  return (
    <>
      <main className="flex flex-col justify-center">
        <section className="background-gradient container mx-auto">
          <article className="flex gap-4 flex-col">
            <div className="text-center space-y-4">
              <span className="bg-blue-100 text-blue-500 text-xs font-medium px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Powered by Toptracer
              </span>
              <h1 className="text-6xl font-extrabold dark:text-white text-center ">
                Home of Golf's <br /> Non-Traditional Champions
              </h1>
              <p className="text-center text-gray-400 text-md dark:text-white max-w-4xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quia eligendi facere, itaque vitae fugit neque repellendus?
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
          </article>
          <article id="welcome">
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
          </article>
          <article id="Leaderboards" className="">
            <LeaderboardTabs  />
          </article>
        </section>
        <section>
          <div className="container">
            <article>
            <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="#"
        >
          <p>
            View all
          </p>
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li>
            <div className="relative pb-8">
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white dark:bg-gray-800"
                    src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
                    alt=""
                  />    
                </div>
                <div className="min-w-0 flex-1">
                  <div>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-gray-900 dark:text-white"
                      >
                        Leslie Alexander
                      </a>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                      <a href="#" className="hover:underline">
                        <p>
                          View Profile
                        </p>
                      </a>
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus praesentium tenetur pariatur.
                    </p>
                  </div>
                </div>
              </div>
              </div>
          </li>
        </ul>
      </div>
    </Card>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
