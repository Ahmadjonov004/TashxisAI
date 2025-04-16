import React, { useState } from "react";
import "./Form.css";
import "../../App.css";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    symptoms: "",
    signs: "",
    duration: "",
    medications: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" container">
      <form onSubmit={handleSubmit} className="form">
        <div className="ageGender">
          <div className="form-group">
            <label htmlFor="age">Yoshi</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Yoshni kiriting"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Jinsi</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="select-input"
            >
              <option value="">Tanlang</option>
              <option value="male">Erkak</option>
              <option value="female">Ayol</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Simptomlar</label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Simptomlarni kiriting"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="signs">Belgilar</label>
          <textarea
            id="signs"
            name="signs"
            value={formData.signs}
            onChange={handleChange}
            placeholder="Belgilarni kiriting"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Qachondan beri</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Qachondan beri davom etmoqda?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="medications">Ichilgan dorilar</label>
          <textarea
            id="medications"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            placeholder="Ichilgan dorilarni kiriting"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Form;
