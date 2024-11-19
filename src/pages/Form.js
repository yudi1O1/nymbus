import React, { useState } from "react";
import Input from "../components/Input";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    };
    
    const [formData, setFormData] = useState({
        formdate: '',
        todate: '',
        formdata2: '',
        productcode: '',
        color: '',
        style: '',
        fweight: '',
        tweight: '', 
        rate:''
    })

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <>
      <div className="formPage flex items-center justify-center bg- h-[100vh] flex-col">
        <div className="form-container shadow-xl pr-10 pl-10 pb-4 w-[50rem]">
          <div className="head flex justify-center capitalize ">
            <h1 className="add p-3 font-bold">add vendor master</h1>
          </div>
          <div className="details">
            <div className="form-input">
            
              <Input label="From Date" type="text" name="formdate" value={formData.formdate} onChange={handleFormChange} />
            </div>

            <div className="form-input">
        
              <Input label="To Date" type="text" name="todate" value={formData.todate} onChange={handleFormChange} />
            </div>

            <div className="form-input">
     
              <Input label="Product TNJ Type" type="text" name="formdata2" value={formData.formdata2} onChange={handleFormChange} />
            </div>

            <div className="form-input">
            
              <Input label="Product Code" type="text" name="productcode" value={formData.productcode} onChange={handleFormChange} />
            </div>

            <div className="form-input">
       
              <Input label="color" type="text" name="color" value={formData.color} onChange={handleFormChange} />
            </div>
            <div className="form-input">
            
              <Input label="Style" type="text" name="style" value={formData.style} onChange={handleFormChange} />
            </div>
            <div className="form-input">
             
              <Input label="From weight" type="text" name="fweight" value={formData.fweight} onChange={handleFormChange} />
            </div>
            <div className="form-input">
            
              <Input label="To Weight" type="text" name="tweight" value={formData.tweight} onChange={handleFormChange} />
            </div>
            <div className="form-input flex flex-col">
              <label>Rate Type</label>
              <select
                className="select h-[2.5rem]"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">--Choose an option--</option>
                <option value="qty">Qty</option>
                <option value="pcs">Pcs</option>
                <option value="tot">Tot</option>
                <option value="net">net</option>
              </select>
            </div>
            <div className="form-input">
              <Input label="Rate" type="text" name="rate" value={formData.rate} onChange={handleFormChange} />
            </div>
          </div>
          <div className="btns flex justify-between w-[100%] mt-4">
            <div className="btn">
              <button className="bg-slate-400 w-[8rem] h-[3rem] rounded-sm	">
                Add Adress
              </button>
            </div>
            <div className="btn">
              <button className="bg-slate-400 w-[8rem] h-[3rem] rounded-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
