/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { Card, Field, Textarea, tokens } from "@fluentui/react-components";
import { PrimaryButton } from "@fluentui/react";
import { Dropdown, Option } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const usePitchmarkStyles = makeStyles({
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
    gap: "10px",
    marginBottom: "15px",
  },
  searchBarDiv: {
    margin: "15px 0px",
    display: "flex",
    columnGap: "15px",
  },
  searchLabel: {
    fontWeight: "bold",
  },
  searchBar: {
    flex: "1",
    padding: "6px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "100%",
  },
  insertBtnDiv: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px",
  },
  primaryButton: {
    backgroundColor: "#00B0F0",
    minWidth: "50px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor: "#0C4978",
      transform: "translateY(-2px)",
    },
  },
  dropdown: {
    height: "80px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
    selectors: {
      ".ms-Dropdown-title": {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
      ".ms-Dropdown-items": {
        overflow: "auto",
      },
    },
  },
  footer: {
    padding: "20px",
    backgroundColor: "gray",
    gap: "10px",
    height: "fit-content",
  },
  card: {
    width: "100%",
    height: "80px",
    border: "1px solid black",
    borderRadius: "5px",
  },
  base: {
    display: "flex",
    flexDirection: "column",
    rowGap: tokens.spacingVerticalMNudge,
  },
  flex: {
    gap: "4px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  labels: { gap: "6px" },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  taskCheckbox: {
    display: "flex",
    alignItems: "flex-start",
  },
  grid: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
  startDropdown: {
    minWidth: "30%",
    maxWidth: "100%",
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box",
    selectors: {
      ".ms-Dropdown-title": {
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
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

const Pitchmark = () => {
  const styles = usePitchmarkStyles();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json");
        const data = await response.json();
        setOptions(data); // assuming the data is an array of options
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#C1E5F5", display: "flex", justifyContent: "center" }}>
      <div className={styles.cardContainer}>
        <div className={styles.btnDropdown}>
          <Dropdown placeholder="dropdown" className={styles.startDropdown}>
            {options.map((option) => (
              <Option key={option} disabled={option === "Ferret"}>
                {option}
              </Option>
            ))}
          </Dropdown>
          <PrimaryButton className={styles.primaryButton}>Insert</PrimaryButton>
        </div>
        <div className={styles.btnDropdown}>
          <Dropdown
            aria-labelledby={`multi-3`}
            multiselect={true}
            placeholder="multiselect"
            className={styles.startDropdown}
          >
            {options.map((option) => (
              <Option key={option} disabled={option === "Ferret"}>
                {option}
              </Option>
            ))}
          </Dropdown>
          <PrimaryButton className={styles.primaryButton}>Insert</PrimaryButton>
        </div>
        <div className={styles.btnDropdown}>
          <Dropdown
            aria-labelledby={`multi-4`}
            multiselect={true}
            placeholder="multiselect"
            className={styles.startDropdown}
          >
            {options.map((option) => (
              <Option key={option} disabled={option === "Ferret"}>
                {option}
              </Option>
            ))}
          </Dropdown>
          <PrimaryButton className={styles.primaryButton}>Insert</PrimaryButton>
        </div>
        <div className={styles.searchBarDiv}>
          <label htmlFor="search" className={styles.searchLabel}>
            Search:
          </label>
          <input id="search" type="text" className={styles.searchBar} />
        </div>
        <Card className={styles.card} size="small" role="listitem">
          <p>Secret Project Briefing</p>
        </Card>
        <br />
        <div className={styles.base}>
          <Field size="large" label="Large Textarea">
            <Textarea />
          </Field>
        </div>
        <div className={styles.insertBtnDiv}>
          <PrimaryButton className={styles.primaryButton}>Insert</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Pitchmark;
