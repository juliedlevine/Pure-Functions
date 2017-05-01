const pureCli = require('./pure-cli');

function reducer(state, input) {
    if (state === null) {
        let state = {
            number: Math.floor(Math.random() * 10) + 1,
            guess: null,
            action: null
        };
        return state;
    } else if (state.number === Number(input)) {
        let newObj = Object.assign({}, state, {
            guess: Number(input),
            action: 'end'
        });
        return newObj;
    } else {
        let newObj = Object.assign({}, state, {
            guess: Number(input)
        });
        return newObj;
    }
}

module.exports = reducer;

function display(state) {
  if (state.guess === null) {
    console.log('I am thinking of a number between 1-10. Take a guess.');
  } else if (state.number === state.guess) {
    console.log('You win!');
  } else if (state.number > state.guess) {
    console.log('Too low! Try again.');
  } else if (state.number < state.guess) {
    console.log('Too high! Try again.');
  }
}

if (require.main === module) {
  pureCli(reducer, display);
}
