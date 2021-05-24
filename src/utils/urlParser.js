const urlParser = (p_pathname, p_param) => {
    const location = document.location
    
    if (location.pathname === p_pathname || location.pathname.split('/')[1] === p_pathname) {
        const query = location.search.split('?')[1]

        if (query) {
            const param = query.split('=')[0]

            if (param === p_param) {
                const value = query.split('=')[1]

                return value ? value : null
            } else return null
        } else return null
    } else return null
}

export default urlParser