import PropTypes from 'prop-types'

const WriteCardPost = ({content, changeContent}) => {
  return <input type="text" value={content} onInput={(event) => changeContent(event.target.value)}/>
}

WriteCardPost.defaultProps = {
  content: '',
  changeContent: () => null
}

WriteCardPost.propTypes = {
  content: PropTypes.string,
  changeContent: PropTypes.func
}

export default WriteCardPost
