import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import {useTracking} from 'react-tracking'
import {IDeletionPopupModalProps} from '../Types/sharedITypes'

const DeleteionDialogueBox: React.FC<IDeletionPopupModalProps> = (props) => {
  const {trackEvent} = useTracking()

  const handleConfirmationClose = () => {
    props.setPopup({
      show: false,
      id: 0,
    })
  }

  return (
    <Dialog
      open={props.popup.show}
      onClose={handleConfirmationClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        <span style={{fontSize: '15px'}} className='fw-bolder text-bold min-w-250px'>
          Confirm to proceed?
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id='alert-dialog-description'
          className='fw-bolder text-muted min-w-250px text-hover-primary'
        >
          Are you sure to delete the record(s)?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button
          className='btn btn-bg btn-light-primary me-8'
          style={{marginTop: '14px'}}
          onClick={(e) => {
            props.setForDeletionInConfirmationOpen()
            trackEvent({
              Path: 'delete-region',
              DomSelector: 'submit-delete-region-button',
            })
          }}
        >
          Continue
        </button>
        <button
          className='btn btn-bg btn-light-primary me-8'
          style={{marginTop: '14px'}}
          onClick={handleConfirmationClose}
        >
          Cancel
        </button>
      </DialogActions>
    </Dialog>
  )
}

export {DeleteionDialogueBox}
