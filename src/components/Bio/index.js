import React from "react";
import { rhythm } from "../../utils/typography";

function Bio() {
  return (
    <section key="about">
      <article>
        <header>
          <h3
            style={{
              fontSize: rhythm(3 / 5),
              margin: `${rhythm(2 / 4)} 0 ${rhythm(2 / 4)} 0`
            }}
          >
            ClauKishin
          </h3>
          <p>
            Hola, soy Caukishin, mi meta es la libertad financiera, la tuya
            tambien si has visitado este blog, en todo caso espero disfrutes mis
            posts, sin mas que decir: Bienvenido
          </p>
        </header>
      </article>
    </section>
  );
}

export default Bio;
