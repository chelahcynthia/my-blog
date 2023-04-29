import { getPostsData } from '@/lib/posts';

import React from 'react'

function Posts() {
    const posts = getPostsData()
  return (
    <section className='mt-6 mx-auto max-w-2xl'>
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <ul className='w-full'>
          {posts.map(post => (
             JSON.stringify(post)
          ))}
        </ul>
    </section>
    
  )
}

export default Posts