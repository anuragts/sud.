"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function () {
    return (
        <div>
            <motion.div
            whileHover={{ y: -12 }}
            whileTap={{scale:0.9}}
            initial={{
              scale: 0.9,
            }}
            animate={{  
              scale: 1
            }}
            transition={{
              type: "spring",
            }}
                >
                    <Link className="text-[#000000] text-xl px-6 py-4 border-2 rounded-xl border-[#000000] font-semibold bg-[#D2E0FB] hover:underline shadow-2xl" href="/">know more</Link>
            </motion.div>
        </div>
    )
}
