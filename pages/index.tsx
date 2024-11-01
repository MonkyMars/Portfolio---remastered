import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface navIcons {
  label: string;
  href: string;
  src: string;
}

interface experiences {
  title: string;
  description: string;
  date: string;
}

interface projects {
  title: string;
  description: string;
  date: string;
  image: string;
}
const Home: NextPage = () => {
  const router = useRouter();
  const about_me_text = [
    `I'm Levi Noppers, a 15-year-old software engineer from The Hague, the Netherlands, with a passion for developing web applications.`,
    `Over the past two years, I’ve dedicated myself to learn coding, I mainly focus on the front-end. My journey as a software developer began when I was 12 and wanted to create my first Discord Bot, since then I've improved a lot at coding, day in and day out spent on coding new web-apps.`,
    `I specialize in the front-end and a little back-end, making sure that every project I work on looks professional and works as intended. My experience includes developing multiple fully-functional websites, creating a database-API.`,
    `I’m open to learning and would like to improve my skills, whether it’s by exploring a new framework, or finding better solutions to my problems`,
    `I speak English and Dutch both fluently so in the future I look forward to meeting fellow developers from all over the planet and settling in a team!`,
  ];

  const nav_icons: navIcons[] = [
    { label: "Contact", href: "#aside", src: "/send.png" },
    { label: "About me", href: "#about", src: "/id-card.png" },

    { label: "Experience", href: "#experience", src: "/trophy.png" },
    { label: "Projects", href: "#projects", src: "/code.png" },
  ];

  const experiences: experiences[] = [
    {
      title: "Fullstack hobbyist developer",
      date: "Present",
      description: "Not employed, but making projects to learn and improve",
    },
    {
      title: "Coding seriously",
      date: "29/12/2023",
      description:
        "Realized coding was my dream and started to take it seriously",
    },
    {
      title: "Starting to code",
      date: "27/11/2022",
      description: "Built my first discord bot in Python",
    },
  ];

  const projects: projects[] = [
    {
      title: "CarList",
      description: `CarList is a Next.js project I made on my own, It hasn't got its own database but rather uses multiple API's to fetch the data, such as model names, specs and images. Use the feature CarFinder to find the specs of the entered car. CarList uses 100% TypeScript and Scss.`,
      date: "26/10/2024",
      image: "/carlists.png",
    },
    {
      title: "Something",
      description: `Something is a webstore I designed in JavaScript and TypeScript combined with Next.js. The webapp features logging in with jwt and next-auth as well as saving user preferences. The backend is in TypeScript and SupaBase is used for hosting the data, such as accounts and real time cart. For the design and mainly the fonts I took inspiration from Nothing.tech©.`,
      date: "16/9/2024",
      image: "/something-keyboards.png",
    },
    {
      title: "SchoolTool",
      description:
        "SchoolTool is an ELO (electronic learn environment). You can use SchoolTool to take notes in class, check your homework and assignments as well as plan your entire day using the build in calendar. This project is in JavaScript, Next.js since I did not know TypeScript at the time.",
      date: "15/8/2024",
      image: "/schooltool.png",
    },
    {
      title: "ChatNest",
      description: `ChatNest was my first real project. I made multiple versions and each version topped the previous one looking at complexity. The first one was in plain HTML, CSS and Js, and the last one was in Next.js. ChatNest is a social media platform including private messaging, account creation and updating, posting stories (e.g., tweets) and having full customization over your profile`,
      date: "23/8/2024",
      image: "/chatnest.png",
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{"Levi Noppers | Full Stack Developer"}</title>
        <meta name="description" content="Levi Noppers - Full Stack Developer from The Hague, Netherlands. Specializing in front-end development and web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Levi Noppers | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer specializing in web applications and front-end development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/code.png" />
        
        {/* Keywords and additional info */}
        <meta name="keywords" content="Levi Noppers, Full Stack Developer, Web Development, Front-end, React, Next.js, TypeScript" />
        <meta name="author" content="Levi Noppers" />
        <meta name="robots" content="index, follow" />
        
        <link rel="icon" href="/code.png" />
        <link rel="canonical" href="https://levinoppers-portfolio.vercel.app" />
      </Head>
      <main className={styles.main_container}>
        {/* Aside */}

        <aside id="aside" data-aos="fade-down">
          <header>
            <h2>{"Levi Noppers"}</h2>
            <span>{"Fullstack web developer"}</span>
          </header>
          <button
            onClick={() => router.push("https://www.github.com/monkymars")}
          >
            {"Github"}
            <Image
              src={"/github-mark.svg"}
              alt="github"
              aria-label="github"
              width={30}
              height={30}
            />
          </button>
          <div className={styles.details}>
            <div className={styles.detail}>
              <div>
                <Image
                  src={"/email.png"}
                  alt="email"
                  aria-label="email"
                  width={30}
                  height={30}
                />
                <span>{"Email"}</span>
              </div>
              <label>{"Levi.laptop@hotmail.com"}</label>
            </div>
            <div
              className={styles.detail}
              onClick={() =>
                router.push("https://maps.app.goo.gl/DaZ11s9p4dsVNVjn7")
              }
            >
              <div>
                <Image
                  src={"/map.png"}
                  alt="email"
                  aria-label="email"
                  width={30}
                  height={30}
                />
                <span>{"Location"}</span>
              </div>
              <label>{"The Hague, Netherlands"}</label>
            </div>
          </div>
        </aside>

        {/* Nav */}

        <nav className={styles.Nav} data-aos="fade-right">
          <ul>
            {nav_icons?.map((icon, index) => (
              <li key={index} onClick={() => router.push(icon.href)}>
                <Image
                  src={icon.src}
                  alt={icon.label}
                  aria-label={icon.label}
                  width={35}
                  height={35}
                />
                <span>{icon.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}

        {/* Section for about me*/}
        <section className={styles.about_section}>
          <header>
            <h2 id="about">{"About Me"}</h2>
            <span></span>
          </header>
          <main>
            {about_me_text.map((text, index) => (
              <p key={index} data-aos="fade">
                {text}
              </p>
            ))}
          </main>
        </section>

        {/* Section for experiences */}

        <section className={styles.experience_section}>
          <header>
            <h2 id="experience">{"Experiences"}</h2>
            <span></span>
          </header>
          <main>
            <div className={styles.experiences}>
              <div data-aos="fade-left">
                {experiences?.map((exp, index) => (
                  <div key={index} className={styles.experience}>
                    <span>{exp.date}</span>
                    <h4>{exp.title}</h4>
                    <label>{exp.description}</label>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </section>

        {/* Section for projects */}

        <section className={styles.projects_section}>
          <header>
            <h2 id="projects">{"Projects"}</h2>
            <span></span>
          </header>
          <main>
            {projects?.map((project, index) => (
              <div key={index} data-aos="fade">
                <div className={styles.project}>
                  <header>
                    <label>{project.date}</label>
                    <h3>{project.title}</h3>
                  </header>
                  <main>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={2000}
                      height={2000}
                      draggable={false}
                    />
                    <p>{project.description}</p>
                  </main>
                </div>
              </div>
            ))}
          </main>
        </section>
        <footer
          className={styles.footer}
        >{`© 2024 All Rights Reserved By Levi Noppers.`}</footer>
      </main>
    </>
  );
};

export default Home;
