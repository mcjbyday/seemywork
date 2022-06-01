import Hero from './Hero';
import Grit from './Grit';
import Bottom from './Bottom';
import { useState } from 'react';

import angel from "../images/figures/angel.jpg";
import profilePicture from "../images/figures/img_0694682396022516.png";


function Main() {
  // let myName = "Michael Jacobs";
  // let navItemList = ["About", "Work", "Contact"];

  let [myAvatar, setMyAvatar] = useState(angel);


  return ( 
    <div>
      <main className="main_container">
        {/* top overview container and content */}
        <section className="content_containers" id="top_container">
            <div className="about_container">
                <section className="section_name">About</section>
                <section className="section_name">
                    <img className="avatar_img col-1" alt="Angel Statue" src={myAvatar} onClick={() => (myAvatar === angel) ? setMyAvatar(profilePicture) : setMyAvatar(angel)}></img>
                </section>   
                <div className="pointer_items_custom">( Tap on me to keep me around... )</div>
                <div className="pointer_items_custom_arrow">⤻</div>
            </div>
            <article className="section_article">
                <p className="article_copy">I build things using contemporary skills and relevant tools...</p>
                <p className="article_copy">I recently completed my sixth year operating in life sciences technology start ups...</p>
                <p className="article_copy">I was previously a product manager for <a href="https://twitter.com/levelex" target="_blank" rel="noreferrer"><span>@LevelEx</span></a></p>
                <p className="article_copy">Check out some of my work...</p>
            </article>
        </section>
        {/* work container, tiles, and content */}
        <Hero />
        <Grit />
        <Bottom />
      </main>
      <footer className="footer">Made with logic and arithmetic <a href="https://github.com/mcjbyday/02-seemywork" target="_blank"><span className="githubicon"></span></a></footer>

    </div>
  )
};

export default Main;
