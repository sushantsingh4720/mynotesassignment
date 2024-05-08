const tableBody = [
  {
    id: "1",
    title: "Onboarding Call",
  },
  {
    id: "2",
    title: "Google Search Console Access",
  },
  {
    id: "3",
    title: "Google Analytics Access",
  },
  {
    id: "4",
    title: "Website Access",
  },
  {
    id: "5",
    title: "Technical Audit",
  },
  {
    id: "6",
    title: "Anchor Text and Semantic Analysis",
  },
  {
    id: "7",
    title: "Copetitor Analysis",
  },
  {
    id: "8",
    title: "Anchor Text / URL Mapping",
  },
  {
    id: "9",
    title: "Google Data Studio Report + Local Reporting Suite",
  },
  {
    id: "11",
    title: "On Page Optimization",
  },
  {
    id: "12",
    title: "Content Creation",
  },
  {
    id: "13",
    title: "Content Publishing",
  },
  {
    id: "14",
    title: "Premium Press Release",
  },
  {
    id: "15",
    title: "Authority Niche Placements",
  },
  {
    id: "16",
    title: "Review Management",
  },
  {
    id: "17",
    title: "Index links",
  },
  {
    id: "18",
    title: "Video Recap",
  },
];

function Table() {
  const { useState } = React;
  const [inputValues, setInputValues] = useState(() =>
    tableBody.map(() => Array(6).fill(""))
  );

  function handleInputChange(e, rowIndex, colIndex) {
    const { value } = e.target;
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[rowIndex][colIndex] = value;
      return newInputValues;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>MONTH 1</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item, rowIndex) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              {Array(6)
                .fill("")
                .map((column, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="text"
                      value={inputValues[rowIndex][colIndex]}
                      onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                    />
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("table"));
root.render(<Table />);
