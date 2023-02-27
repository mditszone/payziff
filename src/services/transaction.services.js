


export const getTransactions = () => {
    return fetch("http://localhost:3000/transactions/getAllTransactions", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (res.status === 200) return res.json();
        else throw new Error("Invalid response");
    });
}


// function test() {
//     fetch("http://localhost:3000/firebase/getfirebaseConfig").then(async (res) => {
//             const firebaseConfig = await res.json();
//             const firebaseApp = initializeApp(firebaseConfig);

//             const auth = getAuth(firebaseApp);
//             console.log(auth);
//             const verifier = window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//                 'size': 'invisible',
//                 'callback': (response) => {
//                   console.log("prepared phone auth process");
//                 }
//               }, auth);
//               const phoneNumber = '+91 70132 98534';
//               const appVerifier = window.recaptchaVerifier;

//               signInWithPhoneNumber(auth, phoneNumber, verifier)
//               .then((confirmationResult) => {
//                   // SMS sent. Prompt user to type the code from the message, then sign the
//                   // user in with confirmationResult.confirm(code).
//                   console.log(confirmationResult);
//                   window.confirmationResult = confirmationResult;

//                   navigate("/otp", {state:{create: true}});


//                   // ...
//               }).catch((error) => {
//                   // Error; SMS not sent
//                   // ...
//               });

//         });
// }