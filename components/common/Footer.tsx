const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="text-xs my-5 text-gray-500 w-full flex items-center justify-center">
      &copy; Proudly developed by Phinehas &#64; {getYear}
    </footer>
  );
};

export default Footer;
