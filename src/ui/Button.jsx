function Button({ text = "Button", onClick = null }) {
  return (
    <div>
      <button
        className="w-max rounded-full bg-primary-900 px-2 py-1 text-xs text-primary-100 sm:px-4 sm:py-2"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
