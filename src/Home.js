import logo from './res/logo.png';
import portrait from './res/portrait.jpg';
import './Home.css';

function Home() {
  return (
    <>
      <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <img src={portrait} className="Home-portrait" alt="portrait" />
        <h1 className="Home-heading">Welcome to Zoe Li's Erhu Studio</h1>
        
      </header>
      </div>
      <div className="Home-content">
        <text>
          At Zoe Li's Erhu Studio, we are dedicated to providing high-quality erhu lessons for students of all ages and skill levels.{"\n"}
          Our experienced instructors are passionate about sharing their love for the erhu and helping students develop their musical talents.{"\n"}
          Whether you are a beginner looking to learn the basics or an advanced player seeking to refine your skills, we have a program that will suit your needs.{"\n"}
          Join us at Zoe Li's Erhu Studio and embark on a musical journey that will enrich your life and bring joy through the beautiful sounds of the erhu.{"\n"}
        </text>
        {/* <h1 className="Home-subheading">Bio</h1> */}
        <p>
          Zoe Li is a Chinese violin—(erhu, which instrument has only two strings) player and teacher in Wellington. She has finished her Bachelor of Music at Wintec, Hamilton in 2019 and Master of  Music at Victoria University,Wellington, in 2021. Within her classical career, Zoe has worked with lots of quartet, ensemble and Orchestra all over the world, including Beijing string ensemble, NZ ECPF quartet, Singapore folk orchestra and so on. In additional, with her 6 years teaching experience, She is also love to teaching erhu from age 5 to adult.
        </p>
        <p>
          Zoe has started to learn erhu when she was 6 years old. At the age of 15 Zoe began taking private lessons from a famous erhu player in China, named Sun Huang and during the same year gained her Grade 10 exam for C.M.C.A (Chinese Music Cultural Arts). In 2005 she competed in Beijing’s Strings Music competition and was awarded the silver award for second place. In 2008, she was invited to play the erhu in the “Bird Nest” performance during the closing ceremony of the Beijing Olympic Games. In 2017, she met former prime minister of NZ-John Key and received the gold award in the World Art Festival. In 2019, she received “ Rising Star” at Final Round of Melbourne International Shaoqin Erhu Competition. In 2o21, she got first place in IMA international music competition and QMC music competition.  In 2022, she played with Wellington City Orchestral as a soloist. In 2023, her students got first price in Kapi-Mana Music Festival. Alongside playing traditional Chinese folk music, Zoe has found a love for blues and jazz. She has performed in Electronica Musical “CHOLE AND THE CHOSTS OF ELECTRIC SOULDS” with the great music doctor Jeremy Mayall.
        </p>
        <p>
          “Music education can help spark a child’s imagination or ignite a lifetime of passion. When you provide a child with new worlds to explore and challenges to tackle, the possibilities are endless. Music education should not be a privilege for a lucky few, it should be a part of every child’s world of possiblity.” Zoe love to stimulate student’s creativity and imagination through the erhu !
      </p>
      </div>
    </>
  );
}

export default Home;
