import React from "react";

import HeaderBlock from "./components/header/HeaderBlock";
import LayoutBlock from "./components/layout/LayoutBlock";
import FooterBlock from "./components/footer/FooterBlock";

import bg from '../src/assets/bg3.jpg'

const App = () => {
    const title = 'sdfsdf';
    return (
        <>
            <HeaderBlock title={'MyTitle'} descr={'MyDescr'}/>
            <LayoutBlock style={'backgroundImage: `url(${bg})`'} title={'MyTitle'} descr={'MyDescr'}/>
            <LayoutBlock title='-- ЗДЕСЬ props.title --'/>
            <LayoutBlock title='-- ЗДЕСЬ props.title --'/>
            <FooterBlock/>
        </>
    );
}

export default App;