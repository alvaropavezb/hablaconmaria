import { LinkPreview } from "@dhaiwat10/react-link-preview";
import React, { useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase.utils";


Modal.setAppElement("#root");

const NewsLight = (topics) => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const [preguntas, setPreguntas] = useState([]);
  const [vocabularios, setVocabularios] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");

  const [pregunta, setPregunta] = useState("");

  function toggleModalOne(id) {
    if (id !== null) {
      if (!isOpen) {
        console.log(topics.topics[id].id);
        setPreguntas(topics.topics[id].preguntas);
        setTitulo(topics.topics[id].id);
        setVocabularios(topics.topics[id].vocabulario)
      }

      setIsOpen(!isOpen);
    }
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
        <div key={index} className='col-12 col-md-6 col-lg-6 col-xl-4 mb-30'>
          <article
            className='post-container'
            onClick={() => toggleModalOne(index)}
          >
            <div className='post-thumb'>
              <div className='d-block position-relative overflow-hidden'>
                <LinkPreview url={topic.url} width='100%' />
              </div>
            </div>
            {/* End .thumb */}

            {/* End .post-content */}
          </article>

          {/* End  ModalOneBlogContent */}
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel='My dialog'
        className='custom-modal '
        overlayClassName='custom-overlay green'
        closeTimeoutMS={500}
      >
        <div>
          <button className='close-modal' onClick={() => setIsOpen(false)}>
            <img src='/img/cancel.svg' alt='close icon' />
          </button>

          <div className='box_inner blog-post'>
            <article>
              <div className='title-section text-left text-sm-center'>
                <h4>
                  <span>Preguntas</span>
                </h4>
              </div>

              <div className='blog-excerpt open-sans-font pb-5'>
                {preguntas.map((pregunta, index) => (
                  <p
                    className='open-sans-font mt-sm-1 pregunta'
                    for={index}
                    key={index}
                  >
                    {index + 1}.- {pregunta}
                  </p>
                ))}
              </div>
              <div className='title-section text-left text-sm-center'>
                <h4>
                  <span>Vocabulario</span>
                </h4>
              </div>
              <div className='blog-excerpt open-sans-font pb-5'>
                {vocabularios.map((pregunta, index) => (
                  <p
                    className='open-sans-font mt-sm-1 pregunta'
                    for={index}
                    key={index}
                  >
                    {index + 1}.- {pregunta}
                  </p>
                ))}
              </div>
              {/* Article Content Ends */}
            </article>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NewsLight;
