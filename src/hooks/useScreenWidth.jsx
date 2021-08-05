import { useState, useEffect } from "react";

export function useScreenWidth(){
    const [size, setWidth] = useState({width: undefined});

    useEffect(() => {
        function handleResize(){
            setWidth({width: window.innerWidth});
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
}