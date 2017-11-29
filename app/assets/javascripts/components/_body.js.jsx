class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentWillMount() {
    fetch('/api/v1/items.json')
    .then( response => response.json() )
    .then(items => {
      this.setState({
        items
      })
    })
  }

  handleSubmit(item) {
    let newItem = this.state.items.concat(item)

    this.setState({
      items: newItem
    })
  }

  handleDelete(id) {
    fetch(`/api/v1/items/${id}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.status === 204) {
        this.removeItemClient(id)
      }
    })
  }

  handleUpdate(item) {
    fetch(`/api/v1/items/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item
      })
    }).then(response => {
      if (response.status === 200) {
        this.updateItems(item)
      }
    })
  }

  updateItems(item) { 
    let items = this.state.items.map( i => {
      if (i.id == item.id) {
        i.name = item.name
        i.description = item.description
      }
      return i
    })

    this.setState({
      items: items
    })
  }
  

  removeItemClient(id) {
    let newItems = this.state.items.filter(item => {
      return item.id != id
    })

    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div className="flex-row" >
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems onUpdate={this.handleUpdate} handleDelete={this.handleDelete} items={this.state.items} />
      </div>
    )
  }
}
