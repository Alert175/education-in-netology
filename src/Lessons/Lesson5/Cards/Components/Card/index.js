import PropTypes from 'prop-types';

const Card = ({ children, title, text, link }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  children: null,
  title: 'example title',
  text: 'example text',
  link: '',
};

Card.propTypes = {
  addStep: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
