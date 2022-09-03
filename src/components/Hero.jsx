import React from 'react'
import styles from "../style"
import { discount, robot1 } from "../assets"

const Hero = () => (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient hover:bg-discount-gradient-hover cursor-pointer rounded-[10px] mb-2">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount for {" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>
        

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            We Offer <br className="sm:block hidden"/> {" "}
            <span className='text-gradient'>Modern</span> {" "}
          
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
            WEB Solutions.
          </h1>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a modern ways
            of developing the responsive and clean
            sites likely to fit your needs. We examine
            user overall satisfaction and adapt our standards.
          </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot1} alt="robot" className="w-[100%] h-[100%] relative z-[5]"/>  
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      
    </section>
  
);

export default Hero