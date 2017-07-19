import React, {Component} from 'react';
import ItineraryCard from "./ItineraryCard.jsx";
import {render} from '../../node_modules/react-dom';
import {SortableContainer, SortableElement, arrayMove} from '../../node_modules/react-sortable-hoc';

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    fetch('/index')
      .then((res) => res.json())
      .then((items) => this.setState({ 
        items: items 
      })
    );
  }
  locationSearch(event) {
    fetch(`/index/locate?find=${event}`)
      .then((res) => res.json())
      .then((items) => this.setState({
        items: items
      })
    );
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  setCardHeight(items) {
    if (items.duration > 100) {
      return 'big-card';
    } else {
      return 'small-card';
    }
  }
  renderSize(duration){
    if (  duration > 100) {
      return (
        'large'
      );
    } else {
      return (
       'small'
      );
    }
  }

  render() {
    
    const renderedItems = this.state.items.map(card => 
          <div className='box'>
            <article className='media large'> 
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png"></img>
              </p>
            </figure>
            <div className={`media-content ${this.renderSize(card.duration)}`}>
              <div className="content">
                <p>
                  <strong>{card.title}</strong>
                  <br className="subtitle"></br>
                  {card.location}
                  <br></br><small>{card.duration}</small>
                </p>
              </div>
            </div>
              <div className="media-right">
                <button className="delete"></button>
              </div>
          </article>
        </div>
    )

    return <SortableList items={renderedItems} onSortEnd={this.onSortEnd} />;
  }
}

// render(<SortableComponent/>, document.getElementById('reactRoot'));

export default SortableComponent;
