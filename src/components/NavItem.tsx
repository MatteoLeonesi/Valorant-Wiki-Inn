import { Link, To, useMatch, useResolvedPath } from 'react-router-dom';

/* // TODO: Instead of label prop, I would rather pass children.
  In case we want to pass an image or something.
  -jb
*/
interface NavItemProps {
  to: To;
  label: string;
}

const NavItem = (props: NavItemProps) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={props.to}
      className={`nav font-source font-semibold dark:font-medium text-md py-2 px-4 ${
        match ? 'text-indigo-500' : 'text-black dark:text-white'
      }`}>
      {props.label}
    </Link>
  );
};

export default NavItem;
