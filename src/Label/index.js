const Label = ({ title, extraLabelContent }) => (
  <label className="form__label form__flex">
    {title}
    <br/>
    {extraLabelContent}
  </label>
);

export { Label };
