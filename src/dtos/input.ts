import React from "react";

export interface IInputParams {
    type: string,
    label?: string,
    onChange: (value?: string) => void,
    icon?: React.ReactElement
}