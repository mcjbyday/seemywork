import Hero from './components/Hero';
import Grit from './components/Grit';


function Main() {
  // let myName = "Michael Jacobs";
  // let navItemList = ["About", "Work", "Contact"];

  return ( 
    <div>
      <main class="main_container">
        {/* top overview container and content */}
        <section class="content_containers" id="top_container">
            <div class="about_container">
                <section class="section_name">About</section>
                <section class="section_name">
                    <img id="avatar_img" class="col-1" alt="Shows Head of an Angel statue"></img>
                </section>   
                <div class="pointer_items_custom">( Tap on me to keep me around... )</div>
                <div class="pointer_items_custom_arrow">⤻</div>
            </div>
            <article class="section_article">
                <p class="article_copy">I build things using contemporary skills and relevant tools...</p>
                <p class="article_copy">I recently completed my sixth year operating in life sciences technology start ups...</p>
                <p class="article_copy">I was previously a product manager for <a href="https://twitter.com/levelex" target="_blank" rel="noreferrer"><span>@LevelEx</span></a></p>
                <p class="article_copy">Check out some of my work...</p>
            </article>
        </section>
        {/* work container, tiles, and content */}
        <section class="content_containers" id="card_container">
        <Hero />
        <Grit />
        </section>
        {/* contact and CTA container */}
        <section class="content_containers" id="CTA_container">
            <section class="section_name">Contact</section>
            <article class="section_article">
                <p class="article_copy">Get in touch, and let's build something together.</p>        
                <p class="article_copy">Follow me on <a href="http://www.github.com/mcjbyday" target="_blank" rel="noreferrer">Github</a></p>
                <p class="article_copy">Connect with me on <a href="https://www.linkedin.com/in/michael-j-76050285/" target="_blank" rel="noreferrer" >LinkedIn</a></p>
                <p class="article_copy">Follow me on <a href="https://twitter.com/mcjbyday/" target="_blank" rel="noreferrer">Twitter</a></p>
            </article>
        </section>
      </main>
    </div>
  )
};

export default Main;
