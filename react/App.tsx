
import { useRef, useState } from 'react';
import selection from '../src';
import React from 'react';

function App() {

  const [label,setLabel] = useState('');
  const ref = useRef(null)
  return (<div>
      <p ref={ref}>
        <i>Since</i> text can be selecting dragging 
        <b><i>
        <a href='#'>left</a>
        -to-
        <a href='#'>ri
        <span>ght</span>
        </a>
        </i></b>
        or 
        <b><i>right-to-left</i></b>
        this does not INFER that the 
        <a href='https://google.com'>anchorNode</a>
        is to the left of the 
        <i>focusNode</i>
      </p>
      <div>

      <button onClick={e=>{
        selection.copyHTML();
        setLabel(`copied!`);
      }}>Copy HTML</button>


    </div>
    <div>
      {label}
    </div>
  </div>);
}

export default App;

