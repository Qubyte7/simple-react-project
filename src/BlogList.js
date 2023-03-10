  //FIRST WAY OF PASSING PROPS

// const BlogList = (props) => {          //this argument passed here is a prop in home.js on the Blog list line when returning it 
// const blogs = props.blogs;
// const title = props.title;

//SECOND WAY OF PASSING PROPS

const BlogList=({blogs,title,deleteHandle})=>{

return (
    <div className="blog-list">
{/* this map is used to circle through the object called blogs above and as we circle through the blogs we have access to its properties*/}
{/*when using this map property we also need the "KEY property" => this will control every element in the DOM (blogs) while outputting it as it changes*/}
    <h2>{title}</h2>
{blogs.map((blog)=>(
    <div className="blo-preview" key={blog.id}>
        <h2 className="heading">{blog.title}</h2>
        <p>Is a know for {blog.author}</p>
        <button onClick={()=>deleteHandle(blog.id)}> delete the blog</button>
    </div>
))}
    </div>
    );

    
}
 
export default BlogList;