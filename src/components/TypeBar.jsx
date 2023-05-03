import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../index";

const TypeBar = observer(() => {
    const { course } = useContext(Context)
    return (
        <ListGroup>
            {course.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    active={type.id === course.selectedType.id}
                    onClick={() => course.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default TypeBar;
