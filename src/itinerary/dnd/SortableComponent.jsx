import React, { Component } from 'react';
// import ItineraryCard from "./ItineraryCard.jsx";
import { render } from '../../../node_modules/react-dom';
import { SortableContainer, SortableElement, arrayMove } from '../../../node_modules/react-sortable-hoc';
import RemoveCard from "./RemoveCard.jsx";

const SortableItem = SortableElement(({ value }) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({ items }) => {
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
      items: this.props.cards
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {

    const move = arrayMove(this.state.items, oldIndex, newIndex)
    this.setState({
      items: move,
    });

    this.props.reorderCards(move);
  };

  shouldCancelStart(e) {
    // Cancel sorting if the event target is an anchor tag (`a`)
    if (e.target.tagName.toLowerCase() === 'i') {
        return true; // Return true to cancel sorting
    }
  }

  setImageHeight(duration) {
    if (duration > 100) {
      return 'large-itinerary-image';
    } else {
      return 'small-itinerary-image';
    }
  }

  renderSize(duration) {
    if (duration > 100) {
      return (
        'long-event'
      );
    } else {
      return (
        'short-event'
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    // To avoid reseting order on new-card-add:
    //  0) make a copy of this.state.items
    //  1) loop through nextProps.cards
    //  2) for each nextProps.card, see if it already exists in this.state.items
    //  3) if yes, *APPEND* it to the copy
    //  4) setState to the copy
    let last = (nextProps.cards).length - 1
    let newProp = nextProps.cards[last]
    let oldState = this.state.items
    let newestAddition = oldState.concat(newProp)

    this.setState({
      items: nextProps.cards
    })
  }

  renderImage(images) {
    if (images === null) {
      return 'https://source.unsplash.com/random/400';
    } else {
      let randomInt = Math.ceil(Math.random() * images.length) - 1;
      return images[randomInt];
    }
  }

  render() {

    const items = this.props.cards;
    const renderedItems = this.state.items.map(card =>
    <div className="itinerary-cards-container">
      <article className="media">
        <figure className="media-left">
          <p className={`itinerary-image ${this.setImageHeight(card.duration)}`}>
            <img src={this.renderImage(card.photos)}></img>
          </p>
        </figure>
        <div className={`media-content ${this.renderSize(card.duration)}`}>
          {/*<div className="itinerary-delete" onClick={(event) => {this.props.remove({card:this.props.card})}}>✖︎</div>*/}
          <p className="title">
            {card.title}
          </p>
          <p className="subtitle">
            {card.address || "128 Main Street, Realtown"}
          </p>
          <p>
            {card.description}
          </p>
          <p className="duration">Recommended time: ~ {card.duration} minutes</p>
        </div>
      <RemoveCard remove={this.props.remove} card={card} />
    </article >
    </div>
    )

    return <SortableList items={renderedItems} onSortEnd={this.onSortEnd} shouldCancelStart={this.shouldCancelStart} />;
  }
}

// render(<SortableComponent/>, document.getElementById('reactRoot'));

export default SortableComponent;
