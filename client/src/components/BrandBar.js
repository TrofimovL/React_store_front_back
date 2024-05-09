import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
    const {deviceStore} = useContext(Context)

    return (
        <div className='d-flex flex-wrap'>
            {deviceStore.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className='p-2'
                    onClick={() => deviceStore.setSelectedBrand(brand)}
                    border={brand.id === deviceStore.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;
