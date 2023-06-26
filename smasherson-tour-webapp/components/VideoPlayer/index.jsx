'use client'
import { Badge, Card } from 'flowbite-react'
import ReactPlayer from 'react-player/youtube'
import Header from '../Header'

export default function VideoPlayer(
    { headerTitle, headerSubTitle, url, height, light },
    ...props
) {
    return (
        <Card className="container relative mx-auto border-gray-200 border-solid flex justify-center isolate">
            <Header
                title={headerTitle}
                subTitle={headerSubTitle}
                showButton={false}
                className="text-5xl"
                titleWeight="semibold"
                style={{ marginTop: -20 }}
            />

            <ReactPlayer
                url={url}
                width={props.width ?? '100%'}
                height={height ?? '100%'}
                controls
                light={light ?? false}
                style={{ position: 'relative', top: 0, left: 0 }}
            />
            <div>
                <Badge className="bg-red-500 text-white p-4 rounded-full inline-flex">
                    LIVE AT 7PM EST
                </Badge>
            </div>
        </Card>
    )
}
