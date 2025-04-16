import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import "../../App.css";

const Form: React.FC = () => {
  const navigate = useNavigate();
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

    console.log("Yuborilgan ma'lumotlar:", formData);

    // Ma'lumotlarni localStorage ga saqlash
    localStorage.setItem("formData", JSON.stringify(formData));

    // Chat sahifasiga o'tish
    navigate("/chatUI");
  };

  return (
    <div className="container py-10 px-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="form bg-white p-6 rounded-xl shadow-md space-y-4">
        <div className="ageGender flex gap-4">
          <div className="form-group flex-1">
            <label htmlFor="age" className="block font-semibold mb-1">Yosh</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Yoshingiz"
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="form-group flex-1">
            <label htmlFor="gender" className="block font-semibold mb-1">Jinsi</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">Tanlang</option>
              <option value="male">Erkak</option>
              <option value="female">Ayol</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="symptoms" className="block font-semibold mb-1">Simptomlar</label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Simptomlaringizni kiriting..."
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="signs" className="block font-semibold mb-1">Tashqi belgilar</label>
          <textarea
            id="signs"
            name="signs"
            value={formData.signs}
            onChange={handleChange}
            placeholder="Tashqi belgilarni yozing..."
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration" className="block font-semibold mb-1">Qachondan beri</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Masalan: 3 kundan beri"
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="medications" className="block font-semibold mb-1">Ichilgan dorilar</label>
          <textarea
            id="medications"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            placeholder="Ichilgan dorilarni yozing..."
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Yuborish va maslahat olish
        </button>
      </form>
    </div>
  );
};

export default Form;
