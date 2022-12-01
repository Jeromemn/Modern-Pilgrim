import { Link } from "react-router-dom";
import LoginBtn from "../Buttons/LoginBtn"
import LogoutBtn from "../Buttons/LogoutBtn";
import SignupBtn from "../Buttons/SignupBtn";

export default function NavTabs() {
  return (
    <>
      <ul>
        <li>
          {/* <Link to="/myProfile"> ${Auth.getProfile().data.username} </Link> */}
          My Profile
        </li>

        {/* // href='#My-profile' onClick={() => handlePageChange('MyProfile')} */}

        <li>
            <Link to='/Review'></Link>
         {/* href="#Submit" onClick={() => handlePageChange("MyProfile")}> */}
          Submit a Voyage
        </li>

        <li>
        <Link to='/'></Link>
        {/* // href="#Explore" onClick={() => handlePageChange("Explore")}> */}
          Explore
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
