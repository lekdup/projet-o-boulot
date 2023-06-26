import { useEffect, useRef, useState } from "react";

function useToggle() {
    const [isOpen, setIsOpen] = useState();
    const ref = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return [isOpen, toggle, ref, setIsOpen];
}

export default useToggle;