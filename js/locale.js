// (function(){
//     if(location.hostname === 'translate.googleusercontent.com') {
//         return;
//     }
//     try {
//         var getNavigatorLanguage = function() {
//             if (navigator.languages && navigator.languages.length) {
//                 return navigator.languages[0];
//             } else {
//                 return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
//             }
//         };
//         var hasUkraineLanguage = function() {
//             try {
//                 if (navigator.languages && navigator.languages.length) {
//                     var languages =  navigator.languages;
//                     for(var i=0; i < languages.length; i++) {
//                         var locale = languages[i].split('-')[0];
//                         if(locale === 'uk') {
//                             return true
//                         }
//                     }
//                 } else {
//                     return getNavigatorLanguage().split('-')[0] === 'uk';
//                 }
//                 return false
//             } catch(e){
//                 return false;
//             }
//
//         };
//         var locale = getNavigatorLanguage();
//
//         if(locale) {
//             var language = locale.split('-')[0];
//             if(language) {
//
//                 if(hasUkraineLanguage() ) {
//                     if(location.pathname !=='/') {
//                         location.pathname = '/';
//                     }
//                 }
//                 else {
//                     if(language === 'es' && location.pathname ==='/') {
//                         location.pathname = '/es';
//                         return;
//                     }
//                     if(language === 'pt' && location.pathname ==='/') {
//                         location.pathname = '/pt';
//                         return;
//                     }
//                     if(location.pathname ==='/') {
//                         location.pathname = '/en';
//                         return;
//                     }
//                 }
//
//
//
//             }
//         }
//     } catch(e) {
//
//     }
//
// })();
