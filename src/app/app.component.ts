import { Component, OnInit } from "@angular/core";

// import { fa } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJava,
  faUbuntu,
  faPython,
  faJs,
  faAngular,
  faNodeJs,
  faReact,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sambaumohl-com";

  skills = [
    {
      icon: faHtml5,
      name: "HTML",
    },
    {
      icon: faCss3Alt,
      name: "CSS",
    },
    {
      icon: faJs,
      name: "Javascript",
    },
    {
      icon: faJava,
      name: "Java",
    },
    {
      icon: faPython,
      name: "Python",
    },
    {
      icon: faUbuntu,
      name: "Linux",
    },
    {
      icon: faNodeJs,
      name: "Node.js",
    },
    {
      icon: faAngular,
      name: "Angular",
    },
    { icon: faReact, name: "React" },
  ];

  resumeProjects = [
    {
      title: "MyMICDS.net",
      description: "An all-in-one platform for MICDS student life.",
      projectUrl: "https://mymicds.net",
      sourceUrl: "https://github.com/MyMICDS/",
    },
    {
      title: "BYO Style-Based GAN",
      description: "A simple implementation of StyleGAN using PyTorch.",
      sourceUrl: "https://github.com/MeMeBigProgrammer/BYO-GAN",
    },
  ];

  headerLinks = [
    {
      icon: faGithub,
      link: "https://github.com/MeMeBigProgrammer",
      tooltip: "MeMeBigProgrammer",
    },
    { icon: faKey, link: "assets/pgp/key.txt", tooltip: "PGP Public Key" },
    {
      icon: faEnvelope,
      link: "mailto:mail@sambaumohl.me",
      tooltip: "mail@sambaumohl.me",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/sam-baumohl09",
      tooltip: "LinkedIn Profile",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/sam_b2327",
      tooltip: "@sam_b2327",
    },
  ];
}
