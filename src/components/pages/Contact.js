// import React, { useState } from 'react'
// import '../../App.css'
// import { Axios, db } from '../../firebase/firebaseConfig'
// import '../pages/Contact.css'


//     const Contact = () => {
//         const [formData, setFormData] = useState({})

//         const updateInput = e => {
//             setFormData({
//                 ...formData,
//                 [e.target.name]: e.target.value,
//             })
//         }
//         const handleSubmit = e => {
//             e.preventDefault()
//             sendEmail()
//             setFormData({
//                 name: '',
//                 email: '',
//                 message: '',
//             })
//         }
//         const sendEmail = () => {
//             Axios.post(
//                 'https://us-central1-portfolio-5fd7c.cloudfunctions.net/submit', formData
//             )
//             .then(res => {
//                 db.collection('emails').add({
//                     name: formData.name,
//                     email: formData.email,
//                     message: formData.message,
//                     time: new Date(),
//                 })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         }
//         return (
//             <>
//             <div className='wrapper'>
//             <h1 className='talk'>Let's Talk!</h1>
//                 <form onSubmit={handleSubmit}>
                    
//                     <label>Full-Name</label>
//                     <input 
//                     type='text'
//                     name='name'
//                     placeholder='Enter Full-Name'
//                     onChange={updateInput}
//                     value={formData.name || ''}
//                     />
                    
                    



//     <label>Email</label>
//     <input
//                     type='email'
//                     name='email'
//                     placeholder='example@gmail.com'
//                     onChange={updateInput}
//                     value={formData.email || ''}
//                     />
                    


//     <label>Message</label>
//     <textarea
//                     as='textarea'
//                     name='message'
//                     placeholder='Message'
//                     onChange={updateInput}
//                     rows={'6'}
//                     value={formData.message || ''}
//                     />
                    
//                     <button className='button' type='submit'>Submit</button>
//                 </form>
//                 </div>
//                 </>
//         )
//     } 
        
    
    
// //   {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
// //   {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                
    
//     export default Contact;
