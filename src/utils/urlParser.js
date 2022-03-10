const urlParser = (p_pathname, p_param) => {
    const location = document.location;

    if (location.pathname !== p_pathname && location.pathname.split('/')[1] !== p_pathname) {
        return null;
    }

    // console.log(new URLSearchParams(location.search).get(p_param));
    const query = location.search.split('?')[1];
    if (!query) {
        return null;
    }

    const param = query.split('=')[0];
    if (param !== p_param) {
        return null;
    }

    const value = query.split('=')[1];
    return value ? value : null;
};

export default urlParser;