import React, { useCallback, useState } from "react";
import SimpleMDE, { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function Editor() {
  const [value, setValue] = useState("Initial value");

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  return <SimpleMdeReact value={value} onChange={onChange} />;
}
