const ADD_NOTE = 'ADD_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';


let initialState = {

    notesData: [
        {id: 0, name: "note1", text: "text here"},
        {id: 1, name: "note2", text: "text here"},
        {id: 2, name: "note3", text: "text here"},
        {id: 3, name: "note4", text: "text here"},
        {id: 4, name: "note5", text: "text here"}
    ],
    isEdit: false,
    editNoteId : null
}


export const notesReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_NOTE:

            let newN = {id: state.notesData.length + 1, name: "note" + state.notesData.length, text: action.newNote};

            return {
                ...state,
                notesData: [...state.notesData, newN]
            };

        case DELETE_NOTE:

            return {
                ...state,
                notesData: state.notesData.filter(item => item.id !== action.noteId)
            };

        case EDIT_NOTE:

            return {
                ...state,
                isEdit: action.isEdit,
                editNoteId: action.noteId
            };

        default:
            return state;
    }

}

export const addNotes_actionCreator = (newNote) => ({type: ADD_NOTE, newNote});
export const deleteNotes_actionCreator = (noteId) => ({type: DELETE_NOTE, noteId});
export const editNotes_actionCreator = (noteId, isEdit) => ({type: EDIT_NOTE, noteId, isEdit});


export default notesReducer;