window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body'),
        takePart = document.querySelector('#takePart'),
        wrapper = document.querySelector('main');

  takePart.addEventListener('click', () => {
    wrapper.innerHTML = `
    <div class="quiz">
        <div class="container">
          <div class="quiz__wrapper">
            <div class="quiz__steps steps">
              <span class="steps__line"></span>
              <span class="steps__num steps__num--1 active">1</span>
              <span class="steps__line--bar" id="step1"></span>
              <span class="steps__num steps__num--2">2</span>
              <span class="steps__line--bar" id="step2"></span>
              <span class="steps__num steps__num--3">3</span>
            </div>
              <h3 class="quiz__question">
                Нуждаетесь ли Вы в дополнительных деньгах?
              </h3>
              <button class="quiz__btn" id="btn1" type="button" value="yes">
                Да
              </button>
              <button class="quiz__btn" id="btn2" type="button" value="no">
                Нет
              </button>
              <button class="quiz__btn" id="btn3" type="button" value="not sure">
                Затрудняюсь ответить
              </button>
          </div>
        </div>
      </div>`
  });

  let i = 0;
  body.addEventListener('click', (e) => {
    console.log(`i = ${i}`)
    console.log(e)
    const question = document.querySelector('.quiz__question'),
          num2 = document.querySelector('.steps__num--2'),
          num3 = document.querySelector('.steps__num--3'),
          step1 = document.querySelector('#step1'),
          step2 = document.querySelector('#step2'),
          btn1 = document.querySelector('#btn1'),
          btn2 = document.querySelector('#btn2'),
          btn3 = document.querySelector('#btn3');

    const question2 = {
            quest: 'Сколько денег вам нужно в неделю?',
            button1: '$200',
            button2: '$500',
            button3: '$1000',
          },
          question3 = {
            quest: 'Когда вы готовы забрать деньги?',
            button1: 'Через час',
            button2: 'Через 2 дня',
            button3: 'Через неделю',
          };
    
            
    function setNewQuestion (qAndA, num, step){
      question.innerText = qAndA.quest;
      btn1.innerText = qAndA.button1;
      btn2.innerText = qAndA.button2;
      btn3.innerText = qAndA.button3;
      step.style.width = `50%`;
      
      setTimeout(() => {
        num.classList.add('active');
      }, 300);
      i++;
    }

    if(e.target.classList.contains('quiz__btn') && i < 3) {
          if (i === 0) {
            setNewQuestion (question2, num2, step1);
          } else if (i === 1) {
            setNewQuestion (question3, num3, step2);
          } else {
            wrapper.innerHTML = `
                <div class="call">
                  <div class="container">
                    <div class="call__wrapper">
                      <h2 class="call__title">
                        Поздравляем!
                      </h2>
                      <p class="call__sub-text">
                        Ваш номер телефона успешно зарегистрирован!
                      </p>
                      <p class="call__text">
                        Позвонив со своего мобильного телефона, вы получите доступ к персональному аудиосообщению:
                      </p>
                      <p class="call__message">
                        "Получать 1000 евро каждую неделю!"
                      </p>
                      <p class="call__counter">
                        Запись будет удалена через: 
                        <span class="call__hours">03</span>:
                        <span class="call__minutes">00</span>:
                        <span class="call__seconds">00</span>
                      </p>
                      <div class="call__disclaimer">
                        <p class="call__disclaimer-text--mod">
                          Количество участников 
                          строго ограничено.                 
                        </p>
                        <p class="call__disclaimer-text">
                          Звоните прямо сейчас, не упустите свой шанс!
                        </p>
                      </div>
  
                      <a class="call__btn" style="background-image: url(./images/call.png);" href="tel:+123123123">
                        <img class="call__btn-img" 
                              src="./images/icon_call.svg" 
                              alt="phone picture">
                        <span class="call__btn-text">
                          Звонить и слушать
                        </span>
                      </a>
                      <div class="call__footer">
                        Doar pentru adulți. Acesta este un serviciu de divertisment care trebuie acceptat și interpretat ca atare. Accesând serviciul declarați că sunteți de acord cu acești termeni și condiții și că aveți peste 18 ani și aveți acordul titularului cartelei. Cost serviciu: 1.7euro + tva/minut în Orange, Vodafone, Telekom fix și mobil. Program non-stop. Apăsând pe butonul de pe pagina serviciului veți fi redirecționat către căsuța de apelare cu numărul cu suprataxă predefinit. Furnizor: ABCMobile OÜ; Reg № 14710834; Adresa: Estonia, Tallinn, Strada St. Petersburg 71-318, 11415. Support@abcmobile.com. Info serviciu voce: 0318260010, luni-vineri, 9:00-18:00.
  
                        Affiliate: mobstra.com
                      </div>
                    </div>
                  </div>
                </div>`
      }
    }    
  });
});
