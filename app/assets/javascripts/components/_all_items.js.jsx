class AllItems extends React.Component {
  constructor(props) {
    super(props)

    this.onUpdate = this.onUpdate.bind(this)
  }

  handleDelete(id) {
    this.props.handleDelete(id)
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  render() {
    let items = this.props.items.map(item => {
      return (
       <Item 
        item={item}
        handleDelete={this.handleDelete.bind(this, item.id)}
        handleUpdate={this.onUpdate}
       />
      )
    })
    
    return (
      <div className="items-content" >
        {items}
      </div>
    )
  }
}
