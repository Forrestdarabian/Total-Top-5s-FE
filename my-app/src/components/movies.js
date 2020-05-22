import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "../functionality/accordion";
import logo from "../icons/videocamera.svg";
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
        <NavLink to="/animals">
          <button className="games">Animals</button>
        </NavLink>
        <NavLink to="/game-consoles">
          <button className="games">Game Consoles</button>
        </NavLink>
        <NavLink to="/holidays">
          <button className="games">Holidays</button>
        </NavLink>
        <NavLink to="/zombies-maps">
          <button className="zombies">Zombies Maps</button>
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
              <h1>Movie Top 5's!</h1>
              <h3>
                Interested in Making Your Own Top 5's? Click{" "}
                <a href="./create">Here!</a>
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
        <h1>Choose a Movie Genre Below!</h1>
        <Accordion
          title="Action"
          content="
          <h3>5. Django Unchained (2012)</h3>
          <p>Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave.</p>
          <h3>4. Baby Driver (2017)</h3>
          <p>Baby, a music-loving orphan also happens to be the prodigiously talented go-to getaway driver for heist mastermind Doc. With the perfect soundtrack picked out for each and every job, Baby ensures Doc's violent, bank-robbing cronies - including Buddy, Bats and Darling - get in and out of Dodge before it's too late. He's not in it for the long haul though, hoping to nail one last job before riding off into the sunset with beautiful diner waitress Debora. Easier said than done.</p>
          <h3>3. V for Vendetta (2005)</h3>
          <p>Following world war, London is a police state occupied by a fascist government, and a vigilante known only as V (Hugo Weaving) uses terrorist tactics to fight the oppressors of the world in which he now lives. When V saves a young woman named Evey (Natalie Portman) from the secret police, he discovers an ally in his fight against England's oppressors.</p>
          <h3>2. Inglorious Basterds (2009)</h3>
          <p>It is the first year of Germany's occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus, who seeks to avenge the Nazis' execution of her family.</p>
          <h3>1. Fight Club (1999)</h3>
          <p>A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.</p>

          "
        />
        <Accordion
          title="Drama"
          content="
          <h3>5. Requiem for a Dream (2000)</h3>
          <p>Imaginatively evoking the inner landscape of human beings longing to connect, to love and feel loved, the film is a parable of happiness gloriously found and tragically lost. Requiem for a Dream tells parallel stories that are linked by the relationship between the lonely, widowed Sara Goldfarb and her sweet but aimless son, Harry. The plump Sara, galvanized by the prospect of appearing on a TV game show, has started on a dangerous diet regimen to beautify herself for a national audience.</p>
          <h3>4. Blood Diamond (2006)</h3>
          <p>As civil war rages through 1990s Sierra Leone, two men, a white South African mercenary (Leonardo DiCaprio) and a black Mende fisherman (Djimon Hounsou), become joined in a common quest to recover a rare gem that has the power to transform their lives. With the help of an American journalist (Jennifer Connelly), the men embark on a hazardous trek through rebel territory to achieve their goal.</p>
          <h3>3. American History X (1998)</h3>
          <p>Living a life marked by violence and racism, neo-Nazi Derek Vinyard (Edward Norton) finally goes to prison after killing two black youths who tried to steal his car. Upon his release, Derek vows to change his ways; he hopes to prevent his younger brother, Danny (Edward Furlong), who idolizes Derek, from following in his footsteps. As he struggles with his own deeply ingrained prejudices and watches their mother grow sicker, Derek wonders if his family can overcome a lifetime of hate.</p>
          <h3>2. American Beauty (1999)</h3>
          <p>A telesales operative becomes disillusioned with his existence and begins to hunger for fresh excitement in his life. As he experiences a new awakening of the senses, his wife and daughter also undergo changes that seriously affect their family. Critically acclaimed, this film won Oscars for Best Screenplay, Best Director, Best Actor and Best Film.</p>
          <h3>1. Donnie Darko (2001)</h3>
          <p>During the presidential election of 1988, a teenager named Donnie Darko sleepwalks out of his house one night and sees a giant, demonic-looking rabbit named Frank, who tells him the world will end in 28 days. When Donnie returns home, he finds that a jet engine has crashed into his bedroom. Is Donnie living in a parallel universe, is he suffering from mental illness - or will the world really end?</p>

          "
        />
        <Accordion
          title="Horror"
          content="
          <h3>5. Halloween (2007)</h3>
          <p>Nearly two decades after being committed to a mental institution for killing his stepfather and older sister, Michael Myers (Tyler Mane) breaks out, intent on returning to the town of Haddonfield, Ill. He arrives in his hometown on Halloween with the indomitable purpose of hunting down his younger sister, Laurie (Scout Taylor-Compton). The only thing standing between Michael and a Halloween night of bloody carnage is psychologist Dr. Samuel Loomis (Malcolm McDowell).</p>
          <h3>4. 28 Days Later (2002)</h3>
          <p>A group of misguided animal rights activists free a caged chimp infected with the Rage virus from a medical research lab. When London bike courier Jim (Cillian Murphy) wakes up from a coma a month after, he finds his city all but deserted. On the run from the zombie-like victims of the Rage, Jim stumbles upon a group of survivors, including Selena (Naomie Harris) and cab driver Frank (Brendan Gleeson), and joins them on a perilous journey to what he hopes will be safety.</p>
          <h3>3. Alien: Covenant (2017)</h3>
          <p>Bound for a remote planet on the far side of the galaxy, members (Katherine Waterston, Billy Crudup) of the colony ship Covenant discover what they think to be an uncharted paradise. While there, they meet David (Michael Fassbender), the synthetic survivor of the doomed Prometheus expedition. The mysterious world soon turns dark and dangerous when a hostile alien life-form forces the crew into a deadly fight for survival.</p>
          <h3>2. The Shining (1980)</h3>
          <p>Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.</p>
          <h3>1. Sinister (2012)</h3>
          <p>True-crime writer Ellison Oswald (Ethan Hawke) is in a slump; he hasn't had a best seller in more than 10 years and is becoming increasingly desperate for a hit. So, when he discovers the existence of a snuff film showing the deaths of a family, he vows to solve the mystery. He moves his own family into the victims' home and gets to work. However, when old film footage and other clues hint at the presence of a supernatural force, Ellison learns that living in the house may be fatal.</p>
          "
        />
      </div>
      <br />
      <br />
      <footer className="footer pt-80 pt-xs-60">
        <div className="footer-container">
          <h1>Total Top 5's</h1>
          <div className="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
          <div>
            Icons made by{" "}
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
          <div className="left">
            <h4 className="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i className="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i className="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
        </div>
      </footer>{" "}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Movies;
