import { Type, Coins, Image, Zap, History, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Feature() {

    const features = [
        {
            title: "Text-to-Image Generation",
            description: "Create stunning images from simple text prompts using advanced AI models.",
            icon: Type,
        },
        {
            title: "Credit-Based System",
            description: "Use credits to generate images. Get free credits on signup or buy more anytime.",
            icon: Coins,
        },
        {
            title: "High-Quality Outputs",
            description: "Download sharp, high-resolution images ready for social media or projects.",
            icon: Image,
        },
        {
            title: "Fast & Reliable",
            description: "Optimized for speed so your images are generated in seconds, not minutes.",
            icon: Zap,
        },
        {
            title: "Prompt History",
            description: "Access all your previously generated images and prompts in one place.",
            icon: History,
        },
        {
            title: "Secure & Private",
            description: "Your prompts and images are private and protected with secure authentication.",
            icon: ShieldCheck,
        },
    ]
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center my-32 px-4"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl sm:text-4xl font-semibold mb-2 text-center"
            >
                Powerful features built for creators
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-600 mb-12 text-center max-w-xl"
            >
                Everything you need to generate high-quality AI images effortlessly.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.45 }}
                            whileHover={{ scale: 1.04 }}
                            className="flex flex-col gap-5 p-6 bg-white/40 backdrop-blur-md shadow-md border border-gray-200 rounded-xl cursor-pointer"
                        >
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mt-1">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    )
}