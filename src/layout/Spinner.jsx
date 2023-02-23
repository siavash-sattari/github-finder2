import spinner from '../assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='w-28 mt-20 mx-auto'>
      <img width={180} className='text-center mx-auto' src={spinner} alt='Loading...' />
    </div>
  );
};

export default Spinner;
