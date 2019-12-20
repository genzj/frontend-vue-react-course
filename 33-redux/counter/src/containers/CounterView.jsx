import { connect } from 'react-redux'
import Counter from '../components/Counter'
import actions from '../actions'

const mapStateToProps = state => ({
    value: state.counter,
})
const mapDispatchToProps = dispatch => ({
    onIncrement: delta => dispatch(actions.increment(delta)),
    onDecrement: delta => dispatch(actions.decrement(delta)),
    onDelayedIncrement: (delay, delta) => dispatch(actions.delayedIncrement(delay, delta))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter)
