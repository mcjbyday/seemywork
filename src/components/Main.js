import Hero from './Hero';
import Grit from './Grit';
import Bottom from './Bottom';


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
        <Bottom />
      </main>
      <footer class="footer">Made with logic and arithmetic <a href="https://github.com/mcjbyday/02-seemywork" target="_blank"><span class="githubicon"></span></a></footer>

    </div>
  )
};

export default Main;
