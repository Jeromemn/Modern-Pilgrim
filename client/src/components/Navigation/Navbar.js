import { Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <>
      <ul>
        <li>
          <Link to="/myProfile"> ${Auth.getProfile().data.username} </Link>
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
            <Link to='/login'></Link>
        {/* // href="#Login" onClick={() => handlePageChange("Login")}> */}
          Sign in
        </li>

        <li>
            <Link to='/signup'></Link>
        
        {/* href="#Join" onClick={() => handlePageChange("Join")}> */}
          Sign up
        </li>
      </ul>
    </>
  );
}
