import React from 'react'
import Image from 'next/image'

import styled from './styles.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styled.container}>
      <div className={styled.background}>
        <Image
          src='https://images.pexels.com/photos/3817928/pexels-photo-3817928.jpeg'
          alt="Background image"
          height={700}
          width={1400}
        />
      </div>
      <h1 className={styled.hero}>
        Cry<br />
        of the<br />
        Roses
      </h1>
      <a href="#poemas" className={styled.more}>
        <p>POEMS</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  )
}

export default Hero
