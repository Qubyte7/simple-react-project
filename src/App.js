import Navbar from './navbar';
import Home from './home';
// import BlogList from './BlogList';

function App() {
// const title = "welcome to the new blog";
// const likes = 50;//you can declare a variable and you out in the jsx bellow using cotes{}
// const link = "http://www.google.com";//we can pass links in variables and we use 
//those variables in {} 

  return (
    <div className="App">
      <Navbar />{/* this the 1st way to output the imported component*/}

    <div className="content">
      {/* <h1>{title}</h1>
      <p>liked{likes}</p> */}
      {/* <p>{22233}</p>
      <p>{" hello ninjas "}</p>
      <p>{[12,"father",67,"sister"]}</p>
      <p>{ Math.random() * 10}</p>
      <a href={link}> google link</a> */}
      
         <Home></Home>{/* this is the second way to out put the imported component*/}
    </div>
    </div>
    
    // <div className="bubble">teree</div>
  );
}

export default App;
