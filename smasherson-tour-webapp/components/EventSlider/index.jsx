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

  const iconStyles = 'text-blue-200 hover:text-blue-300 transition duration-300'

  return (
    <Card className="overflow-x-clip container mx-auto" >
          <div className='flex mx-auto border-b-2'>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                  <h2 className="text-4xl">
                    <strong>Featured Events</strong>
                    </h2>
                <div>
                 <button className="embla__prev" onClick={scrollPrev}>
                    <MdArrowCircleLeft size={48} className={`${iconStyles}`} />
                  </button>
                  <button className="embla__next" onClick={scrollNext}>
                    <MdArrowCircleRight size={48} className={`${iconStyles}`}/>
                  </button>
               </div>
             </div>
                <p className='text-gray-400 pb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus
                </p>
             </div>
           </div>
           {/* CAROUSEL BEGINS */}
      <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex justify-center">
                {data.map(({title, description, href, image}, i) => (
                  <div className="embla__slide" key={i}>
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
        <ActionButton label="View All Events" variant='filled' type='secondary' />
      </div>
    
    </Card>
  )
}

