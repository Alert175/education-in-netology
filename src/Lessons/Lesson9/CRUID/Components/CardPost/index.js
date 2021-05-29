import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const CardPost = ({ id, content }) => {
  const history = useHistory();
  return <div onClick={() => history.push(`/posts/${id}`)}>{content}</div>;
};

CardPost.defaultProps = {
  id: null,
  content: null,
};

CardPost.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string,
};

export default CardPost;
