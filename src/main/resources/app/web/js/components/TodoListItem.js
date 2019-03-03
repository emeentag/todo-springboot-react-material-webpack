import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

export default class TodoListItem extends React.Component {

  constructor() {
    super()
  }

  getListItemContent() {
    return (
      <React.Fragment>
        <Typography component="span" color="textPrimary" class="sender-text">
          This is the sender
        </Typography>
        <Typography component="span" color="textSecondary" class="sender-text">
          — I'll be in your neighborhood doing errands this…
        </Typography>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Grid item class="list-item">
        <Paper>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>H</Avatar>
              </ListItemAvatar>
              <ListItemText primary="This is the title" secondary={this.getListItemContent()}></ListItemText>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    )
  }
}