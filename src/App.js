import { useEffect, useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {

  const defaultText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![embedded image](https://images.pexels.com/photos/6414318/pexels-photo-6414318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
  `

  const [text, setText] = useState(defaultText);
  const onTextChange = e => {
    setText(e.target.value);
  }
  useEffect(() => {
    document.getElementById('preview').innerHTML = marked.parse(text);
  }, [text]);
  return (
    <div className="App">
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <h1>Markdown Previewer</h1>
      </div>
      <div className="box-container">
        <h2>Editor</h2>
        <textarea onChange={onTextChange} value={text} id="editor"></textarea>
      </div>
      <div className="box-container">
        <h2>Preview</h2>
        <div id="preview"></div>
      </div>
      <div style={{textAlign : 'center', marginTop: '30px'}}>
        By <a style={{color: 'white'}} href="https://www.github.com/vahbuna0615" target="_blank" rel="noopener noreferrer">@vahbuna0615</a>
      </div>
    </div>
  );
}

export default App;
