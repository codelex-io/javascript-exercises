/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    //sakumaa notiram virknes
    function cleanString(string){
        const alphaOnly = string.replace(/[^a-zA-Z]/gi, '');
        return alphaOnly.toLowerCase();
    }
    stringA = cleanString(stringA);
    stringB = cleanString(stringB);
    
    //viena no metodeem kaa salidzinaat anagrammas ir saskirot un tad salidzinaat.
    //javascript ir array.sort() metode
    stringA = stringA.sort();
    stringB = stringB.sort();
    console.log(stringA);
    console.log(stringB);

}
module.exports = anagrams;
