import React from 'react';
import styles from './style.module.scss';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.projects.map((element) => (
          <img
            key={`projectKey_${element.index}`}
            src={element.img}
            alt={element.category}
          />
        ))}
      </div>
    );
  }
}

export default ProjectList;
