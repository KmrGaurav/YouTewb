import React, { useState } from 'react'

import Header from './Header'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            <Header setSearchTerm={setSearchTerm}/>
            <h2>SearchTerm: {searchTerm}</h2>
            <h2>SearchTerm: {searchTerm}</h2>
        </>
    )
}

export default App