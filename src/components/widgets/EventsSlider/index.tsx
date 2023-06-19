"use client";
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { MdArrowCircleRight, MdArrowCircleLeft } from 'react-icons/md'

import { EventCard as EventCardTypes } from '~/shared/types';
import EventCard from '~/components/common/EventCard';

export interface EventSliderProps {
  data: EventCardTypes[];
  sectionTitle: string;
  description: string;
}

 export default function EventSlider(props: EventSliderProps = {data: [], sectionTitle: '', description: ''}){
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
   const [eventData, setEventData] = useState<EventCardTypes[]>([])
   
  //  sets the data from props to the state
   useEffect(() => {
     setEventData(props.data)
   }, [props.data])
   
// Next and previous button functions
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const iconStyles = 'text-blue-100 opacity-50 hover:opacity-100 transition duration-200'

  return (
    <section className="container mx-auto my-8">
          <div className="container mx-auto">
            <div className='flex justify-between items-center gap-4'>
            <div className='space-y-2'>
            <h2 className="text-4xl font-bold">{ props.sectionTitle }</h2>
                  <p className='text-gray-400'>
                   { props.description }
                  </p>
               </div>
               <div>
                 <button className="embla__prev z-10" onClick={scrollPrev}>
                    <MdArrowCircleLeft size={48} className={iconStyles} />
                  </button>
                  <button className="embla__next right-10 top-1/4 z-10" onClick={scrollNext}>
                    <MdArrowCircleRight size={48} className={iconStyles}/>
                  </button>
               </div>
            
             </div>
                  <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex gap-1">
                  {eventData.map(({title, description, image, imgAlt, slug, date, href}, i) => (
                    <div className="embla__slide flex-grow-0 flex-shrink-0" key={i}>
                      <EventCard
                        title={title}
                        description={description}
                        image={image.src}
                        imgAlt={image.alt}
                        slug={slug}
                        date={date}
                        href={href}
                      />
                    </div>
                  ))}
                </div>
              </div>
                  </div>
          </div>
    </section>
  )
}
