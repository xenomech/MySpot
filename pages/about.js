import Image from "next/image";
import { FaGithub, FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import Container from "../components/Container";
import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../data/store";
import styles from "../styles/extra.module.css";
export default function About() {
  return (
    <Container>
      <div>
        <div className="px-2 mx-auto xl:flex xl:flex-row-reverse xl:justify-between flex-col items-center justify-center">
          <div className="p-5 mx-10 flex justify-center items-center">
            <Image
              src={"/static/images/gokul.jpeg"}
              height={200}
              width={200}
              alt={"gokul"}
              className="rounded-full"
            />
          </div>
          <div className="text-center xl:text-left">
            <h1 className="py-1 font-bold text-4xl tracking-tight mb-1 text-black dark:text-white">
              Gokul Suresh
            </h1>
            <h2 className="py-1 sm:px-1 text-gray-700 dark:text-gray-200 mb-4 text-2xl">
              Product Developer @
              <a
                className="text-green-600 px-2"
                href="https://surveysparrow.com/"
              >
                SurveySparrow
              </a>
            </h2>
            <div className="p-2 flex items-center xl:justify-start justify-center">
              <a href="https://github.com/xenomech/">
                <FaGithub
                  size={35}
                  className="mr-4 hover:scale-110 hover:text-gray-700 transition-all duration-200 ease-in-out"
                />
              </a>
              <a href="https://www.linkedin.com/in/gokulsmenon227">
                <FaLinkedin
                  size={35}
                  className="mr-4 hover:scale-110 hover:text-blue-800 transition-all duration-200 ease-in-out"
                />
              </a>
              <a href="mailto:gokulsmenon227@gmail.com">
                <FaRegEnvelope
                  size={35}
                  className="mr-4 hover:scale-110 hover:text-red-600 transition-all duration-200 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="p-5 text-xl text-gray-700 dark:text-gray-200">
          <p className="text-xl">
            Hey ! <span className={styles.wavingHand}>👋</span>
          </p>
          <p>
            Welcome to my spot on the web. I am just an aspiring developer. I
            build and occasionally design websites and apps. I am a self-taught
            developer from Kochi, Kerala. I love listening to music, ricing
            Linux distros, and trying out different setups!
          </p>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-start text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2>Experience</h2>
          </div>
          {experience.map((item, index) => (
            <ExperienceCard data={item} key={index + 1} />
          ))}
        </div>
      </div>
    </Container>
  );
}
