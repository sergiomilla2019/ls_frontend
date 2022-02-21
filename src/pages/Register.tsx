import '../styles/styles';


export const Register = () => {
  return (
    <div>
        <h1>Formulario</h1>
        <form noValidate>
            <label htmlFor='firstName' >First Name</label>
            <input 
                type="text"
                name="firstName"
                
            />
            <span>First Name is required</span>
            <label htmlFor='lastName' >Last Name</label>
            <input 
                type="text"
                name="lastName"
                
            />
            <span>Last Name is required</span>
            <label htmlFor='email' >Email Adress</label>
            <input 
                type="email"
                name="email"
                
            />
            <span>Email is required</span>
            
            <button
                type="submit"
            >
                Submit
            </button>

        </form>
    </div>
  )
}
