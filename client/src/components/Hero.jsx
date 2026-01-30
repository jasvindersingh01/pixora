import { useContext } from "react";
import { assets } from "../assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


export default function Hero() {

    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if(user) {
            navigate("/generate-image")
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center items-center text-center py-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-stone-500 inline-flex items-center gap-2 bg-white rounded-full border border-neutral-300 px-6 py-1"
            >
                <p className="text-sm">AI-POWERED TEXT-TO-IMAGE PLATFORM</p>
                <img className="w-6 h-6" src={assets.star} alt="best" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10"
            >
                Turn prompts into{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                    pixels
                </span>{" "}
                — instantly.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-center max-w-xl mx-auto mt-5 text-neutral-600"
            >
                Create high-quality AI images from simple text prompts.
                Get started in seconds with free credits — no design skills needed.
            </motion.p>

            <motion.button
                onClick={onClickHandler}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full cursor-pointer"
            >
                Generate Images
                <img className="w-6" src={assets.star_grp} alt="Generate" />
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="flex flex-wrap items-center gap-2 mt-14"
            >
                {Array(6)
                    .fill("")
                    .map((_, index) => (
                        <motion.img
                            key={index}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="rounded cursor-pointer max-sm:w-10"
                            src={index % 2 === 0 ? assets.img1 : assets.img2}
                            alt="Generated preview"
                            width={70}
                        />
                    ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-2 text-neutral-600"
            >
                Generated Images from Pixora
            </motion.p>
        </motion.div>

    )
}