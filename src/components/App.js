import React, { useState } from 'react'

import { Header, HomeVideosList, SearchVideosList } from '.'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <Header setSearchTerm={setSearchTerm}/>
            {/* <HomeVideosList /> */}
            { searchTerm ? <SearchVideosList searchTerm={searchTerm} /> : null }
        </>
    )
}

export default App