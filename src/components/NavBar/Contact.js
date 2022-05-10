import { setTheme, setButtonTheme } from "../Theme";

function Contact() {
  return (
    <div id="contact">
      <h1 id="chooseColorTheme">Contact Me</h1>
      <a></a>
        id="themeOneBtn"
        className="themeButtons"
        onClick={() => {
          setTheme("ThemeOne");
          setButtonTheme("neutral");
        }}
        onMouseEnter={() => {
          setButtonTheme("blue", "#themeOneBtn");
        }}
        onMouseLeave={() => {
          setButtonTheme("neutral");
        }}
      >
        1
      </button>
      
    </div>
  );
}

export default Contact;
