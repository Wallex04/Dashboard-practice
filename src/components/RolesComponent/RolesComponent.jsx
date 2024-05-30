import React from 'react';

const RolesComponent= () => {
  const headers = ["Name", "Age", "Location", "Status", "Role", "Action"];
  const tableData = [
    ["Check", "Check", "Check", "Check", "Check", "Check"],
    ["Check", "Check", "Check", "Check", "Check", "Check"],
    ["Check", "Check", "Check", "Check", "Check", "Check"],
    ["Check", "Check", "Check", "Check", "Check", "Check"],
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="bg-gray-50 flex">
            {headers.map((header, index) => (
              <div key={index} className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </div>
            ))}
          </div>
          {tableData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col">
              <div className="flex">
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} className="w-1/6 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {cell}
                  </div>
                ))}
              </div>
              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RolesComponent;



