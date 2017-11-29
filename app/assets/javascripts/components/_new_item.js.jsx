class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleNameChange(e) {
    let name = e.target.value
    this.setState({
      name
    })
  }

  handleDescriptionChange(e) {
    let description = e.target.value
    this.setState({
      description
    })
  }

  handleClick(e) {
    e.preventDefault()
    let name = this.state.name
    let description = this.state.description

    fetch('/api/v1/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item: {
          name: name,
          description: description
        }
      })
    }).then(response => {
      if (response.status === 201) {
        return response.json()
      }
    }).then(item => {
      this.props.handleSubmit(item)
      this.setState({
        name: '',
        description: ''
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleClick} >
        <div className="form-items">
          <input
            className="input-items"
            onChange={this.handleNameChange}
            placeholder = "Enter the name of the item"
            value={this.state.name} />
          <input
            className="input-items"
            onChange={this.handleDescriptionChange}
            placeholder = "Enter a description"
            value={this.state.description} />
          <input className="input-items" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
