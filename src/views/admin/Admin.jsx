import React, { useState, useEffect, useRef, useCallback } from "react";
import AnimatedCursor from "react-animated-cursor";
import Editable from "../../components/editable/Editable";
import { addTopic, firestore } from "../../firebase/firebase.utils";
const Admin = () => {
  const [topicName, setTopicName] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isEnabled, setEnabled] = useState(false);

  const [image, setImage] = useState("");

  document.body.classList.add("light");

  useEffect(() => {
    /* firestore
      .collection("topics")
      .get()
      .then((querySnapshot) => {
        let topics = [];
        querySnapshot.forEach((doc) => {
          topics.push({ id: doc.id, ...doc.data() });
        });
        console.log(topics);
        setTopics(topics);
      }); */
  }, []);

  const addTopics = () => {
    setEnabled(true);
    const preguntas = textArea.split(/\r?\n/);
    addTopic(topicName, image, preguntas);
  };

  const handleChange = (event) => {
    setTopicName(event.target.value);
  };

  const handleChangeTextArea = (event) => {
    setTextArea(event.target.value);
  };

  return (
    <div className='container green'>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color='228, 160, 140'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <div
        className='title-section text-left '
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <h1>
          Agregar Tema de <span>conversacion</span>
        </h1>
        <h4>Titulo</h4>
        <input onChange={handleChange} type='text' />
        <h4>Imagen</h4>
        <input
          type='file'
          accept='image/png, image/gif, image/jpeg'
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <h4>Preguntas</h4>
        <textarea
          style={{ width: "100%", height: 400 }}
          value={textArea}
          onChange={handleChangeTextArea}
        />
      </div>
      <button
        disabled={isEnabled}
        onClick={() => addTopics()}
        className='button'
      >
        <span className='button-text'>Guardar Tema</span>
        <span className='button-icon fa fa-save'></span>
      </button>
    </div>
  );
};

export default Admin;
