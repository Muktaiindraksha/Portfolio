import profilePic from "../assets/my.profile.picture.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiCodechef, SiExpress, SiPython } from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="Hero" className="mt-24 max-w-[998px] mx-auto relative">
      <div className="grid gap-10 md:grid-cols-2 place-items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "FrontEnd Dev",
              1000,
              "WebDeveloper",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="mb-4 text-xl font-bold text-gray-400 md:text-5xl italic-"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 text-3xl tracking-tight text-gray-200 md:text-5xl"
          >
            HEY, I AM <br />
            <span className="text-purple-500">Muktai Indraksha</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate Frontend developer with proficient in HTML, CSS,
            JavaScript, React.js, and Node.js.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 p-4 font-bold text-gray-200 border border-purple-400 cursor-pointer md:w-auto rounded-xl"
            >
              <a
                href="https://drive.google.com/file/d/1roHFEc3jzhK5YCOTnG5vT4q9G1Z2Oy0k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </motion.button>

            <div className="z-20 flex flex-row gap-6 text-4xl text-purple-400 md:text-6xl">
              <motion.a
                whileHover={{ scale: 1.1}}
                href="https://github.com/Muktaiindraksha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1}}
                href="https://drive.google.com/file/d/1roHFEc3jzhK5YCOTnG5vT4q9G1Z2Oy0k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1}}
                href="https://www.codechef.com/users/muktai_123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilePic}
          className="w-[200px] h-[400px] md:w-[350px] rounded-3xl filter grayscale"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* My Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col items-center justify-center w-full px-4 py-24 md:px-0"
      >
        <p className="mb-6 text-xl text-gray-200 md:text-5xl">My Tech Stack</p>
        <div className="flex flex-wrap justify-center gap-4 text-3xl md:text-7xl">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <SiPython className="text-gray-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1300} />
      </div>
    </div>
  );
};

export default Hero;
