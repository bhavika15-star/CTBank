import React, { useEffect } from "react";
import ChatbotImage from "../components/ICICISlider1.JPG";
import Botimage from "./boticon.png";
import "./chatbot.css";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Mic from "../assests/Group 4.svg";
import Forward from "../assests/Group 3.svg";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Slider from "react-slick";

function Chatbot() {
  const [isShown, setIsShown] = useState(false);
  const [isImageShown, setisImageShown] = useState(true);
  const [cmnt, setCmnt] = useState("");
  const [theArray, setTheArray] = useState([]);
  const [startSpeech, setStartSpeech] = useState(true);

  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setStartSpeech(true);
    } else {
      setStartSpeech(false);
    }
  }, [listening]);

  useEffect(() => {
    if (!startSpeech) {
      if (transcript.length > 0) {
        setCmnt(transcript);
      }
    }
  }, [startSpeech]);

  const addEntryClick = () => {
    setTheArray([...theArray, cmnt]);
    setisImageShown(false);
    setCmnt(" ");
  };
  const addEntryKey = (event) => {
    //console.log(typeof event.key);

    if (event.key === "Enter") {
      //console.log("hello");
      event.preventDefault();
      event.stopPropagation();
      addEntryClick();
    }
  };

  const on = () => {
    console.log("on");
  };
  const of = () => {
    console.log("of");
  };

  const chatbotFirst = () => {
    setTheArray([...theArray, "Need Instant Loan"]);
    setisImageShown(false);
  };
  const chatbotSecond = () => {
    setTheArray([...theArray, "Book your Express FD in 3 minutes"]);
    setisImageShown(false);
  };
  const chatbotThird = () => {
    setTheArray([...theArray, "Your personalized offers"]);
    setisImageShown(false);
  };

  const crauselclick = (e) => {
    const crauselid = e.currentTarget.id; 
    setTheArray([...theArray, Chatbotcrausel[crauselid-1].name]);
    console.log(crauselid);
    setisImageShown(false);
  };

  const settings = {
    // dots: true,
    arrows: true,
    infiniteLoop: true,
    // speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
  };

  const Chatbotcrausel = [
    {
      id: "1",
      name: "Transfer Funds",
    },
    {
      id: "2",
      name: "Mobile Recharge",
    },
    {
      id: "3",
      name: "Cheque Book Request",
    },
    {
      id: "4",
      name: "Debit Card Request",
    },
    {
      id: "5",
      name: "Manage Debit Card Limit",
    },
  ];

  const Bot = () => (
    <div
      style={{
        width: "30rem",
        backgroundColor: "#e5e5e5",
        borderRadius: "16px 16px 0px 0px",
      }}
    >
      <div className="chatbottop">
        <img className="chatbotimage" src={Botimage} alt="botimage" />
        <button
          style={{
            border: "none",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsShown(!isShown);
          }}
        >
          <ImCross />
        </button>
      </div>

      <div className="chatbotbody">
        <div className="chatbotimg">
          {isImageShown && (
            <img
              className="chatbotassistant"
              src={ChatbotImage}
              alt="Chatbotimage"
            />
          )}
        </div>

        <div className="heading">Hi, I am CTAssist!</div>
        <div className="help">
          <div className="chatbottextheading chatbotborder">
            Also, I can help you with things like:
          </div>
          <button className="chatbotdefault" onClick={chatbotFirst}>
            <div className="chatbottext chatbotborder">Need Instant Loan</div>
          </button>
          <button className="chatbotdefault" onClick={chatbotSecond}>
            <div className="chatbottext chatbotborder">
              Book your Express FD in 3 minutes
            </div>
          </button>
          <button className="chatbotdefault" onClick={chatbotThird}>
            <div className="chatbottext">Your personalized offers</div>
          </button>
        </div>

        <div className="entryshow">
          {theArray.map((entry) => (
            <div className="userentry">{entry}</div>
          ))}
        </div>
        <br />
        <br />
      </div>

      {/*   Slider   */}

      <Slider {...settings}>
        {Chatbotcrausel.map((item) => {
          return (
            <div id={item.id} onClick={crauselclick} className="wrapper" key={item.id}>
              <p className="crauselitems">{item.name}</p>
            </div>
          );
        }) }
      </Slider>

      {/*  Chatbot Footer  */}
      <div className="chatbotfooter">
        <label className="switch">
          <input type="checkbox" id="togBtn" />
          <div className="slider round">
            <span onClick={on} className="on">
              En
            </span>
            <span onClick={of} className="off">
              Hi
            </span>
          </div>
        </label>
        <div
          style={{
            display: "flex",
            backgroundColor: "#E5E5E5",
            padding: "0.5rem",
            borderRadius: "0.54rem",
            alignItems: "center",
          }}
        >
          <input
            className="chatbotfooterinput"
            placeholder="How may I help you"
            id="myinput"
            value={cmnt}
            onKeyPress={addEntryKey}
            onChange={
              listening
                ? () => setCmnt(transcript)
                : (e) => setCmnt(e.target.value)
            }
          />
          <img
            className="chatbotfootermic"
            onClick={SpeechRecognition.startListening}
            src={Mic}
            alt="mic"
          />
        </div>

        <button
          type="submit"
          className="chatbotsubmitbtn"
          id="myBtn"
          onClick={addEntryClick}
        >
          <img className="footerforwardbtn" src={Forward} alt="forward" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="">
      <div
        className="bot"
        onClick={() => {
          setIsShown(!isShown);
        }}
      >
        <img className="botimage" src={Botimage} alt="bot" />
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
      {isShown && <div className="chatbot">{Bot()}</div>}</div>
    </div>
  );
}

export default Chatbot;
