import {useState , useEffect , useRef} from 'react';

export const useShowScreen = () => {
    const ref = useRef(null); 
    const [show , setShow] = useState(false);
    useEffect(() => {
        Promise.resolve(
        typeof window.IntersectionObserver !== undefined ?
        window.IntersectionObserver :
        import('intersection-observer'))
        .then(() => {
            const Observer = new window.IntersectionObserver(entries => {
                const { isIntersecting } = entries[0];
                if(isIntersecting) {
                    setShow(true);
                    Observer.disconnect();
                }
            });
            Observer.observe(ref.current);
        });
    }, [ref])
    return [show , ref];
};