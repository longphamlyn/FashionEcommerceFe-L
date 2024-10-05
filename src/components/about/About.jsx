export default function About() {
    return (
      <section className="container about-us">
        <div className="titleAbout">
          <h2>ABOUT UOMO</h2>
        </div>
        <div className="about-us__content">
          <p>
            <img
              className="about-image"
              loading="lazy"
              src="./src/assets/image/about-1.jpg"
              width="1410"
              height="550"
              alt="image"
            />
          </p>
          <div className="content-wrapper">
            <h3>OUR STORY</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you are unto that.
            </p>
            <div className="mission-vision">
              <div className="mission">
                <h5>Our Mission</h5>
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="vision">
                <h5>Our Vision</h5>
                <p>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="company-section">
            <div className="company-image-wrapper">
              <img
                className="company-image"
                loading="lazy"
                src="./src/assets/image/about-2.jpg"
                width="450"
                height="500"
                alt="image"
              />
            </div>
            <div className="company-description">
              <h5>The Company</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  