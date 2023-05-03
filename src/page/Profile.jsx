import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "..";
import { check } from "../http/userAPI";
import jwt_decode from 'jwt-decode';
import '../style/profile.css'

const Profile = observer(() => {
    const { user } = useContext(Context)
    const [see, setSee] = useState([false, false, false])
    const [isOpen, setIsOpen] = useState(['opened', 'closed', 'closed'])
    const [fail, setFail] = useState('')


    try {
        let data = check()
        user.setUser(data)
        user.setIsAuth(true)
    } catch (e) {
        alert(e.response.data.message)
    }

    const fileName = useRef(null)
    const defaultBtn = useRef(null)
    const ava = useRef(null)
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

    const uploadFile = event => {
        event.preventDefault();
        console.log(user.user);
        defaultBtn.current.click()
    }

    const changeFile = e => {
        const file = e.target.files[0];
        document.getElementById("size-error").innerHTML = "";
        if (file.size < 2 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                ava.current.src = result;
            }
            reader.readAsDataURL(file);
        } else document.getElementById("size-error").innerHTML = "File Size Exceeds 2mb";

        if (e.target.value.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG)$/)) {
            let valueStore = e.target.value.match(regExp);
            fileName.current.value = valueStore;
        } else document.getElementById("size-error").innerHTML = "Invalid File Type";
    };

    var el = document.getElementById('Change');

    function isfilled() {
        if (el.repass.value !== "") passCheck();
    }

    function passCheck() {
        var password = el.new.value;
        var repass = el.repass.value;
        var submit = el.submit;
        submit.disabled = true;
        setFail('')

        if (password !== repass) setFail("Passwords must be same");
        if (fail) submit.disabled = false;
    }

    return (
        <div>
            <section id="main">
                <div className="row">
                    <div className="main__wrapper">

                        <div className="prof__nav">

                            <div className="prod__nav-items">
                                <div className="prof__nav-item">
                                    <button className="profbtn" onClick={() => setIsOpen(['opened', 'closed', 'closed'])}><i className="fa-solid fa-user"></i> Profile</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn" onClick={() => setIsOpen(['closed', 'opened', 'closed'])}><i className="fa-solid fa-camera"></i> Photo</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn" onClick={() => setIsOpen(['closed', 'closed', 'opened'])}><i className="fa-solid fa-lock"></i> Change Password</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn"><i className="fa-solid fa-computer"></i> Account Logins</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn"><i className="fa-regular fa-credit-card"></i> Payment methods</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn"><i className="fa-solid fa-globe"></i> Country and Language</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn"><i className="fa-solid fa-shield-halved"></i> Privacy</button>
                                </div>
                                <div className="prof__nav-item">
                                    <button className="profbtn"><i className="fa-regular fa-circle-question"></i> Help</button>
                                </div>
                            </div>

                        </div>

                        <div className="prof__blocks">

                            <div className="prof__forms prof__block" data-state={isOpen[0]}>

                                <div className="personal__form">
                                    <form action="">
                                        <label className="personal">Personal Info</label>
                                        <input type="text" className="forms__input" placeholder="Name" />
                                        <input type="text" className="forms__input" placeholder="Last Name" />
                                        <input type="text" className="forms__input" placeholder="Main Specialization" />
                                    </form>
                                </div>

                                <div className="bio__form">
                                    <label className="bio">Bio</label>
                                    <form action="" method="post">

                                        <textarea name="" id="" cols="30" rows="10" placeholder="Add a short bio"></textarea>
                                        <select>
                                            <option value="English">English</option>
                                            <option value="Russian">Russian</option>
                                            <option value="Kazakh">Kazakh</option>
                                        </select>
                                    </form>
                                </div>

                                <div className="links__form">
                                    <form action="">
                                        <label className="links">Links</label>
                                        <input type="text" className="forms__input" placeholder="Web-site (http(s)://..)" />
                                        <div className="links__container">
                                            <div className="links__socials">
                                                http://twitter.com/
                                            </div>
                                            <input type="text" className="links__input" placeholder="Twitter Link" />
                                        </div>
                                        <div className="links__container">
                                            <div className="links__socials">
                                                http://twitter.com/
                                            </div>
                                            <input type="text" className="links__input" placeholder="Twitter Link" />
                                        </div>
                                        <div className="links__container">
                                            <div className="links__socials">
                                                http://twitter.com/
                                            </div>
                                            <input type="text" className="links__input" placeholder="Twitter Link" />
                                        </div>
                                        <div className="links__container">
                                            <div className="links__socials">
                                                http://twitter.com/
                                            </div>
                                            <input type="text" className="links__input" placeholder="Twitter Link" />
                                        </div>
                                        <div className="links__container">
                                            <div className="links__socials">
                                                http://twitter.com/
                                            </div>
                                            <input type="text" className="links__input" placeholder="Twitter Link" />
                                        </div>
                                        <button className="save">Save</button>
                                    </form>
                                </div>

                            </div>

                            <div className="prof__photo prof__block" data-state={isOpen[1]}>

                                <div className="prof-title">
                                    <span>Profile Photo</span>
                                </div>

                                <div className="preview">Image Preview</div>

                                <div className="prof__photo-image">
                                    <img src="" className="ava-image" ref={ava} />
                                </div>

                                <div className="Add">Add/Edit image</div>

                                <form action="" method="post">
                                    <div className="img-upload">
                                        <input type="text" className="file-name" ref={fileName} name="" placeholder="Choose file" />
                                        <input type="file" className="defaultBtn" ref={defaultBtn} hidden onChange={changeFile} />
                                        <button className="upload" onClick={uploadFile}>Upload</button>
                                    </div>
                                    <div id="size-error"></div>
                                    <button className="save">Save</button>
                                </form>

                            </div>

                            <div className="prof__forms prof__block" data-state={isOpen[2]}>

                                <div className="personal__form">

                                    <div className="prof-title">
                                        <span>Change Password</span>
                                    </div>

                                    <form action="" method="post" id="Change">
                                        <div className="pass-box">
                                            <input
                                                type={see[0] ? "text" : "password"}
                                                className="forms__input Pass"
                                                placeholder="Old Password"
                                                name="old"
                                                minLength="3"
                                                maxLength="30"
                                                required
                                            />
                                            <i className={see[0] ? "fa-solid fa-eye see" : "fa-solid fa-eye-slash see"}
                                                onClick={() => setSee([!see[0], see[1], see[2]])}>
                                            </i>
                                        </div>

                                        <div className="pass-box">
                                            <input
                                                type={see[1] ? "text" : "password"}
                                                className="forms__input Pass"
                                                placeholder="New Password"
                                                name="new"
                                                minLength="3"
                                                maxLength="30"
                                                onInput={isfilled}
                                                required
                                            />
                                            <i className={see[1] ? "fa-solid fa-eye see" : "fa-solid fa-eye-slash see"}
                                                onClick={() => setSee([see[0], !see[1], see[2]])}>

                                            </i>
                                        </div>

                                        <div className="pass-box">
                                            <input
                                                type={see[2] ? "text" : "password"}
                                                className="forms__input Pass"
                                                placeholder="Repeat New Password"
                                                name="repass"
                                                minLength="3"
                                                maxLength="30"
                                                onInput={passCheck}
                                                required
                                            />
                                            <i
                                                className={see[2] ? "fa-solid fa-eye see" : "fa-solid fa-eye-slash see"}
                                                onClick={() => setSee([see[0], see[1], !see[2]])}>
                                            </i>
                                        </div>

                                        <div id="error">{fail}</div>
                                        <button className="save" name="submit" id="change-submit">Save</button>
                                        <button className="defSave" name="default" id="change-default" hidden></button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
})

export default Profile;
