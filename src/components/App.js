import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header, HomeVideosList, SearchVideosList } from '.'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <Router>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Route path="/" exact component={HomeVideosList} />
            <Route path={`/results`} exact component={SearchVideosList} />
        </Router>
    )
}

export default App