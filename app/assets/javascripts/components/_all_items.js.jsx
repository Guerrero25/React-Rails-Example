class AllItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/items.json')
    .then( response => response.json())
    .then(items => {
      this.setState({
        items
      })
    })
  }

  render() {
    let items = this.state.items.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    })
    
    return (
      <div>
        {items}
      </div>
    )
  }
}
