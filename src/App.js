import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import Departures from './Departures';
// import Arrivals from './Arrivals';
// import InformationDesk from './InformationDesk';
// import LostFound from './LostFound';
// import BaggageTrack from './BaggageTrack';
// import BookService from './BookService';

import Navigation from './Component/Layout/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <div >
        <Navigation />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/departures" component={Departures} />
          <Route path="/arrivals" component={Arrivals} />
          <Route path="/information-desk" component={InformationDesk} />
          <Route path="/lost-found" component={LostFound} />
          <Route path="/baggage-track" component={BaggageTrack} />
          <Route path="/book-service" component={BookService} />
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
