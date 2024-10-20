import HeroGraphic from "../assets/images/hero.svg";
import IntroVideo from "../assets/videos/welcome_learnhub.mp4";
import InstructionVideo from "../assets/videos/why_learnhub.mp4";
import FacebookIcon from "../assets/images/facebook.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import YoutubeIcon from "../assets/images/youtube.svg";
import { useRef } from "react";

function LandingPage() {
  // Create a ref for the section you want to scroll to, with type HTMLElement
  const targetSectionRef = useRef<HTMLDivElement>(null);

  // Function to handle the button click and scroll smoothly
  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="hero-section" className="flex flex-wrap justify-around p-4">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl">Learnhub Academy</h1>
          <h2 className="text-3xl">Become the best version of yourself</h2>
          <p className="text-xl">
            All <a className="font-semibold">Courses</a> you need in one place
          </p>
          <button onClick={scrollToSection} className="btn btn-primary w-fit">
            Experience Learnhub
          </button>
        </div>
        <div className="flex items-center">
          <img width={600} src={HeroGraphic}></img>
        </div>
      </section>

      <section
        ref={targetSectionRef}
        className="flex flex-col items-center gap-8 py-10"
      >
        <div className="flex flex-col items-center justify-center flex-1 max-w-2xl gap-4">
          <span className="text-lg text-primary">Knowledge is Power</span>
          <h2 className="mb-4 text-4xl text-center">
            Turn your Passion into Reality
          </h2>
          <p className="text-center">
            Our platform offers a variety of courses, providing access to
            professional learning videos that enhance your skills. Additionally,
            there is potential for promotion, along with opportunities for
            income raises as you advance in your career.
          </p>
        </div>

        <div className="max-w-3xl mt-8 overflow-hidden h-fit">
          <video controls>
            <source src={IntroVideo} type="video/mp4"></source>
          </video>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mx-auto">
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">
              Variety of courses
            </p>
          </div>
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">Income raise</p>
          </div>{" "}
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">
              Gain of knowledge
            </p>
          </div>{" "}
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">New job career</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 py-10">
        <div className="flex flex-col items-center justify-center flex-1 max-w-2xl gap-4">
          <span className="text-lg text-primary">
            The beginnig of your journey
          </span>

          <h2 className="mb-4 text-4xl">Why choosing us?</h2>
          <p className="text-center">
            Why choose us? Joining our platform is a great opportunity to
            enhance your learning journey. You'll become part of a vibrant
            community of professional instructors, with the chance to register
            today and start working toward your goals. Upon completing your
            courses, you’ll earn a certificate of completion, helping you move
            toward a successful future in your studies.
          </p>
        </div>
        <div className="max-w-3xl mt-8 overflow-hidden h-fit">
          <video controls>
            <source src={InstructionVideo} type="video/mp4"></source>
          </video>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 pt-20 pb-2">
        <h2 className="text-2xl">Follow us on Social Media</h2>
        <div className="flex gap-10">
          <a
            href="https://www.facebook.com/AbuseadaLearnHubAcademy"
            target="_blank"
          >
            <img width={50} src={FacebookIcon}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-adel-abu-se-da-38541520/"
            target="_blank"
          >
            <img width={50} src={LinkedinIcon}></img>
          </a>
          <a
            href="https://www.youtube.com/@LearnHubWhenknowledgemeetspass"
            target="_blank"
          >
            <img width={50} src={YoutubeIcon}></img>
          </a>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
