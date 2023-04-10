import React, { ReactElement } from "react";

import "../styles/EditModal.css";
import "../styles/global.css";
import { STATUS_VALUES } from "../constants/form";

interface EditModalProps {
  handleClose: () => void;
  handleStatusChange: () => void;
  status: string;
  setStatus: (newStatus: string) => void;
}

export function EditModal({
  handleClose,
  handleStatusChange,
  status,
  setStatus,
}: EditModalProps): ReactElement {
  return (
    <div className="edit-modal">
      <div className="modal-inner">
        <p>Status</p>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select-modal"
        >
          {STATUS_VALUES.map((status, index) => (
            <option key={index} value={status.name}>
              {status.name}
            </option>
          ))}
        </select>

        <div className="buttonContainer">
          <button onClick={handleStatusChange} className="button save">
            Save
          </button>
          <button onClick={handleClose} className="button cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
