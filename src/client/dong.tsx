import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';

function Dong() {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCount(count + 1);
    //     }, 500);
    //     clearInterval(timer);
    // }, []);

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log(count);
    //     }, 500);
    // }, []);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCount(count + 1);
    //     }, 500);
    //     console.log(count, 'count');
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [count]);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log(count);
    //     }, 500);
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [count]);

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
        }, 500);
    }, []);


    // const fn = () => {
    //     console.log(count);
    // };
    // const ref = useRef(fn);

    // useLayoutEffect(() => {
    //     ref.current = fn;
    // });

    // useEffect(() => {
    //     setInterval(() => ref.current(), 500);
    // }, []);

    return <div>{count}</div>;
}

export default Dong;