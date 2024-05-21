import PropTypes from "prop-types";

export default function Button({
  label,
  icon,
  href,
  target = "_self",
  className,
}) {
  Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    href: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
  };

  return (
    <a
      href={href}
      target={target.toString()}
      className={`px-2 md:px-10 py-3 relative w-full text-sm md:text-base shadow-lg text-balance font-medium justify-center text-center flex items-center text-black bg-white rounded-lg hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-slate-300 ${className}`}
    >
      {icon && <div className="absolute left-2">{icon}</div>}
      <div>{label}</div>
    </a>
  );
}
