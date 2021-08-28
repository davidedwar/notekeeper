import React from 'react'
import Notes from './Notes';
import PostButton from './PostButton';
import CustomizedSnackbars from './CustomizedSnackbars';
import NoteDisplay from './NoteDisplay';
import '../Styles/parentStyle.css'

export default function Parent() {
    const [value, setValue] = React.useState('');
    const [notesArr, setNotesArr] = React.useState([]);
    const [alert, setAlert] = React.useState(false);
    const [title, setTitle] = React.useState([]);
    const [titleArr, setTitleArr] = React.useState([]);

    return (
        <div id = "mainDiv">
        <div id = "noteDiv">
            <Notes title ={title} setTitle = {setTitle} value = {value} setValue = {setValue}/>
            <PostButton id = "postButton" alert = {alert} value = {value} notesArr = {notesArr} setNotesArr = {setNotesArr} titleArr = {titleArr} setTitleArr = {setTitleArr}  setAlert = {setAlert}/>
            </div>
            <CustomizedSnackbars alert = {alert}/>
            <div id = "postedNotes">
            {notesArr.map(note => <NoteDisplay value = {note} notesArr = {notesArr} setNotesArr = {notesArr} titleArr = {titleArr} setTitleArr = {setTitleArr}/> )}
            </div>
        </div>
    )
}
