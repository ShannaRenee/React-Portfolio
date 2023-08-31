import React, {useState} from 'react';
const Contact = () => {
  const [formState, setFormState] = useState({
    name: '', 
    email: '', 
    message: ''
  });
  const handleChange = (e) => {
    e.preventDefault()
    setFormState({...formState, [e.target.name]: e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
          </label>
        <input 
        type="text" 
        name='name'
        className="form-control" 
        placeholder="Jane Doe"
        defaultValue={formState.name}
        onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
          </label>
        <input 
        type="email" 
        name='email'
        className="form-control" 
        placeholder="name@example.com"
        defaultValue={formState.email}
        onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          message
          </label>
        <textarea 
        name='message'
        className="form-control" 
        rows="3"
        defaultValue={formState.message}
        onChange={handleChange}
        >  
        </textarea>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </div>
    </form>
  )
}

export default Contact
