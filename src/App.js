import './App.css';
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import React from "react";
import { Layout } from 'antd';
import FooterContent from "./components/FooterContent";
import { initDB } from 'react-indexed-db';


const { Header, Footer, Sider, Content } = Layout;



function App() {
    return (
        <div className="App">

            <Layout>
                <Header><Navbar/></Header>
                <Layout>
                    <Sider><NotesList/></Sider>
                    <Content><EditNote /></Content>
                </Layout>
                <Footer><FooterContent/></Footer>
            </Layout>


        </div>
    );
}

export default App;
