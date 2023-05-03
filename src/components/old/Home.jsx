import React, { useContext, useState } from "react";
import LoginModal from "./home/LoginModal"
import RegModal from "./home/RegModal";
import ForgotModal from "./home/ForgotModal";
import { PopContext } from "../../App";
import courseImg from '../../Elements/200.jpg'


function Home() {

    const courses = [
        { id: 1, price: 500, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 2, price: 100, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 3, price: 200, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 4, price: 56, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 5, price: 1000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 6, price: 100, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 7, price: 1000, img: courseImg, description: "Machine learning course...", rating: 102 },
        { id: 8, price: 10000, img: courseImg, description: "Machine learning course...", rating: 102 },
    ]

    const pop = useContext(PopContext)

    const packs = [...document.querySelectorAll('.slider-line')];
    const nextbtn = [...document.querySelectorAll('.rightbutton')];
    const prevbtn = [...document.querySelectorAll('.leftbutton')];


    packs.forEach((item, i) => {
        let offset = 0;

        nextbtn[i].addEventListener('click', () => {
            if (i != 2) offset += 19.2;
            else offset += 25.5;
            if (offset > 76.8) offset = 0;
            packs[i].style.left = -offset + 'vw';
        });

        prevbtn[i].addEventListener('click', () => {
            if (i != 2) offset -= 19.2;
            else offset -= 25.5;
            if (offset < -1) offset = 76.8;
            packs[i].style.left = -offset + 'vw';

        });
    });

    return (
        <div>
            <LoginModal show={pop.loginVisible} onHide={() => pop.setLoginVisible(false)} />
            <RegModal show={pop.regVisible} onHide={() => pop.setRegVisible(false)} />
            <ForgotModal show={pop.forgotVisible} onHide={() => pop.setForgotVisible(false)} />

            <section id="hero">

                <div className="heroscreen">

                    <form id="searchform">
                        <input type="text" id="search" placeholder="What do want to learn?" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>

                    <div>
                        <h3>Learn a New Skill<br />
                            Everyday, Anytime,<br />
                            and Anywhere.
                        </h3>
                        <p>
                            <b>1000+</b> Courses covering all tech domains for you to<br />
                            learn and explore new opportunities. Learn from<br />
                            Industry Experts and land your Dream Job.
                        </p>
                    </div>

                    <div className="container">
                        <div id="column">
                            <h4 id="yellow">1000+</h4>
                            <h6>Courses to<br />
                                choose from</h6>
                        </div>

                        <div id="column">
                            <h4 id="green">5000+</h4>
                            <h6>Students <br />
                                Trained</h6>
                        </div>

                        <div id="column">
                            <h4 id="orange">200+</h4>
                            <h6>Professional<br />
                                Trainers</h6>
                        </div>

                    </div>
                </div>
            </section>

            <section id="Statistic">

                <div className="row">

                    <div className="stat">

                        <div className="container">
                            <div id="instructor" className="icons">
                                <img id="icons" src="../../Elements/GraduationCap.png" />
                            </div>
                            <div>
                                <h4>300</h4>
                                <p>Instructor</p>
                            </div>
                        </div>

                        <div className="container">
                            <div id="student" className="icons">
                                <img id="icons" src="../../Elements/Users.png" />
                            </div>
                            <div>
                                <h4>20,000+</h4>
                                <p>Student</p>
                            </div>
                        </div>

                        <div className="container">
                            <div id="video" className="icons">
                                <img id="icons" src="../../Elements/VideoCamera.png" />
                            </div>
                            <div>
                                <h4>10,000+</h4>
                                <p>Video</p>
                            </div>
                        </div>

                        <div className="container">
                            <div id="users" className="icons">
                                <img id="icons" src="../../Elements/UsersThree.png" />
                            </div>
                            <div className="column">
                                <div id="statGet">
                                    <h4>999,999+</h4>
                                    <p>Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="courses">

                <div className="row">

                    <div>
                        <h5>Most <span>Popular Course</span></h5>
                        <p>Various versions have evolved over the years, sometimes by accident,</p>
                    </div>
                </div>
                <div className="feedgrid">

                    <button className="leftbutton"><i className="fa-solid fa-chevron-left"></i></button>
                    <div className="swiper slider">
                        <div className="slider-line">
                            {courses.map(course =>
                                <a className="pack" href="" key={course.id}>
                                    <div id="courseimage"><img src={course.img} /></div>
                                    <p>{course.description}</p>
                                    <div className="container">
                                        <p>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            ({course.rating})
                                        </p>
                                    </div>
                                    <hr />
                                    <h6>{course.price + '$'}</h6>
                                </a>
                            )}
                        </div>

                    </div>

                    <button className="rightbutton"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="swiper-pagination"></div>

            </section>

            <section id="category">

                <div className="row">

                    <div>
                        <h5>Most <span>Popular Category</span></h5>
                        <p>Various versions have evolved over the years, sometimes by accident,</p>
                    </div>
                    <div className="column">

                        <div className="container">

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/PenNib.png" />
                                    <div className="column">
                                        <p>Design</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/FileHtml.png" />
                                    <div className="column">
                                        <p>Development</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle" href=""><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/MicrophoneStage.png" />
                                    <div className="column">
                                        <p>Marketing</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Briefcase.png" />
                                    <div className="column">
                                        <p>Business</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                        </div>

                        <div className="container">

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/SunHorizon.png" />
                                    <div className="column">
                                        <p>Lifestyle</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Camera.png" />
                                    <div className="column">
                                        <p>Photography</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/MusicNote.png" />
                                    <div className="column">
                                        <p>Music</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Database.png" />
                                    <div className="column">
                                        <p>Data Science</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                        </div>

                        <div className="container">

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Lightbulb.png" />
                                    <div className="column">
                                        <p>Personal Develop</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Heartbeat.png" />
                                    <div className="column">
                                        <p>Health & Fitness</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Graph.png" />
                                    <div className="column">
                                        <p>Finance</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                            <a className="services" href="">
                                <div className="container"><img src="../../Elements/Detective.png" />
                                    <div className="column">
                                        <p>Teaching</p>
                                        <p className="courseNum">Courses 145</p>
                                    </div>
                                </div>
                                <div id="circle"><img className="Arr" src="../../Elements/ArrowUpRight.png" />
                                    <img className="ArrOr" src="../../Elements/ArrowUpRightOrrange.png" />
                                </div>
                            </a>

                        </div>

                    </div>

                </div>

            </section>

            <section id="staff">

                <div className="row">

                    <div>
                        <h5>Our best <span>Instructor</span></h5>
                        <p>Various versions have evolved over the years, sometimes by accident,</p>
                    </div>
                </div>
                <div className="feedgrid">
                    <button className="leftbutton"><i className="fa-solid fa-chevron-left"></i></button>
                    <div className="slider">
                        <div className="slider-line">
                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2016.png" /></div>
                                <h3>Kakashi Hatake</h3>
                                <p>UI UX Design Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2017.png" /></div>
                                <h3>Onizuka Eikichi</h3>
                                <p>Social Media Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2018.png" /></div>
                                <h3>Jeon Jungkook</h3>
                                <p>Business Idea Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2019.png" /></div>
                                <h3>Kim Taehyung</h3>
                                <p>Photograpy Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2016.png" /></div>
                                <h3>Kakashi Hatake</h3>
                                <p>UI UX Design Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2017.png" /></div>
                                <h3>Onizuka Eikichi</h3>
                                <p>Social Media Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2018.png" /></div>
                                <h3>Jeon Jungkook</h3>
                                <p>Business Idea Expert</p>
                            </div>

                            <div className="pack">
                                <div id="courseimage"><img src="../../Elements/Rectangle%2019.png" /></div>
                                <h3>Kim Taehyung</h3>
                                <p>Photograpy Expert</p>
                            </div>
                        </div>
                    </div>
                    <button className="rightbutton"><i className="fa-solid fa-chevron-right"></i></button>
                </div>

                <div className="pagination">
                    <button className="page active"></button>
                    <button className="page"></button>
                    <button className="page"></button>
                    <button className="page"></button>
                </div>

            </section>

            <section id="feedback">

                <div className="row">

                    <div>
                        <h5>Students <span>Feedback</span></h5>
                        <p>Various versions have evolved over the years, sometimes by accident,</p>
                    </div>
                </div>

                <div className="feedgrid">
                    <button className="leftbutton"><i className="fa-solid fa-chevron-left"></i></button>
                    <div className="slider">
                        <div className="slider-line">

                            <div className="feeds">
                                <div className="container">

                                    <div><img className="ava" src="../../Elements/Rectangle%2023.png" /></div>
                                    <div className="feedtext">
                                        <h4>Elon Musk</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>

                            <div className="feeds">
                                <div className="container">
                                    <div><img className="ava" src="../../Elements/Rectangle%2024.png" /></div>
                                    <div className="feedtext">
                                        <h4>tokayev_online</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>

                            <div className="feeds">
                                <div className="container">
                                    <div><img className="ava" src="../../Elements/Rectangle%2025.png" /></div>
                                    <div className="feedtext">
                                        <h4 id="oljas">OlzhasKazhybayev</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>

                            <div className="feeds">
                                <div className="container">

                                    <div><img className="ava" src="../../Elements/Rectangle%2023.png" /></div>
                                    <div className="feedtext">
                                        <h4>Elon Musk</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>

                            <div className="feeds">
                                <div className="container">
                                    <div><img className="ava" src="../../Elements/Rectangle%2024.png" /></div>
                                    <div className="feedtext">
                                        <h4>tokayev_online</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>

                            <div className="feeds">
                                <div className="container">
                                    <div><img className="ava" src="../../Elements/Rectangle%2025.png" /></div>
                                    <div className="feedtext">
                                        <h4 id="oljas">OlzhasKazhybayev</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>

                            <div className="feeds">
                                <div className="container">

                                    <div><img className="ava" src="../../Elements/Rectangle%2023.png" /></div>
                                    <div className="feedtext">
                                        <h4>ElonMusk</h4>
                                        <h5>UI UX Designer</h5>
                                    </div>
                                    <div><img id="quote" src="../../Elements/quote.png" /></div>
                                </div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet
                                    tincidunt eros pharetra. Nam sed imperdiet
                                    turpis. In hac habitasse platea dictumst.
                                    Praesent nulla massa, hendrerit vestibulum
                                    gravida in, feugiat auctor felis.</p>
                            </div>
                        </div>

                    </div>
                    <button className="rightbutton"><i className="fa-solid fa-chevron-right"></i></button>
                </div>

            </section>

            <section id="call">

                <div className="row">

                    <div className="container">

                        <div className="column">
                            <img id="rocket" src="Elements/Saly-1.png" />
                            <img id="backell" src="Elements/Ellipse 18.png" />
                        </div>


                        <div className="column">
                            <div>
                                <h4>Join <span>World's largest</span> learning
                                    platform today</h4>
                            </div>
                            <div>
                                <h6>Start learning by registering for free</h6>
                            </div>
                            <div>
                                <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet<br />
                                    turpis. In hac habitasse platea dictumst.<br />
                                    Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
                            </div>
                            <a id="signup" href="sign up.html">Sign up for Free</a>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;
