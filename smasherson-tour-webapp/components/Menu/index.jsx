import Link from "next/link";

// MenuItem is a component that returns a Link component
const MenuItem = ({ href, title }) => {
  return <Link href={href} title={title} children={title} />;
};

export default function Menu({ items = [] }) {
  return (
    <ul className="menu">
      {items.map((item, i) => (
        <li>
          <MenuItem key={i} title={item.title} href={item.href} />
        </li>
      ))}
    </ul>
  );
}
