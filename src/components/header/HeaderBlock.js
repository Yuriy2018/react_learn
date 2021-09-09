import React from 'react';
import s from './HeaderBlock.module.css'


const HeaderBlock = () => {
    const title = 'This is title';
    const descr = 'This is Description!';
    return (
        <>
            <div className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
            </div>
        </>
    );

}

export default HeaderBlock;