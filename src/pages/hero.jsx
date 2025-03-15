
import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [csvData, setCsvData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [posts, setPosts] = useState([])
  const dropdownRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader(); // ?
    reader.readAsText(file);
    console.log(reader)
    reader.onload = (e) => { // ?
      const text = e.target.result;
      const parsedData = parseCSV(text);
      setCsvData(parsedData);
    };
  };

  const parseCSV = (text) => {
    const rows = text.split("\n").map((row) => row.split(",").map((cell) => cell.trim()));
    const headers = rows[0];

    const validColumns = headers.filter((_, colIndex) =>
      rows.slice(1).some((row) => row[colIndex] !== "")
    );

    return rows.slice(1).map((row) =>
      validColumns.reduce((acc, header, index) => {
        acc[header] = row[headers.indexOf(header)] || "";
        return acc;
      }, {})
    );
  };

  const applyFilter = (row) => {
    if (!selectedColumn || !searchQuery) return true;
    return row[selectedColumn]?.toString().toLowerCase().includes(searchQuery.toLowerCase());
  };

  const applySorting = (data) => {
    if (!selectedColumn || !sortOrder) return data;

    return [...data].sort((a, b) => {
      let valA = a[selectedColumn];
      let valB = b[selectedColumn];

      if (!isNaN(valA) && !isNaN(valB)) {
        valA = Number(valA);
        valB = Number(valB);
      }

      return valA < valB ? (sortOrder === "asc" ? -1 : 1) : valA > valB ? (sortOrder === "asc" ? 1 : -1) : 0;
    });
  };

  const handleColumnClick = (header) => {
    if (selectedColumn === header) {
      setDropdownVisible(!dropdownVisible);
    } else {
      setSelectedColumn(header);
      setDropdownVisible(true);
      setSearchQuery("");
      setSortOrder(null);
    }
  };

  useEffect(() => {
    console.log("----------------")
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
useEffect(()=>{
  const link = "https://jsonplaceholder.typicode.com/posts"

  const fetchData =   () =>{
     const data = fetch(link).then(async(result) => {
      console.log(result)
      const res =  await result.json()
       console.log({res});
        setPosts(res)
     });
 }
  
  fetchData();
},[selectedColumn])

  return (
    <div>
      <h2>Upload and Filter CSV Data</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {csvData.length > 0 && (
        <div>
          <h3>Click a column to filter/sort:</h3>
          <table border="1">
            <thead>
              <tr>
                {Object.keys(csvData[0]).map((header) => (
                  <th key={header} style={{ position: "relative" }}>
                    <button onClick={() => handleColumnClick(header)}>
                      {header} {selectedColumn === header ? "🔽" : ""}
                    </button>

                    {dropdownVisible && selectedColumn === header && (
                      <div ref={dropdownRef} style={dropdownStyle}>
                        <input
                          type="text"
                          placeholder={`Search in ${selectedColumn}...`}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          style={inputStyle}
                        />
                        <button onClick={() => setSortOrder("asc")}>Sort Asc</button>
                        <button onClick={() => setSortOrder("desc")}>Sort Desc</button>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
`              {posts?.map((item)=>(
                    <td>{item.id}</td>
                  ))}`
              {applySorting(csvData.filter(applyFilter)).map((row, index) => (
                <tr key={index}>
                  
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: "0",
  background: "white",
  border: "1px solid #ccc",
  padding: "10px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 100,
};

const inputStyle = {
  width: "100%",
  padding: "5px",
  marginBottom: "5px",
};

export default Hero;
