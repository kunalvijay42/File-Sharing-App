import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';
import img from './Background2.jpg';
import img1 from './data-exchange.png';
import { BsUpload } from 'react-icons/bs';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [showText, setShowText] = useState(false);

  const toggleTextVisibility = () => {
    setShowText(!showText);
  };

  const fileInputRef = useRef();  //Used to copy behaviour of input field file to button

  // client\public\Background.png

  const url = '..client/public/Background.png';


  useEffect(() => {  //To do something after render
    const getImage = async () => {
      if (file) {
        const data = new FormData();  //common way to create a bundle of data to send to the server using XMLHttpRequest or fetch
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={img} className='img' />
      <div className='wrapper'>
        <h1>FileFlow</h1>
        {/* <div className="drop_box"> */}
        <img src={img1} alt="File Icon" className='img1' />
        {/* <p>Upload the file and share the download link.</p> */}
        <p className='ease'>Easily Share Download Links by Uploading Your Files</p>

        <button onClick={() => onUploadClick()}><BsUpload size={20} className='upload' />Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* {showText && <h4>This text will be shown when the button is clicked.</h4>} */}
        {/* <h4>The shareable link of the file is: </h4> */}
        {/* <h4>The shareable link is: <a href={result} target='_blank'>{result}</a></h4> */}
        <a href={result} target='_blank'>{result}</a>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;