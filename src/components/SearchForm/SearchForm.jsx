import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter trip details"
        aria-label="Search topics"
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
