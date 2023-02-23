import React, {Component} from 'react'
import './Hangsman.css'
import Header from './Header';
import getRandomWords from './Words';
import Input from './Input';

import Man from './Man';
import DisplayBoard from './DisplayBoard';
import GameOver from './GameOver';
import Winner from './Winner';
const empty_space= "__";
const wrong_letter = 6;
class Hangsman extends Component {

    constructor(props){
        super(props);
        // В начале конструктора необходимо вызывать super(props).
        //  Если это не сделать, this.props не будет определён.
        // Это может привести к багам.
        this.state= {
            word:getRandomWords(),
            guessedWord:new Set(),
            wrongGuesses:0,
            isGameOver: false,
            isWinner: false

        }
        this.getInput = this.getInput.bind(this);
        this.getGuessedWord =  this.getGuessedWord.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }
getGuessedWord(){
    
//     Для начала, загаданное слово сохраняется в переменной answer. Затем, используя метод split(), оно разбивается на массив букв.

// Далее, каждая буква в массиве проверяется на наличие в Set, хранящем уже угаданные буквы this.state.guessedWord.
//  Если буква уже была угадана, она остается на своем месте, иначе вместо нее ставится знак подчеркивания или другой символ, 
// представленный переменной empty_space.

// Например, если this.state.word равно "react", а this.state.guessedWord содержит "r" и "t", то метод вернет массив ["r", "_", "_", "t", "_"].
    
    let answer = this.state.word;

    let answerArray = answer.split("").map((letter) => {
        return this.state.guessedWord.has(letter) ? letter : empty_space;
    });

    return answerArray;
};

resetGame() {
    this.setState({
        word: getRandomWords(),
        wrongGuesses: 0,
        guessedWord: new Set(),
        isGameOver: false,
        isWinner: false,
    });
}

getInput(letter){
    // console.log("Clicked:", letter)
    let newWrongGuesses =
    this.state.wrongGuesses +
    (this.state.word.includes(letter) ? 0 : 1);
    this.setState((state) => ({
    guessedWord: state.guessedWord.add(letter),
    wrongGuesses: newWrongGuesses,
    isWinner: this.getGuessedWord().join("") === state.word,
    isGameOver: newWrongGuesses > wrong_letter - 1 ? true : false,
}));
}
   render(){
    const game = (
        <div className="game">
            <DisplayBoard word={this.getGuessedWord()} />
            <Input getInput={this.getInput} />
        </div>
    );

    const winnerORLoser = this.state.isWinner ? (
        <Winner reset={this.resetGame} />
    ) : this.state.isGameOver ? (
        <GameOver word={this.state.word} reset={this.resetGame} />
    ) : (
        game
    );
    return(
        <div className='hangman-container'>
            <Header attempts ={wrong_letter - this.state.wrongGuesses}/>
            <Man wrongGuesses = {this.state.wrongGuesses}/>
            {/* <DisplayBoard word = {this.getGuessedWord()}/>
            <Input getInput={this.getInput}/> */}
           
           {winnerORLoser}
        </div>
    )
   }
 
}

export default Hangsman;
