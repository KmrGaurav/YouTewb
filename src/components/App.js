import React, { useState } from 'react'

import { Header, SearchVideosList } from '.'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <Header setSearchTerm={setSearchTerm}/>
            <SearchVideosList searchTerm={searchTerm} />
        </>
    )
}

export default App