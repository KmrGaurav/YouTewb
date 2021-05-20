import React, { useState } from 'react'

import { Header, HomeVideosList } from '.'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <Header setSearchTerm={setSearchTerm}/>
            <HomeVideosList />
        </>
    )
}

export default App