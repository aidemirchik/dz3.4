import React from 'react';
import { useState } from 'react'

const Questions = () => {
  const [status, setStatus] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  return (
    <section className='questions'>
      <div className='container'>
        <h2 className='questions__title'>Часто задаваемые вопросы</h2>
        <div className='questions__row'>
          <div className='questions__accordion'>
          <div className={`questions__accordion-quest ${status ? 'questions__accordion_active' : ''}`}>
            <p>Сколько раз в год можно обратиться к терапевту или педиатру по данной программе?</p>

            <div className='questions__accordion-arrow'>
              { status ? 
            <span onClick={() => setStatus(false)} className='questions__accordion-open'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 7.40991L6 2.82991L10.59 7.40991L12 5.99991L6 -8.72135e-05L-1.23266e-07 5.99991L1.41 7.40991Z" fill="#323232"/>
              </svg>
            </span>
            : <span onClick={() => setStatus(true)} className='questions__accordion-close'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#323232"/>
              </svg>
            </span>}
            </div>
            </div>

              <div className={`questions__accordion-answers ${status ? 'questions__accordion-answers_active' : ''}`}>
              Количество обращений не ограничено в течение всего срока действия договора.
              </div>

              <div className={`questions__accordion-questq ${status2 ? 'questions__accordion_activeq' : ''}`}>
            <p>Сколько раз в год можно обратиться к узкому специалисту? </p>

            <div className='questions__accordion-arrowq'>
              { status2 ? 
            <span onClick={() => setStatus2(false)} className='questions__accordion-openq'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 7.40991L6 2.82991L10.59 7.40991L12 5.99991L6 -8.72135e-05L-1.23266e-07 5.99991L1.41 7.40991Z" fill="#323232"/>
              </svg>
            </span>
            : <span onClick={() => setStatus2(true)} className='questions__accordion-closeq'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#323232"/>
              </svg>
            </span>}
            </div>
            </div>
            <div className={`questions__accordion-answersq ${status2 ? 'questions__accordion-answers_activeq' : ''}`}>
            При повторном посещении за год можно попасть на прием к узкому специалисту сразу. 
              </div>
              <div className={`questions__accordion-questw ${status3 ? 'questions__accordion_activew' : ''}`}>
            <p>Как получить консультацию врача? </p>

            <div className='questions__accordion-arroww'>
              { status3 ? 
            <span onClick={() => setStatus3(false)} className='questions__accordion-openw'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 7.40991L6 2.82991L10.59 7.40991L12 5.99991L6 -8.72135e-05L-1.23266e-07 5.99991L1.41 7.40991Z" fill="#323232"/>
              </svg>
            </span>
            : <span onClick={() => setStatus3(true)} className='questions__accordion-closew'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#323232"/>
              </svg>
            </span>}
            </div>
            </div>
            <div className={`questions__accordion-answersw ${status3 ? 'questions__accordion-answers_activew' : ''}`}>
            После очного приема у врача больной может записаться на плановый онлайн-прием к тому же доктору через личный кабинет.
              </div>
              <div className={`questions__accordion-questa ${status4 ? 'questions__accordion_activea' : ''}`}>
            <p>Какие врачи-специалисты представлены в сервисе, кроме терапевта и педиатра? </p>

            <div className='questions__accordion-arrowa'>
              { status4 ? 
            <span onClick={() => setStatus4(false)} className='questions__accordion-opena'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 7.40991L6 2.82991L10.59 7.40991L12 5.99991L6 -8.72135e-05L-1.23266e-07 5.99991L1.41 7.40991Z" fill="#323232"/>
              </svg>
            </span>
            : <span onClick={() => setStatus4(true)} className='questions__accordion-closea'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#323232"/>
              </svg>
            </span>}
            </div>
            </div>
            <div className={`questions__accordion-answersa ${status4 ? 'questions__accordion-answers_activea' : ''}`}>
            Гинеколог, психиатр-нарколог, врач функциональной диагностики, невролог, офтальмолог;
              </div>
              <div className={`questions__accordion-quests ${status5 ? 'questions__accordion_actives' : ''}`}>
            <p>Как получить консультацию педиатра, если возраст ребенка меньше 1 года, и оформить на ребенка программу нельзя? </p>

            <div className='questions__accordion-arrows'>
              { status5 ? 
            <span onClick={() => setStatus5(false)} className='questions__accordion-opens'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.41 7.40991L6 2.82991L10.59 7.40991L12 5.99991L6 -8.72135e-05L-1.23266e-07 5.99991L1.41 7.40991Z" fill="#323232"/>
              </svg>
            </span>
            : <span onClick={() => setStatus5(true)} className='questions__accordion-closes'><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="#323232"/>
              </svg>
            </span>}
            </div>
            </div>
            <div className={`questions__accordion-answerss ${status5 ? 'questions__accordion-answers_actives' : ''}`}>
            Врач-педиатр проводит диагностику, лечение и профилактику заболеваний всех периодов развития ребенка .
              </div>
          </div>    
        </div>
      </div>
    </section>
  )
}
export default Questions ;