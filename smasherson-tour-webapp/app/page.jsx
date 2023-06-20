"use client";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Card } from "flowbite-react";

import ActionButton from "@/components/ActionButton";
import VideoPlayer from "@/components/VideoPlayer";
import LeaderboardTabs from "@/components/Leaderboard-Tabs";
import {AiFillFacebook} from "react-icons/ai";



const VIDEO_URL = "https://www.youtube.com/watch?v=WIEL-VfLCns";
const VIDEO_URL2 = "https://www.youtube.com/watch?v=fAcBo1TAGYA";

export default function Home(props) {
  return (
    <>
      <main className="container mx-auto">
        <section id="Hero" className="space-y-6" >
              <div className="text-center space-y-6">
                <h1 className="text-6xl font-extrabold dark:text-white text-center ">
                  Home of Golf's {' '} Non-Traditional Champions
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
                {/* <div className="flex justify-center h-scroll gap-2">
                  <Image
                    src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
                    alt="Tragic Golfer"
                    width={500}
                    height={500}
                    className=" shadow-xl"
                  />
                  <Image
                    src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r6B4_XHK49TnzaJPHb3trjmrg4rE3ZZB8V4UXujU1j91gd2jCzjGmXaxDexFCxCIHd_nIud7n-vV-AOOUtb0z10W9n=s1600"
                    alt="Tragic Golfer"
                    width={500}
                    height={500}
                    className=" shadow-xl flex-"
                  />
                  <Image
                    src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81prigxGsMD5HA3xl2prXlAUzfP6pTTX6t1eMDJqT4foQPd5D_Oz_P2tiGKwxZGwyUINJLLzEncAk9-a1YHwK0q382fOCQ=s1600"
                    alt="Tragic Golfer"
                    width={500}
                    height={500}
                    className=" shadow-xl"
                  />
                  <Image
                    src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r6B4_XHK49TnzaJPHb3trjmrg4rE3ZZB8V4UXujU1j91gd2jCzjGmXaxDexFCxCIHd_nIud7n-vV-AOOUtb0z10W9n=s1600"
                    alt="Tragic Golfer"
                    width={500}
                    height={500}
                    className=" shadow-xl flex-"
                  />
              </div> */}
        </section>
         
        <Link href="https://toptracer.com" target="_blank" >
                <Image src="/toptracer.webp"  width={600} height={200} className="my-24 mx-auto opacity-50 contrast-50 grayscale duration-200 hover:opacity-100 hover:contrast-100 hover:grayscale-0" alt="Powered By Toptracer" />
        </Link>
         
        <Grid container spacing={4} className="flex justify-center">

          <Grid item>
              <Card>
                <h3 children="Follow Us!" className="font-medium" />
                <ul className="flex flex-col">
                  <li className=" flex flow-row">
                    <small>
                      <AiFillFacebook />
                      <a href="https://meta.com" children="Facebook"/>
                    </small>                   
                  </li> 
                  <li className="w-6">
                    <small>
                      <a href="https://meta.com" children="YouTube" />
                      </small>                   
                  </li> 
                  <li className="w-6">
                    <small>
                      <a href="https://instagram.com" children="Instagram"/>
                    </small>
                  </li>
                  <li className="w-6">
                    <small>
                      <a href="https://tiktok.com" children="TikTok" />
                      </small>
                  </li>
                  <li className="w-6">
                    <small>
                      <a href="https://twitter.com" children="Twitter"/>
                      </small>
                  </li>

               
                </ul>
              </Card>
          </Grid>

          <Grid item lg={6} className="background-gradient">
            <div className="container flex justify-center flex-col gap-4">
              <article id="welcome" >
                <div className="container space-y-6">
                  <VideoPlayer light url={VIDEO_URL}/>
                </div>
              </article>
              <article id="Leaderboards" className="">
                <LeaderboardTabs  />
              </article>
              <article id="welcome" >
                <div className="container space-y-6">
                  <VideoPlayer light url={VIDEO_URL2}/>
                </div>
              </article>
            </div>
          </Grid>
       
          <Grid item>
              <aside>
                <div >
                  <article>
                  <Card className="bg-slate-100">
                    <div className="mb-4 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
                 <h5 
                    className="font-medium leading-none text-gray-900 dark:text-white"
                    children="Latest Videos"
                  />

              <a
                className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 pb-4"
                href="#"
                children="View all"
              />

                    </div>
                    <div className="">
              <ul className="divide-y-2 space-y-2 divide-gray-200 dark:divide-gray-700" >
              
                <li className="flex justify-center">
                          <div className="text-sm relative">
                            <ReactPlayer light url="https://www.youtube.com/watch?v=fH9x4r2IYyM&t=170s" controls height={200} width={300}  />
                            <a 
                              href="https://www.youtube.com/watch?v=fH9x4r2IYyM&t=170s" 
                              className="font-medium text-gray-900 dark:text-white pt-2"
                              children="2V2 Knockout Challenge"
                              />
                          </div>
                </li>
                <li className="pt-4">
                          <div className="text-sm container">
                            <ReactPlayer light url="https://www.youtube.com/watch?v=gkg8tS-oWvk&t=1s" controls height={200} width={300} style={{marginBottom: '0.5rem'}}/>
                            <a 
                              href="https://www.youtube.com/watch?v=gkg8tS-oWvk&t=1s" 
                              className="font-medium text-gray-900 dark:text-white pt-2"
                              children="Long Drive Championship"
                              />
                          </div>
                </li>
                <li className="pt-4">
                          <div className="text-sm container">
                            <ReactPlayer light url="https://www.youtube.com/watch?v=n6UfsZ7Yx8I&t=139s" controls height={200} width={300} style={{marginBottom: '0.5rem'}}/>
                            <a 
                              href="https://www.youtube.com/watch?v=n6UfsZ7Yx8I&t=139s" 
                              className="font-medium text-gray-900 dark:text-white pt-2"
                              children="$1000 Sudden Death Golf Showdown"
                              />
                          </div>
                </li>
              </ul>
                    </div>
                  </Card>
                  </article>
                </div>
              </aside>
 
          </Grid>
        </Grid>
         
      </main>
    </>
  );
}
