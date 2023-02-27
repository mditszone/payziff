import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, } from "firebase/auth";
import { apiRequest } from "../services/generic.service";
import { useNavigate } from "react-router-dom";

/* global grecaptcha */


export function fireBaseLogin({fireBaseURL, buttonId, phoneNumber, navigateHandler }) {
    console.log({ fireBaseURL, buttonId, phoneNumber, navigateHandler });
    apiRequest(fireBaseURL, 'GET').then((config) => {
        const firebaseApp = initializeApp(config);
        const auth = getAuth(firebaseApp);
        console.log("test");
        window.recaptchaVerifier = new RecaptchaVerifier(buttonId, {
            'size': 'invisible',
            'callback': (response) => {
                console.log("prepared phone auth process");
            }
        }, auth);

        const appVerifier = window.recaptchaVerifier;
        console.log("test1");
        signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log(window.confirmationResult);
            navigateHandler();
        }).catch((error) => {
            window.recaptchaVerifier.render().then(function (widgetId) {
                grecaptcha.reset(widgetId);
            });
            console.log(error)
        }).catch(error => console.log(error));
    })
    .catch((error) => console.log(error));

}