import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, LottoPage, MinesweeperPage } from 'page';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/Lotto" component={LottoPage}/>
        <Route exact path="/Mine" component={MinesweeperPage}/>
      </Switch>
    </div>
  );
}; 

export default App;
    