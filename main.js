/* 
alien language translator

There are aliens that have contacted us, and they have tried to use English, but it has gone a bit wrong!

The good news is that the alien's attempt is really similar to English, but all the letters they use are 5 letters after the real words in the alphabet. So, for example, the word "hello" would be "mjqqt".

Any letter at the end of the alphabet will wrap around to the beginning, so "z" would be "e".

write a function that takes an alien string and returns the English translation!
(you will only get a string with lowercase letters and spaces).
*/

//👉 Write the function your CodeWarriors will start with below here:
export function alienTranslator(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alienAlphabet = 'fghijklmnopqrstuvwxyzabcde';
    let translation = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            translation += ' ';
        } else {
        translation += alphabet[alienAlphabet.indexOf(string[i])];
        }
    }
    return translation;
}