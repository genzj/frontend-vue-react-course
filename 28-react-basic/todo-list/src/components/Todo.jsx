import React, { Component } from 'react'
import Task from './Task'
import TaskContainer from './TaskContainer'

export class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { done: false, content: "design" },
                { done: false, content: "coding" },
                { done: false, content: "testing" }
            ]
        }

        this.onKeyUp = this.onKeyUp.bind(this)
    }

    toggle(idx) {
        this.setState(state => {
            const {todos} = state
            todos[idx].done = !todos[idx].done
            return {
                todos
            }
        })
    }

    addTask(content, done = false) {
        content = content.trim()
        if (!content.length) return

        this.setState(state => {
            const {todos} = state
            todos.push({ content, done })
            return {
                todos
            }
        })
    }

    onKeyUp(evt) {
        if (evt.key === 'Enter') {
            this.addTask(evt.target.value, evt.ctrlKey)
        }
    }

    render() {
        const { title = 'TODOS' } = this.props
        const { todos } = this.state
        const stat = {
            done: todos.filter(todo => todo.done).length,
            total: todos.length,
        }

        return (
            <div>
                <h1>{title} ({stat.done} / {stat.total})</h1>
                <p>
                    <input
                        type="text"
                        placeholder="enter task"
                        onKeyUp={this.onKeyUp}
                    />
                </p>
                {todos.length > 0 ?
                    <TaskContainer>
                        {
                            todos.map((todo, idx) =>
                                <Task
                                    content={todo.content}
                                    done={todo.done}
                                    key={todo.content}
                                    onToggle={() => this.toggle(idx)}
                                />)
                        }
                    </TaskContainer> :
                    <p>No todos at this moment.</p>
                }
            </div >
        )
    }
}

export default Todo
