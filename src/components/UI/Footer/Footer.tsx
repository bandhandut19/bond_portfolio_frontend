const Footer = () => {
  return (
    <footer className="footer bg-[#493628] text-[#E4E0E1] items-center justify-center p-4">
      <aside className="grid-flow-col items-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by iBonDev
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
