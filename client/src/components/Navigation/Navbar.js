import { Link } from "react-router-dom";
import LoginBtn from "../Buttons/LoginBtn"
import LogoutBtn from "../Buttons/LogoutBtn";
import SignupBtn from "../Buttons/SignupBtn";

export default function NavTabs() {
  return (
    <>
      <ul>
        <li>
      <Link to='/profile'>
          My Profile</Link>
        
        </li>

        <li>
            <Link to='/Review'>
          Submit a Voyage</Link>
        </li>

        <li>
        <Link to='/'>
          Explore</Link>

        </li>

        <li>
        <LoginBtn/>
        </li>

        <li>
        <SignupBtn/>
        </li>
        
        <li>
          <LogoutBtn/>
        </li>
      </ul>
    </>
  );
}
