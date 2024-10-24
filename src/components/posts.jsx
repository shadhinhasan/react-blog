import React, { useState } from 'react'

import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'


const Posts = () => {
    const [ posts, setPosts] = useState( DUMMY_POSTS )
  return (
    <section className='posts__css'>
        {posts.length > 0 ? <div className='container posts__container'>
            {
                posts.map(({ id, thumbnail, category, title, desc, authorID}) =>
                <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div> : <h2 className='center'>No Posts founds</h2>}
    </section>
  )
}

export default Posts
