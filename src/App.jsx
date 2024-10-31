
import './App.css'
import ReuseableForm from './componentes/ReuseableForm/ReuseableForm'
// import HookForm from './componentes/HookForm/HookForm'
// import ControlFrom from './componentes/ControlForm/ControlFrom'
// import RefForm from './componentes/RefForm/RefForm'
// import SimpleForm from './componentes/SimpleForm/SimpleForm'

function App() {

  const handleSignUp = data => {
    console.log('sign up data', data)
  }

  const handleUpdateProfile = data => {
    console.log('update profile data', data)
  }
  

  return (
    <>
      
      <h1 className='font-bold text-3xl py-3'>Form</h1>
      {/* <ControlFrom></ControlFrom> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm 
        formTitle={'Sign Up'} 
        handleSubmit={handleSignUp}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
      </ReuseableForm>
      <ReuseableForm 
        formTitle={'Profile Update'} 
        handleSubmit={handleUpdateProfile} 
        submitBtnText={'Update'}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReuseableForm>
      
    </>
  )
}

export default App
