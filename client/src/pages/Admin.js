import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button
                className='mt-2 p-2'
                onClick={()=> setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                className='mt-2 p-2'
                onClick={()=> setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                className='mt-2 p-2'
                onClick={()=> setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateType
                show={typeVisible}
                onHide={()=> setTypeVisible(false)}>
            </CreateType>
            <CreateBrand
                show={brandVisible}
                onHide={()=> setBrandVisible(false)}>
            </CreateBrand>
            <CreateDevice
                show={deviceVisible}
                onHide={()=> setDeviceVisible(false)}>
            </CreateDevice>
        </Container>
    );
};

export default Admin;
