function Tabs({ toogleState, setToggleState }) {
  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={toogleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(1)}
        >
          All Tasks
        </div>
        <div
          className={toogleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(2)}
        >
          Completed
        </div>
        <div
          className={toogleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => setToggleState(3)}
        >
          Uncompleted
        </div>
      </div>
    </div>
  );
}

export default Tabs;
