import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
            Welcome to JobFinder, your one-stop solution for discovering exciting career opportunities! Our MERN-based (MongoDB, Express, React, and Node.js) job finding application is designed to streamline your job search and connect you with the perfect employment opportunities.

            As you land on our main page, you'll be greeted with an elegant and user-friendly interface that puts your career goals front and center. The page features a clean and intuitive design, making it effortless for you to navigate and find the job you've been dreaming of.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
