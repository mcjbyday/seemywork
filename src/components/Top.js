function Top() {
  let myName = "Michael Jacobs";
  let navItemList = ["About", "Work", "Contact"];

  return ( 
    <div>
      <header className="header_container">
        <section className="header_name">{myName}</section>
        {/* semantic tag nav combined with unordered list  */}
        <nav className="header_nav">
          <ul className="nav_links">
            <li><a className="nav_items" href="#top_container">{navItemList[0]}</a></li>
            <li><a className="nav_items" href="#card_container">{navItemList[1]}</a></li>
            <li><a className="nav_items" href="#CTA_container">{navItemList[2]}</a></li>
          </ul>
        </nav>
        {/* banner structure and content */}
      </header>
      <figure className="banner_section">
        <figcaption className="banner_label">Bring joy back to the web</figcaption>
      </figure>
    </div>
  )
};

export default Top;
