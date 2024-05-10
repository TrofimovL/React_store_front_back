import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {deviceStore} = useContext(Context)


    useEffect(() => {
        console.log(deviceStore.devices)
    }, [])

    return (
        <Row className='d-flex'>
            {deviceStore.devices.map(device =>
                <DeviceItem
                    key={device.id}
                    device={device}
                ></DeviceItem>
            )}
        </Row>
    );
});

export default DeviceList;
