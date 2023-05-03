import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/createLanguage";
import CreateDevice from "../components/modals/createCourse";
import CreateType from "../components/modals/createType";

function Admin() {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                className="mt-4 p-2"
                variant={"outline-dark"}
                onClick={() => setTypeVisible(true)}
            >
                Add type</Button>
            <Button
                className="mt-4 p-2"
                variant={"outline-dark"}
                onClick={() => setBrandVisible(true)}
            >
                Add brand</Button>
            <Button
                className="mt-4 p-2"
                variant={"outline-dark"}
                onClick={() => setDeviceVisible(true)}
            >
                Add device</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    );
}

export default Admin;
