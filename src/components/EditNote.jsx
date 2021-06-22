import React from 'react';
import {Button, Row, Col, Input} from 'antd';
import {getEditNoteById, getIsEdit} from "../selectors/notelist-selector";
import {useSelector} from "react-redux";


const {TextArea} = Input;


const EditNote = (props) => {

    const toEditMode = useSelector(getIsEdit);


    return (
        <Row>
            <Col span={12} offset={6}>
                <div>
                    {toEditMode ? <EditMode/> : "Note text"}
                </div>
            </Col>
        </Row>
    )
}

const EditMode = () => {

    const editNoteId = useSelector(getEditNoteById);


    return (<div>
        <p>{editNoteId[0].name}</p>
        <TextArea rows={4} value={editNoteId[0].text}/>
        <Button type="primary">Save note</Button>
    </div>)
}


export default EditNote;