import React from 'react'
import food1 from '../../assets/private-flight1.png'
import food2 from '../../assets/private-flight2.png'
import food3 from '../../assets/private-flight3.png'
import { motion } from 'framer-motion'
import {SlideUp} from '../Hero/Hero.jsx';

export default function HotDessert() {
    const HotDessertData = [
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
    ];
  return (
    <section>
        <div className="container py-12">
            <motion.h3 variants={SlideUp(0)} initial="hidden" whileInView="show" className="text-2xl font-semibold text-darkGreen uppercase py-8">Features Flight</motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        HotDessertData.map((item)=>{
                            return(
                                <motion.div 
                                    variants={SlideUp(item.delay)} 
                                    initial="hidden" 
                                    whileInView="show" 
                                    key={item.id} className="group bg-white/50 shadow-md p-5 flex items-center gap-3">
                                    <img src={item.img} className="w-20 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"/>
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.name}</h3>
                                        <p className="text-xl text-yellow-500">{item.price}</p>
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
