"use client";
import { Card } from "flowbite-react";
import ReactPlayer from "react-player/youtube"

export default function VideoPlayer(props) {
   return (
        
            <Card className="container mx-auto border-gray-200 border-solid flex justify-center">
                <ReactPlayer
                    url={props.url}
                    width='75%'
                    height='550px'
                    controls
                />
            </Card>

        
   )
}