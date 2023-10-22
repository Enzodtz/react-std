import React from "react";

interface Props {
  i: number;
  v: string;
  changeValue: (v: string, i: number) => void;
}

export default function Input({ i, v, changeValue }: Props) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let v = e.target.value;

    changeValue(v, i);
  }

  return (
    <div>
      <input onChange={onChange} type="text" value={v} />
    </div>
  );
}
