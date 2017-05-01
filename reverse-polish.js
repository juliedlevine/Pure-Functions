const pureCli = require('./pure-cli');

function reducer(state, input) {
    if (state === null) {
        let state = {stack: []};
        return state;
    } else if (Number(input)) {
        let arr = state.stack;
        let newArray = arr.concat([Number(input)]);
        let newObj = Object.assign({}, state, {stack: newArray});
        return newObj;
    } else if (input === '+') {
        let arr = state.stack;
        let addLastTwo = [arr[arr.length - 1] + arr[arr.length - 2]];
        let sliceArray1 = arr.slice(0, arr.length - 1);
        let sliceArray2 = arr.slice(0, arr.length - 2);
        let newArray = sliceArray2.concat(addLastTwo);
        let newObj = Object.assign({}, state, {stack: newArray});
        return newObj;
    } else if (input === '-') {
        let arr = state.stack;
        let subtractLastTwo = [arr[arr.length - 1] - arr[arr.length - 2]];
        let sliceArray1 = arr.slice(0, arr.length - 1);
        let sliceArray2 = arr.slice(0, arr.length - 2);
        let newArray = sliceArray2.concat(subtractLastTwo);
        let newObj = Object.assign({}, state, {stack: newArray});
        return newObj;
    } else if (input === '*') {
        let arr = state.stack;
        let multiplyLastTwo = [arr[arr.length - 1] * arr[arr.length - 2]];
        let sliceArray1 = arr.slice(0, arr.length - 1);
        let sliceArray2 = arr.slice(0, arr.length - 2);
        let newArray = sliceArray2.concat(multiplyLastTwo);
        let newObj = Object.assign({}, state, {stack: newArray});
        return newObj;
    } else if (input === '/') {
        let arr = state.stack;
        let divideLastTwo = [arr[arr.length - 1] / arr[arr.length - 2]];
        let sliceArray1 = arr.slice(0, arr.length - 1);
        let sliceArray2 = arr.slice(0, arr.length - 2);
        let newArray = sliceArray2.concat(divideLastTwo);
        let newObj = Object.assign({}, state, {stack: newArray});
        return newObj;
    } else if (input === 'q') {
        let newObj = Object.assign({}, state, {
            action: 'end'
        });
        return newObj;
    }
}

module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
