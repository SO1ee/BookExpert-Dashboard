import { useState } from "react";
import { employees as mockEmployees } from "../data/employees";
import EmployeeTable from "./EmployeeTable";
import Navbar from "./Navbar";
import StatCard from "./StatCard";
import EditEmployeeForm from "./EditEmployeeForm"

export default function Dashboard() { 
    const [employees, setEmployees] = useState(mockEmployees);
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [editingEmployees, setEditingEmployees] = useState(null);

    // Search filter
    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalEmployee = employees.length;
    const active = employees.filter((currentValue, index) => {
        return (currentValue.isActive === true)
    }).length;
    const inActive = totalEmployee - active;


    //Print Handler
    const handlePrint = (employee) => {
        const html = ` <!DOCTYPE html>
                        <html>
                        <head>
                        <title>Employee Info</title>
                        <style>
                         body { font-family: Arial, sans-serif; padding: 20px; }
                        h2 { color: #333; }
                        p { margin: 5px 0; }
                        </style>
                        </head>
                        <body>
                            <h2>Employee Details</h2>
                            <p><strong>Name:</strong> ${employee.name}</p>
                            <p><strong>State:</strong> ${employee.state}</p>
                            <p><strong>DOB:</strong> ${employee.dob}</p>
                            <p><strong>Status:</strong> ${employee.isActive ? "Active" : "Inactive"}</p>
                        </body>
                    </html>
                    `;
                // Create blob and URL 
                    const blob = new Blob([html], { type: "text/html" }); const url = URL.createObjectURL(blob);
        // Open new window with blob URL
        const printWindow = window.open(url, "_blank");
        // Wait for window to load, then print
        printWindow.onload = () => { printWindow.print(); URL.revokeObjectURL(url); // cleanup 
        };
    };
        
    return (
        <>
            <Navbar />
                {/*stats*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StatCard label="Total Employees" value={totalEmployee} />
                    <StatCard label="Active " value={active} color="green" />
                    <StatCard label="Inactive" value={inActive} color="red" />
                </div>

                <div className="flex items-center gap-3">
                    <input
                        className="input w-64"
                        placeholder="Search employee..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        setSearch(searchInput);
                        }
                    }}
                    />

                    <button
                        className="btn-primary"
                        onClick={() => setSearch(searchInput)}
                    >
                        Search
                    </button>

                    <button
                        className="btn-secondary"
                        onClick={() => {
                            setSearch("");
                            setSearchInput("");
                        }}
                    >
                        Reset
                    </button>
                </div>


            <EmployeeTable employees={filteredEmployees} onEdit={setEditingEmployees} onPrint={handlePrint}/>

            {editingEmployees && (
                <EditEmployeeForm
                    employee={editingEmployees}
                    onClose={() => setEditingEmployees(null)}
                    onSave={(updatedEmployee) => { 
                        setEmployees((prev) =>
                            prev.map((emp) =>
                                emp.id === updatedEmployee.id ? updatedEmployee : emp
                            )
                        );
                        setEditingEmployees(null);
                    }}
                />
            )}
        </>
    )
}