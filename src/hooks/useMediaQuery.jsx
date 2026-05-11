import React, { useEffect, useState } from 'react'

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(
        window.matchMedia(query).matches)
    useEffect(() => {
        const media = window.matchMedia(query);
        const handler = (e) => setMatches(e.matches);
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, [query])

    return matches;
}

