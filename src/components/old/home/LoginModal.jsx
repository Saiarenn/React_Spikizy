import React, { useContext, useState } from "react";
import { PopContext } from "../../../App";
import { Context } from "../../../index";
import { login } from "../../../http/userAPI";
import { useNavigate } from "react-router-dom";

function LoginModal({ show, onHide }) {
    const { setForgotVisible, setRegVisible } = useContext(PopContext)
    const { user } = useContext(Context)
    const [see, setSee] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const openForgot = () => {
        onHide()
        setForgotVisible(true)
    }

    const openReg = () => {
        onHide()
        setRegVisible(true)
    }

    const click = async e => {
        e.preventDefault()
        try {
            let data = await login(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            onHide()
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="log" aria-expanded={show}>
            <div className="log__wrapper">

                <button className="cross" onClick={onHide}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="log__title">
                    Lets <span>Sign</span> you in
                </div>

                <div className="log__greetings">
                    Welcome Back,<br />
                    You have been missed
                </div>

                <form className="log__form" method="post">
                    <input
                        type="text"
                        className="log__user"
                        placeholder="Email, phone & username"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <div className="pass-box">
                        <input
                            type={see ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            className="Pass"
                            minLength="0"
                            maxLength="30"
                            required
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <i className={see ? "fa-solid fa-eye see" : "fa-solid fa-eye-slash see"} onClick={() => setSee(!see)}></i>
                    </div>
                    <div className="log__forgot" onClick={() => openForgot()}>
                        Forgot Password?
                    </div>
                    <input type="submit" className="log__button" value="Sign in" onClick={click} />
                </form>

                <div className="log__or">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <div className="log__socials">
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-apple"></i>
                </div>

                <div className="log__register">
                    Don’t have an account?
                    <button onClick={() => openReg()}>Register Now</button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;