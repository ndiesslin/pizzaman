import * as React from "react"
import { Helmet } from "react-helmet"

// Assets
import "../css/application.scss"
import PizzaMan from "../images/Pizza-Man-Short.gif"
import PizzaManLogo from "../images/Pizza-Man-Logo.svg"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faComputer,
  faImage
} from "@fortawesome/free-solid-svg-icons"

import {
  faTiktok,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
  faSoundcloud,
  faSnapchat
} from "@fortawesome/free-brands-svg-icons"

import { config } from '@fortawesome/fontawesome-svg-core'
// Disable the auto CSS insertion
config.autoAddCss = false

// Performance links
const performanceLinks = [
  {
    text: "America's Got Talent",
    url: "https://drive.google.com/file/d/1HDhilutsT944DdP8yeg82l2QHDppOJtW/view?usp=sharing"
  },
  {
    text: "The Austin Show - Part 1 Golden Buzzer",
    url: "https://youtu.be/qfZK5BrpjxI?t=5876",
  },
  {
    text: "The Austin Show - Part 2 Finals",
    url: "https://youtu.be/JkUnEhAP2to?t=7408",
  },
  {
    text: "The Tonight Show Starring Jimmy Fallon",
    url: "https://drive.google.com/file/d/1Qz5-TDqzwdmIT2LibKlRd6UySrzxj2Nn/view?usp=sharing",
  },
  {
    text: "CBS Weekend News",
    url: "https://youtu.be/u3cAfkrkKh8?t=1106",
  },
  {
    text: "SCREENSHOT Media",
    url: "https://screenshot-media.com/culture/influencers/nick-diesslin-pizza-acrobat/"
  },
  {
    text: "Profoundly Pointless - Podcast",
    url: "https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvMzA3OTMxNC9lcGlzb2Rlcy9mZWVk/episode/aHR0cHM6Ly9hcGkuc3ByZWFrZXIuY29tL2VwaXNvZGUvNDk0MTkxMjg?sa=X&ved=0CAUQkfYCahcKEwjQjY6nqZH3AhUAAAAAHQAAAAAQAQ"
  },
  {
    text: "The Jason Show",
    url: "https://www.youtube.com/watch?v=GzQZD0SmdEA",
  },
  {
    text: "The Jason Show - Second Appearance",
    url: "https://youtu.be/As8zccUQbp4?t=773",
  },
  {
    text: "Twin Cities Live",
    // url: "https://www.twincitieslive.com/food/22265/pizza-dough-throwing/",
    url: "https://web.archive.org/web/20210113160914/https://www.twincitieslive.com/food/22265/pizza-dough-throwing/",
  },
  {
    text: "The Star Tribune",
    url: "https://www.startribune.com/minnesota-pizza-dough-thrower-is-one-of-the-best-in-the-world-at-pizza-acrobatics/600009601/",
  },
  {
    text: "Great Big Story",
    url: "https://www.youtube.com/watch?v=ODOoYGTVvHc",
  },
  {
    text: "Ripley's Believe it or not",
    url: "https://www.ripleys.com/weird-news/pizza-acrobats/",
  },
]

// Contact links
const links = [
  {
    icon: faEnvelope,
    text: "Email",
    url: "mailto:nicholasdiesslin@gmail.com",
  },
  {
    icon: faYoutube,
    iconColor: "#FF0000",
    text: "YouTube",
    url: "https://www.youtube.com/@PizzaManNick?sub_confirmation=1"
  },
  {
    icon: faSnapchat,
    iconColor: "#fffc00",
    text: "Snapchat",
    url: "https://snapchat.com/add/pizzamannickd"
  },
  {
    icon: faTiktok,
    iconColor: "#EE1D52",
    text: "TikTok",
    url: "https://tiktok.com/@pizzamannickdiesslin",
  },
  {
    icon: faInstagram,
    iconColor: "#ffffff",
    text: "Instagram",
    url: "https://www.instagram.com/pizzamannickdiesslin",
  },
  {
    icon: faTwitch,
    iconColor: "#9146FF",
    text: "Twitch",
    url: "https://www.twitch.tv/pizzamannickdiesslin",
  },
  {
    icon: faTwitter,
    iconColor: "#1DA1F2",
    text: "Twitter",
    url: "https://twitter.com/pizzamannick",
  },
  {
    icon: faImage,
    iconColor: "#00ff99",
    text: "GIPHY",
    url: "https://giphy.com/channel/pizzamannick"
  },
  {
    icon: faSoundcloud,
    iconColor: "#ff7700",
    text: "SoundCloud",
    url: "https://soundcloud.com/pizzamannick"
  },
  {
    icon: faComputer,
    iconColor: "#ffffff",
    text: "Professional website",
    url: "https://ndiesslin.com",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet
        meta={[
          {
            name: `description`,
            content: 'Hello, my name is Pizza Man Nick Diesslin',
          },
          {
            property: `og:title`,
            content: 'Pizza Man Nick Diesslin',
          },
          {
            property: `og:description`,
            content: 'Hello, my name is Pizza Man Nick Diesslin',
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: 'ndiesslin',
          },
          {
            name: `twitter:title`,
            content: 'Pizza Man Nick Diesslin',
          },
          {
            name: `twitter:description`,
            content: 'Hello, my name is Pizza Man Nick Diesslin',
          },
        ]}
      >
        <html lang="en" />
        <title>Pizza Man Nick Diesslin</title>
      </Helmet>
      <img src={PizzaMan} alt="Pizza Man, rolling pizza down arm" className="hero" />
      <section>
        <h1>
          Hello, my name is <strong>Pizza Man Nick Diesslin</strong>
        </h1>
        <h2>
          <a href="https://www.youtube.com/@PizzaManNick?sub_confirmation=1" target="_blank" rel="noreferrer">
            I'm Nick and I'm from the year 1991. <strong>Pizza Man</strong> brought me to the future in order to save the world but time travel fused us together and we became: <strong>Pizza Man Nick Diesslin!</strong>
          </a>
        </h2>
      </section>
      <section>
        <p>
          <a href="https://ko-fi.com/pizzaman" target="_blank" rel="noreferrer" className="button button--green">🙏 Donate</a>
          <a href="https://www.redbubble.com/i/t-shirt/Pizza-Man-Nick-Diesslin-Pizza-Slice-by-PizzaManNick/88963887.IJ6L0" target="_blank" rel="noreferrer" className="button">👕 Buy a Pizza Man shirt</a>
          {/* <a href="https://divoominternational.com/PizzaMan" target="_blank" rel="noreferrer" className="button">📺 Buy a pizza pixel screen</a> */}
        </p>
      </section>
      <section>
        <p>
          Places where you can catch me:
        </p>
        <ul>
          {performanceLinks.map((link, index) => (
            <li key={index}>
              <span>
                <a
                  href={`${link.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.text}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p>
          Reach out with inquiries on saving the world together:
        </p>
        <ul className="ul--contact">
          {links.map((link, index) => (
            <li key={index}>
              <span>
                <a
                  href={`${link.url}`}
                >
                  <FontAwesomeIcon icon={link.icon} style={{ color: link.iconColor }} />
                  {link.text}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p>
          Step into my <a href="https://www.youtube.com/channel/UCPckz2E_rLPu7u9S6L2bZvA">doughjo</a> where you can train in pizza acrobatics with me, <strong>Pizza Man Nick Diesslin.</strong>
        </p>
        <p>
          I like pizza ... a lot
        </p>
        <img src={PizzaManLogo} alt="Pizza Man Logo" className="logo margin-bottom-20" />
      </section>
      <footer>
        1991
      </footer>
      <marquee className="top-marquee">Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man... </marquee>
      <marquee className="bottom-marquee">Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man ... Pizza Man... </marquee>
    </main>
  )
}

export default IndexPage
