import React, { ReactElement, useState } from "react";

import "../styles/Form.css";
import { formatUpdatedDate } from "../helper-functions/helper-functions";
import { Value } from "../App";
import { STATUS_VALUES } from "../constants/form";

interface FormProps {
  handleSave: ({ serialNumber, status, date }: Value) => void;
}

export function Form({ handleSave }: FormProps): ReactElement {
  const [serialNumber, setSerialNumber] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <div className="form">
      <form
        id="myForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave({
            serialNumber: serialNumber,
            status: status,
            date: formatUpdatedDate(),
          });
          setStatus("");
          setSerialNumber("");
        }}
      >
        <div className="formInputField">
          <label className="label" id="serialLabel" htmlFor="serialNumber">
            Serial Number
            <input
              className="input"
              id="serialNumber"
              type="text"
              value={serialNumber}
              onChange={(event) => setSerialNumber(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="label" id="statusLabel" htmlFor="status">
            Status
            <input
              className="input"
              id="status"
              onClick={() => setIsExpanded(true)}
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
          </label>
          {isExpanded && (
            <div className="dropDown" onClick={() => setIsExpanded(false)}>
              {STATUS_VALUES.map((status, i) => (
                <div
                  key={i}
                  className="innerDropdown"
                  onClick={() => setStatus(status.name)}
                >
                  {status.name}
                </div>
              ))}
            </div>
          )}
          <button className="buttons">Save</button>
        </div>
      </form>
    </div>
  );
}
