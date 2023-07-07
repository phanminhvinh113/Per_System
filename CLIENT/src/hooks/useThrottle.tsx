import { useEffect, useRef, useState } from 'react';

export default function useThrottle(value: string, delay: number) {
    //
    const [valueThrottle, setValueThrottle] = useState<string>('');
    const [wait, setWait] = useState<boolean>(false);
    //
    useEffect(() => {
        if (wait) return;
        else setWait(true);
        //
        const timer = setTimeout(() => {
            setValueThrottle(value);
            setWait(false);
        }, delay);
        //
    }, [value]);
    //
    return valueThrottle;
}
