import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';


export const RegisterPage = () => {
  
  const { 
      formData, onChange, isValidEmail,
    name, email, password1, password2, resetForm
} = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
});
  
  const onSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ (e) => onSubmit(e) }>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={ name }
                onChange={onChange}
                className={ `${name.trim().length <= 0 && 'has-error'}` }
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span> }
            
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={ email }
                onChange={onChange}
                className={ `${ !isValidEmail(email) &&  'has-error'}` }
            
            />
            { !isValidEmail(email) && <span>Email no es valido</span> }
            

            <input
                name="password1"
                type="password"
                placeholder="Password"
                value={ password1 }
                onChange={onChange}
            />
            { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password1.trim().length < 6 && password1.trim().length <= 0 && <span>La contraseña tiene que tener mas de 6 caracteres</span> }
            

            <input
                name="password2"
                type="password"
                placeholder="Repeat password"
                value={ password2 }
                onChange={ (ev) => onChange(ev)}
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password2.trim().length > 0 && password1 !== password2  && <span>Las contraseñas deben ser iguales</span> }
            

            <button
                type="submit"

            >
                Create
            </button>
            <button type='button'
            onClick={ resetForm }
            >Reset</button>
        </form>
    </div>
  )
};
