import React, {useEffect, useState} from "react";
import {Card, Col, Row, Container, Image, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import bigStar from "../assets/Star 1.png"
import {fetchCourseById} from "../http/courseAPI";


const CoursePage = () => {
    const [course, setCourse] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchCourseById(id).then(data => setCourse(data))
    }, [])

    return (
        <div>
            <section id="hero">

                <div className="row">

                    <div className="hero__wrapper">
                        <video controls>
                            <source src="" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>

                        <div className="hero__details">
                            <div className="hero__title">
                                SWIFT FOR INTERTMEDIATE AND ADVANCED IOS DEVELOPERS
                                <span className="hero__text">
                            (10 modules, 34 lessons, 9 hours 30 mins)
                        </span>
                            </div>
                            <div className="container">
                                <button className="start">Start</button>
                                <div>
                                    <div className="hero__stat">
                                        <div className="hero__author">Gabatz Hachik</div>
                                        <div className="hero__reviews">(10,687 reviews)</div>
                                        <div className="hero__students">60 000 students</div>
                                    </div>
                                    <div className="hero__rating">
                                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                        className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section id="main">

                <div className="row">

                </div>

            </section>

            <section id="material">

                <div className="row">

                    <h3>Lessons in the class</h3>

                    <div className="graybox">

                        <div className="card">
                            <button className="collapsible2">
                                <div className="Lesson">
                                    <div>Lesson 1</div>
                                    <div>Introduction</div>
                                </div>

                                <i className="fa-solid fa-chevron-down"></i>
                            </button>

                            <div className="data">
                                <div className="column">
                                    <div className="container">
                                        <img alt="" src="../Elements/play.png"/>
                                        <p>Sub Lecture 1</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 2</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 3</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 4</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card">
                            <button className="collapsible2">
                                <div className="Lesson">
                                    <div>Lesson 2</div>
                                    <div>Data Preprocessing</div>
                                </div>

                                <i className="fa-solid fa-chevron-down"></i>
                            </button>

                            <div className="data">
                                <div className="column">
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 1</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 2</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 3</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 4</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card">
                            <button className="collapsible2">
                                <div className="Lesson">
                                    <div>Lesson 3</div>
                                    <div>Text Mining</div>
                                </div>

                                <i className="fa-solid fa-chevron-down"></i>
                            </button>


                            <div className="data">
                                <div className="column">
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 1</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 2</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 3</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 4</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card">
                            <button className="collapsible2">
                                <div className="Lesson">
                                    <div>Lesson 4</div>
                                    <div>Practice Projects</div>
                                </div>

                                <i className="fa-solid fa-chevron-down"></i>
                            </button>

                            <div className="data">
                                <div className="column">
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 1</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 2</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 3</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                    <div className="container">
                                        <img src="../Elements/play.png"/>
                                        <p>Sub Lecture 4</p>
                                        <span className="duration">34 min</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="about">

                <div className="row">

                    <div className="about__wrapper">
                        <span className="about__head">About the class</span>
                        <div className="about__data">
                            <div className="data__wrapper">

                            </div>
                            <div>The Machine learning basics program is
                                designed to offer a solid foundation & work-
                                ready skills for ML engineers. The Machine
                                learning basics program is designed to offer a
                                solid foundation & work-ready skills for ML
                                engineers.<br/></div>
                            <div className="data">The Machine learning basics program is
                                designed to offer a solid foundation & work-
                                ready skills for ML engineers. The Machine
                                learning basics program is designed to offer a
                                solid foundation & work-ready skills for ML
                                engineers.<br/></div>
                            <button className="collapsible"><span>See More</span> <i
                                className="fa-solid fa-chevron-down"></i></button>
                            <br/>
                        </div>

                    </div>

                </div>

            </section>

            <section id="teachers">

                <div className="row">

                    <h3>Meet your teacher</h3>
                    <div className="bio">
                        <div className="initials">Kim Taehyung <button className="start">Follow</button></div>
                        <h4>Head of Data Science in BTS</h4>
                        <div className="container">
                            <img src="../Elements/image 10.png"/>
                            <div className="column">
                                <p><i className="fa-solid fa-star"></i></p>
                                <p><i className="fa-solid fa-medal"></i></p>
                                <p><i className="fa-solid fa-user-group"></i></p>
                                <p><i className="fa-solid fa-circle-play"></i></p>
                            </div>
                            <div className="column">
                                <p>4,9 rating</p>
                                <p>968 968 feedbacks</p>
                                <p>3 103 951 students</p>
                                <p>57 courses</p>
                            </div>
                        </div>

                        <div className="teacher__info">

                            <div>Kim Taehyung has a BS and MS in Mechanical Engineering from Santa Clara University and
                                years
                                of
                                experience as a professional instructor and trainer for Data Science, Machine Learning
                                and
                                Python
                                Programming. He has publications and patents in various fields such as microfluidics,
                                materials
                                science,
                                and data science. Over the course of his career he has developed a skill set in
                                analyzing
                                data
                                and
                                he
                                hopes to use his experience in teaching and data science to help other people learn the
                                power of
                                programming, the ability to analyze data, and the skills needed to present the data in
                                clear
                                and
                                beautiful visualizations.
                            </div>
                            <div className="data">
                                Currently he works as the Head of Data Science for Pierian Training and
                                provides in-person data science
                                and python programming training courses to employees working at top companies, including
                                General
                                Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to
                                check out the
                                website link to find out more information about training offerings.
                            </div>
                            <button className="collapsible"><span>Expand</span> <i
                                className="fa-solid fa-chevron-down"></i></button>
                            <br/>
                        </div>
                    </div>

                    <div className="bio">
                        <div className="initials">Jeon Jungkook <button className="start">Follow</button></div>
                        <h4>Professional Software Engineer | SW Architect | Instructor</h4>
                        <div className="container">
                            <img alt="" src="../Elements/image 11.png"/>
                            <div className="column">
                                <p><i className="fa-solid fa-star"></i></p>
                                <p><i className="fa-solid fa-medal"></i></p>
                                <p><i className="fa-solid fa-user-group"></i></p>
                                <p><i className="fa-solid fa-circle-play"></i></p>
                            </div>
                            <div className="column">
                                <p>4,9 rating</p>
                                <p>968 968 feedbacks</p>
                                <p>3 103 951 students</p>
                                <p>57 courses</p>
                            </div>
                        </div>

                        <div className="teacher__info">
                            <div>Jeon Jungkook is an experienced software engineer and software architect.
                                In his professional career, he has developed numerous flagship products and has worked
                                on
                                cutting-edge solutions and technologies for companies like Google, Intel, and many
                                others.
                                He is primarily interested in real-time and high-scale software and demonstrated his
                                technical leadership skills working at many leading companies in their fields.
                            </div>

                            <div className="data">
                                He is also programming language and technology agnostic and his teaching
                                methods
                                emphasize
                                understanding the core fundamentals and developing the right way of thinking and good
                                practices.
                                His passion for technology made him a good mentor for other engineers and students, and
                                he
                                is excited to share his knowledge and experience here at Spikizy.
                            </div>
                            <button className="collapsible"><span>Expand</span> <i
                                className="fa-solid fa-chevron-down"></i></button>
                            <br/>
                        </div>

                    </div>
                </div>

            </section>

            <section id="skills">
                <div className="row">
                    <div className="skills__wrapper">
                        <h3 className="heading">Skills</h3>
                        <div className="skills__items">
                            <div className="skills__item">
                                Branding
                            </div>
                            <div className="skills__item">
                                Marketing
                            </div>
                            <div className="skills__item">
                                Network Branding
                            </div>
                            <div className="skills__item">
                                Bussiness
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ratings">

                <div className="row">

                    <div className="ratings__wrapper">

                        <h3 className="heading">Ratings <span className="rates">(1376 reviews)</span></h3>
                        <div className="ratings__items">

                            <div className="ratings__item">
                                <div className="column">
                                    <div className="ratings__item-avatar"><img src="../Elements/image 10.png" alt=""/>
                                    </div>
                                    <div className="ratings__item-name">OvuWave Osas</div>
                                </div>
                                <div className="column">
                                    <div className="container">
                                        <div className="ratings__item-stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></div>
                                        <div className="ratings__item-date">Posted 4 days ago</div>
                                    </div>
                                    <hr className="ratings__divider"/>
                                    <div className="ratings__item-text">It was excellent class</div>
                                </div>
                            </div>

                            <div className="ratings__item">
                                <div className="column">
                                    <div className="ratings__item-avatar"><img src="../Elements/image 10.png"
                                                                               alt=""/></div>
                                    <div className="ratings__item-name">OvuWave Osas</div>
                                </div>
                                <div className="column">
                                    <div className="container">
                                        <div className="ratings__item-stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="ratings__item-date">Posted 4 days ago</div>
                                    </div>
                                    <hr className="ratings__divider"/>
                                    <div className="ratings__item-text">It was excellent class</div>
                                </div>
                            </div>

                            <div className="ratings__item">
                                <div className="column">
                                    <div className="ratings__item-avatar">
                                        <img src="../Elements/image 10.png" alt=""/></div>
                                    <div className="ratings__item-name">OvuWave Osas</div>
                                </div>
                                <div className="column">
                                    <div className="container">
                                        <div className="ratings__item-stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="ratings__item-date">Posted 4 days ago</div>
                                    </div>
                                    <hr className="ratings__divider"/>
                                    <div className="ratings__item-text">It was excellent class</div>
                                </div>
                            </div>

                            <div className="ratings__item">
                                <div className="column">
                                    <div className="ratings__item-avatar">
                                        <img src="../Elements/image 10.png" alt=""/></div>
                                    <div className="ratings__item-name">OvuWave Osas</div>
                                </div>
                                <div className="column">
                                    <div className="container">
                                        <div className="ratings__item-stars"><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="ratings__item-date">Posted 4 days ago</div>
                                    </div>
                                    <hr className="ratings__divider"/>
                                    <div className="ratings__item-text">It was excellent class</div>
                                </div>
                            </div>

                        </div>

                        <button className="ratings__more">See more reviews</button>

                    </div>

                </div>

            </section>

            <section id="courses">

                <div className="row">
                    <h3 className="heading">Related classes</h3>

                    <a href="" className="container">

                        <img src="../Elements/200.jpg"/>

                        <div className="column">
                            <h5>Machine Learning</h5>
                            <div className="courses__text">4.5<i className="fa-solid fa-star"></i></div>
                            <div className="courses__text">10.5k Learners</div>
                        </div>


                    </a>


                </div>

            </section>

        </div>
    );
}

export default CoursePage;
