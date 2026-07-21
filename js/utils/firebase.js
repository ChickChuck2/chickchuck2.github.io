// Firebase SDK ES Modules CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let db = null;
let isFirebaseConfigured = false;

// Dynamic load of the gitignored firebaseConfig.json file to avoid exposure in the codebase
// Dynamic load of the configuration. Tries Vercel Serverless Function first, then falls back to local JSON
const initPromise = (async () => {
    try {
        let response = await fetch('/api/firebaseConfig');
        if (!response.ok) {
            response = await fetch('js/utils/firebaseConfig.json');
        }
        
        if (response.ok) {
            const firebaseConfig = await response.json();
            
            // Validate that keys are not placeholder values
            if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
                const app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                isFirebaseConfigured = true;
                console.log("Firebase initialized successfully from config.");
            } else {
                console.warn("Firebase configuration has placeholder values. Using fallback testimonials.");
            }
        } else {
            console.warn(`Firebase config source not found. Using fallback testimonials.`);
        }
    } catch (e) {
        console.warn("Error loading Firebase configuration. Testimonials will fall back to demo mode.", e);
    }
})();

/**
 * Returns the Firebase initialization state and Firestore instance.
 * Ensures the async fetch and config load completes before returning.
 */
export async function getFirebaseContext() {
    await initPromise;
    return { db, isFirebaseConfigured };
}

export { collection, addDoc, getDocs, query, orderBy, serverTimestamp };
