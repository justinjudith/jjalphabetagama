import { NavigationLinks } from '@/Constants/Navigation';
import NavLink from './DrawerLink';
const NavLinks = () => {
  return (
    <div className="w-full h-full hidden lg:flex justify-center">
      {NavigationLinks.map(({ link, text, id }: any) => {
        return id % 2 == 0 ? (
          <NavLink
            link={`http://localhost:3000/${link}`}
            text={text}
            key={id}
            style="ml-4"
          />
        ) : (
          <NavLink link={link} text={text} key={id} />
        );
      })}
    </div>
  );
};

export default NavLinks;
