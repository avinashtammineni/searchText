const SearchTable = (props) => {
  const { searchText, setSearchText, handleSearch } = props;
  const onTextChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={searchText}
        placeholder="Search"
        onChange={onTextChange}
      />
      <input type="button" value="Search" onClick={handleSearch} />
    </>
  );
};

export default SearchTable;
