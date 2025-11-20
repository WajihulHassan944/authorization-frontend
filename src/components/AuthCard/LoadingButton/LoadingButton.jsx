
const LoadingButton = ({ onClick, loading, label }) => (
  <button className="auth-btn" onClick={onClick} disabled={loading}>
    {loading ? <span className="spinner"></span> : label}
  </button>
);

export default LoadingButton;
