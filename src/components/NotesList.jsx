import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Collapse } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {getNoteList} from "../selectors/notelist-selector";
import { Popconfirm, Button  } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {editNotes_actionCreator} from "../redux/notes-reducers";


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const NotesList = (props) => {

    const dispatch = useDispatch();

    const noteList = useSelector(getNoteList);
    console.log(noteList);



    return (
        <Collapse accordion>
            {noteList.map((items) => {

                return (
                    <Panel header={items.name}  key={items.id}>
                        <p>{items.text}</p>
                        <Button onClick={() => dispatch(editNotes_actionCreator(items.id, true))} type="link">Edit</Button>
                        <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                            <a href="#">Delete</a>
                        </Popconfirm>
                    </Panel>
                )

            })}

        </Collapse>
    )
}

export default NotesList;