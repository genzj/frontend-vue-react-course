export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const increment = (delta = 1) => ({ type: INCREMENT, delta })
const decrement = (delta = 1) => ({ type: DECREMENT, delta })
const delayedIncrement = (delay = 1000, delta = 1) => (dispatch) => setTimeout(() => {
    // Yay! Can invoke sync or async actions with `dispatch`
    dispatch(increment(delta));
}, delay);

export default {
    increment,
    decrement,
    delayedIncrement
}
