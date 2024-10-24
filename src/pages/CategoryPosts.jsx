import React, { useState } from 'react'
import PostItem from '../components/PostItem'
import { DUMMY_POSTS } from '../data'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
      {posts.length > 0 ? <div className='container posts__container'>
        {
          posts.map(({ id, thumbnail, category, title, desc, authorID}) =>
          <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
        }
      </div> : <h2 className='center'>No Posts founds</h2>}
    </section>
  )
}

export default CategoryPosts


// import React from 'react'

// const CategoryPosts = () => {
//   return (
//     <div>CategoryPosts</div>
//   )
// }

// export default CategoryPosts