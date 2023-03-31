const React = require('react')


 class Index extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div>
        <h1>See All Pokemon</h1>
        <ul>
            {pokemon.map((poke, i) => {
                return (
                    <li>
                        {' '}<a href={`/pokemon/${i}`}>{poke.name}</a>
                    </li>
                )
            })}
        </ul>
      
      
      </div>
    )
  }
}

module.exports = Index;

