const urlParser = (): string | null => {
    const location = document.location;
    const pathname = location.pathname.split('/');

    if (pathname.length === 2) {
        const params = new URLSearchParams(location.search);
        if (pathname[1] === 'results') {
            const value = params.get('search_query');
            return value;
        } else if (pathname[1] === 'watch') {
            const value = params.get('v');
            return value;
        }
    } else if (pathname.length === 3) {
        if (pathname[1] === 'c') {
            return pathname[2];
        }
    }

    return null;
};

export default urlParser;