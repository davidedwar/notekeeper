import React from 'react'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'; 
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import '../Styles/parentStyle.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
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
  
export default function PostButton(props) {
    
    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
      const classes = useStyles();

      const handleSubmit = () => {
        
        var notesArr = props.notesArr;
        var titleArr = props.titleArr;
        props.setNotesArr([...notesArr,props.value]);
        console.log(notesArr);
        props.setTitleArr([...titleArr,props.title])
        console.log(props.title);
        console.log(titleArr);

        props.setAlert(true)
        console.log(alert);
        setOpen(true);
       
    }
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <div id = "postButton">
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick = {()=>{handleSubmit()}}
            >
            Save Note
        </Button>
        <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            This is a success message!
            </Alert>
        </Snackbar>
        
    </div>
  
        </div>

        
    )

   
}
