"use client";
import Image from "next/image";
import Card from "@/components/Cards";
import tragicGolfer from "../public/tragic-golfer.png";
import Header from "@/components/Header";
import { Container, Stack } from "@mui/material";
import CardRow from "@/components/CardRow";
import { Button } from "flowbite-react";

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
          <div className="inline-flex gap-2">
            <Button
              children="Join the Tour"
              className="bg-blue-500 hover:bg-blue-300 transition duration-200 ease-in-out"
            />
            <Button children="View Events" color="dark" />
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
        <div className="container">
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold">
              Welcome to the Smasherson Golf Tour
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Consectetur in feugiat habitasse quis. Suspendisse convallis semper facilisis sed dictum morbi et. Iaculis et. 
            </p>
          </div>
        </div>
      </section>

      <section id="Featured Events" className="no-scrollbar">
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
    </main>
  );
}
