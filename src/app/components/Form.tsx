"use client";

import React, { useState } from "react";
import styles from "@/styles/form.module.css";
import axios from "axios";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CircularProgress } from "@mui/material";

const Form = () => {
  // fields
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [shoot, setShoot] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //   errors
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorMessageFirstName, setErrorMessageFirstName] =
    useState<string>("");
  const [errorMessageLastName, setErrorMessageLastName] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<string>("");
  const [errorMessagePhone, setErrorMessagePhone] = useState<string>("");
  const [errorMessageMessage, setErrorMessageMessage] = useState<string>("");
  const [errorMessageLocation, setErrorMessageLocation] = useState<string>("");
  const [errorMessageShoot, setErrorMessageShoot] = useState<string>("");
  const [successMessage, setsuccessMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   regex
  const regexName = /^[a-zA-Z\s]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPhone = /^(?:\+31|0)(?:[1-9]0|[1-9][1-9])\d{7}$/;
  const regexText = /^[a-zA-Z0-9\s.!?]+$/;

  const handleForm = async (e: any) => {
    e.preventDefault();

    if (!regexName.test(firstName)) {
      return (
        setErrorMessageFirstName("Vul een naam in aub."), setIsLoading(false)
      );
    } else {
      setErrorMessageFirstName(""), setIsLoading(false);
    }
    if (!regexName.test(lastName)) {
      return (
        setErrorMessageLastName("Vul een naam in aub."), setIsLoading(false)
      );
    } else {
      setErrorMessageLastName(""), setIsLoading(false);
    }
    if (!regexEmail.test(email)) {
      return setErrorMessageEmail("Vul een email adres in aub."), setIsLoading(false);
    } else {
      setErrorMessageEmail(""), setIsLoading(false);
    }
    if (!regexPhone.test(phone)) {
      return setErrorMessagePhone("Vul een telefoonnummer in aub."), setIsLoading(false);
    } else {
      setErrorMessagePhone(""), setIsLoading(false);
    }
    if (!regexText.test(shoot)) {
      return setErrorMessageShoot("Vul een soort shoot in aub."), setIsLoading(false);
    } else {
      setErrorMessageShoot(""), setIsLoading(false);
    }
    if (!regexText.test(location)) {
      return (
        setErrorMessageLocation("Vul een voorkeur locatie in aub."), setIsLoading(false)
      );
    } else {
      setErrorMessageLocation(""), setIsLoading(false);
    }
    if (!regexText.test(message)) {
      return (
        setErrorMessageMessage("Vul dit veld in aub."), setIsLoading(false)
      );
    } else {
      setErrorMessageMessage(""), setIsLoading(false);
    }

    const body: any = {
      firstName,
      lastName,
      email,
      phone,
      shoot,
      location,
      message,
    };

    try {
      setIsLoading(true);
      const response = await axios.post("/api/contactForm", {
        body,
      });
      if (response.status === 200) {
        setsuccessMessage(response.data.message);
        setIsLoading(false);
      } else {
        setErrorMessage(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending the form:", error);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.formInner}>
        {/* firstname */}
        <div className={styles.lablesAndInputs}>
          <div className={styles.labelInput}>
            <label htmlFor="Voornaam">Voornaam</label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value.trim())}
              name="Voornaam"
              id="Voornaam"
              required
            />
          </div>
          {errorMessageFirstName && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessageFirstName}
              </div>
            </div>
          )}

          {/* lastname */}
          <div className={styles.labelInput}>
            <label htmlFor="Achternaam">Achternaam</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value.trim())}
              name="Achternaam"
              id="Achternaam"
              required
            />
          </div>
          {errorMessageLastName && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessageLastName}
              </div>
            </div>
          )}

          {/* email */}
          <div className={styles.labelInput}>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value.trim())}
              name="Email"
              id="Email"
              required
            />
          </div>
          {errorMessageEmail && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessageEmail}
              </div>
            </div>
          )}

          {/* phone */}
          <div className={styles.labelInput}>
            <label htmlFor="Telefoon">Telefoon</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value.trim())}
              name="Telefoon"
              id="Telefoon"
              required
            />
          </div>
          {errorMessagePhone && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessagePhone}
              </div>
            </div>
          )}

          {/* shoot */}
          <div className={styles.labelInput}>
            <label htmlFor="Shoot">Shoot</label>
            <input
              type="text"
              onChange={(e) => setShoot(e.target.value.trim())}
              name="Shoot"
              id="Shoot"
              required
            />
          </div>
          {errorMessageShoot && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessageShoot}
              </div>
            </div>
          )}

          {/* location */}
          <div className={styles.labelInput}>
            <label htmlFor="Locatie">Locatie voorkeur</label>
            <input
              type="text"
              onChange={(e) => setLocation(e.target.value.trim())}
              name="Locatie"
              id="Locatie"
              required
            />
          </div>
          {errorMessageLocation && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessageLocation}
              </div>
            </div>
          )}

          {/* message */}
          <div className={styles.labelInput}>
            <label htmlFor="Bericht">Tell me more</label>
            <textarea
              onChange={(e) => setMessage(e.target.value.trim())}
              name="Bericht"
              id="Bericht"
              required
            />
          </div>
          {errorMessageMessage && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessageMessage}
              </div>
            </div>
          )}

          {/* error message */}
          {errorMessage && (
            <div className={styles.errorOuter}>
              <div className={styles.error}>
                <InfoOutlinedIcon />
                {errorMessage}
              </div>
            </div>
          )}

          {/* success message */}
          {successMessage && (
            <div className={styles.successOuter}>
              <div className={styles.success}>
                <InfoOutlinedIcon />
                {successMessage}
              </div>
            </div>
          )}

          {/* button */}
          <div className={styles.buttonOuter}>
            <button className={styles.button} onClick={handleForm}>
              verstuur!
            </button>
            {isLoading && (
              <div className={styles.spinnerOuter}>
                <CircularProgress />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
