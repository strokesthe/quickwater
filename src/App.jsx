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
        <button className='water-save-button'>Getrunken</button>

      </div> 
    </div>
  )

}

export default App
