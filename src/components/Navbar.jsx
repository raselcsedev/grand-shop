const navItems = [
  { id: 1, name: "Section1" },
  { id: 2, name: "Section2" },
  { id: 3, name: "Section3" },
  { id: 4, name: "2 Sub Divs" },
  { id: 5, name: "Section4" },
  { id: 6, name: "two liner 1" },
  { id: 7, name: "two liner 2" },
  { id: 8, name: "Section5" },
  { id: 9, name: "two liner 3" },
];
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo"></div>
      <div className="nav-items">
        {navItems.map((item) => (
          <div key={item.id} className="navbar-item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
