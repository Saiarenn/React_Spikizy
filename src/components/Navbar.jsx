import React, {useContext} from 'react';
import {COURSE_ROUTE, USER_ROUTE} from "../utils/consts";
import "../style/Navbar.css"
import {useNavigate} from "react-router-dom";
import {PopContext} from "../App";

const Navbar = () => {

    const router = useNavigate()
    const pop = useContext(PopContext)

    return (
        <nav>

            <div className={"logo"} onClick={() => router('/')}>
                <svg width="32" height="64" viewBox="0 0 32 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C10.5 3.93846 1.33333 23.1385 0 32H16C17.6 22.5477 27.6667 17.2308 32 15.7538V0Z"
                          fill="white"/>
                    <path d="M0 64C21.5 60.0615 30.6667 40.8615 32 32H16C14.4 41.4523 4.33333 46.7692 0 48.2462V64Z"
                          fill="white"/>
                </svg>
            </div>

            <div className={"search__wrapper"}>
                <input className={"search__input"} placeholder={'Найти курс'}/>
                <button className={"search__button"}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.62398 14C4.00872 15.3867 5.85275 16.2191 7.80868 16.3405C9.76462 16.4619 11.6974 15.8638 13.243 14.659L18.561 19.977C18.7496 20.1592 19.0022 20.2599 19.2644 20.2577C19.5266 20.2554 19.7774 20.1502 19.9628 19.9648C20.1482 19.7794 20.2534 19.5286 20.2557 19.2664C20.2579 19.0042 20.1571 18.7516 19.975 18.563L14.657 13.245C15.9153 11.6302 16.5102 9.59614 16.3204 7.55776C16.1305 5.51939 15.1703 3.63019 13.6355 2.27546C12.1006 0.920727 10.1068 0.202507 8.06065 0.267273C6.01447 0.332039 4.07007 1.17491 2.62398 2.624C1.87678 3.37082 1.28405 4.25754 0.879642 5.23351C0.475238 6.20948 0.26709 7.25556 0.26709 8.312C0.26709 9.36843 0.475238 10.4145 0.879642 11.3905C1.28405 12.3664 1.87678 13.2532 2.62398 14ZM4.03798 4.04C5.02656 3.05144 6.32731 2.43624 7.71861 2.29919C9.10992 2.16215 10.5057 2.51174 11.6681 3.28842C12.8306 4.06509 13.6878 5.22079 14.0937 6.55861C14.4996 7.89643 14.4291 9.3336 13.8941 10.6253C13.3592 11.9169 12.393 12.9831 11.1601 13.6423C9.92721 14.3014 8.50391 14.5127 7.13271 14.2401C5.7615 13.9675 4.52723 13.2279 3.64018 12.1473C2.75313 11.0668 2.26819 9.71203 2.26798 8.314C2.26524 7.51957 2.42029 6.73251 2.72413 5.99848C3.02798 5.26445 3.47456 4.59806 4.03798 4.038V4.04Z"
                            fill="white" fillOpacity="0.8"/>
                    </svg>
                </button>
            </div>

            <div className={"navlinks"}>
                <span className={"navlink"}>О нас</span>
                <span className={'navlink'}>Католог курсов</span>
                <span className={'navlink'}>Контакты</span>
                <span className={'navlink'}>Получить консультацию</span>
                <button className={'loginButton'} onClick={() => pop.setLoginVisible(true)}>Войти</button>
            </div>

        </nav>
    );
};

export default Navbar;