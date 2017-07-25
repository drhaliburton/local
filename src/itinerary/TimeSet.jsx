import React, { Component } from 'react';

class TimeSet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startTime: 9
    };
  }
  render() {
    return (
      <div className="time-input">
        <input className="input" type="number" placeholder="9" onKeyDown={(event) => {
          if (event.key === 'Enter') {
            console.log('new time!!!!!', event.target.value)
          }
        }} />
        <div className="select is-multiple"onClick={(event) => {
              if (event.key === 'Enter') {
                console.log('new time!!!!!', event.target.value)
              }
            }}>
          <select multiple size="2">
            <option value="AM" onClick={(event) => {
              if (event.key === 'Enter') {
                console.log('new time!!!!!', event.target.value)
              }
            }}>AM</option>
            <option value="PM" onClick={(event) => {
              if (event.key === 'Enter') {
                console.log('new time!!!!!', event.target.value)
              }
            }}>PM</option>
          </select>
        </div>
      </div>
    );
  }
}

export default TimeSet;
// Logic for rendering times based on start time and duration of card 
//       <div className="has-text-centered">
//          {
//           timeArray.map((time) => {
//             if(time === 9){
//                return <div className="time">
//                <h6 className="title is-6">{`${time} : 00`}</h6>
//             </div>;
//             } else {
//               return <div className="time" style={{marginTop: time*12 + 'px'}}>
//                <h6 className="title is-6">{`${time} : 00`}</h6>
//             </div>;
//             }
//           })
//         } 
//         </div>
//     );
//   }
// }
      // <div className="time has-text-centered">
      //   <h6 className="title is-6">{this.props.time} : 00</h6>
      // </div>