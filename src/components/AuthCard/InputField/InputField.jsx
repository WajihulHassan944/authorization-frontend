
const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <div className="auth-input-wrapper">
       <input
        id={name}
        placeholder={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="auth-input"
      />
    </div>
  );
};

export default InputField;
