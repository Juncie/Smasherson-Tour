"use client";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Avatar, Card } from "flowbite-react";

import VideoPlayer from "@/components/VideoPlayer";
import LeaderboardTabs from "@/components/Leaderboard-Tabs";

import {AiFillFacebook} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillDingtalkSquare} from "react-icons/ai";



const VIDEO_URL = "https://www.youtube.com/watch?v=WIEL-VfLCns";
const VIDEO_URL2 = "https://www.youtube.com/watch?v=fAcBo1TAGYA";

export default function Home(props) {
  return (
    <>
      <main className="mx-auto space-y-6 max-w-screen-2xl">
        <section id="Hero" className="" >
                   
        <Link href="https://toptracer.com" target="_blank" >
                <Image src="/toptracer.webp"  width={300} height={200} className="my-2 mx-auto opacity-50 contrast-50  duration-200 hover:opacity-100 hover:contrast-100 hover:grayscale-0" alt="Powered By Toptracer" />
        </Link>
              <div className="text-center space-y-6">
                <h1 className="text-5xl font-extrabold dark:text-white text-center">
                  HOME OF GOLFS <br/>NON-TRADITIONAL CHAMPIONS
                </h1>
              </div>
        </section>

        <Grid container spacing={2} className="flex justify-center">

          <Grid item lg={2} className="w-full flex mx-auto">
              <Card className="dark:bg-inherit">
                <h3 className="font-medium">
                Follow Us!
                </h3>
                <ul className="flex flex-col">
                  <li className="flex flow-row items-center">
                      <AiFillFacebook size={32} color="#3b5998" />
                      <small>Facebook</small>
                  </li> 
                  <li className="flex flex-row items-center">
                      <a href="https://meta.com" >
                      <AiFillYoutube size={32} color="#FF0000" />
                    <small>
                      YouTube
                      </small>                   
                      </a>
                  </li> 
                  <li className="w-6">
                    <small>
                      <a href="https://instagram.com"><AiFillInstagram size={32} color="#fbad50" /></a>
                    </small>
                  </li>
                 
                  <li className="w-6">
                    <small>
                      <a href="https://twitter.com">
                        <AiFillTwitterSquare size={32} />
                        </a>
                      </small>
                  </li>

               
                </ul>
              </Card>
          </Grid>

          <Grid item className="">
            <div className="container flex justify-center flex-col gap-4">
              <article id="welcome" >
                <div className="container space-y-6">
                  <VideoPlayer light url={VIDEO_URL} headerTitle="Spanish Bay Knockout Challenge" width={800} height={400}/>
                </div>
              </article>
              <article>
                <Card className="">
                  <div >
                    <h3>
                      <strong>
                      East Vs West Results
                      </strong>
                      <div>
                        <small>
                        East Wins 3-2
                        </small>
                      </div>
                      </h3>
                  </div>
                  <div className="border border-red-300">
                      <Avatar rounded/>
                  </div>
                </Card>
              </article>
              <article id="Leaderboards" className="">
                <LeaderboardTabs  />
              </article>
              <article id="welcome" >
                <div className="container">
                  <VideoPlayer light={<Image src="/tragic-golfer.png" width={800} height={400}/>} url={VIDEO_URL2} width={800} height={400} headerTitle="Maddness at the Ranch"/>
                  
                </div>
              </article>
            </div>
          </Grid>
       
          <Grid item className="">
              <aside>
                  <article>
                  <Card className="bg-slate-100">
                    <div className="mb-4 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
                 <h5 className="font-medium leading-none text-gray-900 dark:text-white">
                      <strong>Latest Videos</strong>
                  </h5>
              <a href="#" className="text-sm font-medium transition duration-300 text-cyan-600 hover:underline dark:text-cyan-500 pb-4" >
                View all
              </a>
                    </div>
                    <div className="">
              <ul className="divide-y-2 space-y-2 divide-gray-200 dark:divide-gray-700" >
              
                <li className="flex justify-center">
                          <div className="text-sm relative">
                            <ReactPlayer light={<Image src="/tragic-golfer.png" width={300} height={200} />} url="https://www.youtube.com/watch?v=fH9x4r2IYyM&t=170s" controls height={200} width={300} style={{borderRadius: '0'}}  />
                            <a 
                              href="https://www.youtube.com/watch?v=fH9x4r2IYyM&t=170s" 
                              className="font-medium text-gray-900 dark:text-white pt-2"
                            >
                              2V2 Knockout Challenge
                              </a>
                          </div>
                </li>
                <li className="pt-2">
                          <div className="text-sm container">
                            <ReactPlayer light={<Image src="/golfer-1.png" width={300} height={200} />} url="https://www.youtube.com/watch?v=gkg8tS-oWvk&t=1s" controls height={200} width={300} style={{marginBottom: '0.5rem'}}/>
                            <a 
                              href="https://www.youtube.com/watch?v=gkg8tS-oWvk&t=1s" 
                              className="font-medium text-gray-900 dark:text-white pt-2"
                              >Long Drive Championship</a>
                          </div>
                </li>
                <li className="pt-2">
                          <div className="text-sm container">
                            <ReactPlayer light={<Image src="/golfer-1.png" width={300} height={200} />} url="https://www.youtube.com/watch?v=n6UfsZ7Yx8I&t=139s" controls width={300} height={200} style={{marginBottom: '0.5rem', borderRadius: '15rem'}}/>
                            <a 
                              href="https://www.youtube.com/watch?v=n6UfsZ7Yx8I&t=139s" 
                              className="font-medium text-gray-900 dark:text-white pt-2"
                              >$1000 Sudden Death Showdown</a>
                          </div>
                </li>
              </ul>
                    </div>
                  </Card>
                  </article>
              </aside>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
