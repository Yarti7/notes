export const getNoteList = (state) => {
    return state.notes.notesData;
}

export const getIsEdit = (state) => {
    return state.notes.isEdit;
}

export const getEditNoteById = (state) => {
 return  state.notes.notesData.filter(item => item.id === state.notes.editNoteId);

}



