/* eslint-disable no-undef */
import React from "react";
import { DatePicker, mergeStyleSets, PrimaryButton } from "@fluentui/react";

const styles = mergeStyleSets({
  cardContainer: {
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
    margin: "auto",
    boxSizing: "border-box",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      padding: "15px",
      maxWidth: "100%",
    },
  },
  btnDropdown: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap", // Allow wrapping on smaller screens
  },
  headingH3: {
    margin: "5px 0px",
  },
  control: {
    flex: "1",
    padding: "6px",
    width: "100%",
  },
  input: {
    flex: "1",
    padding: "6px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "100%",
  },
  allOtherDivs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: "10px",
    marginBottom: "10px",
    flexWrap: "wrap", // Allow wrapping if necessary
  },
  primaryButton: {
    backgroundColor: "#00B0F0",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor: "#0C4978",
      transform: "translateY(-2px)",
    },
  },
});

function Variable() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#b6def2", display: "flex", justifyContent: "center" }}>
      <div className={styles.cardContainer}>
        <h3 className={styles.headingH3}>Examples:</h3>

        <p>Date:</p>
        <div className={styles.allOtherDivs}>
          <DatePicker className={styles.control} placeholder="Select a date..." />
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>

        <p>Counterparty name:</p>
        <div className={styles.allOtherDivs}>
          <input className={styles.input} type="text" />
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>

        <p>Counterparty address:</p>
        <div className={styles.allOtherDivs}>
          <input className={styles.input} type="text" />
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>
        <p>Contract start date:</p>
        <div className={styles.allOtherDivs}>
          <DatePicker className={styles.control} placeholder="Select a date..." />
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>

        <p>Contract end date:</p>
        <div className={styles.allOtherDivs}>
          <DatePicker className={styles.control} placeholder="Select a date..." />
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>

        <p>Currency:</p>
        <div className={styles.allOtherDivs}>
          <input className={styles.input} type="text" />
          <PrimaryButton className={styles.primaryButton}>Next</PrimaryButton>
        </div>
        {/* Add more static examples as needed */}
      </div>
    </div>
  );
}

export default Variable;
