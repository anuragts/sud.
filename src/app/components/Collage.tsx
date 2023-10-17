"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Collage() {
    return (
        <div className="">
            <motion.div whileHover={{ y: -5 }} transition={{
                type: "spring",
            }} whileTap={{scale:0.9}}>

                <Image src="/pic2.jpeg" className="border-4 rounded-[4rem] border-[#000000]" alt="Image 2" width={250} height={250} />
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{
                type: "spring",
            }} whileTap={{scale:0.9}}>
                <Image src="/pic3.jpg" className="border-4 mt-[-10rem] ml-[10rem] rotate-12	 rounded-[4rem] border-[#000000]" alt="Image 3" width={250} height={300} />
            </motion.div >
            <motion.div whileHover={{ y: 5, x: -5 }} transition={{
                type: "spring",
            }} whileTap={{scale:0.9}}>
                <Image src="/pic1.jpeg" className="border-4 mt-[-15rem] -rotate-12 rounded-[4rem] border-[#000000]" alt="Image 1" width={250} height={250} />
            </motion.div >
            <motion.div whileHover={{}} >
                <Image src="/arrow.png" className="ml-[30rem] mt-[-28rem]" alt="Image 1" width={250} height={250} />
            </motion.div >

        </div>
    )
}
