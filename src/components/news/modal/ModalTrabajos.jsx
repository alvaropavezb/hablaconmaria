import React from "react";

const listaPreguntas = ["¿Cómo practicarlo?", "¿Cómo practicarlo?"];

const ModalTrabajos = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          <span>Trabajos</span>
        </h1>
        <span className="title-bg">jobs</span>
      </div>

      <div className="blog-excerpt open-sans-font pb-5">
        {listaPreguntas.map((pregunta, index) => (
          <p>
            {index + 1}.- {pregunta}
          </p>
        ))}
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTrabajos;
