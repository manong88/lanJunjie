import React, {useState} from 'react';

const Catalogue = () => {
    const [catalogue,setCatalogue] = useState(
        [
            {
                id:1,
                name:"主页"
            },
            {
                id:2,
                name:"介绍"
            },
            {
                id:3,
                name:"设置"
            }
        ]
    )


    return (
        <div>
            <ul>
                {
                    catalogue.map(item=>{
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Catalogue;