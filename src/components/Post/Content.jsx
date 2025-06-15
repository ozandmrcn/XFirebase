const Content = ({ data }) => {
  return (
    <div className="my-2">
      {data.text && <p>{data.text}</p>}

      {data.image && (
        <img
          src={data.image}
          className="rounded-xl my-2 max-w-100 max-lg:max-w-50"
        />
      )}
    </div>
  );
};

export default Content;
