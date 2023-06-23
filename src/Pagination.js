const Pagination = (props) => {
  const { handleNext, handlePrevious, disablePrev, disableNext } = props;

  return (
    <>
      <input
        type="button"
        value="next"
        onClick={handleNext}
        disabled={disableNext()}
      />
      <input
        type="button"
        value="previous"
        onClick={handlePrevious}
        disabled={disablePrev()}
      />
    </>
  );
};

export default Pagination;
