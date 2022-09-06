import React from 'react'
import { card1 } from "../assets";
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Professionally Designed <br className="sm:block hidden"/>
      Website Templates and More!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Choose from 500+ customizable website templates
      that are built to meet your business needs.</p>
      
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card1} alt="card" className="w-[100%] h-[100%]" />
    </div>

  </section>

)


export default CardDeal