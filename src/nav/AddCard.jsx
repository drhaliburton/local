import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',
      description: '',
      duration: '',
      category: '',
      isActive: false
    }
  }

  reloadPage() {
    window.location.href = '/';
  }


  toggleActive(event) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  postNewCard(event) {
    event.preventDefault();

    fetch('/index', {
      method: 'POST',
      credentials: 'include',
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
    this.reloadPage()
  };


  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value }, () => { console.log(this.state) });
  }


  render() {

    const activeToggle = this.state.isActive ? 'is-active' : '';

    return (
      <div>
        <p onClick={this.toggleActive.bind(this)}><a><i className="fa fa-plus-square-o"></i>&nbsp;&nbsp;add card</a></p>
        <div className={`modal ${activeToggle}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"><i className="fa fa-suitcase"></i>&nbsp;&nbsp;New Recommendation</p>
            <button className="delete" onClick={this.toggleActive.bind(this)}></button>
          </header>
          <div className="modal-card-body">
            <form className="add-card-form" onSubmit={this.postNewCard.bind(this)}>
              <div className="field">
                <label className="label">Destination Location</label>
                <p className="control has-icons-left">
                  <Geosuggest type="text" placeholder="     Enter an Address, Neighbourhood or City" data="location" value={this.state.location} name="location" onChange={this.handleChange.bind(this)} />
                  <span className="icon is-small is-left">
                    <i className="fa fa-globe"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Destination Title</label>
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder="What is the name of your recommendation?" value={this.state.title} name="title" onChange={this.handleChange.bind(this)}></input>
                  <span className="icon is-small is-left">
                    <i className="fa fa-tag"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">Why do you love this place?</label>
                <p className="control has-icons-left">
                  <input className="input" type="text" placeholder={`${this.state.title || "This place"}` + " is my favourite because..." } name="description" value={this.state.description} onChange={this.handleChange.bind(this)}></input>
                  <span className="icon is-small is-left">
                    <i className="fa fa-pencil"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label">How much time should I spend there?</label>
                <p className="control has-icons-left">
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
          <footer className="modal-card-foot">
              <div className="control">
                <button type="submit" value="submit" className="button is-primary" onClick={this.toggleActive.bind(this)}>Submit</button>
              </div>


          </footer>
          </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default AddCard;