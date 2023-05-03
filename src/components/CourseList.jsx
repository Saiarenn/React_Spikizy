import { observer } from "mobx-react-lite";
import React from "react";
import CourseItem from "./CourseItem";
import courseImg from "../Elements/unsplash_w7ZyuGYNpRQ.png"

const CourseList = observer(() => {
    const courses = [
        { id: 1, price: 500, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 2, price: 100, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 3, price: 200, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 4, price: 56, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 5, price: 1000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 6, price: 100, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 7, price: 1000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 8, price: 10000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 11, price: 500, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 12, price: 100, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 13, price: 200, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 14, price: 56, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 15, price: 1000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 16, price: 100, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 17, price: 1000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 18, price: 10000, img: courseImg, description: "Machine learning course...", rating: 102 },
    ]
    return (
        <div className="courses">
            {courses.map(course =>
                <CourseItem
                    key={course.id} course={course}
                />
            )}
        </div>
    );
})

export default CourseList;
