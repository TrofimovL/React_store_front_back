import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {create} from "axios";

const CreateDevice = observer(({show, onHide}) => {
    const {deviceStore} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => deviceStore.types = data)
        fetchBrands().then(data => deviceStore.brands = data)
    }, [deviceStore])


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (event) => {
        setFile(event.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i)) // [key] ?
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', price)
        formData.append('price', price)
        formData.append('img', file)
        formData.append('brandId', deviceStore.selectedBrand.id)
        formData.append('typeId', deviceStore.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить товар</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>{deviceStore.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {deviceStore.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => deviceStore.selectedType = type}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle
                            className={deviceStore.selectedType.name ? '' : 'disabled'}
                        >
                            {deviceStore.selectedBrand.name || 'Выберите бренд'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {deviceStore.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => deviceStore.selectedBrand = brand}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        placeholder='Введите название товара'
                        className='mt-3'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></Form.Control>

                    <Form.Control
                        placeholder='Введите стоимость товара'
                        className='mt-3'
                        type='number'
                        value={price}
                        onChange={(event) => setPrice(Number(event.target.value))}
                    ></Form.Control>
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    ></Form.Control>
                    <hr/>
                    {info.map(i =>
                        <Row key={i.number} className='mt-2'>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Название'
                                    value={i.title}
                                    onChange={(event) => changeInfo('title', event.target.value, i.number)}
                                >
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='Описание'
                                    value={i.description}
                                    onChange={(event) => changeInfo('description', event.target.value, i.number)}
                                >
                                </Form.Control>
                            </Col>
                            <Col md={4} onClick={() => removeInfo(i.number)}>
                                <Button variant='outline-danger'>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                    <Button variant='outline-primary' className='mt-3' onClick={addInfo}>Добавить новое
                        свойство</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрыть</Button>
                <Button variant="primary" onClick={addDevice}>Добавить товар</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
