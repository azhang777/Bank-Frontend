const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container-fluid p-4 mt-3 d-flex justify-content-center'>
        <div className='row-12 py-3'>
          <p className='fw-bold m-0 text-dark'>
            &copy; Copyright B.O.M <span id='currentYear'>{currentYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
