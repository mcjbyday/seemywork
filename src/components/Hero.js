import mediaCodeChorus from "../images/figures/Capture-codechorus.gif"
// import './Hero.css';

function Hero() {
  
  return ( 
    <section class="content_containers" id="card_container_hero">
      {/* <section class="allcards_container"> */}
        <a class="tile_link" href="https://codechorusforum.herokuapp.com/" target="_blank" rel="noreferrer">
            <div class="pointer_items_left">"CodeChorus" CRUD</div>
            <div class="pointer_items_left_arrow">⤹</div>
            <section class="hero_example" id="codechorus" style={{backgroundImage: `URL(${mediaCodeChorus})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}}>
              {/* <img src={mediaCodeChorus} alt="CodeChorus application usage"></img> */}
              {/* img tagaroo to mediaCodeChorus */}
              <p class="tile_label">FullStack Development</p>
            </section>
        </a>
    </section>
  )
};

export default Hero;
