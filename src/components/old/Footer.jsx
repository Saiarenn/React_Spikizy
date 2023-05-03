import React from "react";

const Footer = () => {
    return (
        <footer>

            <div className="row">

                <div className="logo">
                    <div className="logo__circle">
                        SZ
                    </div>
                    <span className="logo__text">Spikizy</span>
                </div>

                <div className="footcon">

                    <div className="column">

                        <div>
                            <p>Contact Us</p>
                        </div>

                        <div>
                            <p><span>Call : +7 708 312 0160<br />
                                Praesent nulla massa, hendrerit<br />
                                vestibulum gravida in, feugiat auctor felis.<br />
                                Email: mielesenn@gmail.com</span></p>
                        </div>
                        <div className="container">
                            <a href="" className="socials"><i className="fa-brands fa-instagram"></i></a>
                            <a href="" className="socials"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="" className="socials"><i className="fa-brands fa-telegram"></i></a>
                            <a href="" className="socials"><i className="fa-brands fa-whatsapp"></i></a>
                        </div>

                    </div>

                    <div className="column">

                        <div>
                            <p>Explore</p>
                        </div>

                        <div>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Course</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="column">

                        <div>
                            <p>Category</p>
                        </div>

                        <div>
                            <ul>
                                <li><a href="">Design</a></li>
                                <li><a href="">Development</a></li>
                                <li><a href="">Marketing</a></li>
                                <li><a href="">Business</a></li>
                                <li><a href="">Lifestyle</a></li>
                                <li><a href="">Photography</a></li>
                                <li><a href="">Music</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="column">

                        <div>
                            <p>Subscribe</p>
                        </div>

                        <div>
                            <p><span>Lorem Ipsum has been them an industry<br />
                                printer took a galley make book.</span></p>
                        </div>
                        <form id="contact" method="post">
                            <input type="text" id="contactform" placeholder="Email here" />
                            <button>Subcribe Now</button>
                        </form>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer;