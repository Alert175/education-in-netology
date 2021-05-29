import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const [postText, setpostText] = useState('');
  const [isPending, setisPending] = useState(false);
  const history = useHistory();

  const handlerRedirectToHome = () => {
    setpostText('');
    history.push('/');
  };

  const handlerCreatePost = async () => {
    try {
      if (postText !== '') {
        setisPending(true);
        await axios.post('http://localhost:7777/posts', {
          data: {
            id: 0,
            content: postText,
          },
        });
        setisPending(false);
        setpostText('');
        handlerRedirectToHome();
      }
    } catch (error) {
      console.error(error);
      setisPending(false);
      setpostText('');
    }
  };

  return (
    <div>
      {isPending ? (
        '...'
      ) : (
        <>
          <input
            type="text"
            value={postText}
            onChange={(event) => setpostText(event.target.value)}
          />
          <button onClick={handlerRedirectToHome}>x</button>
          <button onClick={handlerCreatePost}>Опубликовать</button>
        </>
      )}
    </div>
  );
};

export default Create;
