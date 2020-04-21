import React, {Component} from 'react'
import {Route, Switch,} from 'react-router-dom'
import FeedPage from './FeedPage'
import DetailPage from './DetailPage'

class RootContainer extends Component {

    renderRoute() {
    return (
      <div className="fl w-100 pl4 pr4">
        <Switch>
          <Route exact path="/" component={FeedPage} />
          <Route path="/post/:id" component={DetailPage} />
        </Switch>
      </div>
    )
  }
}
