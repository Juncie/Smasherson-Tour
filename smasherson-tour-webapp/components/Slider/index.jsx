import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { MdArrowCircleRight, MdArrowCircleLeft } from 'react-icons/md'

 const Slider = ({data = [], ...props}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const iconStyles = 'text-blue-100 opacity-50 hover:opacity-100 transition duration-200'

  return (
    <div className="container mx-auto">
      <div className="embla overflow-hidden flex">
           <button className="embla__prev absolute left-10 top-1/4 z-10" onClick={scrollPrev}>
                  <MdArrowCircleLeft size={48} className={`${iconStyles}`} />
                </button>
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex">
                {data.map((item) => (
                  <div className="embla__slide">
                    <Image src={item.image} width={960} height={540} />
                  </div>
                ))}
              </div>
            </div>
      
      
                <button className="embla__next absolute right-10 top-1/4 z-10" onClick={scrollNext}>
                  <MdArrowCircleRight size={48} className={`${iconStyles}`}/>
                </button>
      
      </div>
    </div>
  )
}

export default Slider;