import React, { useEffect } from 'react'

const useClickOutside = (refs, handler) => {
    useEffect(() => {
        const listener = (e) => {
            for(const ref of refs) {
                if (ref.current && ref.current.contains(e.target)) {
                    return;
                }
            }
            handler(e)
        };
        document.addEventListener("mousedown", listener);
        return () => document.removeEventListener('mousedown', listener)
    }, [refs, handler])
}

export default useClickOutside