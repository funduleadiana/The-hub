import React, { useState, useEffect } from "react";

import { Form } from "./components/Form";
import { DataCard } from "./components/DataCard";
import { DATA_CARD_VALUES } from "./constants/data-card";
import { EditModal } from "./components/EditModal";
import "./App.css";
import { formatUpdatedDate } from "./helper-functions/helper-functions";

export interface Value {
  serialNumber: string;
  status: string;
  date: string;
}

function App() {
  const [values, setValues] = useState(DATA_CARD_VALUES);
  const [editingValue, setEditingValue] = useState<Value>();
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(-1);
  const [status, setStatus] = useState("");

  const [updatedHub, setUpdatedHub] = useState<Value>(editingValue);

  function handleSave(data: Value) {
    setValues([...values, data]);
  }

  function handleDelete(serial: string) {
    const filteredValues = values.filter(
      (data) => data.serialNumber !== serial
    );
    setValues(filteredValues);
  }

  function handleEdit(value: Value, index: number) {
    setIsEditing(true);
    setEditingValue(value);
    setIndex(index);
  }

  useEffect(() => {
    if (editingValue && status) {
      setUpdatedHub({
        serialNumber: editingValue.serialNumber,
        status: status,
        date: formatUpdatedDate(),
      });
    }
  }, [editingValue, status]);

  const handleStatusChange = () => {
    setValues(values.map((entry, i) => (i === index ? updatedHub : entry)));
    setIsEditing(false);
  };

  return (
    <>
      <div className="page-container">
        <h1 className="header">The Hub</h1>
        <Form handleSave={handleSave} />

        <DataCard
          values={values}
          handleDelete={handleDelete}
          handleStatusChange={handleEdit}
        />

        {isEditing && (
          <EditModal
            handleClose={() => setIsEditing(false)}
            handleStatusChange={() => handleStatusChange()}
            status={status}
            setStatus={setStatus}
          />
        )}
      </div>
    </>
  );
}

export default App;
