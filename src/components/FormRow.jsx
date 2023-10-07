import PropTypes from 'prop-types';
const FormRow = ({ label, type, name, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={value || ''}
        className="form-input"
        required
      />
    </div>
  );
};

FormRow.propTypes = {
  label: PropTypes.string.isRequired, // Add this line for validation
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormRow;
