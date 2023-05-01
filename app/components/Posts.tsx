import { getPostsData } from '@/lib/posts';
import Listitem from './Listitem';
import React from 'react'

function Posts() {
    const posts = getPostsData()
  return (
    <section className='mt-6 mx-auto max-w-2xl'>
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <ul className='w-full'>
          {posts.map(post => (
            <Listitem key={post.id} post={post} />
          ))}
        </ul>
    </section>
    
  )
}

export default Posts