import { KEY } from "../App";
import { destroy } from "../Functions/LocalStorage";

export default function Delete({ setDeleteData, deleteData, setLastUpdate }) {
  const doDestroy = (_) => {
    if (deleteData.money > 0) {
      alert("This person has money in their bank account. Cannot delete.");
    } else {
      destroy(KEY, deleteData.id);
      setDeleteData(null);
      setLastUpdate(Date.now());
    }
  };
  return (
    <div className="modal popup">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              You are about to delete the account!
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={(_) => setDeleteData(null)}
            ></button>
          </div>
          <div className="modal-body">
            <p>Do you want to remove this account permanently?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={(_) => setDeleteData(null)}
            >
              Go back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={doDestroy}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
