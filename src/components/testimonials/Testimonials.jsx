import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/IMG_0539_150x150.jpeg'
import AVTR2 from '../../assets/Screenshot_2022-11-12_at_2.11.50_AM_150x150.png'
import AVTR3 from '../../assets/IMG_0499_150x150.jpeg'
import AVTR4 from '../../assets/IMG_0499_2_150x150.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


// const data = [
//   {
//    avatar: AVTR1,
//    name: "Wael Alhaidary",
//    review: "I was in charge of reviewing him due to my role as project manager for his graduation project, which was about facial recognition technology, and I'm pleased to say that he lived up to my expectations as a committed student with good work ethics and excellent problem-solving skills."
//   },
//   {
//     avatar: AVTR2,
//     name: 'Mohamed Flatah',
//     review: 'Faris approached me with a business proposal to increase the efficiency of our gym facilities, and his creation of a login system for customers and staff members was a wonderful idea that helped our club save time and money.'
//   },
//   {
//     avatar: AVTR3,
//     name: 'Mohamed Orabi',
//     review: 'A smart home system that uses the Internet of Things and encryption for the networks of the smart house was the subject of a project that Fares and his colleagues presented while I was the departments head of networks engineering.'
//   },
//   {
//     avatar: AVTR4,
//     name: 'Mohamed Alasali',
//     review: 'A fantastic project that builds a processor from zero and can execute arithmetic calculations has been submitted by Fares and his colleagues.'
//   }

//   ]
export const lang_change_testimonials = () => {

  var data = {
    "English": {
      "title": "Review From Clients"
    },
    "Arabic": {
      "title": "إستعراض"
    }
  }
  var data1 = {
    "English": {
      "title": "Testmonials"
    },
    "Arabic": {
      "title": "التوصيات"
    }
  }
  var data2 = {
    "English": {
      "title": "Wael Alhaidary"
    },
    "Arabic": {
      "title": "وائل الحيدري"
    }
  }
  var data3 = {
    "English": {
      "title": "I was in charge of reviewing him due to my role as project manager for his graduation project, which was about facial recognition technology. I'm pleased that he lived up to my expectations as a committed student with a good work ethic and problem-solving skills."
    },
    "Arabic": {
      "title": "كنت مسؤولاً عن مراجعته بسبب دوري كمدير لمشروع تخرجه ، والذي كان يتعلق بتقنية التعرف على الوجه. يسعدني أنه حقق توقعاتي كطالب ملتزم بأخلاقيات العمل ومهارات حل المشكلات."
    }
  }
  var data4 = {
    "English": {
      "title": "Mohamed Flatah"
    },
    "Arabic": {
      "title": "محمد فلاته"
    }
  }
  var data5 = {
    "English": {
      "title": "Faris approached me with a business proposal to increase the efficiency of our gym facilities, and his creation of a login system for customers and staff members was a wonderful idea that helped our club save time and money."
    },
    "Arabic": {
      "title": "اتصل بي فارس باقتراح عمل لزيادة كفاءة مرافق الصالة الرياضية لدينا ، وكان إنشاء نظام تسجيل الدخول للعملاء والموظفين فكرة ممتازة ساعدت نادينا على توفير الوقت والمال."
    }
}
  var data6 = {
    "English": {
      "title": "Mohamed Orabi"
    },
    "Arabic": {
      "title": "محمد عرابي"
    }
}
  var data7 = {
    "English": {
      "title": "A smart home system that uses the Internet of Things and encryption for the networks of the smart house was the subject of a project that Fares and his colleagues presented while I was the department head of network engineering."
    },
    "Arabic": {
      "title": "كان نظام المنزل الذكي الذي يستخدم إنترنت الأشياء والتشفير لشبكات المنزل الذكي موضوع مشروع قدمه فارس وزملاؤه عندما كنت رئيس قسم هندسة الشبكات."
    }
}
  var data8 = {
    "English": {
      "title": "Mohamed Alasali"
    },
    "Arabic": {
      "title": "محمد العسلي"
    }
}
  var data9 = {
    "English": {
      "title": "A fantastic project that builds a processor from zero and can execute arithmetic calculations has been submitted by Fares and his colleagues."
    },
    "Arabic": {
      "title": "قدم فارس وزملاؤه مشروعًا رائعًا يبني معالجًا من الصفر ويمكنه تنفيذ العمليات الحسابية."
    }
}
  const a = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_rev').textContent = data[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const b = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('.lang_test').textContent = data1[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const c = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name').textContent = data2[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const d = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_par').textContent = data3[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const e = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name1').textContent = data4[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const f = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_par1').textContent = data5[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const g = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name2').textContent = data6[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const h = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_par2').textContent = data7[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const i = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_name3').textContent = data8[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
  const j = document.querySelector('#togBtn').addEventListener('input', (event) => {
    document.querySelector('#lang_par3').textContent = data9[event.currentTarget.checked ? 'Arabic' : 'English'].title;
  });
}

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5 className='lang_rev'>Client Evaluation</h5>
      <h2 className='lang_test'>Testmonials</h2>

      <Swiper className="container testmonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        <SwiperSlide key='1' className='testmonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt=""/>
          </div>
          <h5 id='lang_name' className='client__name'>Wael Alhaidary</h5>
          <small id='lang_par' className='client__review'>
            I was in charge of reviewing him due to my role as project manager for his graduation project, which was about facial recognition technology. I'm pleased that he lived up to my expectations as a committed student with a good work ethic and problem-solving skills.
          </small>
        </SwiperSlide>
        <SwiperSlide key='2' className='testmonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt=""/>
          </div>
          <h5 id='lang_name1' className='client__name'>Mohamed Flatah</h5>
          <small id='lang_par1' className='client__review'>
            Faris approached me with a business proposal to increase the efficiency of our gym facilities, and his creation of a login system for customers and staff members was a wonderful idea that helped our club save time and money.
          </small>
        </SwiperSlide>
        <SwiperSlide key='3' className='testmonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt=""/>
          </div>
          <h5 id='lang_name2' className='client__name'>Mohamed Orabi</h5>
          <small id='lang_par2' className='client__review'>
            A smart home system that uses the Internet of Things and encryption for the networks of the smart house was the subject of a project that Fares and his colleagues presented while I was the department head of network engineering.
          </small>
        </SwiperSlide>
        <SwiperSlide key='4' className='testmonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt=""/>
          </div>
          <h5 id='lang_name3' className='client__name'>Mohamed Alasali</h5>
          <small id='lang_par3' className='client__review'>
            A fantastic project that builds a processor from zero and can execute arithmetic calculations has been submitted by Fares and his colleagues.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Testimonials
// {
//   data.map(({avatar, name, review}, index) => {
//     return(
//       <SwiperSlide key={index} className='testmonial'>
//         <div className="client__avatar">
//           <img src={avatar} alt=""/>
//         </div>
//         <h5 className='client__name'>{name}</h5>
//         <small className='client__review'>
//           {review}
//         </small>
//       </SwiperSlide>
//     )
//   })
// }