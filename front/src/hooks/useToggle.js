import { useEffect, useRef, useState } from "react";

function useToggle() {
    const [isOpen, setIsOpen] = useState();
    const ref = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            const clickedEl = e.target;
            const isNestedMenu = clickedEl.closest(".navbar-menu-dropdown, .MenuBurger__nav--extend");

            if (isNestedMenu) {
                return;
            }

            if (ref.current && !ref.current.contains(clickedEl)) {
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
