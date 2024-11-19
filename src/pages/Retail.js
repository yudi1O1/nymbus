import React from "react";
import Input from "../components/Input";
import { useState } from "react";

function Retail() {
  const [formData, setFormData] = useState({
    code: "",
    Date: "",
    todate: "",
    SiteCode: "",
    WarehouseCode: "",
    customerGroup: "",
    demo1: "",
    demo2: "",
    demo3: "",
    productid: "",
    rate: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="formPage flex items-center justify-center bg-  flex-col">
        <div className="form-container shadow-xl pr-10 pl-10 pb-4 w-[50rem]">
          <div className="top grid grid-cols-2 gap-5 pt-5 pb-5">
            <Input
              label="code"
              type="text"
              name="code"
              value={formData.code}
              onChange={handleFormChange}
            />

            <Input
              label="Date"
              type="Date"
              name="Date"
              value={formData.date}
              onChange={handleFormChange}
            />

            <Input
              label="From Date"
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleFormChange}
            />

            <Input
              label="To Date"
              type="date"
              name="todate"
              value={formData.todate}
              onChange={handleFormChange}
            />
          </div>
          <div className="code">
            <h1 className="font-bold capitalize pt-2">code</h1>
            <div className="details capitalize">
              <Input
                label="site Code"
                type="text"
                name="SiteCode"
                value={formData.SiteCode}
                onChange={handleFormChange}
              />

              <Input
                label="demo1"
                type="text"
                name="demo1"
                value={formData.demo1}
                onChange={handleFormChange}
              />

              <Input
                label="Warehouse Code"
                type="text"
                name="WarehouseCode"
                value={formData.WarehouseCode}
                onChange={handleFormChange}
              />

              <Input
                label="demo2"
                type="text"
                name="demo2"
                value={formData.demo2}
                onChange={handleFormChange}
              />

              <Input
                label="customer group"
                type="text"
                name="customerGroup"
                value={formData.customerGroup}
                onChange={handleFormChange}
              />

              <Input
                label="demo3"
                type="text"
                name="demo3"
                value={formData.demo3}
                onChange={handleFormChange}
              />
            </div>
          </div>

          {/* foot */}

          <div className="foot grid grid-cols-2 gap-2 gap-4 capitalize mt-10">
            <Input
              label="product id"
              type="text"
              name="rate"
              value={formData.productid}
              onChange={handleFormChange}
            />
            <Input
              label="rate"
              type="text"
              name={formData.rate}
              onChange={handleFormChange}
            />

            <div className="flex">
              <Input label="activity" type="checkbox" />
            </div>
          </div>
          <button className="flex justify-self-end bg-slate-400 p-2 pr-5 pl-5 mt-4 mr-[8rem] text-white">
            active/deactive
          </button>
        </div>
      </div>
    </>
  );
}

export default Retail;
