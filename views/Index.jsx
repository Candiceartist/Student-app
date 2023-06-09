const React = require('react')


 class Index extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div>
        <h1>Showing all students</h1>
        <ul>
            {pokemon.map((poke, i) => {
                return (
                    <li key={i}>
                        {' '}<a href={`/pokemon/${i}`}>{poke.name}</a>
                    </li>
                )
            })}
        </ul>
        <nav>
         <a href="/pokemon/new">Create New Student File</a>
         <br></br>
         <a href="/">Return Home</a>
        </nav>
      
      
      </div>
    )
  }
}

module.exports = Index;

