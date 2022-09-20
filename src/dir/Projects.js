import React, { useEffect } from "react";
import jandkscreenshot from "../css/photos/JandkScreenshot.png";
import twitchSubsScreenshot from "../css/photos/twitchSubsScreenshot.png";
import teamBuilder from "../css/photos/team-builder.png";
import "../css/projects.sass";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "This is a list of my latest completed projects.  I may be working on other things that are on my github page but are not finished just yet."
      );
  }, []);
  return (
    <div className="container-p">
      <header className="header-p">
        <h1>Projects</h1>
        <p>Here's a few of the projects I've made.</p>
      </header>
      <a href="https://jandkpaintsandpix.com" target="_blank" className="p1">
        <h2>J&amp;K Paints and Pixels</h2>
        <img src={jandkscreenshot}></img>
        <p className="description">
          A react website I made for a local business. The portfolio page uses
          the facebook graph API to pull the most recent pictures from their
          uploads and displays them in columns, but ordered left to right.
        </p>
      </a>
      <a
        href="https://twitch-streamer-check.herokuapp.com"
        target="_blank"
        className="p2"
      >
        <h2>Twitch Follows Checker</h2>
        <img src={twitchSubsScreenshot}></img>
        <p className="description">
          An app I made to showcase intergration with the Twitch.tv API. This
          app uses OAUTH2 to sign into twitch and pulls the list of streamers
          you follow, then displays their stream info if they are currently
          streaming. Since it is hosted on heroku's hobby dynos it may take a
          few seconds to start when you visit.
        </p>
      </a>
      <a
        href="https://github.com/AaronMikelKey/team-builder"
        target="_blank"
        className="p3"
      >
        <h2>CLI Team Builder</h2>
        <img src={teamBuilder}></img>
        <p className="description">
          This is a CLI app that will allow you to build a team consisting of a
          manager, and as many engineers and/or interns as you would like. You
          can then input their information, and the app will create a static
          HTML page that displays the team.
        </p>
      </a>
      <a href="https://d-cubed.herokuapp.com/" target="_blank" className="p4">
        <h2>Lawn Care Scheduling App</h2>
        <img src="https://raw.githubusercontent.com/AaronMikelKey/d-cubed-lawncare/main/public/Screenshot1.png"></img>
        <p className="description">
          This was a group project for a gentleman who wanted to create a
          website for his growing business.
          <a href="https://github.com/AaronMikelKey/d-cubed-lawncare">
            You can view the repo and contributors here.
          </a>
        </p>
      </a>
    </div>
  );
};

export default Projects;
