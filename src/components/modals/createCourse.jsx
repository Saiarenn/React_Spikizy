import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { createCourse, fetchLanguages, fetchTypes } from "../../http/courseAPI";
import { Context } from "../../index";

const CreateCourse = observer(({ show, onHide }) => {
    const { course } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => course.setTypes(data))
        fetchLanguages().then(data => course.setLanguages(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const addCourse = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('img', file)
        formData.append('languageId', course.selectedBrand.id)
        formData.append('typeId', course.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createCourse(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Course
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{course.selectedType.name || "Choose the Type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {course.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => course.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{course.selectedBrand.name || "Choose the Brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {course.languages.map(language =>
                                <Dropdown.Item
                                    onClick={() => course.setSelectedBrand(language)}
                                    key={language.id}
                                >
                                    {language.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder={"Enter the Name of the Course"}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder={"Enter the Price of the Type"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Button
                        variant={"outline-dark"}
                        className="mt-3"
                        onClick={addInfo}
                    >
                        Add new Parameters
                    </Button>
                    {info.map(i =>
                        <Row key={i.number} className="mt-3">
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                    placeholder={"Name of the Parameter"}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                    placeholder={"Description of the Parameter"}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addCourse}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateCourse;