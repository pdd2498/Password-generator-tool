import './App.css';
import React ,{useState} from 'react'


function generateRandomString() {
  let result = '';
      const randomCharCode = Math.floor(Math.random() * (57 - 48) + 48); // Random number between 0 and 255
      console.log(randomCharCode);
      result += String.fromCharCode(randomCharCode);
  return result;
}

function words(){
  let result = '';
      const randomCharCode = Math.floor(Math.random() * (90 - 65) + 65); // Random number between 0 and 255
      console.log(randomCharCode);
      result += String.fromCharCode(randomCharCode);
  return result;
}

function smalWords(){
  let result = '';
      const randomCharCode = Math.floor(Math.random() * (122 - 97) + 97); // Random number between 0 and 255
      console.log(randomCharCode);
      result += String.fromCharCode(randomCharCode);
  return result;
}

function antik(){
  let result = '';
      const randomCharCode = Math.floor(Math.random() * (47 - 33) + 33); // Random number between 0 and 255
      console.log(randomCharCode);
      result += String.fromCharCode(randomCharCode);
  return result;
}

function antik2(){
  let result = '';
      const randomCharCode = Math.floor(Math.random() * (64 - 58) + 58); // Random number between 0 and 255
      console.log(randomCharCode);
      result += String.fromCharCode(randomCharCode);
  return result;
}




function App() {
  const [length, setLength] = useState(8);
  const [pasword , setPaswoed] = useState('2@eko49A');
  const [chack , setChack] = useState(false);
  const [chack2 , setChack2] = useState(false);
  const [chack3 , setChack3] = useState(false);
  const [chack4 , setChack4] = useState(false);

  const password = () => {
    let n = document.getElementById('length').value;
    let uper = document.getElementById('uperCase').value;
    
    // alert("hoaa")
    let pas = "";
    while(pas.length < n){
      if(pas.length < n && chack){pas += generateRandomString();}
      if(pas.length < n && chack2)pas += words();
      if(pas.length < n && chack3)pas += smalWords();
      if(pas.length < n && chack4)pas += antik();
      if(pas.length < n && chack2)pas += words();
      if(pas.length < n && chack)pas += generateRandomString();
      if(pas.length < n && chack3)pas += smalWords();
      if(pas.length < n && chack4)pas += antik2();
      if(!chack && !chack2 && !chack3 && !chack4){
        alert("All checks are empty")
        return;
      }
      console.log(pas +" "+pas.length);
    }
    console.log(uper);
    setPaswoed(pas)
  }
  

  
  return (
    <div className="App mainBox">
      <h1>Password Generator</h1>
      <div className='box'>
          <p>{pasword}</p>
      </div>
      

      <div className='twoparts'>
              <div>
                    <input type="number" id="length" min="8" max="50" value={length}
                    onChange={(e) => setLength(e.target.value)}/>
              </div>
                
              <div className='someone'>
                <div>
                    <input type="checkbox" id="uperCase" onChange={(e) =>{
                            setChack((priv)=>!priv)
                    }} />
                    <span>Include numbers</span>
                </div>
                <div>
                    <input type="checkbox" onChange={(e) =>{
                            setChack2((priv)=>!priv)
                    }} />
                    <span>Include upper case</span>
                </div>
                <div>
                    <input type="checkbox" onChange={(e) =>{
                            setChack3((priv)=>!priv)
                    }} />
                    <span>Include lower case</span>
                </div>
                <div>
                    <input type="checkbox" onChange={(e) =>{
                            setChack4((priv)=>!priv)
                    }} />
                    <span>Include symbols</span>
                </div>
              </div>
      </div>
     
      
      
      <button onClick = {()=> password()}>Get Password</button>
    </div>
  );
}

export default App;
