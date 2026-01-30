import { useContext } from "react";
import { assets } from "../assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function GenerateBtn() {

    const { user, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (user) {
            navigate("/generate-image")
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
        >
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-2xl md:text-3xl lg:4xl text-neutral-800 font-semibold"
            >
                Start creating AI images in seconds
            </motion.h2>

            <motion.button
                onClick={onClickHandler}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex items-center gap-2 sm:text-lg text-white bg-black px-12 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition"
            >
                Generate Images
                <img className="w-6" src={assets.star_grp} alt="Generate" />
            </motion.button>
        </motion.div>

    )
}