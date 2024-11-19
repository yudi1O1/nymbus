import React from "react";
import Input from "../components/Input";
import { useState } from "react";

function Form3() {
  const [formData, setFormData] = useState({
    code: "",
    Date: "",
    todate: "",
    SiteCode: "",
    articleCode: "",
    WarehouseCode: "",
    subArticleCode: "",
    customerGroup: "",
    mnfCode: "",
    CustomerCode: "",
    productCode: "",
    purity: "",
    style: "",
    size: "",
    BatchNo: "",
    cut: "",
    color: "",
    rate: "",
    wastage_percentage: "",
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
                label="article Code"
                type="text"
                name="articleCode"
                value={formData.articleCode}
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
                label="Sub Article Code"
                type="text"
                name="subArticleCode"
                value={formData.subArticleCode}
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
                label="MNF code"
                type="text"
                name="mnfCode"
                value={formData.mnfCode}
                onChange={handleFormChange}
              />

              <Input
                label="customer code"
                type="text"
                name="CustomerCode"
                value={formData.CustomerCode}
                onChange={handleFormChange}
              />

              <Input
                label="Product Code"
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleFormChange}
              />
            </div>
          </div>

          {/* foot */}

          <div className="foot grid grid-cols-2 gap-2 gap-4 capitalize mt-10">
            <Input
              label="rate"
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleFormChange}
            />
            <Input
              label="wastage percentage"
              type="text"
              name={formData.rate}
              onChange={handleFormChange}
            />
            <div className="rateType flex flex-col ml-2">
              <h1>rate type</h1>
              <select className="h-[2.4rem]">
                <option value="">--select from option--</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">2</option>
              </select>
            </div>

            <div className="calculation">
              <h1>wastage purity</h1>
              <select name="" id="" className="w-full h-[2.4rem] rounded-l">
                <option value="">--select from oprion--</option>
                <option value="">demo</option>
                <option value="">demo</option>
                <option value="">demo</option>
              </select>
            </div>
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

export default Form3;
