'use client'
import AddPost from '../app/components/AddPost'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Post from './components/Posts'
import {PostType} from './types/Posts'

//Fetch all posts
const allPosts = async() => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}


export default function Home() {
  const {data, error, isLoading} = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  })
  if(error) return error
  if(isLoading) return "Loading..."
  console.log(data)
  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post 
        comments={post.comments}
        key={post.id} 
        name={post.user.name} 
        avatar={post.user.image} 
        postTitle={post.title} 
        id={post.id} />
      )) }
    </main>
  )
}
