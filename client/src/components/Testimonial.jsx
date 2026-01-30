import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Donald Jackman",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    quote:
      "Pixora makes AI image generation incredibly fast and simple. Just type a prompt and get great results.",
  },
  {
    name: "Richard Nelson",
    role: "Instagram Influencer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    quote:
      "The UI is very clean and easy to use. I don’t need design skills anymore.",
  },
  {
    name: "James Washington",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    quote:
      "Pixora is perfect for quick visuals and brainstorming ideas with my team.",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-32 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl sm:text-4xl font-semibold text-center mb-4"
      >
        Loved by early creators
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg text-gray-600 text-center mb-20"
      >
        What creators are saying about Pixora
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.45 }}
            whileHover={{ scale: 1.04 }}
            className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white/40 backdrop-blur-md shadow-md cursor-pointer"
          >
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img
                className="h-22 w-22 absolute -top-12 rounded-full object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="pt-10 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-800/80">{item.role}</p>
              </div>
            </div>

            <p className="text-gray-500 px-6 text-center">
              “{item.quote}”
            </p>

            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 22 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>

  );
}
