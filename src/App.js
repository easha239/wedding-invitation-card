import React from "react";
import HTMLFlipBook from "react-pageflip";
import cover from "./images/cover.png";
import P1Img from "./images/p1-img.png";
import P1 from "./images/p1.png";
import P2Img from "./images/p2-img.png";
import P2 from "./images/p2.png";
import "./styles.css";
 

const pages = [P1Img, P1, P2Img, P2];

export default function App() {
  return (
    <div className="App">
    
      <h1>Easha & Sabbir</h1>

      <div className="book">
        <HTMLFlipBook className="flipBook"
          width={450}
          height={600}
          // minWidth={200}
          // maxWidth={500}
          // minHeight={320}
          // maxHeight={750}
          size="fixed"
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          style={{ background: "lavender" }}
        >
          <div className="demoPage">
            <img src={cover} alt="cover" />
          </div>
          {pages.map((page, i) => (
            <div className="demoPage" key={i}>
              <img src={page} alt={i} 
              />
              
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
