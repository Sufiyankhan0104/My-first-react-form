import React from 'react'
import "./App.css"
import{useForm} from "react-hook-form"



const App = () => {
  const{register,handleSubmit,watch,formState: {errors,isSubmitting },
} = useForm();
   async function onSubmit(data){
     await new Promise((resolve ) => {
    setTimeout((resolve) => {
      console.log("submitting the form" , data);
      
    }, 5000);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">first name:</label>
          <input type="text" 
          className={errors.firstname ? "input-error" : ""}
          {...register("firstname",
          {
            required:true, 
            minLength:{value:3,message:"minimum length atleast 3"},
            maxLengt:{value:6, message:"max length atmost 6"}
            }) }  />
            {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
        </div>
      <br/>
        <div>
          <label htmlFor="">Middle name:</label>
          <input type="text"  {...register("Middle name") }  />
        </div>
        <br/>
        <div>
          <label htmlFor="">Last name:</label>
          <input type="text"  {...register("Last name") }  />
        </div>
        <br/>
        <input type="submit" disabled={isSubmitting}
        value= {isSubmitting ? "submitting" : "submit"} />
      </form>
    </div>
  )
}

export default App