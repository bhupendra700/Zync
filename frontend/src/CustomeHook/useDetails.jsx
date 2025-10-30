import { useEffect } from "react";

const useDetails = (detailsRef) => {
    const handleDetails = (e) => {
        if (!detailsRef.current?.contains(e.target)) {
            detailsRef.current?.removeAttribute("open");
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleDetails);

        return () => document.removeEventListener("click", handleDetails);
    }, [])

}

export default useDetails