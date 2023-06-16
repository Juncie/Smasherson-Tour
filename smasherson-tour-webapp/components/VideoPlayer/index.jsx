"use client";
import { Card } from "flowbite-react";
import ReactPlayer from "react-player/youtube"

export default function VideoPlayer(props) {
   return (
        
            <div className="container flex items-center justify-center">
                <ReactPlayer
                    url={props.url}
                    width='100%'
                    controls
                    style={{
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                        minHeight: '550px'
                    }}
                />
            </div>

        
   )
}