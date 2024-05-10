import React from 'react';
import {Col, Image} from "react-bootstrap";
import star from '../assets/images/star.svg'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col
            md={4}
            style={{width: 150, cursor: "pointer"}}
            className='m-2'
            onClick={()=> navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}></Image>
            <div className='d-flex justify-content-between'>
                <div className='text-black-50'>Company</div>
                <div className='d-flex align-items-center'>
                    <div>{device.rating}</div>
                    <Image src={star}></Image>
                </div>
            </div>
            <div>{device.name}</div>
            <div>{device.price}</div>

        </Col>
    );
};

export default DeviceItem;
