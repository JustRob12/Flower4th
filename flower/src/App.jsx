import { useState } from 'react'
import './App.css'
import Login from './Login'
import AnimatedBackground from './AnimatedBackground'
import BackgroundMusic from './BackgroundMusic'

// January Images
import janMain from './assets/january/1.jpg'
import jan1 from './assets/january/1.jpg'
import jan2 from './assets/january/2.jpg'
import jan3 from './assets/january/3.jpg'
import jan4 from './assets/january/4.jpg'
import jan5 from './assets/january/5.jpg'

// February Images
import febMain from './assets/february/1.jpg'
import feb1 from './assets/february/1.jpg'
import feb2 from './assets/february/2.jpg'
import feb3 from './assets/february/3.jpg'
import feb4 from './assets/february/4.jpg'
import feb5 from './assets/february/5.jpg'

// March Images
import marMain from './assets/march/1.jpg'
import mar1 from './assets/march/1.jpg'
import mar2 from './assets/march/2.jpg'
import mar3 from './assets/march/3.jpg'
import mar4 from './assets/march/4.jpg'
import mar5 from './assets/march/5.jpg'

// April Images
import aprMain from './assets/april/1.jpg'
import apr1 from './assets/april/1.jpg'
import apr2 from './assets/april/2.jpg'
import apr3 from './assets/april/3.jpg'
import apr4 from './assets/april/4.jpg'
import apr5 from './assets/april/5.jpg'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [months] = useState([
    { 
      id: 1, 
      name: 'January', 
      mainImage: janMain,
      isAvailable: true,
      additionalImages: [jan1, jan2, jan3, jan4, jan5],
      message: "HAPPY 1ST MONTHSARY BUM BUM, this month is challenging and im glad na na fix nato, grabe atong first monthsary grabe ang nahitabo, problema and kasakit, but nakaya jud nato. First month nato, pero di siya nasangayon sa plano. I love you bum bum, despite the challenges, I'm grateful for you and our journey together. I'm looking forward to many more months together. Im sorry jud langga if pabadlong jud ko, but I love you always in all ways."
    },
    { 
      id: 2, 
      name: 'February', 
      mainImage: febMain,
      isAvailable: true,
      additionalImages: [feb1, feb2, feb3, feb4, feb5],
      message: "Happy 2nd Monthsary bum bum, i remember na kani sab na month nagkaprobblema and although na fix nato pero wa nato ni nasugat jud to langga anf im sorry ako jud ning sala but i love you bum bum still atong day nna enjoy nato since na fix langga, im grateful jud bum bum sa 2 months daghan nakayo ka nahatag sa ako na grabe grabe and sobra sobra, i love you bum bum ikaw jud pinaka the best na ning abot sa ako wala juy lain palangga ikaw lang jud. I love you always in all ways bum bum "
    },
    { 
      id: 3, 
      name: 'March', 
      mainImage: marMain,
      isAvailable: true,
      additionalImages: [mar1, mar2, mar3, mar4, mar5],
      message: "Palanggaaaa HAPPY 3RD MOTMOTTT PALANGGAA I LOVE YOUUU SO MUCCHHHH SUPERRRRRR, GRABEE PILA NATA KA MONTHSSS PAS PAS RA PANAHOOOON😍😍😍😍 Dili pato counted tung nag uban ta startttt, geabee bumm hehehehe i love youuuu, Bum alsoo im sorryyyyyy sa lahaay na sala nakoo past months weeks and dayssss. Im sorryyyy, mag changee jud ako palanggaaaa. Im sorryyyy. Bumm im super gladdd naaa kitaa juddd lahat lahaatt atongg pagubann very hapoyy kaayo ko bum bumm sobraaa. More dayss, weekss, monthsss and yearss pa muabott sa atooo palanggaaaa KITAA JUDDDD. I LOVE YOUU ALWAYS, IN ALL WAYS ASAWA NAKO🤍 Happy 3rd Monthsary palanggaaa🤍"
    },
    { 
      id: 4, 
      name: 'April', 
      mainImage: aprMain,
      isAvailable: true,
      additionalImages: [apr1, apr2, apr3, apr4, apr5],
      message: "Happy 4th Monthsary Bum I love you, kani akong tarongon ang message and also mag sorry ko daan kasi wala ni nasugat sa 12 o clock. Four months na tayo bum and daghan najud tay again karong bulana ma pa problems sa life,task,family, pero despite ato nakaya jud nato tanan kay nag kauban ta. Oo ako ang problem, di nako masabay tanan problems sa isa ka adlaw, lahat lahat, nag andam ko bum pero putol putol, kabalo ko sa imong na feel karon langga and all of that dawat ko na. I know mistake sab nako to sa past, di Nanako to mausab maong lingkamoton nato to matanggal. Buuuuumm ikaw ra ang pinaka pretty sa akong pananaw dili lang sa labas kundi jud sa sulod. I love you bum ikaw rajud ang sulodd ani sa akong kasing kasinngg wa najuy lain, wa nasay lain pang balikan sa una. Ako jud ang pinakaswerte, kay ning abot ka balik sa ako bum bum, 4 months na pero kana japon akong na feel and nag kadako dako jud langga. Unta mag dugay pa ta langga. I love you always in all ways bum bumm HAPPT 4th MONTHSARY, Sumpayan nako ni langga. i learned a lot from you bum bum, lahat lahat inspired ko sa akong mga ginabuhat kkaay ikaw naka tulak sa ako, gihunahuna nako na para sa atong future, maong ganado kaayo ko langga. I know karong adlawa or kanina gabi ako jung pinakadakong sala, im very sorry bum and i love you so much langga, im very very sorry :(, Happy 4th Monthsary bum bum, i love you always in all ways bum bum"
    },
    { id: 5, name: 'May', isAvailable: false, message: "Coming soon... 🌺" },
    { id: 6, name: 'June', isAvailable: false, message: "Coming soon... 🌞" },
    { id: 7, name: 'July', isAvailable: false, message: "Coming soon... 🎋" },
    { id: 8, name: 'August', isAvailable: false, message: "Coming soon... 🌈" },
    { id: 9, name: 'September', isAvailable: false, message: "Coming soon... 🍁" },
    { id: 10, name: 'October', isAvailable: false, message: "Coming soon... 🎃" },
    { id: 11, name: 'November', isAvailable: false, message: "Coming soon... 🍂" },
    { id: 12, name: 'December', isAvailable: false, message: "Coming soon... ❄️" },
  ]);

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleMonthClick = (month) => {
    if (month.isAvailable) {
      setSelectedMonth(month);
      setShowModal(true);
      setShowMessage(false);
    }
  };

  const handleMessageClick = (e, month) => {
    e.stopPropagation();
    setSelectedMonth(month);
    setShowMessage(true);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowMessage(false);
    setSelectedMonth(null);
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app">
      <AnimatedBackground />
      <BackgroundMusic />
      <header className="header">
        <h1>Our Monthsary Gallery</h1>
        <div className="monthsary-date">Every 18th of the Month</div>
        <p>One special memory for each month</p>
      </header>
      <div className="gallery">
        {months.map((month) => (
          <div 
            key={month.id} 
            className={`month-card ${month.isAvailable ? 'clickable' : ''}`}
            onClick={() => handleMonthClick(month)}
          >
            <div className="month-image">
              {month.isAvailable ? (
                <>
                  <img src={month.mainImage} alt={`Month ${month.name}`} />
                  <div className="preview-cards">
                    {month.additionalImages.map((image, index) => (
                      <div key={index} className="preview-card">
                        <img src={image} alt={`${month.name} Preview ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="coming-soon">
                  <span>Coming Soon</span>
                </div>
              )}
            </div>
            <div className="month-name">
              {month.name}
              <button 
                className="message-button"
                onClick={(e) => handleMessageClick(e, month)}
              >
                💌 Message
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedMonth && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{selectedMonth.name} Memories</h2>
            <div className="modal-gallery">
              {selectedMonth.additionalImages.map((image, index) => (
                <div key={index} className="modal-image-container">
                  <img 
                    src={image} 
                    alt={`${selectedMonth.name} Memory ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showMessage && selectedMonth && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="message-modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{selectedMonth.name} Message</h2>
            <div className="message-content">
              {selectedMonth.message}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
