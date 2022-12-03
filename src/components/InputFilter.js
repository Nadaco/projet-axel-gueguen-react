const InputFilter = (props) => {
  return (
    <input
      type="text"
      placeholder="Tapez le nom d'un aliment (en anglais)"
      onChange={(e) => {
        props.setFilter(e.target.value);
      }}
      style={{
        width: "20em",
        border: "2px solid grey",
        borderRadius: "20px",
        padding: "1em",
      }}
    ></input>
  );
};

export default InputFilter;
