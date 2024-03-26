import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  const [formData, setFormData] = React.useState({})

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]:e.target.value})  
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/auth/signup",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
      const data = await res.json()
    } catch (error) {
      
    }
  }
  


  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>

        {/* LEFT */}
        <div className='flex-1'>
          <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg'>Gboyes's</span> Blog
          </Link>
          <p className='text-sm mt-5'>This is a personal project. Yo can sign up with a dummy email and pasword or with Google</p>
        </div>
        {/* RIGHT */}

        <div className='flex-1'> 
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
              <Label value='Your Username'/>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>
            <div className=''>
              <Label value='Your Email'/>
              <TextInput type='email' placeholder='Email' id='email'  onChange={handleChange} />
            </div>
            <div className=''>
              <Label value='Your Password'/>
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone="purpleToPink"  type='submit'>Sign up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account</span>
            <Link to="/signin" className='text-blue-600'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn