import './App.css'
import appLogo from  '/assets/applogo.png'


function App() {

  return (
    <div>
      <h1>QuickWater</h1>
      <img className='app-logo' src={appLogo}></img>
      <div>

        <input className='water-input'
        type='number'
        placeholder='Wasser(ml)'
        />
        <div className='buttons'>
          <button>100ml</button>
          <button>350ml</button>
          <button>600ml</button>
          <button>1000ml</button>
        </div>
        

      </div> 
    </div>
  )

}

export default App
