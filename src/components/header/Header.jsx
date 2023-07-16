import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/D69AB058-199E-405E-BF04-D0D9B59EC25A 3.png'
import HeaderSocials from './HeaderSocials'

export const lang_change_header = () => {

  var data = {
    "English": {
      "title": "Hello I'm"
    },
    "Arabic": {
      "title": "مرحبا أنا"
    }
  }
  var data1 = {
    "English": {
      "title": "Fares Abdulaziz"
    },
    "Arabic": {
      "title": "فارس عبدالعزيز"
    }
  }
  var data2 = {
    "English": {
      "title": "Computer & Electrical Engineer"
    },
    "Arabic": {
      "title": "مهندس كمبيوتر وكهرباء"
    }
  }
  var data3 = {
    "English": {
      "title": "Scroll Down"
    },
    "Arabic": {
      "title": "حرك الفأرة لأسفل"
    }
  }
  var data4 = {
    "English": {
      "title": "Download CV"
    },
    "Arabic": {
      "title": "تحميل السيرة الذاتية"
    }
  }
  var data5 = {
    "English": {
      "title": "Let's Talk"
    },
    "Arabic": {
      "title": "لنتحدث"
    }
  }
  

const a = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.lang_hello').textContent = data[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});

const b = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.title').textContent = data1[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});
const c = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.text-light').textContent = data2[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});
const d = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('.scroll__down').textContent = data3[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});
const e = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('#lang_cv').textContent = data4[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});
const f = document.querySelector('#togBtn').addEventListener('input', (event) => {
  document.querySelector('#lang_talk').textContent = data5[event.currentTarget.checked ? 'Arabic' : 'English'].title;
});

}
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className='lang_hello'>Hello I'm</h5>
        <h1 className='title'>Fares Abdulaziz</h1>
        <h5 className="text-light">Computer & Electrical Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='me-img' src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header> 
  )
}

export default Header