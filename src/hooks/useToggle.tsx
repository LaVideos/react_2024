import { useState, useCallback } from 'react';

function useToggle(initialValue: boolean = false): [boolean, () => void] {
    const [isToggled, setState] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setState((prevState) => !prevState);
    }, []);

    return [isToggled, toggle];
}

export default useToggle;
