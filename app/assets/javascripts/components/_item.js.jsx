class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false,
            name: '',
            description: ''
        }

        this.handleEdit = this.handleEdit.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
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

    handleEdit() {
        if (this.state.editable) {
            let item = {
                id: this.props.item.id,
                name: this.state.name,
                description: this.state.description
            }
            this.props.handleUpdate(item)
        }

        this.setState({
            editable: !this.state.editable
        })
    }

    render() {
        return (
            <div key={this.props.item.id} className="item" >
                {this.state.editable ? <input type='text' onChange={this.handleNameChange} defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>}
                {this.state.editable ? <input type='text' onChange={this.handleDescriptionChange} defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit} >{ this.state.editable ? 'Submit' : 'Edit' }</button>
            </div>
        )
    }
}