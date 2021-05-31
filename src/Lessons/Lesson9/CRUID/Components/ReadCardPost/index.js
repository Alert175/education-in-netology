import PropTypes from 'prop-types'

const ReadCardPost = ({content}) => {
  return (
    <>
      <div>Джон смит</div>
      <div>{content}</div>
    </>
  )
}

ReadCardPost.defaultProps = {
  content: ''
}

ReadCardPost.propTypes = {
  content: PropTypes.string
}

export default ReadCardPost
