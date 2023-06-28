import './App.css';

function App() {
  return (
    <div>
      <nav id="navigation">
        <h1>Amari Johnson's Portfolio</h1>
        <ul id="list">
          <li><a href="#aboutme">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>

      <aside>
        <section>
          <h1>About Me</h1>
          <p>
            This is information about me, my name is Amari Johnson, and this is information about me Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla iaculis lacinia tincidunt. Quisque cursus lacus leo, ut lacinia quam ultrices ut. Fusce tristique luctus
            diam, consectetur tincidunt est viverra id. Nullam sed lobortis felis, in finibus sem.
            <br /><br />
            Aenean varius semper felis, vel pretium velit vestibulum eu. Aenean sed feugiat eros. Phasellus rutrum ex eu tellus maximus
            vehicula. Integer in tempus ligula. Aenean ac odio finibus, tempus dui eget, volutpat purus. Proin elit lectus, lobortis eu
            lectus eget, aliquam cursus velit. Nam pellentesque iaculis purus, ac vulputate tellus luctus nec. Nam varius maximus placerat.
          </p>
        </section>
      </aside>

      <div>
        <section id="firstProject">
          <h1>Spaceship Mission Tracker</h1>
          <a href="https://masterchef842.github.io/Spaceship-Mission-Tracker/">
            <img src="assets/css/images/screencapture-127-0-0-1-5500-index-html-2023-04-20-23_32_54_720.png" alt="" />
          </a>
        </section>
      </div>

      <div>
        <h1>Projects</h1>
        <section>
          <header>Touristy</header>
          <a href="https://github.com/lkrum/Touristy">
            <img src="assets/css/images/touristy.png" alt="Touristy" />
          </a>
        </section>

        <section>
          <header>GoFit</header>
          <a href="git@github.com:asjohnson8735/professional-portfolio.git">
            <img src="\public\gofit.png" alt="GoFit" />
          </a>
        </section>
      </div>

      <footer id="footer">
        <ul id="list">
          <li>512-555-555</li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.github.com">Github</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;