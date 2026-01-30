import { Instagram, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-32"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <img src="/logo.png" alt="Pixora Logo" className="h-8 mb-2" />
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pixora. All rights reserved.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-sm text-gray-600"
        >
          Developed by <span className="font-medium">Jasvinder</span>{" "}
          <span className="text-red-500">❤️</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="https://instagram.com/jasvindersingh.___"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://linkedin.com/in/jasvindersingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/jasvindersingh01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>
    </motion.footer>

  );
}

export default Footer;
