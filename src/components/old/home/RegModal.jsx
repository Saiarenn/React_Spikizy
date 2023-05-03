import React, { useContext, useState } from "react";
import { PopContext } from "../../../App";
import { registration } from "../../../http/userAPI";
import { Context } from "../../../index";

function RegModal({ show, onHide }) {
    const { setLoginVisible } = useContext(PopContext)
    const { user } = useContext(Context)
    const [see, setSee] = useState([false, false])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fail, setFail] = useState('')


    const openLogin = () => {
        onHide()
        setLoginVisible(true)
    }

    const click = async e => {
        e.preventDefault()
        try {
            let data = await registration(email, password)
            user.setUser(data)
            user.setIsAuth(true)
            onHide()
        } catch (e) {
            setFail(e.response.data.message)
        }
    }

    var el = document.getElementById('Register');

    function isfilled() {
        if (el.repass.value != "") passCheck();
    }

    function passCheck() {
        var password = el.password.value;
        var repass = el.repass.value;
        var submit = el.submit;
        submit.disabled = true;
        setFail('')

        if (password !== repass) setFail("Passwords must be same");
        if (fail) submit.disabled = false;

    }

    return (
        <div className="reg" aria-expanded={show}>
            <div className="reg__wrapper">

                <button className="cross" onClick={onHide}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="log__title">
                    Lets <span>Register</span> Account
                </div>

                <div className="reg__greetings">
                    Hello user, you have <br />
                    a greatful journey
                </div>

                <form action="" className="log__form" id="Register" method="post">
                    <input type="text" placeholder="Name" name="name" required />
                    <input type="text" placeholder="Surname" name="surname" required />
                    <input type="text" placeholder="Phone" name="phone" required />
                    <input type="email" placeholder="Email" name="email" required
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                    <div className="pass-box">
                        <input
                            type={see[0] ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            className="Pass"
                            minLength="3"
                            maxLength="30"
                            required
                            onInput={() => isfilled()}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <i className={see[0] ? "fa-solid fa-eye see" : "fa-solid fa-eye-slash see"}
                            onClick={() => setSee([!see[0], see[1]])}>
                        </i>
                    </div>
                    <div className="pass-box">
                        <input
                            type={see[1] ? "text" : "password"}
                            placeholder="Password again"
                            name="repass"
                            className="Pass"
                            minLength="3"
                            maxLength="30"
                            required
                            onInput={() => passCheck()}
                        />
                        <i
                            className={see[1] ? "fa-solid fa-eye see" : "fa-solid fa-eye-slash see"}
                            onClick={() => setSee([see[0], !see[1]])}>
                        </i>
                    </div>
                    <div id="error" style={{ color: "red" }}>{fail}</div>
                    <input type="submit" className="log__button" value="Sign up" name="submit" onClick={click} />
                </form>

                <div className="log__register">Already have an account? <button onClick={() => openLogin()}>Login</button></div>

            </div>
        </div>
    );
}

export default RegModal;