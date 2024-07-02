const anchors = ["About", "Investors", "Shop policy"];

const MyFooter = () => (
  <footer className="bg-dark d-flex flex-column justify-content-center align-items-center py-5">
    {anchors.map(anchor => (
      <a key={anchor} href="#" className="btn btn-link text-light">
        {anchor}
      </a>
    ))}
  </footer>
);

export default MyFooter;
