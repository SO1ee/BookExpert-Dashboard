import { useState } from "react";
export default function EditEmployeeForm({employee,onClose,onSave}) {
    const [formData, setFormData] = useState(employee);

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormData({...formData,[name]: value})
    }

    const indianStates = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry" ];
    
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 space-y-3">
                <h2 className="text-xl font-semibold">Edit Employee</h2>
                <img
                    src={formData.image}
                    alt="Selected"
                    className="w-24 h-24 rounded-full object-cover border"
                />
                <input
                    className="input w-full"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <select
                    className="input w-full"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                >
                    <option value="">
                        Select State
                    </option>
                    {indianStates.map((state) => (
                        <option
                            key={state}
                            value={state}
                        >
                            { state}
                        </option>
                    ))
                    }
                </select>
                <input
                    className="input w-full"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />

                <select
                    className="input w-full"
                    name="isActive"
                    value={formData.isActive}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            isActive: e.target.value === "true",
                        })
                    }
                >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>

                <div className="flex justify-end gap-3">
                    <button className="btn-secondary"
                    onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn-primary"
                        onClick={()=> onSave(formData)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}