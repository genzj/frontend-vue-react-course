import React from 'react'
import classnames from 'classnames'
import styles from './Task.module.css'

export default function Task({ content, done, onToggle }) {
    return (
        <li className={classnames({ [styles.done]: done })} onClick={onToggle}>{content}</li>
    )
}
