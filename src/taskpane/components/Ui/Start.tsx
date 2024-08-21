import * as React from "react";
import { Dropdown, useId, Option } from "@fluentui/react-components";
import { PrimaryButton } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";

const useStartStyles = makeStyles({
  cardContainer: {
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "90vw",
    width: "100%",
    margin: "auto",
    boxSizing: "border-box",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      padding: "15px",
      maxWidth: "100%",
    },
  },
  headingH3: {
    margin: "10px 0",
    fontSize: "18px",
    color: "#2C3E50",
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
    width: "100%",
  },
  primaryButton: {
    backgroundColor: "#00B0F0",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    textAlign: "center",
    width: "100%",
    maxWidth: "100%",
    minWidth: "0%",
    boxSizing: "border-box",
    "&:hover": {
      backgroundColor: "#0C4978",
      transform: "translateY(-2px)",
    },
    "@media (max-width: 600px)": {
      padding: "8px 16px",
    },
  },
  nextBtnDiv: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
    "@media (max-width: 600px)": {
      justifyContent: "center",
      marginTop: "10px",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    rowGap: "20px",
    marginBottom: "15px",
  },
  dropdown: {
    minWidth: "20%",
    maxWidth: "100%",
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box",
    selectors: {
      ".ms-Dropdown-title": {
        textAlign: "center",
      },
      ".ms-Dropdown-items": {
        textAlign: "center",
      },
    },
    "@media (max-width: 600px)": {
      fontSize: "14px",
    },
  },
});

export const Start = (props) => {
  const dropdownId = useId("dropdown-default");
  const options = [
    { key: "Cat", text: "Cat" },
    { key: "Dog", text: "Dog" },
    { key: "Ferret", text: "Ferret", disabled: true },
    { key: "Fish", text: "Fish" },
    { key: "Hamster", text: "Hamster" },
    { key: "Snake", text: "Snake" },
  ];
  const styles = useStartStyles();

  return (
    <div style={{ padding: "20px", backgroundColor: "#C1E5F5", display: "flex", justifyContent: "center" }}>
      <div className={styles.cardContainer}>
        <div className={styles.root}>
          <h3 className={styles.headingH3}>Select matter: </h3>
          <Dropdown aria-labelledby={dropdownId} placeholder="dropdown" className={styles.dropdown} {...props}>
            {options.map((option) => (
              <Option key={option.key} disabled={option.disabled}>
                {option.text}
              </Option>
            ))}
          </Dropdown>
        </div>
        <div className={styles.buttonContainer}>
          <PrimaryButton className={styles.primaryButton}>New Blank Document</PrimaryButton>
        </div>

        <h3 className={styles.headingH3}>New From Template:</h3>
        <div className={styles.root}>
          <Dropdown placeholder="language dropdown" className={styles.dropdown} {...props}>
            {options.map((option) => (
              <Option key={option.key} disabled={option.disabled}>
                {option.text}
              </Option>
            ))}
          </Dropdown>
        </div>

        <div className={styles.root}>
          <Dropdown placeholder="category dropdown" className={styles.dropdown} {...props}>
            {options.map((option) => (
              <Option key={option.key} disabled={option.disabled}>
                {option.text}
              </Option>
            ))}
          </Dropdown>
        </div>

        <div className={styles.root}>
          <Dropdown placeholder="type dropdown" className={styles.dropdown} {...props}>
            {options.map((option) => (
              <Option key={option.key} disabled={option.disabled}>
                {option.text}
              </Option>
            ))}
          </Dropdown>
        </div>

        <h3 className={styles.headingH3}>New Pitchmark Doc:</h3>
        <div className={styles.root}>
          <Dropdown aria-labelledby={`${dropdownId}-phid`} placeholder="PM ID" className={styles.dropdown} {...props}>
            {options.map((option) => (
              <Option key={option.key} disabled={option.disabled}>
                {option.text}
              </Option>
            ))}
          </Dropdown>
        </div>

        <div className={styles.nextBtnDiv}>
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Start;
