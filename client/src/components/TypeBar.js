import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {Context} from "../index";

const TypeBar = () => {
    const {deviceStore} = useContext(Context)
    return (
        <ListGroup>
            {deviceStore.types.map(type =>
                <ListGroup.Item key={type.id}
                                style={{cursor: "pointer"}}
                                onClick={() => deviceStore.setSelectedType(type)}
                                active={type.id === deviceStore.selectedType.id}>
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default observer(TypeBar);
