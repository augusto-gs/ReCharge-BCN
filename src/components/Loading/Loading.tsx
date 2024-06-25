import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled className="loading">
      <img
        src="/images/loading.svg"
        alt="Loading icon spinning"
        className="loading__icon"
        width="150"
        height="150"
      />
    </LoadingStyled>
  );
};

export default Loading;
