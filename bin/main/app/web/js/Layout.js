import React from 'react'
import TodoListItem from './components/TodoListItem'
import TodoListForm from './components/TodoListForm'
import Divider from '@material-ui/core/Divider'

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div container class="layout">
          <div class="title-container">
            <h1>
              <div class="home-title">Todo List</div>
            </h1>
            <h1>
              <div class="home-desc">Here is your todo(s)</div>
            </h1>
          </div>
          <Divider light class="divider" />
          <div class="list-items-container">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
          </div>
        </div>
        <div container class="post-item-container">
          <TodoListForm />
        </div>
      </React.Fragment>
    )
  }
}