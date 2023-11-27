import "./App.css";

function App(props) {
  const imageData = props.data;

  return (
    <div>
      <h2>Kalvim Gallery (Functional)</h2>

      <div className="grid">
        {imageData.map((element, index) => (
          <img src={element.img} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
