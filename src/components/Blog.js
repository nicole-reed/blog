import { useState, useEffect } from 'react'
import CreatePost from './CreatePost'
import LikeButton from './LikeButton'


const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const response = await getPosts()

    setPosts(response)
  }, [])

  //Fetch Posts
  const getPosts = async () => {
    const res = await fetch('http://localhost:5000/posts')
    const data = await res.json()

    return data
  }

  //fetch One post
  const getPost = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`)
    const data = await res.json()


    return data
  }

  const addPost = async (post) => {
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })

    const data = await res.json()

    setPosts([...posts, data])
  }

  const toggleLiked = async (id) => {
    const post = await getPost(id)
    const updatedPost = { ...post, liked: !post.liked }

    await fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ liked: !post.liked })
    })

    const updatedPosts = posts.map((post) => post._id === id ? updatedPost : post)

    setPosts(updatedPosts)
  }

  return (
    <div className='blog-style'>
      <h1>Welcome to the Blog</h1>
      <h3>&hearts; the post if you enjoyed it! </h3>
      <>
        {[...posts].reverse().map((post) => (
          <p key={post._id} className='text'>{post.text}
            {/* <button className='heart' onClick={() => toggleLiked(post.id)}>&#9825;</button> */}
            <LikeButton
              text={post.liked ? <div>&#9829;</div> : <div>&#9825;</div>}
              onClick={() => toggleLiked(post._id)}
            />
          </p>
        ))}

      </>
      <CreatePost onAdd={addPost} />
    </div>
  )
}

export default Blog
