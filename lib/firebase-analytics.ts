"use client";

import {getAnalytics, isSupported} from 'firebase/analytics';
import { app } from './firebase';

let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app)
        }
    })
}

export {analytics}