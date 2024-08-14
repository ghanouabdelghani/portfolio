import { useState } from "react";
import "./App.css";
import Header from "./component/Hearders";
import abdelghani from "./assets/abdelghani.png";
import instagram from "./assets/instagram.png";
import github from "./assets/github.png";
import twitter from "./assets/twitter.png";
import telegramme from "./assets/telegramme.png";
import abdeslam2 from "./assets/abdelghani2.png";
import carte from "./assets/carte.png";
import gmail from "./assets/gmail.png";
import conversation from "./assets/conversation.png";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      <Header language={language} onLanguageChange={toggleLanguage} />

      <div className="container" id="home" style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "40% ",
            width: "800px",
            height: "1000px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={abdelghani}
            alt=""
            style={{
              width: "500px",
              height: "800px",
              margin: "10px 100px  ",
              padding: "80px 90px",
            }}
          />
        </div>
        <div style={{ marginTop: "-400px", margin: "10px  -50px" }}>
          <h6
            style={{
              fontWeight: "revert-layer",
              fontSize: "28px",
              color: "#ffc107",
            }}
          >
            {language === "en" ? "Hi There, I'm" : "مرحبًا، أنا"}
          </h6>
          <h1 style={{ fontSize: "70px" }}>
            {language === "en" ? "Abdelghani Azibi" : " عزيبي عبدالغاني"}
          </h1>
          <h1 className="typewriter">
            {language === "en" ? "full-stack web developer" : "مطور ويب"}
          </h1>
          <div
            className="icons"
            style={{
              display: "flex",
              msFlexWrap: "wrap",
              flexWrap: "wrap",
              paddingLeft: "0",
              marginBottom: "0",
              listStyle: "none",
              gap: "15px",
            }}
          >
            <div
              className="telegramme"
              style={{
                width: "35px",
                height: "35px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffc107",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                msFlexWrap: "wrap",
                flexWrap: "wrap",
                paddingLeft: "0",
                marginBottom: "0",
                listStyle: "none",
              }}
            >
              <img
                src={telegramme}
                alt=""
                style={{
                  height: "30px",
                }}
              />
            </div>
            <div
              className="twitter"
              style={{
                width: "35px",
                height: "35px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffc107",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                msFlexWrap: "wrap",
                flexWrap: "wrap",
                paddingLeft: "0",
                marginBottom: "0",
                listStyle: "none",
              }}
            >
              <a href="https://github.com/Abdeslam1234"></a>
              <img
                src={twitter}
                alt=""
                style={{
                  height: "30px",
                }}
              />
            </div>
            <div
              className="github"
              style={{
                width: "35px",
                height: "35px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffc107",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                msFlexWrap: "wrap",
                flexWrap: "wrap",
                paddingLeft: "0",
                marginBottom: "0",
                listStyle: "none",
              }}
            >
              <a href="https://github.com/ghanouabdelghani">
                <img
                  src={github}
                  alt=""
                  style={{
                    height: "30px",
                  }}
                />
              </a>
            </div>
            <div
              className="instagrame"
              style={{
                width: "35px",
                height: "35px",
                // display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ffc107",
                borderRadius: "50%",
                display: "flex",
                msFlexWrap: "wrap",
                flexWrap: "wrap",
                paddingLeft: "0",
                marginBottom: "0",
                listStyle: "none",
              }}
            >
              <a href="https://www.instagram.com/ghanou165/">
                <img
                  src={instagram}
                  alt=""
                  style={{
                    height: "30px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <div className="hp" id="about-me">
          <h1
            style={{
              color: "black",
              fontSize: "50px",
              justifyContent: "center",
              padding: "50px 50px ",
            }}
          >
            {language === "en" ? "I love being a" : "أحب أن أكون"}
            <br />
            {language === "en" ? "developer !" : "مطورًا!"}
          </h1>
          <p style={{ color: "#5E6472", fontSize: "18px" }}>
            {language === "en"
              ? "Hello, I am Abdelghani; The 27 -year-old is a frontend developer. I started programming in 2023, along with programming, I study about startups and business management,"
              : "مرحبًا، أنا عبد السلام؛ مطور واجهات أمامية. بدأت في البرمجة في عام 2023، بجانب البرمجة، أدرس عن الشركات الناشئة و إدارة اعمال،"}
          </p>
          <div className="container">
            <div className="box">
              <div className="boxContent">
                <h5 className="boxTitle" style={{ color: "#ffc107" }}>
                  {language === "en" ? "53" : "٥٣"}
                </h5>
                <p className="boxDescription">
                  {language === "en" ? "completed projects" : "مشاريع مكتملة"}
                </p>
              </div>
            </div>
            <div className="box">
              <div className="boxContent">
                <h5 className="boxTitle" style={{ color: "#ffc107" }}>
                  {language === "en" ? "6" : "٦"}
                </h5>
                <p className="boxDescription">
                  {language === "en" ? "Positive reviews" : "تقييمات إيجابية"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={abdeslam2}
          alt=""
          style={{
            width: "400px",
            height: "600px",
            margin: "100px",
          }}
        />
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          // padding: "300px 90px 80px 80px",
        }}
      >
        <div className="skills" id="skills" style={{ padding: "100px 50px" }}>
          <h1>{language === "en" ? "Skills" : "المهارات"}</h1>
          <p
            style={{
              color: "#5e6472",
            }}
          >
            {language === "en"
              ? "Here you can see my skills, one of the fascinations of the computer world is the momentary changes of technologies, but I try to update my knowledge every day and experience new technologies."
              : "هنا يمكنك رؤية مهاراتي، إحدى سحريات عالم الحواسيب هي التغيرات اللحظية للتقنيات، ولكني أحاول تحديث معرفتي يوميًا وتجربة التقنيات الجديدة."}
          </p>
          <span className="skill-custom">HTML</span>
          <span className="skill-custom">CSS</span>
          <span className="skill-custom">Javascript</span>
          <span className="skill-custom">React</span>
        </div>
        <div className="language" style={{ padding: "100px 50px" }}>
          <h1>{language === "en" ? "Language skills" : "مهارات اللغة"}</h1>
          <p style={{ color: "#5e6472" }}>
            {language === "en"
              ? "One of my hobbies is studying and learning languages. I try to be able to learn and use my favorite languages."
              : "أحد هواياتي هو دراسة وتعلم اللغات. أحاول أن أتقن وأستخدم لغاتي المفضلة."}
          </p>
          <div className="laungueges" style={{ display: "flex", gap: "10px" }}>
            <div
              className="english"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
              }}
            >
              <span className="percent">80%</span>
              <h2>{language === "en" ? "English" : "الإنجليزية"}</h2>
            </div>
            <div
              className="spanish"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
              }}
            >
              <span className="percent">50%</span>
              <h2>{language === "en" ? "Spanish" : "الإسبانية"}</h2>
            </div>
            <div
              className="arabic"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
              }}
            >
              <span className="percent">100%</span>
              <h2>{language === "en" ? "Arabic" : "العربية"}</h2>
            </div>
            <div
              className="french"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "white",
              }}
            >
              <span className="percent">80%</span>
              <h2>{language === "en" ? "French" : "الفرنسية"}</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact"
        id="contact"
        style={{
          alignItems: "center",
          backgroundColor: "white",
          // width: "500px",
          boxShadow: "0px  3px 10px 0px",
          padding: "30 px",
          margin: "200px  00px",
        }}
      >
        <h1>
          {language === "en"
            ? "What is your plan? Call me"
            : "ما هو خطتك؟ اتصل بي"}
        </h1>
        <p style={{ color: "#5e6472", margin: "0px 0px 16px" }}>
          {" "}
          {language === "en"
            ? "You can get my contact information here and if you like, you can see the urls of my pages on social networks from the top of the page and find me there."
            : "يمكنك الحصول على معلومات الاتصال بي هنا، وإذا أردت، يمكنك أيضًا رؤية عناوين صفحاتي على شبكات التواصل الاجتماعي من الجزء العلوي من الصفحة والعثور عليّ هناك."}
        </p>
        <div className="carte" style={{ display: "flex", gap: "15px" }}>
          <img src={carte} alt="" style={{ width: "40px", height: "50px" }} />
          <h2>{language === "en" ? "Algeria, Algiers" : "الجزائر، الجزائر"}</h2>
        </div>
        <div className="gmail" style={{ display: "flex", gap: "15px" }}>
          <img src={gmail} alt="" style={{ width: "40px", height: "50px" }} />
          <h2>azibiabdelghani19@gmail.com</h2>
        </div>
        <div className="conversation" style={{ display: "flex", gap: "15px" }}>
          <img
            src={conversation}
            alt=""
            style={{ width: "40px", height: "50px" }}
          />
          <h2>0556161893</h2>
        </div>
      </div>
    </>
  );
}

export default App;
