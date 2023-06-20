"use client";
import { Badge, Card } from "flowbite-react";
import ReactPlayer from "react-player/youtube"
import Header from "../Header";

export default function VideoPlayer({headerTitle, headerSubTitle, url, height, light}, ...props) {
   return (
        
            <Card className="container mx-auto border-gray-200 border-solid flex justify-center">
                <Header 
                    title={headerTitle}
                    subTitle={headerSubTitle}
                    showButton={false}
                    />

                <ReactPlayer
                    url={url}
                    width={props.width ?? '100%'}
                    height={height ?? '24rem'}
                    controls
                    light={light ?? false}
                /> 
                <div>
                    <Badge className="bg-red-500 text-white p-4 rounded-full inline-flex" children="Live"  />
                    </div> 
            </Card>

        
   )
}