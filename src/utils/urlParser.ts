const urlParser = (p_pathname: string, p_param: string): string | null => {
    const location = document.location;
    const pathname = location.pathname;

    if (pathname !== '/results' && pathname !== '/watch' && pathname !== '/c') {
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