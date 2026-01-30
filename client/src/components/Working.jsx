import { FileText, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Working() {

    const steps = [
        {
            title: "Write your prompt",
            description: "Describe what you want to create in simple words.",
            icon: FileText,
        },
        {
            title: "Generate with AI",
            description: "Pixora turns your prompt into high-quality images.",
            icon: Sparkles,
        },
        {
            title: "Download & use",
            description: "Use your images anywhere — instantly.",
            icon: Download,
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center my-8 px-4"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl sm:text-4xl font-semibold mb-2 text-center"
            >
                How Pixora Works
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg text-gray-600 mb-12 text-center max-w-xl"
            >
                Create AI images in three simple steps — fast, easy, and intuitive.
            </motion.p>

            <div className="space-y-6 w-full max-w-3xl">
                {steps.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.45 }}
                            whileHover={{ scale: 1.03 }}
                            className="flex items-start gap-6 p-6 bg-white/40 backdrop-blur-md shadow-md border border-gray-200 rounded-xl cursor-pointer"
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