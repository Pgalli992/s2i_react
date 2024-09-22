function Button({ text = "Button", onClick = null }) {
  return (
    <div>
      <button
        className="rounded-full bg-primary-900 px-4 py-2 text-primary-100"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
