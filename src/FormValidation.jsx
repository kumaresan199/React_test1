import React, { useState } from "react";

function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    let err = {};

    // Name
    if (!form.name.trim()) {
      err.name = "Name is required";
    }

    // Email
    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email format";
    }

    // Password
    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    // Gender
    if (!form.gender) {
      err.gender = "Select gender";
    }

    // Address
    if (!form.address.trim()) {
      err.address = "Address is required";
    }

    // Mobile
    if (!form.mobile) {
      err.mobile = "Mobile number required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      err.mobile = "Mobile must be 10 digits";
    }

    return err;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(form);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Validation</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>

      {/* Email */}
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={form.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={form.password}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.password}</p>

      {/* Gender */}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <p style={{ color: "red" }}>{errors.gender}</p>

      {/* Address */}
      <textarea
        name="address"
        placeholder="Enter Address"
        value={form.address}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.address}</p>

      {/* Mobile */}
      <input
        type="text"
        name="mobile"
        placeholder="Enter Mobile Number"
        value={form.mobile}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.mobile}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;