// @ts-nocheck
import React, { useEffect } from 'react';

export function useKeyboardEvent(key: string, callback: Function, updateArray?: Array<any>) {
    useEffect(() => {
        const handler = function (event: React.KeyboardEvent) {
            if (event.key === key) {
                callback && callback();
            }
        }

        window.addEventListener('keydown', handler);

        return () => {
            window.removeEventListener('keydown', handler);
        }
    }, updateArray?.length ? updateArray : []);
}