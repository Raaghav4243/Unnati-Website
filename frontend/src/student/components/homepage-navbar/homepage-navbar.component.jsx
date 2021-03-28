import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  // selectCurrentUser,
  // selectCurrentUserId,
  selectIsUserSignedIn,
} from '../../redux/user/user.selectors';

import GoToDashboardButton from '../go-to-dashboard-button-link/go-to-dashboard-button-link.component';
import SignInButton from '../sign-in-button-link/sign-in-button-link.component';
// import { ImBook } from 'react-icons/im';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as UnnatiLogo } from '../../icons/UnnatiTree.svg';
import './homepage-navbar.css';

import {
  Nav,
  NavbarContainer,
  NavbarMiddle,
  NavLogo,
  NavName,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavbarRight,
  // NavBtnLink,
} from './homepage-navbar.styles';

class HomePageNavbar extends React.Component {
  constructor() {
    super();

    this.state = {
      scrollPos: 0,
      changedColor: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      changedColor: document.body.getBoundingClientRect().top < -20,
    });
  };
  render() {
    const { isUserSignedIn, toggle } = this.props;
    const { changedColor } = this.state;
    return (
      <>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavbarMiddle>
              <NavLogo
                to='home'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-120}
              >
                <UnnatiLogo style={{ height: '60px' }} />
                <NavName>UNNATI</NavName>
              </NavLogo>
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to='home'
                    className='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-120}
                  >
                    Home
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={10}
                  >
                    About Us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='courses'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={0}
                  >
                    Courses
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='testimonials'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={0}
                  >
                    Student Stories
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='footer'
                    className='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-120}
                  >
                    Contact Us
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </NavbarMiddle>
            <NavbarRight>
              {isUserSignedIn ? (
                <GoToDashboardButton
                  scrollClass={this.state.changedColor ? true : false}
                />
              ) : (
                <SignInButton
                  scrollClass={this.state.changedColor ? true : false}
                />
              )}
            </NavbarRight>
          </NavbarContainer>
        </Nav>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isUserSignedIn: selectIsUserSignedIn,
});

export default connect(mapStateToProps)(HomePageNavbar);
