import React from 'react';
import Card from 'react-bootstrap/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import '../Styles/parentStyle.css'

export default function NoteDisplay(props) {

  // handleClick = (event) =>{
  //   props.setNotesArr(props.notesArr.filter(note => note.key!=event.target.key));
  // }

  return (
    <div>
        <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>
           <IconButton id = "trashIcon" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          {props.title}Title
           
        </Card.Header>
        <Card.Body>
        <Card.Text>
            {props.value}
            
        </Card.Text>
        </Card.Body>
        </Card>
    </div>
  );
}   