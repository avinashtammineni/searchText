const PaginationWithNumbers = (props) => {
  const { posts, setPage } = props;
  const handleClick = (event) => {
    setPage(event.target.value);
  };
  const buttons = [];
  const totalPages = Math.ceil(posts.length / 10);
  for (let i = 0; i < totalPages; i++) {
    const button = <input type="button" value={i} onClick={handleClick} />;
    buttons.push(button);
  }
  return <> {buttons}</>;
};

export default PaginationWithNumbers;
