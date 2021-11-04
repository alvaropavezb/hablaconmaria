import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-modal";

import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";

Modal.setAppElement("#root");

const BlogLight = (topics) => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [preguntas, setPreguntas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");

  const [pregunta, setPregunta] = useState("");

  function toggleModalOne(id) {
    if (id !== null) {
      if (!isOpen) {
        console.log(topics.topics[id].id);
        setPreguntas(topics.topics[id].preguntas);
        setTitulo(topics.topics[id].id);
        setSubtitulo(topics.topics[id].ingles);
      }

      setIsOpen(!isOpen);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleOnChange = (event) => {
    const { value } = event.target;
    setPregunta(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      var topicsRef = firestore.collection("topics").doc(titulo);
      topicsRef.update({
        preguntas: firestore.string.arrayUnion(pregunta),
      });
    }
  };

  return (
    <>
      {topics.topics.map((topic, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
          <article
            className="post-container"
            onClick={() => toggleModalOne(index)}
          >
            <div className="post-thumb">
              <div className="d-block position-relative overflow-hidden">
                <img
                  src={topic.coverImg}
                  className="img-fluid"
                  alt="Blog Post"
                />
              </div>
            </div>
            {/* End .thumb */}
            <div className="post-content">
              <div className="entry-header">
                <h3>{capitalizeFirstLetter(topic.id)}</h3>
              </div>
              <div className="entry-content open-sans-font">
                <p>{topic.desc}</p>
              </div>
            </div>
            {/* End .post-content */}
          </article>

          {/* End  ModalOneBlogContent */}
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="custom-modal "
        overlayClassName="custom-overlay green"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={() => setIsOpen(false)}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner blog-post">
            <article>
              <div className="title-section text-left text-sm-center">
                <h1>
                  <span>{titulo}</span>
                </h1>
                <span className="title-bg">{subtitulo}</span>
              </div>

              <div className="blog-excerpt open-sans-font pb-5">
                {preguntas.map((pregunta, index) => (
                    <p className="open-sans-font mt-sm-1 pregunta"  for={index}  key={index}>
                      {index + 1}.- {pregunta}
                    </p>
                ))}
                {params.name === "admin" && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Pregunta"
                    value={pregunta}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                  />
                )}
              </div>
              {/* Article Content Ends */}
            </article>
          </div>
        </div>
      </Modal>

      {/* Blog 1 Starts */}

      {/*  Blog 1 Ends */}

      {/*  Blog 2 Starts */}

      {/*  Blog 2 Ends */}

      {/*  Blog 3 Starts */}

      {/* Blog 3 Ends */}

      {/* Blog 4 Starts */}

      {/* Blog 4  Ends */}

      {/*  Blog 5 Starts */}

      {/*  Blog 5 Ends */}

      {/* Blog 6 Starts */}

      {/* Blog 6 Ends */}
    </>
  );
};

export default BlogLight;
