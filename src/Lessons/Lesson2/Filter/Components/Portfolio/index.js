import React from 'react';
import Toolbar from '../Toolbar';
import ProjectList from '../ProjectList';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
          category: 'Business Cards',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
          category: 'Business Cards',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
          category: 'Business Cards',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
          category: 'Flayers',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
          category: 'Business Cards',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
          category: 'Business Cards',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
          category: 'Websites',
        },
        {
          img:
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
          category: 'Flayers',
        },
      ],
      categories: ['All', 'Websites', 'Flayers', 'Business Cards'],
      activeCategory: '',
      sortedProjects: [],
    };
  }
  selectCategory(value) {
    this.setState({ activeCategory: value });
    if (value !== 'All') {
      let sortedArr = [];
      for (const [index, project] of this.state.projects.entries()) {
        if (project.category === value) {
          sortedArr = [...sortedArr, { ...project, index }];
        }
      }
      this.setState({
        sortedProjects: sortedArr,
      });
      return;
    }
    let sortedArr = [];
    for (const [index, project] of this.state.projects.entries()) {
      sortedArr = [...sortedArr, { ...project, index }];
    }
    this.setState({
      sortedProjects: sortedArr,
    });
  }
  componentDidMount() {
    this.selectCategory('All');
  }
  render() {
    return (
      <>
        <Toolbar
          filters={this.state.categories}
          selected={this.state.activeCategory}
          onSelectFilter={(filter) => {
            this.selectCategory(filter);
          }}
        />
        <ProjectList projects={this.state.sortedProjects} />
      </>
    );
  }
}

export default Portfolio;
