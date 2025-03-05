"use client"

import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import type { MoviesArrayType } from '@/types'
import CarouselItem from './carouselItem'

export function EmblaCarousel({movies}:{movies: MoviesArrayType}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        slidesToScroll: 'auto'
      }, [Autoplay()])

  return (
    <div className="embla max-w-full" ref={emblaRef}>
      <ul className="embla__container">
      {movies.map((index) => <CarouselItem key={index.id} classNames='embla__slide' movie={index}/>)}
      </ul>
    </div>
  )
}


