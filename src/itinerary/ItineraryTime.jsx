import React, {Component} from 'react';

//Contains
class ItineraryTime extends Component {
  render() {
    return (
        <div className="column is-2 has-text-centered">
          <p className="fa fa-coffee" aria-hidden="true"></p>
          <p className="fa fa-sun-o" aria-hidden="true"></p>
          <p className="fa fa-moon-o" aria-hidden="true"></p>
          
          <img className="morning" src="http://imgur.com/in0JlIC.png" alt="travel like you live there"></img>
          <img className="afternoon" src="http://imgur.com/IPTE4Qf.png" alt="travel like you live there"></img>
          <img className="night" src="http://imgur.com/uRiMWoB.png" alt="travel like you live there"></img> 
        </div>
    );
  }
}
export default ItineraryTime;