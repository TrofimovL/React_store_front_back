import React from 'react';
import {Toast, ToastContainer} from "react-bootstrap";
import ToastContext from "react-bootstrap/ToastContext";

const NotificationPopup = ({show, toggleShow, text}) => {
    return (
        <ToastContainer position='bottom-center' className='mb-3'>
            <Toast show={show}>
                <Toast.Header closeButton={false}>
                    <strong className="me-auto">Сообщение</strong>
                </Toast.Header>
                <Toast.Body>{text}</Toast.Body>
            </Toast>
        </ToastContainer>

    );
};

export default NotificationPopup;
