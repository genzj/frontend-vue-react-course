// Method I
// actions.js
function showNotification(text) {
    return { type: 'SHOW_NOTIFICATION', text }
}
function hideNotification() {
    return { type: 'HIDE_NOTIFICATION' }
}

// component.js
function onLoggedIn() {
    this.props.dispatch(showNotification('You just logged in.'))
    setTimeout(() => {
        this.props.dispatch(hideNotification())
    }, 5000)
}

function onLoggedOut() {
    this.props.dispatch(showNotification('You just logged out.'))
    setTimeout(() => {
        this.props.dispatch(hideNotification())
    }, 5000)
}


// Method II
// actions.js
function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
}
function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
}

// component.js
function onLoggedIn() {
    this.props.dispatch(showNotification('id-aaa', 'You just logged in.'))
    setTimeout(() => {
        this.props.dispatch(hideNotification('id-aaa'))
    }, 5000)
}

function onLoggedOut() {
    this.props.dispatch(showNotification('id-bbb', 'You just logged out.'))
    setTimeout(() => {
        this.props.dispatch(hideNotification('id-bbb'))
    }, 5000)
}


// Method III
// actions.js
function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
}
function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
}

let nextNotificationId = 0
export function showNotificationWithTimeout(dispatch, text) {
    // Assigning IDs to notifications lets reducer ignore HIDE_NOTIFICATION
    // for the notification that is not currently visible.
    // Alternatively, we could store the timeout ID and call
    // clearTimeout(), but we’d still want to do it in a single place.
    const id = nextNotificationId++
    dispatch(showNotification(id, text))

    setTimeout(() => {
        dispatch(hideNotification(id))
    }, 5000)
}

// component.js
function onLoggedIn() {
    showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')
}
function onLoggedOut() {
    showNotificationWithTimeout(this.props.dispatch, 'You just logged out.')
}



// Method IV
// actions.js
function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
}
function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
}

let nextNotificationId = 0
export function showNotificationWithTimeout(dispatch, text) {
    // Assigning IDs to notifications lets reducer ignore HIDE_NOTIFICATION
    // for the notification that is not currently visible.
    // Alternatively, we could store the timeout ID and call
    // clearTimeout(), but we’d still want to do it in a single place.
    const id = nextNotificationId++
    dispatch(showNotification(id, text))

    setTimeout(() => {
        dispatch(hideNotification(id))
    }, 5000)
}

// component.js
function helper(cb) {
    return cb.call(null, this.props.dispatch, ...arguments)
}

function onLoggedIn() {
    helper(showNotificationWithTimeout, 'You just logged in.')
}
function onLoggedOut() {
    helper(showNotificationWithTimeout, 'You just logged out.')
}



// Method V (Final)
// actions.js
function showNotification(id, text) {
    return { type: 'SHOW_NOTIFICATION', id, text }
}
function hideNotification(id) {
    return { type: 'HIDE_NOTIFICATION', id }
}

let nextNotificationId = 0
export function showNotificationWithTimeout(text) {
    return function (dispatch) {
        const id = nextNotificationId++
        dispatch(showNotification(id, text))

        setTimeout(() => {
            dispatch(hideNotification(id))
        }, 5000)
    }
}

// component.js
function thunk(cb) {
    return cb(this.props.dispatch)
}

function onLoggedIn() {
    thunk(showNotificationWithTimeout('You just logged in.'))
}
function onLoggedOut() {
    thunk(showNotificationWithTimeout('You just logged out.'))
}
