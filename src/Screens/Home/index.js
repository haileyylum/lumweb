import React, { Component } from "react";
import axios from "axios";
// import { TweenMax, Draggable } from "gsap/all";
import "./home.scss";
// import SmoothScroll from "../../Components/SmoothScroll"

// http://localhost:3000/?code=151b8caedbb30cbbd479bc7c5a5e7d6dee31565cc0eaeaa66c145026b29cca23
// https://dribbble.com/oauth/token?client_id=a7881796f4555b551ecf767833e6018e644612e1468a16866ee05f88107fe4ee&client_secret=fa7e77826e801485248f1425a875e7b8d1edcee8b056d009f09635c7ad49a196&code=9498e63a167599313d801afd3481eac70a06b53f3acc334f69c64ad7d16cd90b
// https://api.dribbble.com/v2/user/shots?access_token=783d20c342a1fd9a16bdd90b52dbcb9e0e25e1d06b754f16d42bd771ad568ec8&page=1&per_page=4

// 092a4917148e05c20e99e7dd867e154162718c00eb699ba9edc1efbb2e3309e8
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      results: [],
      images: ["https://source.unsplash.com/random"]
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.dribbble.com/v2/user/shots?access_token=092a4917148e05c20e99e7dd867e154162718c00eb699ba9edc1efbb2e3309e8"
      )
      .then(response => {
        const profile = response.data;
        this.setState({ imageURL: response.html_url, results: profile });
        console.log("huh", response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // this.dragInstance = Draggable.create(this.dragTarget, {
    //     type: "rotation",
    //     onPress: function() {
    //       console.log("draggable clicked!!!");
    //     },
    //     onDragStart: function() {
    //       console.log("Dragging!!!");
    //     }
    //     // dragClickables: true
    //   });
  }

  render() {
    const { imageURL, results } = this.state;

    return (
      <div>
        {/* <SmoothScroll> */}

        <div className="layer">
          <div className="site-desc">
            <p>
              After being obsessed with customize my own blogger theme in the
              past (about 12 years ago). I officially an creative coder, UI & UX
              designer. As I graduated from media art, it helps me a lot on this
              sector. I like visuals, I loved to create with different media,
              medium.
            </p>
          </div>
        </div>

        <div className="layer">
          <div className="profilepic">
            <div className="ppbg"></div>
            <img src={require("../../Assets/Images/lumprofile.jpg")} alt="" />
          </div>
        </div>

        <div className="layer">
          <div className="specializein">
            <p>
              Web design | App design | Front end development | Digital
              Materials
            </p>
          </div>
        </div>

        <div className="layer">
          <div className="skillset">
            <ul>
              <p> Web Development & App Development</p>

              <li>HTML</li>
              <li>SCSS</li>
              <li>CSS</li>
              <li>Jquery</li>
              <li>React</li>
              <li>Vue</li>
              <li>PHP</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>Material Design</li>
              <li>React Native</li>
              <li>Lottie</li>
            </ul>

            <div className="right-align">
              <ul>
                <p>Graphic Design (For digital) & UI UX</p>

                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Sketch</li>
                <li>XD</li>
                <li>Figma</li>
                <li>Adobe Lightroom</li>
                <li>Adobe After Effect</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="layer">
          <div className="experience">
            <p className="maintitle">Experiences</p>
            <ul>
              <li>
                <div>
                  <h5>Cloud Coder</h5>
                  <p> Mar 2016 – Jun 2016</p>
                  <p>
                    Worked as Web and graphic design intern for 3 and half
                    months. From design logo, favicon, Facebook banner and
                    Shopify app banner, edit photos, execute client's design
                    into code to maintenance websites from CMS or start from
                    scratch.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h5>Melon Media</h5>
                  <p> Jun 2017 – Dec 2018</p>
                  <p>
                    Worked as Web and graphic design intern for 3 months. From
                    social media posts to website materials such as banner,
                    product items, description photos, logo, gif. Major on html,
                    css, php, wordpress front end coding also design website,
                    and continue as full time Web designer for about 1 and half
                    years.
                  </p>
                </div>
              </li>
              <li>
                <h5>Sureplify</h5>
                <p> January 2019 to current</p>
                <p>
                  Worked as UI UX for both web and app development. At the same
                  time do some front end development, from Sketch design mock up
                  till execution on front end coding. Use lottie on animation
                  for website and app development
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="layer">
          <div className="right-align gallery-shot">
            <p className="maintitle">Here my shot! from dribbble</p>
            <div className="random-shot">
              {results.slice(0, 7).map(result => (
                <li>
                  <img src={result.images.normal}></img>
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Copyrighted © Wai Lum All Right Reserved.</p>
        </div>
        {/* </SmoothScroll> */}
      </div>
    );
  }
}

export default Home;
