import style from '../../css/components/TodoListForm.scss'

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import CheckIcon from '@material-ui/icons/Check'
import SaveIcon from '@material-ui/icons/Save'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress'

@withMobileDialog()
export default class TodoListForm extends React.Component {
  constructor() {
    super()

    this.state = {
      openDialog: false,
      sendSuccess: false,
      loading: false
    }
  }

  clickHandler(e) {
    if (e.currentTarget.id == "btn-add-todo-item") {
      this.setState({
        openDialog: true
      })
    } else if (e.currentTarget.id == "btn-send-todo") {
      console.log("serdar")
      this.setState({
        loading: true
      })

      setTimeout(() => {
        this.setState({
          loading: false,
          sendSuccess: true
        })
      }, 3000)
    }
  }

  dialogCloseHandler(e) {
    this.setState({
      openDialog: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <Dialog
          fullScreen={this.props.fullScreen}
          open={this.state.openDialog}
          onClose={this.dialogCloseHandler.bind(this)}
          aria-labelledby="responsive-dialog-title"
        >
          <IconButton
            id="btn-dialog-close"
            variant="flat"
            aria-label="Close"
            onClick={this.dialogCloseHandler.bind(this)}>
            <CloseIcon />
          </IconButton>
          <DialogTitle id="responsive-dialog-title">What is your next todo?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Post your next todo:
            </DialogContentText>
            <form id="todo-form" action="/add-item">
              <TextField
                autoFocus
                margin="dense"
                id="todo"
                label="Type your todo"
                type="text"
                name="todo"
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions id="dialog-actions">
            <Fab id="btn-send-todo"
              class={this.state.sendSuccess && "btn-saved"}
              disabled={this.state.sendSuccess}
              color="primary"
              onClick={this.clickHandler.bind(this)}>
              {this.state.sendSuccess
                ?
                <CheckIcon id="save-icon" />
                :
                <SaveIcon />
              }
              {this.state.loading && <CircularProgress id="circle-loader" size={68} />}
            </Fab>
          </DialogActions>
        </Dialog>
        <Fab id="btn-add-todo-item" color="secondary" aria-label="Add" onClick={this.clickHandler.bind(this)}>
          <AddIcon />
        </Fab>
      </React.Fragment>
    )
  }
}