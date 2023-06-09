"use client";
import Image from "next/image";
import Card from "@/components/Cards";
import tragicGolfer from "../public/tragic-golfer.png";
import Header from "@/components/Header";
import { Container, Stack } from "@mui/material";
import CardRow from "@/components/CardRow";
import ActionButton from "@/components/Button";

export default function Home() {
  let s = `The Smasherson Tour is a golf tour for the rest of us. We are
                the non-traditional golfers. We are the golfers who don't take
                ourselves too seriously. We are the golfers who are just as
                likely to hit a 300 yard drive as we are to hit a 300 yard
                slice, and that's okay because here, we celebrate the slice.`;
  return (
    <main className="flex flex-col gap-16 pb-12 container mx-auto ">
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <span className="bg-blue-100 text-blue-500 text-xs font-medium px-4 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Powered by Toptracer
          </span>
          <h1 className="text-5xl font-extrabold dark:text-white text-center ">
            Home of Golf's <br /> Non-Traditional Champions
          </h1>
          <p className="text-center text-gray-400 text-md dark:text-white max-w-4xl mx-auto">
            {s}
          </p>
          <div className="inline-flex gap-4">
            <ActionButton label="Join the Tour" />
            <ActionButton label="View Events" variant="outline" />
          </div>
        </div>

        <div className="flex justify-center rounded-md overflow-x-auto gap-4">
          <Image
            src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
            alt="Tragic Golfer"
            width={1200}
            height={1200}
            className="rounded-md shadow-xl"
          />
          <Image
            src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r6B4_XHK49TnzaJPHb3trjmrg4rE3ZZB8V4UXujU1j91gd2jCzjGmXaxDexFCxCIHd_nIud7n-vV-AOOUtb0z10W9n=s1600"
            alt="Tragic Golfer"
            width={1200}
            height={1200}
            className="rounded-md shadow-xl flex-"
          />
          <Image
            src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
            alt="Tragic Golfer"
            width={1200}
            height={1200}
            className="rounded-md shadow-xl"
          />
        </div>
      </section>

      <section id="Upcoming Events">
        <CardRow />
      </section>

      <section
        id="Leaderboards"
        className="bg-gray-800 bg-opacity-40 px-4 pt-4 rounded-t-md flex items-end justify-center mb-8"
      >
        <div className="container space-y-4">
          <Header
            title="Smasherson Tournament Leaders"
            titleColor="light"
            titleSize="4xl"
            subtitle="Become a champion and etch your name into the Smasherson Leaderboard!"
            btnTitle="View All"
          />
          <div className="relative">
            <div className="relative overflow-x-auto shadow-md sm:rounded-t-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-50 uppercase bg-gray-700 dark:bg-gray-50 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Ranking
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Events Played
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Smash Cash
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900 border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-white"
                    >
                      1
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b bg-gray-800 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-white"
                    >
                      2
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                  </tr>
                  <tr className="bg-gray-900 border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-white"
                    >
                      t3
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                  </tr>
                  <tr className="border-b bg-gray-800 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-white"
                    >
                      t3
                    </th>
                    <td className="px-6 py-4">Golf King</td>
                    <td className="px-6 py-4">Multiple</td>
                    <td className="px-6 py-4">$799</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto bg-gray-400 bg-opacity-5 p-8">
        <div className="container">
          <div className="pb-4 text-center space-y-2">
            <span className=" bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Gallery
            </span>

            <h2 className="text-center">
              <span className="text-4xl font-bold">Shots from the Ranch</span>
            </h2>
            <p className="text-center">Check out some of latest photos!</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Image
              src={"https://source.unsplash.com/random/200x200/?golf"}
              alt="Tragic Golfer"
              width={300}
              height={300}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/200x200/?golf"}
              alt="Tragic Golfer"
              width={300}
              height={300}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/300x300/?golf"}
              alt="Tragic Golfer"
              width={300}
              height={300}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/300x300/?golf"}
              alt="Tragic Golfer"
              width={300}
              height={300}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={
                "https://drive.google.com/uc?export=download&id=1nHHm4iU_j7eLZ58jx5mNxdxejH3-yQhr"
              }
              alt="Tragic Golfer"
              width={600}
              height={600}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/300x300/?golf"}
              alt="Tragic Golfer"
              width={600}
              height={600}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/300x300/?golf"}
              alt="Tragic Golfer"
              width={400}
              height={400}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/300x300/?golf"}
              alt="Tragic Golfer"
              width={400}
              height={400}
              className="rounded-sm shadow-xl"
            />
            <Image
              src={"https://source.unsplash.com/random/300x300/?golf"}
              alt="Tragic Golfer"
              width={400}
              height={400}
              className="rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="solve-problem" className="">
        <div className="container flex gap-4 justify-center ">
          <div className="card card-side bg-base-100 shadow-xl max-w-lg">
            <figure className="">
              <img
                src="https://source.unsplash.com/random/300x500/?golf"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New Videos released!</h2>
              <p>
                Click below to check out all our latest videos. We promise it's
                worth it.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl max-w-lg">
            <figure className="">
              <img
                src="https://source.unsplash.com/random/300x500/?golf"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Watch & Learn</h2>
              <p>
                Get Expert Lessons and learn how to improve your stroke game!
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
