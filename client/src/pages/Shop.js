import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {

    const {deviceStore} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => deviceStore.types = data)
        fetchBrands().then(data => deviceStore.brands = data)
        fetchDevices(null, null, 1, 3).then(data => {
            deviceStore.devices = data.rows
            deviceStore.totalCount = data.count
        })
    }, [])

    useEffect(() => {
        fetchDevices(deviceStore.selectedType.id, deviceStore.selectedBrand.id, deviceStore.page, 3).then(data => {
            deviceStore.devices = data.rows
            deviceStore.totalCount = data.count
        })
    }, [deviceStore.page, deviceStore.selectedType, deviceStore.selectedBrand]);

    return (
        <Container>
            <Row className='mt-4'>
                <Col md={3}>
                    <TypeBar></TypeBar>
                </Col>
                <Col md={9}>
                    <BrandBar></BrandBar>
                    <DeviceList></DeviceList>
                    <Pages></Pages>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
