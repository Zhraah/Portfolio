export default function Icon({ src, alt = "", className = "" }) {
  return (
    <img
      className={`figma-icon ${className}`}
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : true}
    />
  );
}
