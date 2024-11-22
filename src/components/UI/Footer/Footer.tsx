const Footer = () => {
  return (
    <footer className="footer bg-[#624E88] text-[#E6D9A2] items-center justify-center p-4">
      <aside className="grid-flow-col items-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by iBonDev
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
