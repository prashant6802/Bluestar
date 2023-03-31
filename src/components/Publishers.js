import React from "react";
import "./genres.css";
import publisherData from "../assets/publisherData.js";
import { nanoid } from "nanoid";

function Publishers() {
  return (
    <>
      <section className="extraspace" id="publisher">
        </section>
      <section>
        <div className="topic" height="150px">
          <p>PUBLISHERS</p>
        </div>
      </section>

      <section className="griddera">
        {publisherData.map((genre) => (
          <figure className="hover-img" key={nanoid()}>
            <img src={genre.imgSrc} alt="" height="83%" width="100%" />
            <a href={`/publishers/${genre.name}`} rel="noreferrer">
              <figcaption>
                <h3>{genre.slug}</h3>
              </figcaption>
            </a>
          </figure>
        ))}
        </section>
        <section className="extraspace">
        </section>
          
    </>
  );
}

export default Publishers;
