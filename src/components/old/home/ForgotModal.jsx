import React from "react";

function ForgotModal({ show, onHide }) {
    return (
        <div className="forgot" aria-expanded={show}>
            <div className="forgot__wrapper">

                <button className="cross" onClick={onHide}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="log__title">
                    <span>Restore</span> your<br /> password.
                </div>

                <div className="log__greetings">
                    Pass the verification
                </div>

                <form action="/" className="log__form" method="post">
                    <input type="email" className="log__user" placeholder=" Email address" />
                    <div className="verify">
                        <input type="checkbox" />
                        <span>I’m not a robot</span>
                    </div>
                    <input type="submit" className="log__button" value="Submit" />
                </form>

            </div>

        </div>
    );
}

export default ForgotModal;