"use client";
import { motion } from "framer-motion";

export default function Collage() {
    return (
        <div className="text-center lg:text-left">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }} whileTap={{ scale: 0.9 }}>
                <img
                    src="/pic2.jpeg"
                    className="border-4 rounded-[4rem] lg:w-[250px]  border-[#000000] max-w-[100%] max-h-[100%]"
                    alt="Image 2"
                   
                />
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring" }} whileTap={{ scale: 0.9 }}>
                <img
                    src="/pic3.jpg"
                    className="border-4 lg:mt-[-10rem] lg:ml-[10rem] w-125px lg:w-[250px] rounded-[4rem] lg:rotate-12 border-[#000000] max-w-[100%] max-h-[100%]"
                    alt="Image 3"
               
                />
            </motion.div>
            <motion.div whileHover={{ y: 5, x: -5 }} transition={{ type: "spring" }} whileTap={{ scale: 0.9 }}>
                <img
                    src="/pic1.jpeg"
                    className="border-4 lg:mt-[-15rem] lg:w-[250px]  lg:-rotate-12 rounded-[4rem] border-[#000000] max-w-[100%] max-h-[100%]"
                    alt="Image 1"
                   
                />
            </motion.div>
            <motion.div whileHover={{}}>
                <img
                    src="/arrow.png"
                    className="lg:ml-[30rem] lg:mt-[-28rem] max-w-[100%] max-h-[100%]"
                    alt="Image 1"
                   
                />
            </motion.div>
        </div>
    );
}
