import {useState, useEffect} from 'react';
import BlogList from './BlogList';



const Home = () => {
    //Here is how hook is used bellow
    const [name,setName] = useState('Mugisha Shami');
    const [age,setage]  =useState(16 +" Years old");
    
    //you can create a function before the return that could be used after the return like cliking function of buttons
    const handleClick = () => {
    setName('Shami Ettienne');
    setage(13+ " years old")
    }
   //function with parameters
const handleClick2=(name)=>{
 document.write("master peace"+name);
}
  
const[blogs,setBlogs]=useState([
    {title:"My website ",body:"Lorem",author:"Mario",id:1},
    {title:"Dragon Ball",body:"Kame kame..aah",author:"Goku",id:2},
    {title:"Shipuddine ",body:"Lorem kakakuna...",author:"Naruto",id:3},
    {title:"Dragon ball-z",body:"Saiyan 2",author:"Goku",id:4}
]);

const deleteHandle=(id)=>{
const newBlogs = blogs.filter(blog => blog.id !== id);
setBlogs(newBlogs)
}
//useEffect 
useEffect(()=>{//note that defaultly this function at every render
    console.log("use effect ran");
   console.log(blogs)
});  

return ( 
    <div className="home">``
    <BlogList blogs={blogs} title="this is the way of a PROP is made" deleteHandle={deleteHandle} />{/*this line od code is what we call a Prop ==>("PropOfBlogs={blogs} and title")*/}
    <BlogList blogs={blogs.filter((blog)=> blog.author === 'Goku')} title="Gang for Goku" />
{/* you can pass as many Props as you wish */}
{/* you can name a Prop as you wish */}

    <p className='name'>{name} is {age}</p>
    <button onClick={handleClick}>See his brother</button>
    <br />
{/*calling a function with parameters*/}
{/* <button onClick={()=>{handleClick2('Mario')}}>Click me again</button> */}
</div>
);}
 


export default Home;
