import { useState } from "react";
import { employees as mockEmployees } from "../data/employees";
import EmployeeTable from "./EmployeeTable";
import Navbar from "./Navbar";
import StatCard from "./StatCard";

export default function Dashboard() { 
    const [employees, setEmployees] = useState(mockEmployees);
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");

    // Search filter
    const filteredEmployees = employees.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalEmployee = employees.length;
    const active = employees.filter((currentValue, index) => {
        return (currentValue.isActive === true)
    }).length;
    const inActive = totalEmployee - active;
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


            <EmployeeTable employees={filteredEmployees}/>
        </>
    )
}