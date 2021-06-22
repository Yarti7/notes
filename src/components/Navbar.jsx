import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Button, Space, Row, Col} from 'antd';
import {useDispatch} from "react-redux";
import {addNotes_actionCreator, deleteNotes_actionCreator} from "../redux/notes-reducers";

const Navbar = (props) => {

    const dispatch = useDispatch();


    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Space size={12}>
                        <Button onClick={() => dispatch(addNotes_actionCreator("123"))} type="primary" >ADD NOTE</Button>
                        <Button onClick={() => dispatch(deleteNotes_actionCreator(1))} type="primary" danger>DELETE NOTE</Button>
                        <Button >EDIT NOTE</Button>
                        <Button type="primary">Search</Button>
                    </Space>
                </Row>

            </Col>
        </Row>
    )
}

export default Navbar;