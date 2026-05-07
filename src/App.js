import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Student Admission Portal</h1>
      <p>Welcome to the College Student Admission Portal</p>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/register"> Registration</Link> | 
        <Link to="/about"> About</Link>
      </nav>
    </div>
  );
}

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    age: "",
    course: "",
    gender: "",
    skills: [],
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...formData.skills];

    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter((skill) => skill !== value);
    }

    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label><br />
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Course:</label><br />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="MECH">MECH</option>
          </select>
        </div>

        <div>
          <label>Gender:</label><br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          /> Female
        </div>

        <div>
          <label>Skills:</label><br />
          <input type="checkbox" value="Java" onChange={handleSkillChange} /> Java
          <input type="checkbox" value="Python" onChange={handleSkillChange} /> Python
          <input type="checkbox" value="React" onChange={handleSkillChange} /> React
        </div>

        <div>
          <label>Address:</label><br />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Success() {
  return (
    <div>
      <h2>Registration Successful</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About College</h2>
      <p>
        Our college provides quality education, experienced faculty,
        and excellent placement opportunities.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
