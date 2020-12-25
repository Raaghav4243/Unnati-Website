//libraries used
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

//redux used
import { toggleSidenavHidden } from '../../redux/homepage/homepage.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//components used
import SignInButton from '../sign-in-button-link/sign-in-button-link.component';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as UnnatiLogo } from '../../icons/UnnatiTree.svg';
import GoToDashboardButton from '../go-to-dashboard-button-link/go-to-dashboard-button-link.component';
import {
  Transition,
  Nav,
  NavbarContainer,
  MobileIcon,
  NavbarMiddle,
  NavLogo,
  LogoWrapper,
  NavTitle,
  NavMenu,
  NavItem,
  NavLink,
  NavbarRight,
} from './homepage-navbar.styles';

//styles used

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
    // const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      changedColor: document.body.getBoundingClientRect().top < -20,
    });
  };
  render() {
    const { user } = this.props;

    return (
      <>
        <Transition>
          <Nav className={this.state.changedColor ? 'scroll' : null}>
            <NavbarContainer>
              <MobileIcon onClick={toggleSidenavHidden}>
                <FaBars />
              </MobileIcon>
              <NavbarMiddle>
                <NavLogo>
                  <LogoWrapper>
                    <UnnatiLogo style={{ height: '100%' }} />
                  </LogoWrapper>
                  <NavTitle>UNNATI</NavTitle>
                </NavLogo>
                <NavMenu>
                  <NavItem>
                    <NavLink>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Courses</NavLink>
                  </NavItem>
                </NavMenu>
              </NavbarMiddle>
              <NavbarRight>
                {user ? <GoToDashboardButton /> : <SignInButton />}
              </NavbarRight>
            </NavbarContainer>
          </Nav>
        </Transition>
        {/* <UnnatiLogo /> */}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(HomePageNavbar);
