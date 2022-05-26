import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { addNew, addTopic } from "../../firebase/firebase.utils";
const Admin = () => {
  const [topicName, setTopicName] = useState("");
  const [textArea, setTextArea] = useState("");
  const [isEnabled, setEnabled] = useState(false);
  const [isEnabledVoc, setEnabledVoc] = useState(false);

  const [topicNew, setTopicNew] = useState("");
  const [textAreaNew, setTextAreaNews] = useState("");
  const [textAreaVocNew, setTextAreaVocNews] = useState("");
  const [url, setUrl] = useState("");

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

  const addNews = () => {
    setEnabled(true);
    const preguntas = textAreaNew.split(/\r?\n/);
    const voca = textAreaVocNew.split(/\r?\n/);
    addNew(topicNew,preguntas,voca,url);
  };

  const handleChange = (event) => {
    setTopicName(event.target.value);
  };

  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };

  const handleChangeNews = (event) => {
    setTopicNew(event.target.value);
  };

  const handleChangeTextArea = (event) => {
    setTextArea(event.target.value);
  };

  const handleChangeTextAreaNew = (event) => {
    setTextAreaNews(event.target.value);
  };

  const handleChangeTextAreaVoc = (event) => {
    setTextAreaVocNews(event.target.value);
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
      <div
        className='title-section text-left '
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <h1>
          Agregar <span>Noticia</span>
        </h1>
        <h4>Titular</h4>
        <input onChange={handleChangeNews} type='text' />
        <h4>Link</h4>
        <input onChange={handleChangeUrl} type='text' />
        <h4>Preguntas</h4>
        <textarea
          style={{ width: "100%", height: 400 }}
          value={textAreaNew}
          onChange={handleChangeTextAreaNew}
        />
        <h4>Vocabulario</h4>
        <textarea
          style={{ width: "100%", height: 400 }}
          value={textAreaVocNew}
          onChange={handleChangeTextAreaVoc}
        />
      </div>
      <button
        disabled={isEnabledVoc}
        onClick={() => addNews()}
        className='button'
      >
        <span className='button-text'>Guardar Noticias</span>
        <span className='button-icon fa fa-save'></span>
      </button>
    </div>
  );
};

export default Admin;
