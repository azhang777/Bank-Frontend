// eslint-disable-next-line react/prop-types
const Loading = ({ title }) => {
  return (
    <div>
      <h1 className='text-center py-5'>{title}</h1>
      <h1 className='text-center py-5'>loading...</h1>
    </div>
  );
};

export default Loading;
