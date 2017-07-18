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
  state = {
    items: [{
     title: "Food Place",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "here",
     type: "food",
     duration: 120,
     start_time: "11:00am"
   }, {
     title: "Hike Time",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "There",
     type: "outdoors",
     duration: 180,
     start_time: "1:00pm"
   }, {
     title: "Art Place",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    const renderedItems = this.state.items.map(obj => 
          <div className="itinerary-card">
            <article className="media large">
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="http://bulma.io/images/placeholders/128x128.png"></img>
              </p>
            </figure>
            <div className="media-content large">
              <div className="content">
                <p>
                  <strong>{obj.title}</strong>
                  <br className="subtitle"></br>
                  {obj.location}
                  <br></br><small>{obj.duration}</small>
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
