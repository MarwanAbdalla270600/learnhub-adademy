import HeroGraphic from "../assets/images/hero.svg";
import IntroVideo from "../assets/videos/welcome_learnhub.mp4";
import InstructionVideo from "../assets/videos/why_learnhub.mp4";
import FacebookIcon from "../assets/images/facebook.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import YoutubeIcon from "../assets/images/youtube.svg";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function LandingPage() {
  const { t } = useTranslation(); // useTranslation hook
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || i18n.language
  );

  // Function to handle the toggle switch
  const handleLanguageChange = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.setAttribute(
      "dir",
      newLanguage === "ar" ? "rtl" : "ltr"
    ); // Set direction attribute
  };

  // Sync language state on component mount and change text direction accordingly
  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    ); // Set direction on mount
  }, [language, i18n]);

  const targetSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex justify-between">
        <h3>Learnhub</h3>
        <div className="flex items-center gap-2">
          <label>English</label>
          <input
            type="checkbox"
            className="toggle"
            onChange={handleLanguageChange}
            checked={language === "ar"} // Checked if language is Arabic
          />{" "}
          <label>Arabic</label>
        </div>
      </header>
      <section id="hero-section" className="flex flex-wrap justify-around p-4">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl">{t("hero.title")}</h1>
          <h2 className="text-3xl">{t("hero.subtitle")}</h2>
          <p className="text-xl">
            {t("hero.description")}{" "}
            <a className="font-semibold">{t("hero.coursesLink")}</a>
          </p>
          <button onClick={scrollToSection} className="btn btn-primary w-fit">
            {t("hero.button")}
          </button>
        </div>
        <div className="flex items-center">
          <img width={600} src={HeroGraphic} alt="Hero Graphic" />
        </div>
      </section>

      <section
        ref={targetSectionRef}
        className="flex flex-col items-center gap-8 py-10"
      >
        <div className="flex flex-col items-center justify-center flex-1 max-w-2xl gap-4">
          <span className="text-lg text-primary">{t("section1.tagline")}</span>
          <h2 className="mb-4 text-4xl text-center">{t("section1.title")}</h2>
          <p className="text-center">{t("section1.description")}</p>
        </div>
        <div className="max-w-3xl mt-8 overflow-hidden h-fit">
          <video controls>
            <source src={IntroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mx-auto">
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">
              {t("features.variety")}
            </p>
          </div>
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">
              {t("features.income")}
            </p>
          </div>
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">
              {t("features.knowledge")}
            </p>
          </div>
          <div className="flex items-center justify-center w-24 px-20 py-8 border-2 shadow-xl card">
            <p className="text-2xl text-center text-primary">
              {t("features.career")}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 py-10">
        <div className="flex flex-col items-center justify-center flex-1 max-w-2xl gap-4">
          <span className="text-lg text-primary">{t("section2.tagline")}</span>
          <h2 className="mb-4 text-4xl">{t("section2.title")}</h2>
          <p className="text-center">{t("section2.description")}</p>
        </div>
        <div className="max-w-3xl mt-8 overflow-hidden h-fit">
          <video controls>
            <source src={InstructionVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 pt-20 pb-2">
        <h2 className="text-2xl">{t("social.follow")}</h2>
        <div className="flex gap-10">
          <a
            href="https://www.facebook.com/AbuseadaLearnHubAcademy"
            target="_blank"
            rel="noreferrer"
          >
            <img width={50} src={FacebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-adel-abu-se-da-38541520/"
            target="_blank"
            rel="noreferrer"
          >
            <img width={50} src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.youtube.com/@LearnHubWhenknowledgemeetspass"
            target="_blank"
            rel="noreferrer"
          >
            <img width={50} src={YoutubeIcon} alt="YouTube" />
          </a>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
