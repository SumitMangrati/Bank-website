import React from 'react'
import { card } from '../assets'
import styles ,{layout} from '../style'
import Button from './Button'

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/>in a few wasy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper</p>
        <Button styles="mt-10" ></Button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal
