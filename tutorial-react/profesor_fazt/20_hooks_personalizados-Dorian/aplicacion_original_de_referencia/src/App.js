
import React, { useState, useEffect } from 'react'



const App = () => {

  	const [post, setPost] = useState([])
  	const [id, setId] = useState(1)


	useEffect(() => {
		const getPost = async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			const data = await res.json()
			setPost(data)
		}
		getPost()
	}, [id])




  	const handlePrevId = () => {
    	if (id > 1) setId(id - 1)
  	}

  	const handleNextId = () => {
   	 	setId(id + 1)
  	}

  	return (
    	<>
      		<h1>{post.title}</h1>
      		<p>{post.body}</p>
      		<button onClick={handlePrevId}>Prev Id</button>
      		<button onClick={handleNextId}>Next Id</button>
      		<p>{id}</p>
    	</>
  );
}


export default App;