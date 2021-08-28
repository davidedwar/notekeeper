import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import CustomizedSnackbars from './CustomizedSnackbars';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
        margin: theme.spacing(1),
      },
  },
}));


export default function Notes(props) {
  const classes = useStyles();

  const handleNoteChange = (event) => {
    props.setValue(event.target.value);
    console.log(props.value)
  };

  const handleTitleChange = (event)=>{
    props.setTitle(event.target.value)
    console.log(props.title)
  }


  return (
    <form alert = 'false' className={classes.root} noValidate autoComplete="off">
      <div>
        <div>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField required = "true"  onChange = {handleTitleChange} id="standard-secondary" label="Note title" color="primary" />
    </form>
        <TextField
          id="filled-multiline-static"
          label="Note"
          multiline
          rows={8}  
          variant="filled"
          position="absolute"
          top = {5}
          left = "10%"
          onChange = {handleNoteChange}
          required = "true"
        />
        <br/>

  
      <CustomizedSnackbars alert = {alert}/>     
      </div>  
      </div>
    </form>
  );
}