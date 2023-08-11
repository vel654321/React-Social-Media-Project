import React, { useContext } from 'react'
import { Link,useParams } from "react-router-dom";
import { useEffect } from 'react';
import DataContext from './context/DataContext';

const EditPost = () => {
  const {posts, handleEdit, editBody,setEditBody, editTitle, setEditTitle} = useContext(DataContext);

  console.log(editBody);
   const {id} = useParams();
   const post = posts.find(post => (post.id).toString() === id);

   useEffect(() => {
    if(post) {
        setEditTitle(post.title);
        setEditBody(post.body);

    }
   }, [post, setEditTitle, setEditBody])


  return (
   <main className="NewPost">
    {editTitle &&
    <>
        <h1>Edit Post</h1>
        <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
               <label htmlFor ="postTitle">Title:</label>
               <input id="editTitle" 
               type="text" 
               required value={editTitle} 
               onChange={(e) => setEditTitle(e.target.value)} />
               <label htmlFor ="postBody">Post: </label>
               <textarea 
               id="editBody"
                required 
                value={editBody} 
                onChange={(e) => setEditBody(e.target.value)} />
              <button type="submit" onClick={()=> handleEdit(post.id)}>Submit</button>
          </form>

    </>
    
    
    }
    (!editTitle && 
    <>
    
      <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, thats disappointing.</p>
      <Link to='/'>Visit Our Homepage</Link>
      </main>
    
    
    </>
    
    
    )


   </main>
  )
}

export default EditPost
