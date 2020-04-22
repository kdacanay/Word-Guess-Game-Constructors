// Letter.js: Contains a constructor, Letter. This constructor should be able to either 
// display an underlying character or a blank placeholder (such as an underscore),
// depending on whether or not the user has guessed the letter. That means the constructor should define:
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, 
// or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly

function Letter (letter) {

//----------variable that stored underlying character 
    this.letter = letter.toUpperCase();
    
//----------boolean value that sted whether letter has been guessed yet
    this.check = false;

//---------function to determine whether to return letter or return underscore is displayed 
    this.guessedCharacter = function () {
    if (this.check) {
    
        this.check = false;
        return this.letter + " ";
    
    } else if (this.letter === " ") {

        return " ";
    } else {

        return "_ ";
    }
}
//---------function that takes letter as an argument and checks it against underlying character
//----------and updates boolean value to true if correct
    this.compareGuess = function(userGuess) {
        if (userGuess === this.letter) {

            this.check = true;
            return true;
        
        } else {
            
            this.check = false;
            return false;
    
        }

    }
};


//---------used for word.js-------------------------
module.exports = Letter;

