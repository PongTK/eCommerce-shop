import React from "react";
import "./About.css";

import QRScanImg from "/public/Images/QR-scan.jpg";
import StoreImg from "/public/Images/store-story.jpg";

function About() {
  return (
    <>
      <header>
        <span className="header-text">ABOUT</span>
        <span className="header-subText">Identity | Story | Future</span>
      </header>
      <section className="about-section">
        <div className="about-wrapper">
          <div className="story-container">
            <div className="story-content">
              <h1 className="story-heading">Story Of My Store</h1>
              <p className="story-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio optio cumque nesciunt ab, eaque maiores nulla sunt,
                necessitatibus facere ut tempora nisi alias quam laudantium
                consequatur fuga eveniet. Totam minus dolorum exercitationem
                incidunt voluptas itaque unde omnis esse maiores ratione labore,
                provident voluptate, eaque suscipit rem architecto reiciendis.
                Dignissimos exercitationem tenetur alias cumque quod deleniti
                distinctio ex fuga, quae, veniam, laboriosam temporibus expedita
                magni adipisci velit similique consequatur! Eos nobis nihil sed
                fugiat dolore eius explicabo alias quo, debitis voluptates?
              </p>
              <p className="story-text">
                Odio illo est odit quos harum porro laborum vero pariatur,
                quaerat cumque unde dolorum exercitationem sequi illum officia
                commodi natus dolores voluptatibus excepturi tempora voluptas.
                Ab optio alias rerum, libero exercitationem totam dignissimos
                quasi. Voluptatibus explicabo totam molestias et facere quo,
                dolor quos nemo ipsam, accusantium modi porro quaerat optio
                ipsum atque dignissimos! Cupiditate sint ullam, reiciendis
                reprehenderit impedit voluptatem quas consectetur?
              </p>
              <p className="story-text">
                Officia temporibus culpa reprehenderit nobis quod! Ipsa hic
                dolore, reiciendis fuga atque, necessitatibus explicabo
                laboriosam numquam consectetur nobis corrupti nihil animi
                incidunt, dolores eius quisquam fugiat. Asperiores iusto qui
                eligendi quisquam.
              </p>
            </div>
            <div className="card">
              <div className="card-wrapper">
                <img src={StoreImg} alt="StoreImg" className="StoreImg" />
                <div className="Img-outline"></div>
              </div>
            </div>
          </div>
          <div className="future-container">
            <div className="card">
              <div className="card-wrapper">
                <img src={QRScanImg} alt="QRScanImg" className="QRScanImg" />
                <div className="Img-outline"></div>
              </div>
            </div>
            <div className="future-content">
              <h1 className="future-heading">Future</h1>
              <p className="future-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio optio cumque nesciunt ab, eaque maiores nulla sunt,
                necessitatibus facere ut tempora nisi alias quam laudantium
                consequatur fuga eveniet. Totam minus dolorum exercitationem
                incidunt voluptas itaque unde omnis esse maiores ratione labore,
                provident voluptate, eaque suscipit rem architecto reiciendis.
                Dignissimos exercitationem tenetur alias cumque quod deleniti
                distinctio ex fuga, quae, veniam, laboriosam temporibus expedita
                magni adipisci velit similique consequatur! Eos nobis nihil sed
                fugiat dolore eius explicabo alias quo, debitis voluptates?
              </p>
              <p className="future-text">
                Odio illo est odit quos harum porro laborum vero pariatur,
                quaerat cumque unde dolorum exercitationem sequi illum officia
                commodi natus dolores voluptatibus excepturi tempora voluptas.
                Ab optio alias rerum, libero exercitationem totam dignissimos
                quasi. Voluptatibus explicabo totam molestias et facere quo,
                dolor quos nemo ipsam, accusantium modi porro quaerat optio
                ipsum atque dignissimos! Cupiditate sint ullam, reiciendis
                reprehenderit impedit voluptatem quas consectetur?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
