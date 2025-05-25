"use strict";

/**
 * 
 * @param {string} title 
 */
export function createHeader(title) {
    const bar = document.createElement("nav");

    const header = document.createElement("header");
    const siteTitle = document.createElement("h1");
    siteTitle.innerText = "Argos Wiki";
    const pageTitle = document.createElement("h2");
    pageTitle.innerText = title;
    header.append(siteTitle, pageTitle);
    bar.appendChild(header);

    bar.innerHTML += `
        <hgroup>
            <section>
                <h2>Programming <i class="fa-solid fa-arrow-down"></i></h2>
                <div>
                    <a href="./pages/other/cobalt.html">Cobalt <i>(OS)</i></a>
                    <a href="./pages/other/iridium.html">Iridium <i>(Engine)</i></a>
                    <a href="./pages/games/stormsinger.html">Stormsinger <i>(Game)</i></a>
                    <a href="./pages/games/khaal.html">Khaal <i>(Game)</i></a>
                </div>
            </section>
            <section>
                <h2>Writing <i class="fa-solid fa-arrow-down"></i></h2>
                <div>
                    <a href="./pages/books/surfacetension/bloodletter.html">Bloodletter <i>(Novel)</i></a>
                    <a href="./pages/books/surfacetension/chainbinder.html">Chainbinder <i>(Novel)</i></a>
                    <a href="./pages/books/surfacetension/godslayer.html">Godslayer <i>(Novel)</i></a>
                    <a href="./pages/books/deathbender/redhand.html">Redhand <i>(Novella)</i></a>
                    <a href="./pages/books/deathbender/blueblood.html">Blue Blood <i>(Novella)</i></a>
                    <a href="./pages/books/fallfromgrace/thefatherofall.html">The Father of All <i>(Novella)</i></a>
                    <a href="./pages/books/fallfromgrace/thefinalsunset.html">The Final Sunset <i>(Novella)</i></a>
                    <a href="./pages/books/fallfromgrace/anemptybattlefield.html">An Empty Battlefield <i>(Novella)</i></a>
                    <a href="./pages/books/allislost/thereishope.html">There is Hope <i>(Novel)</i></a>
                    <a href="./pages/books/allislost/thetunnelslight.html">The Tunnel's Light <i>(Novel)</i></a>
                    <a href="./pages/books/allislost/thefinalbreath.html">The Final Breath <i>(Novella)</i></a>
                    <a href="./pages/books/allislost/whenallislost.html">When All is Lost <i>(Novel)</i></a>
                    <a href="./pages/books/theharbingers/lostlamb.html">Lost Lamb <i>(Novella)</i></a>
                    <a href="./pages/books/theharbingers/harbinger.html">Harbinger <i>(Novel)</i></a>
                    <a href="./pages/books/theharbingers/dustalive.html">Dust Alive <i>(Novel)</i></a>
                    <a href="./pages/books/theartofinvokingagod.html">The Art of Invoking a God <i>(Novella)</i></a>
                </div>
            </section>
            <a href="./pages/blog/blog.html">Blog</a>
        </hgroup>
        <aside>
            <p>An idiot admires complexity, a genius admires simplicity.</p>
            <p>&mdash;Terry A. Davis</p>
        </aside>
    `;

    document.body.insertBefore(bar, document.body.childNodes.item(0));
    document.title = "Argos Wiki | " + title;
}
