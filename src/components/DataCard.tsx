import React, { ReactElement } from "react";

import { Value } from "../App";

import "../styles/DataCard.css";
import "../styles/global.css";

interface DataCardProps {
  values: Value[];
  handleDelete: (serial: string) => void;
  handleStatusChange: (value: Value, index: number) => void;
}

export function DataCard({
  values,
  handleDelete,
  handleStatusChange,
}: DataCardProps): ReactElement {
  return (
    <>
      {values.map((value, i) => (
        <div key={i}>
          <div className="table">
            <div>
              <p className="tableHeader">Serial number</p>
              <p className="tableEntry">{value.serialNumber}</p>
            </div>
            <div>
              <p className="tableHeader">Status</p>
              <p className="tableEntry">{value.status}</p>
            </div>
            <div>
              <p className="tableHeader">Status Date</p>
              <p className="tableEntry">{value.date}</p>
            </div>

            <div className="buttonContainer">
              <button
                className="button edit"
                onClick={() => handleStatusChange(value, i)}
              >
                Edit
              </button>
              <button
                className="button delete"
                onClick={() => handleDelete(value.serialNumber)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
