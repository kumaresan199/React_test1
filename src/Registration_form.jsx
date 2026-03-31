import React , {useState} from "react";

function Registration_form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        Qualification:"",
        address : "",
        mobile: ""

    });
    const [errors, setErrors]= useState({});
    const [submitted, setSubmitted]= useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        })
    };

    const validate = () => {
        let newErrors = {};

if(!formData.name.trim()){
    newErrors.name = "Name is required";
}

    if(!formData.email){
        newErrors.email = "Email is required";
    } 
    else if(!formData.email.includes('@')){
        newErrors.email ="Invalid Email Formate";
    }
    else if(formData.email.length < 6){
            newErrors.email ="Email length should greater than 6 char";
    }

    if(!formData.password){
        newErrors.password = "Password is required";
    }
    else if(formData.password.length < 6){
        newErrors.password = "Password length should be greater than 6 char";
    }
    else if(!formData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)){
        newErrors.password = "Password must contain at least one capital letter and one samll letter and one number ";
    }

    return newErrors;
};

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateEroors = validate();
       setErrors(validateEroors);
       console.log("validateEroors", validateEroors);
         if(Object.keys(validateEroors).length === 0){
            console.log("form submitted:",formData);
            setSubmitted(true);
         }
    };

    return(
        <div className="form-container">
            <h2> Register</h2>

            {submitted && <p className ="success-message">Form Registered succesffully!!</p>}
            <form onSubmit = {handleSubmit}>
            <div className="form-group">
            <input type="text" name = "name" 
            placeholder="enter name"
            value={formData.name}
            onChange={handleChange}
            />
          {errors.name && <p className= "error-message">{errors.name}</p>}  
        </div>

        <div className="form-group">
            <input type="text" name = "email"
            placeholder="enter_email"
            value ={formData.email}
            onChange={handleChange}
            />
            {errors.email && <p className = "error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
                <input type ="password" name = "password"
                placeholder="enter password"
                value={formData.password}
                onChange={handleChange}

                />
               {errors.password && <p className="error-message">{errors.password}</p>} 
                
                </div>
                <div className="form-group">
                    <button type="submit">Register</button>
                    </div> 
            </form>

        </div>
        
    );

}
export default Registration_form;
