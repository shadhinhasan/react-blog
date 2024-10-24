import React from 'react'
import PostAuthor from './../components/PostAuthor';
import { Link } from 'react-router-dom';
import Thumbnail3 from "../images/image_13.png"


const PostDetail = () => {
  return (
    <section className='post-detail'>
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor />
          <div className='post-detail__buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className='post-detail__thumbnail3'>
          <img src={Thumbnail3}  alt=''/>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Ut sunt itaque, commodi nulla explicabo ipsam laboriosam, 
          ipsum repellat ratione asperiores quis provident ducimus similique, 
          reiciendis vitae ullam alias recusandae natus voluptatibus optio harum cum nihil? Ipsa odit veritatis laudantium cum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestiae repellendus quaerat amet aut itaque commodi sequi, 
          quasi ipsum iure architecto ratione eaque. 
          Ipsum quibusdam eligendi neque doloremque magnam, quas ratione at. 
          Expedita vitae labore dolore qui doloremque aut praesentium eligendi quos, 
          neque maiores nobis commodi? Non tenetur alias itaque aliquam? Quasi possimus dignissimos praesentium corporis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo quaerat aperiam ipsam reprehenderit eveniet facilis nisi harum, 
          accusamus consectetur eius neque vitae repudiandae veniam obcaecati ipsa placeat voluptas impedit fugiat nemo ex nobis id quis dolore. 
          Aliquid labore cupiditate dolores? Distinctio quia molestiae nemo? 
          Pariatur, voluptas. Itaque eaque alias autem fugiat accusamus possimus ex ab reiciendis et! Alias deleniti mollitia, 
          officiis totam quis cumque illo necessitatibus animi eligendi aut dicta eius praesentium aliquid incidunt quisquam veritatis culpa optio consequuntur. 
          Nisi veniam quae illum temporibus eos fugiat ipsa facilis soluta iure, 
          quo asperiores quaerat voluptatum aspernatur aperiam quis tempora sequi sit ea mollitia maxime, 
          odit minima laboriosam magnam perferendis? Reprehenderit, voluptatem accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nam, laborum velit rerum quas reprehenderit explicabo quam cum! Libero dolor voluptatibus soluta quam et, ratione perferendis! Nesciunt aspernatur rem maxime ea.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even slightly believable. 
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
          All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
          The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </section>
  )
}

export default PostDetail
