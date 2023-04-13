function MapDemo() {
  const myarray = ["A", "B", "C", "D", "E"];
  return (
    <div>
      <table border="1">
        {myarray.map((value, index) => {
          return (
            <tr key={index}>
              {" "}
              <td>{value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default MapDemo;
