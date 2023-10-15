import './App.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import CourseBox from './components/CourseBox/CourseBox';

function App() {
    return (
        <div className='slider'>
            <div className="container">
                <div className="slider-wrapper">
                    <div className="content">
                        <h2 className='title'>
                            دوره های آموزشی
                        </h2>
                        <p className='text'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        </p>
                        <a href="#" className='link'>
                            مشاهده همه
                        </a>
                        <div className='slider-btns'>
                            <div className="slider-btn slider-prev">
                                <i class="bi bi-chevron-right"></i>
                            </div>
                            <div className="slider-btn slider-next">
                                <i class="bi bi-chevron-left"></i>
                            </div>
                        </div>
                    </div>
                    <div className="slider-content">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            navigation={{
                                prevEl: '.slider-prev',
                                nextEl: '.slider-next',
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {/* به دلیل نبود api اطلاعات بصورت استاتیک وارد شده است */}
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
