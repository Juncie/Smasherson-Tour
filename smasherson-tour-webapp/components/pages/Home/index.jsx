import Carousel from '@/components/widgets/Carousel'

export default function Home(props) {
    return (
        <div>
            <Carousel slides={props.slides} />
        </div>
    )
}
