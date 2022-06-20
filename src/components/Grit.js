import bitesites from "../images/figures/Capture-codechorus.gif";

import mediaEtch from "../images/figures/etch.gif";

import mediaWeather from "../images/figures/Capture-getweather.gif"; 
  
import mediaQuiz from "../images/figures/Capture-quizapp.gif";

import mediaFinancial from "../images/figures/Capture-notfinancialadvice.gif";
  
import mediaDayplanner from "../images/figures/Capture-dayplanner.gif";
  
import mediaMicra from "../images/figures/Capture-micraimplantation.gif";
  
import mediaCascades from "../images/figures/Screenshot-cascades.png";
  
import mediaCardio from "../images/figures/Screenshot-cardioex.gif";
  
import mediaTopDerm from "../images/figures/Screenshot-top-derm.png";
  
import mediaCovid from "../images/figures/Screenshot-covid19.png";


function Grit() {
  
  return ( 
    <section class="content_containers" id="card_container_grit">
        <a class="tile_link" href="https://codechorusforum.herokuapp.com/" target="_blank" rel="noreferrer">
            <div class="pointer_items_left">CodeChorus Tech Forum</div>
            <div class="pointer_items_left_arrow">⤹</div>
            <section class="tile_example" style={{backgroundImage: `URL(${bitesites})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="codechorus">
                <p class="tile_label">FullStack Development</p>
            </section>
        </a>
        <a class="tile_link" href="https://mcjbyday.github.io/digizen/" target="_blank" rel="noreferrer">
            <div class="pointer_items_right">"Digizen" Etch-a-Sketch</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaEtch})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="etch">
                <p class="tile_label">Front-End Development</p>
            </section>
        </a>
        <a class="tile_link" href="https://mcjbyday.github.io/wheresmyweather/" target="_blank" rel="noreferrer">
            <div class="pointer_items_left">Where's my weather</div>
            <div class="pointer_items_left_arrow">⤹</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaWeather})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="getweather">
                <p class="tile_label">Front-End Development</p>
            </section>
        </a>
        <a class="tile_link" href="https://mcjbyday.github.io/quizapp/" target="_blank" rel="noreferrer">
            <div class="pointer_items_right">Quiz App</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaQuiz})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="quizapp">
                <p class="tile_label">Front-End Development</p>
            </section>
        </a>
        <a class="tile_link" href="https://mcjbyday.github.io/notfinancialadvice/" target="_blank" rel="noreferrer">
            <div class="pointer_items_left">Not Financial Advice</div>
            <div class="pointer_items_left_arrow">⤹</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaFinancial})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="notfinancialadvice">
                <p class="tile_label">Front-End Development</p>
            </section>
        </a>
        <a class="tile_link" href="https://mcjbyday.github.io/dayplanner/" target="_blank" rel="noreferrer">
            <div class="pointer_items_right">Day Planner</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaDayplanner})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="dayplanner">
                <p class="tile_label">Front-End Development</p>
            </section>
        </a>
        <a class="tile_link" href="https://patents.google.com/patent/WO2016179366A1/" target="_blank" rel="noreferrer">
            <div class="pointer_items_right">Micra Pacing System</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaMicra})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="micra">
                <p class="tile_label">Patent Co-inventor, R&D</p>
            </section>
        </a>
        <a class="tile_link" href="https://www.levelex.com/partnerships/pharma" target="_blank" rel="noreferrer">
            <div class="pointer_items_left">Cascades</div>
            <div class="pointer_items_left_arrow">⤹</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaCascades})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="cascades">
                <p class="tile_label">R&D, Narrative Design, Editorial</p>
            </section>
        </a>
        <a class="tile_link" href="https://www.youtube.com/watch?v=1eplp1s0tG0" target="_blank" rel="noreferrer">
            <div class="pointer_items_right">Cardio Ex</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaCardio})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="cardio">
                <p class="tile_label">R&D, Narrative Design, Editorial</p>
            </section>
        </a>
        <a class="tile_link" href="https://www.levelex.com/blog/for-derms-by-derms-top-derm-from-the-physician-advisors-point-of-view" target="_blank" rel="noreferrer">
            <div class="pointer_items_left">Top Derm</div>
            <div class="pointer_items_left_arrow">⤹</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaTopDerm})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="top-derm">
                <p class="tile_label">R&D</p>
            </section>
        </a>
        <a class="tile_link" href="https://www.levelex.com/blog/fighting-covid-19-with-video-game-technology" target="_blank" rel="noreferrer">
            <div class="pointer_items_right">Cardio Ex: Clinical</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="tile_example" style={{backgroundImage: `URL(${mediaCovid})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}} id="covid-19">
                <p class="tile_label">Post-launch Content and Feature Expansion</p>
            </section>
        </a>
    </section>
  )
};

export default Grit;
