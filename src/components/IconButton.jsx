import PropTypes from "prop-types";

export default function IconButton({ icon, href, target = "_self" }) {
  return (
    <a
      href={href}
      target={target.toString()}
      className="flex justify-between items-center p-2 bg-white bg-opacity-35 rounded-full hover:bg-opacity-45"
    >
      {icon}
    </a>
  );
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
};
