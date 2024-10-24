import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/image_16.png'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post__author'>
      <div className='post__author-avator'>
        <img src={Avatar} alt=''/>
      </div>
      <div className='post__author-details'>
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor
