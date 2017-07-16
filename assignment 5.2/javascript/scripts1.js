// Function to find if given character is a vowel or a consonant

var character = prompt('Please enter the character to check if its vowel or consonant');

var vowels = ['a', 'e', 'i', 'o', 'u'];



if (vowels.indexOf(character) >= 0) {

    alert('Entered character ' + character + ' is a vowel');


} else {
    alert('Entered character ' + character + ' is a consonant');
}

// Is it possible to write this with any of the loops and if else statement?