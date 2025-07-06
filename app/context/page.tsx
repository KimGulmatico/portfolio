export const dynamic = "force-dynamic";

export default async function Page() {
  const sentences = [
    "Welcome to My Portfolio! Here, you will find a comprehensive showcase of my work, skills, and achievements that reflect my dedication to coding and design.",
    "This is a sample page designed to give you a glimpse into the projects I've worked on and the creative solutions I've developed over time.",
    "Explore my projects and skills, ranging from web development to software engineering, and discover how I bring ideas to life through innovative thinking and meticulous execution.",
    "Feel free to reach out if you have any questions, collaboration opportunities, or simply want to connect and discuss ideas. I'm always open to engaging conversations and new challenges.",
    "Coding is my passion, and through this portfolio, I aim to share my journey, the lessons I've learned, and the milestones I've achieved in the world of technology.",
    "Here you will find a collection of my most ambitious projects and achievements, each one representing a unique challenge and a creative solution that showcases my expertise and commitment.",
    "Dive into the world of creativity and innovation through my portfolio, where every project is a testament to my ability to think outside the box and deliver exceptional results.",
    "Discover how I turn ideas into reality with code and design, combining technical proficiency with artistic vision to create solutions that are both functional and visually appealing.",
    "Every project is a story, and every story is a step forward in my journey. Through this portfolio, I invite you to explore the narratives behind my work and the impact they've had on my growth as a developer.",
    "Let's collaborate and create something extraordinary together! Whether it's a groundbreaking project or a simple idea, I'm excited to bring my skills and creativity to the table and make it happen.",
    "This portfolio is not just a collection of projects; it's a reflection of my passion for technology, my drive for excellence, and my commitment to continuous learning and improvement.",
    "From the initial concept to the final implementation, every project in this portfolio demonstrates my ability to adapt, innovate, and deliver solutions that meet and exceed expectations.",
    "Through this portfolio, I aim to inspire others to pursue their passions, embrace challenges, and strive for excellence in everything they do.",
    "Thank you for visiting my portfolio. I hope you find it insightful, inspiring, and a true representation of my journey as a developer and designer.",
    "Feel free to explore each section, dive into the details of my projects, and reach out if you have any questions or would like to collaborate on something exciting.",
    "This portfolio is a living document, constantly evolving as I take on new challenges, learn new skills, and push the boundaries of what's possible with technology.",
    "Every line of code, every design element, and every project in this portfolio is a reflection of my dedication to creating solutions that make a difference and leave a lasting impact.",
    "Through this portfolio, I aim to showcase not just my technical skills, but also my ability to think critically, solve problems creatively, and communicate effectively with clients and collaborators.",
    "Thank you for taking the time to explore my portfolio. I look forward to connecting with you and sharing more about my journey, my work, and my vision for the future.",
  ];

  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A showcase of my work, skills, and achievements in coding and design." />
        <title>My Portfolio</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "My Portfolio",
            "description": "Explore my projects, skills, and achievements in coding and design.",
            "author": {
              "@type": "Person",
              "name": "Your Name",
            },
            "datePublished": new Date().toISOString(),
            "image": "https://example.com/images/portfolio.jpg",
          })}
        </script>
      </head>
      <body>
        <header>
          <h1>Welcome to My Portfolio</h1>
        </header>
        <main id="main-content">
          <article className="portfolio-intro">
            <p>{randomSentence}</p>
          </article>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}