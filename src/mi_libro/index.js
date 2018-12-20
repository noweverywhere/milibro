import React from 'react';

class MiLibro extends React.Component {
  constructor(props) {
    super(props)
    this.onScroll.bind(this)
  }

  onScroll() {
    console.log('MiLibro ssscrolling')
  }

  render () {
    return <h1>Hello Mi Libro</h1>
  }
}

export default MiLibro
