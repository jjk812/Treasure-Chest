import React from "react";
import { InputField } from "../InputField";

interface Params {
  value: string;
}

export const AddressParam = ({ value }: Params) => {
  return (
    <InputField value={value} placeholder="" isReadOnly onChange={() => {}} />
  );
};
