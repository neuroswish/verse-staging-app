import { useState } from "react"; // State management
import { ReactElement } from "react";
import TextAreaAutosize from 'react-textarea-autosize'
import styles from "../styles/components/Inputs.module.scss"; // Component styles


/**
 * Input field
 * @param {string} title input field label
 * @param {string} placeholder input field placeholder
 * @param {string} value input value
 * @param {function} onChangeHandler function to handle updates to value
 * @param {string[]} wordList to select from for randomization
 * @returns {ReactElement}
 */
export function MarketNameInput({
  title,
  placeholder,
  value,
  onChangeHandler,
}: {
  title: string;
  placeholder: string;
  value: string;
  onChangeHandler: Function;
}): ReactElement {
  return (
    <div className={`${styles.input__general} ${styles.input__text} ${styles.input__textarea}`}>
      <label htmlFor={title}>{title}</label>
      <TextAreaAutosize
        id={title}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
        minRows={1}
        maxRows={4}
      />
    </div>
  );
}

export function MarketSymbolInput({
  title,
  placeholder,
  value,
  onChangeHandler,
}: {
  title: string;
  placeholder: string;
  value: string;
  onChangeHandler: Function;
}): ReactElement {
  return (
    <div>
      {/* Title label */}
      <h4 className="text-2xl">{title}</h4>
      {/* Input field */}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}

/**
 * Input field for Ether value input
 * @param {string} title input field label
 * @param {string} placeholder input field placeholder
 * @param {number} value input field value
 * @param {Function} onChangeHandler parent state update for value
 * @returns {ReactElement}
 */
export function TokenInput({
  title,
  placeholder,
  value,
  onChangeHandler
}: {
  title: string;
  placeholder: string;
  value: number;
  onChangeHandler: Function;
}): ReactElement {
  return (
    <div>
      {/* Input title */}
      <div>
        {/* Input label */}
        <h4>{title}</h4>
      </div>

      {/* Input field */}
      <div >
        <input
          type="number"
          min="0"
          step="0.01"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e.target.value)}
        />

        {/* Absolute-positioned ETH suffix */}
        <div>
          <span>Tokens</span>
        </div>
      </div>
    </div>
  );
}
