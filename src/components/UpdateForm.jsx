const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          {/* {updateData === "" } */}
          <button
            onClick={updateTask}
            className="btn btn-lg btn-success mr-20"
            disabled={updateData.title === ""}
          >
            Update
          </button>
          <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
