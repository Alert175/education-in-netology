import { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import axios from 'axios'
import ReadCardPost from '../../Components/ReadCardPost';
import WriteCardPost from '../../Components/WriteCardPost';

const Post = () => {
  const params = useParams()
  const [post, setpost] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [typeCard, setTypeCard] = useState('read')
  const history = useHistory();

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

  const handlerSavePost = async () => {
    try {
      await axios.post('http://localhost:7777/posts', { ...post });
    } catch (error) {
      console.error(error)
    }
  }

  const handlerDeletePost = async () => {
    try {
      await axios.delete(`http://localhost:7777/posts/${post.id}`);
      history.push('/');
    } catch (error) {
      console.error(error)
    }
  }

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
            {typeCard === 'write' && <WriteCardPost content={post.content} saveContent={handlerSavePost} changeContent={(value) => setpost({
              id: post.id,
              content: value
            })}/>}
          </div> : null}
          <button onClick={() => setTypeCard('write')}>Изменить</button>
          <button onClick={handlerDeletePost}>Удалить</button>
        </div>
    }
  </div>;
};

export default Post;
