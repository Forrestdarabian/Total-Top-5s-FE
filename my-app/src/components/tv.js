import React from "react";
import Accordion from "../functionality/accordion";
import { NavLink } from "react-router-dom";
import logo from "../icons/tv.svg";
import "../App.css";

function Movies() {
  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="nav-container">
        <NavLink to="/movies">
          <button className="movies">Movies</button>
        </NavLink>
        <NavLink to="/music">
          <button className="music">Music</button>
        </NavLink>
        <NavLink to="/tv">
          <button className="tv">T.V. Shows</button>
        </NavLink>
        <NavLink to="/games">
          <button className="games">Video Games</button>
        </NavLink>
      </div>
      <br />
      <div className="second-nav-container">
        <NavLink to="/home">
          <button className="home">Home</button>
        </NavLink>
      </div>
      <div className="Home">
        <header className="Home-header">
          <div>
            <br />
            <div className="text-section">
              <h1>T.V. Show Top 5's!</h1>
              <h3>
                Interested in Making Your Own Top 5's? Click
                <a href="./create"> Here!</a>
              </h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
        <h1>Choose a T.V. Show Genre Below!</h1>

        <Accordion
          title="Drama"
          content="
          <h3>5. Dexter (2006-2013)</h3>
          <p>Dexter Morgan is a Miami-based blood splatter expert who doesn't just solve murders; he commits them too. In fact, he's a serial killer -- but he only murders the guilty, so he feels justified with his lifestyle choices. His policewoman sister and his cop co-workers have no idea Dexter lives a double life; however, adoptive father Harry knows his secret, and does, in fact, help Dexter hone his skills. It's a unique brand of justice for which charming Dexter feels a psychological hunger.</p>
          <h3>4. Sons of Anarchy (2008-2014)</h3>
          <p>Single father Jax Teller finds his loyalty to his outlaw motorcycle club tested by his growing unease concerning the group's lawlessness. While the club protects and patrols the town of Charming, Calif., keeping drug dealers away, its activities also include a thriving -- and lucrative -- illegal arms business.</p>
          <h3>3. American Horror Story (2011-)</h3>
          <p>An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, and a slasher summer camp.</p>
          <h3>2. Breaking Bad (2008-2013)</h3>
          <p>Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.</p>
          <h3>1. Lost (2004-2010)</h3>
          <p>The survivors of Oceanic Flight 815 were 1,000 miles off course when they crashed on a lush, mysterious island. Each person possesses a shocking secret, but they've got nothing on the island itself, which harbors a monstrous security system, a series of underground bunkers and a group of violent survivalists hidden in the shadows.</p>

          "
        />
        <Accordion
          title="Comedy"
          content="
          <h3>5. Freaks and Geeks (1999-2000)</h3>
          <p>Growing up circa 1980, a misfit high-school student and his pals are probably destined to become new media millionaires, but right now they're stuck in school, where all the girls are a foot taller and bullies terrorize the gym class. Meanwhile, his older sister is flirting with the dope-smoking bad boys, cutting classes and questioning the point of getting good grades.</p>
          <h3>4. It's Always Sunny in Philadelphia (2005-)</h3>
          <p>Depraved underachieving might look easy, but for the egocentric Mac, Charlie, Dennis, Frank and Dee, it's an art form. It's Always Sunny in Philadelphia follows The Gang, the owners of the unsuccessful Paddy's Pub; a group of degenerates who loves nothing more than to scheme, conspire, and mostly revel in each other's misery. Whether gaming the welfare system, exploiting dumpster babies, pretending to be crippled, impersonating officers, or faking funerals, The Gang never stoops too low in the name of making a buck.</p>
          <h3>3. Shameless (2011-)</h3>
          <p>Oscar-nominated actor William H. Macy stars as Frank Gallagher, a single father of six who spends much of his free time drinking at bars. The Gallagher children -- led by oldest daughter Fiona (Emmy Rossum), who takes on much of the child-rearing responsibility due to her mother's absence -- manage to raise themselves in spite of Frank's lack of parenting and unusual parenting style when he does choose to act like a father. The drama is an adaptation of the BAFTA Award-winning British show of the same name.</p>
          <h3>2. Parks and Recreation (2009-2015)</h3>
          <p>Leslie Knope, a midlevel bureaucrat in an Indiana Parks and Recreation Department, hopes to beautify her town (and boost her own career) by helping local nurse Ann Perkins turn an abandoned construction site into a community park, but what should be a fairly simple project is stymied at every turn by oafish bureaucrats, selfish neighbours, governmental red tape and a myriad of other challenges. Leslie's colleague Tom Haverford, who delights in exploiting his position for personal gain, is as likely to undermine her efforts as to help her, while her boss, Ron Swanson, is adamantly opposed to government in any form, even though he's a bureaucrat himself.</p>
          <h3>1. The Office (2005-2013)</h3>
          <p>This US adaptation, set at a paper company in Scranton, Pa., has a similar documentary style to that of the Ricky Gervais-led British original. It features the staff of Dunder-Mifflin, a staff that includes characters based on characters from the British show (and, quite possibly, people you work with in your office). There's Jim, the likable employee who's a bit of an everyman. Jim has a thing for receptionist-turned-sales rep Pam (because office romances are always a good idea). There's also Dwight, the successful co-worker who lacks social skills and common sense. And there's Ryan, who has held many jobs at the company.</p>

          "
        />
      </div>
      <br />
      <br />
      <footer class="footer pt-80 pt-xs-60">
        <div class="footer-container">
          <h1>Total Top 5's</h1>
          <div class="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
          <div>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/smalllikeart"
              title="smalllikeart"
            >
              smalllikeart
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div class="left">
            <h4 class="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i class="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i class="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
        </div>
      </footer>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Movies;
