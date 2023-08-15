import React from "react";

import genreData from "../assets/genreData.js";
import "./genres.css";
import { nanoid } from "nanoid";

function Genres() {
  console.log(genreData);

  return (
    <>
    <section className="extraspace" id="genre">
        </section>
      <section>
        <div className="topic">
          <p>GENRES</p>
        </div>
        <div></div>
      </section>

      <section className="griddera">
        {genreData.map((genre) => (
          <figure className="hover-img" key={nanoid()}>
            <img src={genre.imgSrc} alt="" height="83%" width="100%" />
            <a href={`/genres/${genre.name}`} rel="noreferrer">
              <figcaption>
                <h3>{genre.name}</h3>
              </figcaption>
            </a>
          </figure>
        ))}
      </section>
    </>
  );
}

export default Genres;
