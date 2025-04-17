import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function CustomForm({ formControls, formData, setFormData, ckeckEnable }) {
  function renderComponentByType(controlItem) {
    const value = formData[controlItem.name] || "";

    switch (controlItem.componentType) {
      case "input":
        return (
          <TextField
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
            fullWidth
            size="small"
          />
        );

      case "textarea":
        return (
          <TextareaAutosize
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
            style={{ width: "100%", minHeight: "100px" }}
          />
        );

      case "select":
        return (
          <FormControl fullWidth size="small">
            <InputLabel id={`${controlItem.name}-label`}>
              {controlItem.label}
            </InputLabel>
            <Select
              labelId={`${controlItem.name}-label`}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [controlItem.name]: event.target.value,
                })
              }
            >
              {controlItem.options && controlItem.options.length > 0
                ? controlItem.options.map((optionItem) => (
                    <MenuItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        );

      case "checkbox":
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={value}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    [controlItem.name]: event.target.checked,
                  })
                }
              />
            }
          />
        );

      default:
        return (
          <TextField
            name={controlItem.name}
            placeholder={controlItem.placeholder}
            id={controlItem.name}
            type={controlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [controlItem.name]: event.target.value,
              })
            }
            fullWidth
          />
        );
    }
  }

  return (
    <>
      {ckeckEnable ? (
        <div className="grid grid-cols-2">
          {formControls.map((controlItem) => (
            <div className="grid w-full" key={controlItem.name}>
              <div className="flex gap-2 items-center">
                <span className="mb-1 text-gray-500 w-40">
                  {controlItem.label}
                </span>
                {renderComponentByType(controlItem)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {formControls.map((controlItem) => (
            <div className="grid w-full gap-1" key={controlItem.name}>
              <div className="flex gap-2 items-center">
                <span className="mb-1 text-gray-500 w-40">
                  {controlItem.label}
                </span>
                {renderComponentByType(controlItem)}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default CustomForm;
