import { Link } from "react-router-dom";

export default function Button({ title, to, isActive }) {
  return (
    <Link
      to={to}
      className={`flex items-center rounded border bg-surface-solid-50 text-text-darkGray gap-1 text-body-14 border-primary-main keen-slider__slide !w-fit min-w-fit justify-center whitespace-nowrap  px-4 py-1 transition-all duration-200 ${
        isActive
          ? "text-pink-700 border-pink-700"
          : "text-zinc-600 border-transparent"
      } `}
    >
      {title}
    </Link>
  );
}
