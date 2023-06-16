"use client";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { MdArrowCircleRight, MdArrowCircleLeft } from 'react-icons/md'
import EventCard from '../EventCard'
import ActionButton from '../ActionButton';
import { Card } from 'flowbite-react';

 export default function EventSlider({data = [], ...props}){
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const iconStyles = 'text-blue-100 opacity-50 hover:opacity-100 transition duration-200'

  return (
    <Card className="container dark:bg-gray-800 p-5 mx-1" style={{backgroundColor: 'black'}}>
          <div className='flex justify-between items-center gap-2'>
          <div className='space-y-4'>
                <h2 className="text-4xl font-bold">Featured Events</h2>
                <p className='text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus
                </p>
             </div>
             <div>
               <button className="embla__prev z-10" onClick={scrollPrev}>
                  <MdArrowCircleLeft size={48} className={`${iconStyles}`} />
                </button>
                <button className="embla__next right-10 top-1/4 z-10" onClick={scrollNext}>
                  <MdArrowCircleRight size={48} className={`${iconStyles}`}/>
                </button>
             </div>
             
           </div>
      <div className="embla ">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex gap-1">
                {data.map(({title, description, href, image}, i) => (
                  <div className="embla__slide flex-grow-0 flex-shrink-0" key={i}>
                      <EventCard
                        title={title}
                        description={description}
                        href={href}
                        image={image}
                        key={i}
                        btnShow={false}
                        />
                  </div>
                ))}
              </div>
            </div>
      </div>

      <div className='flex justify-center'>
        <ActionButton children="View All Events" variant='filled' type='secondary' />
      </div>
    
    </Card>
  )
}

