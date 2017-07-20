import React, {Component} from 'react';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',
      description: '',
      duration: '',
      category: ''
    }
  }

  postNewCard(event){
    event.preventDefault();
    console.log('Posted new card');

    fetch('/index', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        duration: this.state.duration,
        category: this.state.category
      })
    })
  };

  handleChange(event) {
    let name = event.target.name;
    this.setState({[name]: event.target.value}, () => {console.log(this.state)});
  }

  render() {
    return (
      <form className="add-card-form" onSubmit={this.postNewCard.bind(this)}>
        <div className="field">
          <label className="label">Destination Location</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Enter an Address, Neighbourhood or City" data="location" value={this.state.location} name="location" onChange={this.handleChange.bind(this)}></input>
            <span className="icon is-small is-left">
              <i className="fa fa-globe"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">Destination Title</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="What is the name of your recommendation?" value={this.state.title} name="title" onChange={this.handleChange.bind(this)}></input>
            <span className="icon is-small is-left">
              <i className="fa fa-tag"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">Why do you love this place?</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder={`${this.state.title || "This place"}` + " is my favourite because..." } name="description" value={this.state.description} onChange={this.handleChange.bind(this)}></input>
            <span className="icon is-small is-left">
              <i className="fa fa-pencil"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">How much time should I spend there?</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="number" placeholder="Enter a value in minutes, eg: 30 or 120" value={this.state.duration} name="duration" onChange={this.handleChange.bind(this)}></input>
            <span className="icon is-small is-left">
              <i className="fa fa-hourglass-half"></i>
            </span>
          </p>
        </div>


        <div className="field">
          <p className="control">
            <span className="select">
              <select value={this.state.category} name="category" onChange={this.handleChange.bind(this)}>
                <option>-- Category --</option>
                <option>Food</option>
                <option>Nature</option>
                <option>Shopping</option>
                <option>Sights</option>
              </select>
            </span>
          </p>
        </div>
        <div className="control">
          <button type="submit" value="submit" className="button is-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default AddCard;