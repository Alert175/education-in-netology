import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import CardPost from '../../Components/CardPost';

const Home = () => {
  const [posts, setposts] = useState([]);
  const [isPending, setisPending] = useState(false);

  const history = useHistory();

  const getPosts = async () => {
    try {
      setisPending(true);
      const response = await axios.get('http://localhost:7777/posts');
      setisPending(false);
      if (Array.isArray(response.data)) {
        setposts([...response.data]);
      }
    } catch (error) {
      console.error(error);
      setisPending(false);
      setposts([]);
    }
  };

  useEffect(() => {
    getPosts();
    return () => {
      setisPending(false);
      setposts([]);
    };
  }, []);

  const handleRedirectToNewPost = () => {
    history.push('/posts/new');
  };

  return (
    <div>
      <div>
        <button onClick={handleRedirectToNewPost}>Создать пост</button>
      </div>
      {isPending
        ? '...'
        : posts.map((element, index) => (
            <CardPost key={index} id={element.id} content={element.content} />
          ))}
    </div>
  );
};

export default Home;
