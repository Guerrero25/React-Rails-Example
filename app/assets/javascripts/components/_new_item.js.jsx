class NewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(e) {
    e.preventDefault()
    let name = this.state.name
    let description = this.state.description

    fetch('/api/v1/items', {
      method: 'POST',
      body: {
        item: {
          name: name,
          description: description
        }
      }
    }).then(respose => response.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleNameChange} placeholder = "Enter the name of the item" />
        <input onChange={this.handleDescriptionChange} placeholder = "Enter a description" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
