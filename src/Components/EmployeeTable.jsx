export default function EmployeeTable({ employees, onEdit, onPrint}) { 
    return (
        <>
            <div>
                 {/* Mobile view: cards */}
                 <div className="block md:hidden space-y-4">
                    {employees.map((emp) => (
                        <div key={emp.id} className="p-4 border rounded-lg bg-white shadow-sm">
                        <div className="flex items-center space-x-3 mb-2">
                            <img
                                src={emp.image}
                                alt={emp.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{emp.name}</p>
                                <p className="text-sm text-gray-500">{emp.gender}</p>
                            </div>
                        </div>
                        <p className="text-sm"><strong>ID:</strong> {emp.id}</p>
                        <p className="text-sm"><strong>DOB:</strong> {emp.dob}</p>
                        <p className="text-sm"><strong>State:</strong> {emp.state}</p>
                        <p className="text-sm">
                            <span
            className={`px-2 py-1 text-xs rounded-full ${
              emp.isActive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {emp.isActive ? "Active" : "Inactive"}
                            </span>
                        </p>
                        <div className="mt-2 space-x-2">
          <button className="btn-secondary text-sm" onClick={() => onEdit(emp)}>Edit</button>
          <button className="btn-secondary text-sm text-red-600">Delete</button>
          <button className="btn-secondary text-sm" onClick={()=> onPrint(emp)}>Print</button>
                        </div>
            </div>
            ))}
        </div>

  {/* Desktop view: table */}
  <div className="hidden md:block overflow-x-auto">
    <table className="w-full border-collapse rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Profile</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left hidden sm:table-cell">Gender</th>
          <th className="p-3 text-left hidden sm:table-cell">DOB</th>
          <th className="p-3 text-left">State</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr
            key={emp.id}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
          >
            <td className="p-3">{emp.id}</td>
            <td className="p-3">
              <img
                src={emp.image}
                alt={emp.name}
                className="w-10 h-10 rounded-full"
              />
            </td>
            <td className="p-3">{emp.name}</td>
            <td className="p-3 hidden sm:table-cell">{emp.gender}</td>
            <td className="p-3 hidden sm:table-cell">{emp.dob}</td>
            <td className="p-3">{emp.state}</td>
            <td className="p-3">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  emp.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {emp.isActive ? "Active" : "Inactive"}
              </span>
            </td>
            <td className="p-3 space-x-2">
              <button className="btn-secondary text-sm" onClick={()=> onEdit(emp)}>Edit</button>
              <button className="btn-secondary text-sm text-red-600">Delete</button>
              <button className="btn-secondary text-sm" onClick={()=> onPrint(emp)}>Print</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </>
    )
}