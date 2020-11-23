
// NOT IMPLEMENTED ANYWHERE YET
$(document).ready(function () {
    $('body').append('<!-- The core Firebase JS SDK is always required and must be listed first -->' +
    '<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>' +
    '<!-- TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries -->' +
    '<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js"></script>' +
    '<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-auth.js"></script>' +
    '<script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-firestore.js"></script>' +
    
    '<script>' +
    "// Your web app's Firebase configuration" +
    '// For Firebase JS SDK v7.20.0 and later, measurementId is optional' +
    'var firebaseConfig = {' +
        'apiKey: "AIzaSyDpH-Ox4GLCYKOgv1phsuyH8_uQ4QFLpPU",' +
        'authDomain: "colorpicker-75bbe.firebaseapp.com",' +
        'databaseURL: "https://colorpicker-75bbe.firebaseio.com",' +
        'projectId: "colorpicker-75bbe",' +
        'storageBucket: "colorpicker-75bbe.appspot.com",' +
        'messagingSenderId: "46363501564",' +
        'appId: "1:46363501564:web:1cd66985830bcb38e2c879",' +
        'measurementId: "G-681EFBGVN0"' +
    '};' +
    '// Initialize Firebase' +
    'firebase.initializeApp(firebaseConfig);' +
    'firebase.analytics();' +
    
    'const auth = firebase.auth();' +
    "const db = firebase.firestore();')");
})