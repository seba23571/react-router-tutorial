import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Settings from './components/settings';
import Reports from './components/reports';
import ReportsId from './components/reportsId';
//link del video
//https://www.youtube.com/watch?v=8m8Q4wqFez0
function App() {
  return (
  

    <BrowserRouter>
      <Switch>
        <Route  path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="/reports/:reportId" component={ReportsId} />
        <Route path="/reports" component={Reports} />


      </Switch>
    </BrowserRouter>
  );
  ReactDOM.render(<App />, document.getElementById('root'));
  //export default App;

}

export default App;
