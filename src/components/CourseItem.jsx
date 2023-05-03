import React from "react";
import {useNavigate} from "react-router-dom";
import {COURSE_ROUTE} from "../utils/consts";
import '../style/coursepage2.css'

const CourseItem = ({course}) => {
    const router = useNavigate()
    return (
        <a href="" className="courses__item" onClick={router(COURSE_ROUTE + '/' + course.id)}>
            <div className="courses__image">
                <img className={course.img}/>
            </div>
            <h5 className="courses__title">
                Python and DJANGO IN 3 MONTHS
            </h5>
            <p className="teacher">
                Totaedandan, Satyldy Aliaskar
            </p>
            <p className="stars">
                <span className="num">{course.rating}</span>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <span className="nn">(n)</span></p>
            <div className="price">
                <p className="discount">{course.price}$ <span className="first-price">39,99$</span></p>
            </div>
        </a>

    );
}

export default CourseItem;
