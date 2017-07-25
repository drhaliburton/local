import React, { Component } from 'react';
import {Timeline, TimelineEvent} from '../../node_modules/react-event-timeline/dist/index'
import SortableComponent from "./dnd/SortableComponent.jsx";
 
class EventLine extends Component {

    render() {
        document.getElementById('container')
    return (
        <div>
            <TimelineEvent
                           createdAt="10:00 AM"
                           iconColor="#00CFBF"
            >
            </TimelineEvent>
            <TimelineEvent
                createdAt="11:00 AM"
                iconColor="#00CFBF"
            >
            </TimelineEvent>
        </div>
    );
  }
}

export default EventLine;