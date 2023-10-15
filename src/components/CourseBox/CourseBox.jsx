import React from 'react'
import './CourseBox.scss'

export default function CourseBox() {
    return (
        <div className='course-box'>
            <div className="course-box__img"></div>
            <div className="course-box__content">
                <h4>
                    دوره مقدماتی افترافکت
                </h4>
                <div className='course-box__detail'>
                    <span>
                        مدرس: نام مدرس
                    </span>
                    <div className='course-box__stars'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill fill"></i>
                        <i class="bi bi-star-fill fill"></i>
                        <i class="bi bi-star-fill fill"></i>
                    </div>
                </div>
                <div className='course-box__price'>
                    3,000,000 تومان
                </div>
                <div className='course-box__buttons'>
                    <div className="course-box__register">
                        ثبت نام
                    </div>
                    <div className="course-box__btn">
                        <i class="bi bi-exclamation-square-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
