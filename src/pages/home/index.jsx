import React from 'react';
import Style from '../../style/hoem.module.less'
import Catalogue from "../../component/catalogue.jsx";

const Index = () => {
    return (
        <div>
            <aside className={Style.aside}>
                <Catalogue>S</Catalogue>
            </aside>
        </div>
    );
};

export default Index;