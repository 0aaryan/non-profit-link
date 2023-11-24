// package imports
import React from "react";
import ReactDOM from "react-dom/client";

//  json imports
import pageContent from "./pageContent.json";

// img imports
import SearchButton from "../imgs/search_button_icon.svg";
import FirstParagraphBlob from "../imgs/first_paragraph_blob.svg";
import SecondParagraphBlob from "../imgs/second_paragraph_blob.svg";
import EmailIcon from "../imgs/email_icon.svg";
import BrowserIcon from "../imgs/browser_window.svg";
import GithubIcon from "../imgs/github_icon.svg";
import QuestionIcon from "../imgs/question_mark_icon.svg";

// component imports
import { imgsInfo } from "../interfaces/imgsInfo.ts";
import Button from "../components/Button.tsx";
import Paragraphs, { paragraphInfo } from "../components/Paragraphs.tsx";
import Footer from "../components/Footer.tsx";

//render for homepage-search
const buttons = document.getElementsByClassName("react-search-button");
const buttons_info = ["Search non-profits", "Search items"];

// dynamically generate buttons
for (let i = 0; i < buttons.length; i++) {
  ReactDOM.createRoot(buttons[i]!).render(
    <React.StrictMode>
      <Button imgsInfo={{ img: SearchButton, alt: "search" }}>
        {buttons_info[i]}
      </Button>
    </React.StrictMode>
  );
}

// data/content for each paragraph
const paragraphOne = pageContent.paragraphOne;
const paragraphTwo = pageContent.paragraphTwo;

//render for paragraphs
const paragraphs: paragraphInfo[] = [
  {
    header: paragraphOne.headerOne,
    paragraph: paragraphOne.paragraphContent,
    imgsInfo: {
      img: FirstParagraphBlob,
      alt: "Decorative blue blob on paragraph",
    },
  },
  {
    header: paragraphTwo.headerTwo,
    paragraph: paragraphTwo.paragraphContent,
    imgsInfo: {
      img: SecondParagraphBlob,
      alt: "Decorative blue blob on paragraph",
    },
  },
];

ReactDOM.createRoot(document.getElementById("react-paragraphs")!).render(
  <React.StrictMode>
    <Paragraphs paragraphs={paragraphs}></Paragraphs>
  </React.StrictMode>
);

//render for footer
const imgs_info_input: imgsInfo[] = [
  {
    img: EmailIcon,
    alt: "An email icon",
    link: "oscar.gaske.cs@gmail.com",
  },
  {
    img: BrowserIcon,
    alt: "A browser icon",
    link: "IFORGETWHERETHISGOES",
  },
  {
    img: GithubIcon,
    alt: "A github icon",
    link: "https://github.com/kurealnum/non-profit-link",
  },
  {
    img: QuestionIcon,
    alt: "A question mark icon",
    link: "IFORGETWHERETHISGOES",
  },
];

ReactDOM.createRoot(document.getElementsByTagName("footer")[0]).render(
  <React.StrictMode>
    <Footer items={imgs_info_input}></Footer>
  </React.StrictMode>
);
