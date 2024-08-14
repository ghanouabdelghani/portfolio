import React from "react";

function header({ language, onLanguageChange }) {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    aboutMeSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTohome = () => {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToskills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTocontact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
        position: "sticky ",
        top: "0px",

        background: "#fff7e5",
      }}
    >
      <h1> {language === "en" ? " Abdelghani Azibi" : "عزيبي عبدالغاني"}</h1>
      <button className="myButton" onClick={scrollTohome}>
        {language === "en" ? "home" : "الرئيسية"}
      </button>
      <button className="myButton" onClick={scrollToAboutMe}>
        {language === "en" ? "About me" : "عني"}
      </button>

      <button className="myButton" onClick={scrollToskills}>
        {language === "en" ? "skills" : "المهارات"}
      </button>
      <button className="myButton" onClick={scrollTocontact}>
        {language === "en" ? "Contact" : "اتصل بنا"}
      </button>
      <button className="myButton" onClick={onLanguageChange}>
        {language === "en" ? "English" : "العربية"}
      </button>
    </div>
  );
}

export default header;
