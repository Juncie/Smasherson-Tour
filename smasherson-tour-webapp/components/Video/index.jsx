import ReactPlayer from "react-player/youtube"

export default function Video(props) {
   return (
        <div className="container mx-auto">
            <ReactPlayer
                url={props.url}
                width='100%' 
                height='75vh'
                controls
            />
        </div>
        
   )
}