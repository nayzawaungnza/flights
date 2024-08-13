import React from 'react'
import food1 from '../../assets/private-flight1.png'
import food2 from '../../assets/private-flight2.png'
import food3 from '../../assets/private-flight3.png'
import { SlideUp } from '../Hero/Hero'
import { motion } from 'framer-motion'

const PopularRecipeData = [
    {
        id:1,
        name:"London - Paris",
        img:food1,
        price:"£5.65",
        delay:0.4,
    },
    {
        id:2,
        name:"New York - Milan",
        img:food2,
        price:"£3.65",
        delay:0.8,
    },
    {
        id:1,
        name:"London - Paris",
        img:food3,
        price:"£5.65",
        delay:1.2,
    }

]
function PopularRecipe() {
  return (
    <section>
        <div className='container py-24'>
            <motion.h1 
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="text-4xl text-center font-leagueGothic font-semibold uppercase py-8">
            {" "}
            Our Popular Flight
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                {
                    PopularRecipeData.map((item)=>{
                        return (
                            <motion.div
                                variants={SlideUp(item.delay)} 
                                    initial="hidden" 
                                    whileInView="show" 
                                 className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
                                    <img src={item.img} alt="" className=" w-24 mx-auto img-shadow group-hover:scale-x-110  group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-1200" />
                                    <div>
                                        <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">Buy Now</button>
                                        <p className="text-xl font-smibold">{item.name}</p>
                                        <p className="text-xl font-bold text-yellow-500">{item.price}</p>
                                    </div>
                            </motion.div>
                        )
                    })
                        
                }
            </div>
        </div>
    </section>
  )
}

export default PopularRecipe
