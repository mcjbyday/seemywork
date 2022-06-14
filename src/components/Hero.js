import mediaBiteSites from "../images/figures/Capture-bitesites.gif"
// import './Hero.css';

function Hero() {
  
  return ( 
    <section class="content_containers" id="card_container_hero">
      {/* <section class="allcards_container"> */}
        <a class="tile_link" href="https://bitesites.herokuapp.com/" target="_blank" rel="noreferrer">
          <div class="pointer_items_right">BiteSites Website Builder</div>
            <div class="pointer_items_right_arrow">⤸</div>
            <section class="hero_example" id="bitesites" style={{backgroundImage: `URL(${mediaBiteSites})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", objectFit: "contain"}}>
              {/* <img src={mediaBiteSites} alt="CodeChorus application usage"></img> */}
              {/* img tagaroo to mediaBiteSites */}
              <p class="tile_label">FullStack Development</p>
            </section>
        </a>
    </section>
  )
};

export default Hero;
