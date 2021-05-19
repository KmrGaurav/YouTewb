import React, { useEffect } from 'react'

import youtube from '../apis/youtube'

const SearchVideosList = ({ searchTerm }) => {
    useEffect(() => {
        (async () => {
            const res = await youtube.get('/search', {
                params: {
                    q: searchTerm,
                    maxResults: 5
                }
            })
            console.log(res.data)
        })()
    }, [searchTerm])

    return (
        <div />
    )
}

export default SearchVideosList