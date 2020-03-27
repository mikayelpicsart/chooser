import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function useTest() {
    useEffect(() => { console.log('teskokokokt'); return () => { } });
}

export function Comp() {
    return <div>{uuidv4()}</div>;
}