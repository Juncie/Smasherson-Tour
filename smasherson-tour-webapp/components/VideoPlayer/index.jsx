"use client";
import { Card } from "flowbite-react";
import ReactPlayer from "react-player/youtube"
import Header from "../Header";

export default function VideoPlayer(props) {
   return (
        
            <Card className="container mx-auto border-gray-200 border-solid flex justify-center">
                <Header title={props.title} showButton={false}/>
                <ReactPlayer
                    url={props.url}
                    width='100%'
                    height={props.height ?? '24rem'}
                    controls
                    light={props.light ?? false}
                />  
            </Card>

        
   )
}