import { Link } from 'react-router-dom';

export default function NavTabs() {
  return (
    <>
      <ul>
        <li href='#My-profile' onClick={() => handlePageChange('MyProfile')}>My Profile</li>

        <li href='#Submit' onClick={() => handlePageChange('MyProfile')}>Submit a Voyage</li>

        <li href='#Explore' onClick={() => handlePageChange('Explore')} >Explore</li>

        <li href='#Login' onClick={() => handlePageChange('Login')}>Sign in</li>

        <li href='#Join' onClick={() => handlePageChange('Join')}>Sign up</li>
      </ul>
    </>
  );
}
