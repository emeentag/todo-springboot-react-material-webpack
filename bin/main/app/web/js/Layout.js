import React from 'react'
import Grid from '@material-ui/core/Grid'
import TodoListItem from './components/TodoListItem'
import TodoListForm from './components/TodoListForm'

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Grid container direction="row" justify="center" alignItems="center" class="layout">
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="flex-end" class="post-item-container">
          <TodoListForm />
        </Grid>
      </React.Fragment>
    )
  }
}