import React from 'react';
import styles from './style.module.scss';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        {this.props.filters.map((element) => (
          <span
            className={`${styles.element} ${
              element === this.props.selected && styles.elementActive
            }`}
            key={`toolbarKey_${element}`}
            onClick={() => {
              this.props.onSelectFilter(element);
            }}
          >
            {element}
          </span>
        ))}
      </div>
    );
  }
}

export default Toolbar;
