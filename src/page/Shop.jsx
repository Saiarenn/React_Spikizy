import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";
import '../style/filter.css'
import Catalog from "../components/Catalog";
import { fetchTypes, fetchLanguages, fetchCourse } from "../http/courseAPI";
import CourseList from "../components/CourseList";

const Shop = observer(() => {
    const { course } = useContext(Context)

    // useEffect(() => {
    //     fetchTypes().then(data => course.setTypes(data))
    //     fetchLanguages().then(data => course.setLanguages(data))
    //     fetchCourse().then(data => course.setCourses(data.rows))
    // }, [])

    return (
        <div>
            <section id="head">

                <div className="row">

                    <h4>All courses in topic <i className="fa-solid fa-chevron-left"></i><i
                        className="fa-solid fa-chevron-left"></i><span className="topic">Python</span><i
                            className="fa-solid fa-chevron-right"></i><i className="fa-solid fa-chevron-right"></i></h4>

                    <p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
                    </p>

                    <button className="filter" aria-expanded="true"><span><i className="fa-solid fa-filter"></i> Filter</span></button>
                    <button className="sort"><span>Sort by <i className="fa-solid fa-chevron-down"></i></span></button>

                </div>

            </section>
            <section id="cotalog">

                <div className="row">

                    <div className="wrapper">
                        <Catalog />
                        <CourseList />
                    </div>
                </div>
            </section >
        </div>
    );
})

export default Shop;
