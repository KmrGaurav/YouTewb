import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header, HomeVideosList, SearchVideosList, VideoPage } from '.'

const App = () => {
    return (
        <Router>
            <Header />
            <Route path="/"        exact component={HomeVideosList} />
            <Route path="/results" exact component={SearchVideosList} />
            <Route path="/watch"   exact component={VideoPage} />
        </Router>
    )
}

export default App