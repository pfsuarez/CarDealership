import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
import Vehicle from "../../Model/Vehicle";

interface props {
  onNavigateHomeHandlerCallback: () => void;
  onSubmitHandlerCallback: (vehicle: Vehicle) => void;
}

const Form: React.FC<props> = ({
  onNavigateHomeHandlerCallback,
  onSubmitHandlerCallback,
}) => {
  const [isFormInvalid, setFormInvalid] = useState<boolean>(true);
  const orderNumberEl = useRef<HTMLInputElement>(null);
  const modelEl = useRef<HTMLInputElement>(null);
  const chassisEl = useRef<HTMLInputElement>(null);
  const licenseEl = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const vehicle: Vehicle = {
      orderNumber: orderNumberEl.current ? +orderNumberEl.current.value : 0,
      model: modelEl.current ? modelEl.current.value : "",
      chassis: chassisEl.current ? chassisEl.current.value : "",
      license: licenseEl.current ? licenseEl.current.value : "",
    };

    onSubmitHandlerCallback(vehicle);
  };

  const onInputValuesChanges = () => {
    if (
      orderNumberEl.current?.value &&
      modelEl.current?.value &&
      chassisEl.current?.value &&
      licenseEl.current?.value
    ) {
      setFormInvalid(false);
    } else {
      setFormInvalid(true);
    }
  };

  return (
    <>
      <p>Please fill all the fields!!!</p>
      <form className="row" onSubmit={handleSubmit}>
        <div className={classes.inputcontrol}>
          <label className="form-label" htmlFor="orderNumber">
            Order:
          </label>
          <input
            type="number"
            name="orderNumber"
            className="form-control"
            ref={orderNumberEl}
            onChange={onInputValuesChanges}
          />
        </div>

        <div className={classes.inputcontrol}>
          <label className="form-label" htmlFor="model">
            Model:
          </label>
          <input
            type="text"
            name="model"
            className="form-control"
            ref={modelEl}
            onChange={onInputValuesChanges}
          />
        </div>

        <div className={classes.inputcontrol}>
          <label className="form-label" htmlFor="chassis">
            Chassis:
          </label>
          <input
            type="text"
            name="chassis"
            className="form-control"
            ref={chassisEl}
            onChange={onInputValuesChanges}
          />
        </div>

        <div className={classes.inputcontrol}>
          <label className="form-label" htmlFor="license">
            License:
          </label>
          <input
            type="text"
            name="license"
            className="form-control"
            ref={licenseEl}
            onChange={onInputValuesChanges}
          />
        </div>

        <div className={classes.inputcontrol}>
          <input
            className="btn btn-primary"
            type="submit"
            value="Save"
            disabled={isFormInvalid}
          />
          &nbsp;
          <input
            className="btn btn-danger"
            type="button"
            value="Back"
            onClick={onNavigateHomeHandlerCallback}
          />
        </div>
      </form>
    </>
  );
};

export default Form;