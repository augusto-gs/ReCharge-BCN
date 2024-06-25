const Loading = (): React.ReactElement => {
  return (
    <div className="loading">
      <img
        src="/images/loading.svg"
        alt="Loading icon spinning"
        className="loading__icon"
        width="150"
        height="150"
      />
    </div>
  );
};

export default Loading;
