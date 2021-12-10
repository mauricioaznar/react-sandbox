import * as React from 'react';
import {FormikDefaultProps} from "./common/FormikDefaultProps";
import {useField} from "formik";
import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";

interface FormikAutocompleteProps<T> extends FormikDefaultProps {
    items: T[];
    itemValue: keyof T;
    itemText: keyof T;
}

export default function FormikAutocomplete<T>({ name, label, items, itemValue, itemText }: FormikAutocompleteProps<T>) {

    const [, formikMeta, fieldHelperProps] = useField(name)
    const [autocompleteValue, setAutocompleteValue] = useState(formikMeta.initialValue)

    const hasError = Boolean(formikMeta.touched && formikMeta.error)

    return (
        <Autocomplete
            isOptionEqualToValue={(option, value) => {
                return option[itemValue] === value[itemValue]
            }}
            value={autocompleteValue}
            onChange={(event: any, newValue: any) => {
                fieldHelperProps.setTouched(true, false)
                fieldHelperProps.setValue(newValue[itemValue], true);
                setAutocompleteValue(newValue)
            }}

            getOptionLabel={
                (option) => {
                    const text = option[itemText]
                    return typeof text === 'string' ? text : ''
                }
            }
            id="controllable-states-demo"
            options={items}
            sx={{ mt: 2, mb: 3}}
            renderInput={(params) =>
                <TextField
                    {...params}
                    label={label}
                    error={hasError}
                    helperText={hasError ? formikMeta.error : ''}
                />
            }
        />
    )

}