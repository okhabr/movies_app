import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ROUTES } from 'shared/constants/routes'
import { Header } from 'shared/components/header/header.component'
import { Home } from 'pages/home/home.component'
import { Search } from 'pages/search/search.component'
import { Movie } from 'pages/movie/movie.component'

import store from 'store/root.store'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SEARCH.path} component={Search} />
          <Route exact path={ROUTES.MOVIE.path} component={Movie} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
