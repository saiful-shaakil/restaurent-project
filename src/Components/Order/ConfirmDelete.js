import React from "react";
import { toast } from "react-toastify";

const ConfirmDelete = ({ order }) => {
  const { _id } = order;
  //to delete
  const handleDelete = (id) => {
    fetch(`https://floating-thicket-52980.herokuapp.com/remove-order/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div>
      <input type="checkbox" id="remove-order" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to remove this item?
          </h3>
          <div className="modal-action">
            <label htmlFor="remove-order" className="btn btn-success">
              No
            </label>
            <label
              htmlFor="remove-order"
              onClick={() => handleDelete(_id)}
              className="btn btn-error"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
