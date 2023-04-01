const React = require('react')

 class Show extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div>
        <div>
        <h1>Current Grades</h1>
        <div>
        <img src={pokemon.img}/>
        </div>
        <div>
          <h2>Student Name:{pokemon.name}</h2>
        
          <h3>Final Grade:{pokemon.grade}</h3>
        </div>
      </div>
      </div>
    )
  }
}

module.exports = Show;