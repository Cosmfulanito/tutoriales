




import React, { Component } from 'react'

export default class Posts extends Component {

	state = {																			
		posts: []
	}
																						
	async componentDidMount()	{														
		const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')		
		const data = await respuesta.json()												
		console.log(data)

		this.setState({																	 
			posts: data
		})
	}

	render() {
		return (
			<div>
				<h1>Posts:</h1>
				{
					this.state.posts.map(e => {											
						return <div key={e.id}>											
							<h2>{e.title}</h2>
							<p>{e.body}</p>
						</div>
					})
				}
			</div>
		)
	}
}
