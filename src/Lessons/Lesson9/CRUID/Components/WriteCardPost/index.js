import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const WriteCardPost = ({content, changeContent, saveContent}) => {
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push('/')}>x</button>
      <input type="text" value={content} onInput={(event) => changeContent(event.target.value)}/>
      <button onClick={saveContent}>Сохранить</button>
    </>
  )
}

WriteCardPost.defaultProps = {
  content: '',
  changeContent: () => null,
  saveContent: () => null
}

WriteCardPost.propTypes = {
  content: PropTypes.string,
  changeContent: PropTypes.func,
  saveContent: PropTypes.func
}

export default WriteCardPost
