import React from 'react'
import './Certification.css'
import AVTR1 from '../../assets/Screenshot_2023-01-25_at_11.39.56_AM_150x150.png'
import AVTR2 from '../../assets/Screenshot_2023-01-25_at_11.41.06_AM_150x150.png'
import AVTR3 from '../../assets/Screenshot_2023-01-25_at_11.42.59_AM_150x150.png'
import AVTR4 from '../../assets/Screenshot_2023-01-25_at_11.43.45_AM_150x150.png'
import AVTR5 from '../../assets/MySQL_Explorer_Badge_150x150.png'
import AVTR6 from '../../assets/Screenshot_2023-01-22_at_6.15.39_PM_1_150x150.png'
import AVTR7 from '../../assets/Screenshot_2023-01-22_at_6.15.39_PM_1_150x150.png'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


export const lang_change_certification = () => {

  var data = {
    "English": {
      "title": "Most Recent"
    },
    "Arabic": {
      "title": "إستعراض"
    }
  }
  var data1 = {
    "English": {
      "title": "Certification"
    },
    "Arabic": {
      "title": "الشهادات"
    }
  }
  var data2 = {
    "English": {
      "title": "Computer Science and Engineering Degree"
    },
    "Arabic": {
      "title": "شهادة في علوم وهندسة الكمبيوتر"
    }
  }
  var data3 = {
    "English": {
      "title": "Saudi Council Of Engineers"
    },
    "Arabic": {
      "title": "الهيئة السعودية للمهندسين"
    }
  }
  var data4 = {
    "English": {
      "title": "International English Language Testing(IELTS)"
    },
    "Arabic": {
      "title": "المنظومة الدولية لقياس إتقان اللغة الإنجليزية"
    }
  }
  var data5 = {
    "English": {
      "title": "German Language"
    },
    "Arabic": {
      "title": "اللغة الألمانية"
    }
}
  var data6 = {
    "English": {
      "title": "Oracle Explorer"
    },
    "Arabic": {
      "title": "مستكشف اوراكل"
    }
}
  var data7 = {
    "English": {
      "title": "Computer Fundamentals"
    },
    "Arabic": {
      "title": "أساسيات الكمبيوتر"
    }
}
  var data8 = {
    "English": {
      "title": "CSS (Foundation)"
    },
    "Arabic": {
      "title": "CSS اعتماد"
    }
}

  const a = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_recent').textContent = data[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const b = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_certification').textContent = data1[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const c = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name11').textContent = data2[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const d = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name22').textContent = data3[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const e = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name33').textContent = data4[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const f = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name4').textContent = data5[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const g = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name5').textContent = data6[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const h = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name6').textContent = data7[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const i = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name7').textContent = data8[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
}



const Certification = () => {
    return (
      <section id='certifications'>
        <h5 className='lang_recent'>Most Recent</h5>
        <h2 className='lang_certification'>Certification</h2>
  
        <Swiper className="container certifications__container"
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={3}
          pagination={{ clickable: true }}
          >
            <SwiperSlide key='1' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR1} alt=""/>
              </div>
              <h5 id='lang_name11' className='client__name'>Computer Science and Engineering Degree</h5>
            </SwiperSlide>
            <SwiperSlide key='2' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR2} alt=""/>
              </div>
              <h5 id='lang_name22' className='client__name'>Saudi Council Of Engineers</h5>
            </SwiperSlide>
            <SwiperSlide key='3' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR3} alt=""/>
              </div>
              <h5 id='lang_name33' className='client__name'>International English Language Testing(IELTS)</h5>
            </SwiperSlide>
            <SwiperSlide key='4' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR4} alt=""/>
              </div>
              <h5 id='lang_name4' className='client__name'>German Language</h5>
            </SwiperSlide>
            <SwiperSlide key='5' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR5} alt=""/>
              </div>
              <h5 id='lang_name5' className='client__name'>Oracle Explorer</h5>
            </SwiperSlide>
            <SwiperSlide key='6' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR6} alt=""/>
              </div>
              <h5 id='lang_name6' className='client__name_css'>Computer Fundamentals</h5>
            </SwiperSlide>
            <SwiperSlide key='7' className='certification'>
              <div className="client__avatar_certification">
                <img src={AVTR7} alt=""/>
              </div>
              <h5 id='lang_name7' className='client__name_css'>CSS (Foundation)</h5>
            </SwiperSlide>
        </Swiper>
      </section>
    )
  }
  export default Certification