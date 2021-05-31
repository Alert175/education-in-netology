import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import ReadCardPost from '../../Components/ReadCardPost';
import WriteCardPost from '../../Components/WriteCardPost';

const Post = () => {
  const params = useParams()
  const [post, setpost] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [typeCard, setTypeCard] = useState('read')

  // т.к. нет обработчика сервера который отдаст мне контент поста по его id, приходится писать такое
  const getPosts = async () => {
    try {
      setisPending(true);
      const response = await axios.get('http://localhost:7777/posts');
      setisPending(false);
      if (Array.isArray(response.data)) {
        for (const post of response.data) {
          if (Number(post.id) === Number(params.postId)) {
            setpost({
              ...post
            });
          }
        }
      }
    } catch (error) {
      console.error(error);
      setisPending(false);
      setpost(null);
    }
  };

  useEffect(() => {
    getPosts();
    return () => {
      setisPending(false);
      setpost(null);
    };
  }, []);
  return <div>
    {
      isPending 
      ? '...' 
      : <div>
          {post !== null ? <div>
            {typeCard === 'read' && <ReadCardPost content={post.content}/>}
            {typeCard === 'write' && <WriteCardPost content={post.content} changeContent={(value) => setpost({
              id: post.id,
              content: value
            })}/>}
          </div> : null}
        </div>
    }
  </div>;
};

export default Post;
