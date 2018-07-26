import React, { Component } from 'react';
import styled from 'styled-components';
import oidc from '@uportal/open-id-connect';
import get from 'lodash/get';
import PropTypes from 'prop-types';

// --------  fancy styling magic ------- //
const WaffleMenuContainer = styled.div`
  text-align: right;
  position: relative;
  line-height: 0;
  padding: 0;
  margin: 0;
`;

const WaffleTrigger = styled.button`
  width: 25px;
  height: 25px;
  line-height: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0 none;
  svg {
    padding: 0;
    margin: 0;
  }
`;

const WaffleDropdown = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  display: flex;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  width: 220px;
  flex-flow: row wrap;
  background-color: #e0e0e0;
  box-shadow: 2px 2px 5px #999;
`;

const MIListItem = styled.li`
  display: block;
  flex: 1 0 40%;
  margin: 0;
  line-height: 1rem;
  &:hover {
    background: white;
  }
  a {
    display: block;
    padding: 5px;
    margin: 0;
    position: relative;
    text-decoration: none;
    img {
      width: 60%;
      margin: 0 auto;
      display: block;
    }
    span {
      bottom: 0;
      display: block;
      color: #333;
      text-align: center;
      font-size: 80%;
      padding: 3px 0;
    }
  }
`;

const WaffleDropdownFooter = styled.li`
  display: block;
  flex: 1 0 100%;
  line-height: 1rem;
  margin-top: 4px;
  a {
    display: block;
    font-size: 80%;
    font-weight: 400;
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #333;
    &:hover {
      background: white;
    }
  }
`;

// --------  done with fancy styling magic ------- //

// menu item stateless component
const MenuItem = (props) => {
  let { link, image, label } = props;
  return (
    <MIListItem>
      <a href={link} background={image}>
        <img src={image} alt="" />
        <span>{label}</span>
      </a>
    </MIListItem>
  );
};

class WaffleMenu extends Component {
  static propTypes = {
    url: PropTypes.string,
    category: PropTypes.string.isRequired,
    oidcUrl: PropTypes.string,
  };

  static defaultProps = {
    url: '/uPortal/api/v4-3/dlm/portletRegistry.json',
    oidcUrl: '/uPortal/api/v5-1/userinfo',
  };

  // Default component state
  state = {
    menuOpen: false,
    data: [],
    buttonColor: '#fff',
    dataLoaded: false,
  };

  handleOidcError = (err) => {
    console.error(err);
    this.setState({
      hasError: true,
      errorMessage: 'There was a problem authorizing this request.',
    });
  };

  handleWflError = (err) => {
    let message;
    message = 'There was a problem cooking your waffle.';
    this.setState({ hasError: true, errorMessage: message });
  };

  getToken = async () => {
    const { oidcUrl } = this.props;

    try {
      return await oidc({ userInfoApiUrl: oidcUrl, timeout: 18000 });
    } catch (err) {
      console.error(err);
      this.handleOidcError(err);
    }
  };

  wafflePress = (payload) => {
    console.log(payload);
    let menuItems = get(payload, 'registry.categories.0.portlets').map((p) => {
      return {
        link: p.alternativeMaximizedLink || '/uPortal/p/' + p.fname,
        image: 'http://localhost:8080' + p.parameters.iconUrl.value,
        label: p.title,
        type: 'box',
      };
    });
    console.log(menuItems);
    this.setState({
      data: menuItems,
      dataLoaded: true,
    });
  };

  fetchMenuData = async () => {
    const { url, category } = this.props;

    try {
      const response = await fetch(url + '?categoryId=' + category, {
        credentials: 'same-origin',
        headers: {
          // Authorization: "Bearer " + (await this.getToken()).encoded,
          // Authorization: "Bearer fT2-SkVvqqvso46g5tVU5eGX5OvM5PDY2uaD72nV",
          'content-type': 'application/jwt',
        },
      });
      if (!response.ok) {
        if (response.status !== 404) {
          throw new Error(response.statusText);
        } else {
          return;
        }
      }
      const payload = await response.json();
      this.wafflePress(payload);
    } catch (err) {
      console.error(err);
      // this.handleFbmsError(err);
    }
  };

  // toggle the menu
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  // close the menu if we're clicking outside the menu or trigger
  handleOutsideClick = (event) => {
    if (
      this.menuRef &&
      !this.menuRef.contains(event.target) &&
      this.buttonRef &&
      !this.buttonRef.contains(event.target)
    ) {
      this.setState({ menuOpen: false });
    }
  };

  // Show it to us
  render() {
    let { buttonColor, menuOpen, data, dataLoaded } = this.state;

    return (
      dataLoaded && (
        <WaffleMenuContainer>
          <WaffleTrigger
            innerRef={(node) => (this.buttonRef = node)}
            onClick={() => this.toggleMenu()}
          >
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill={buttonColor}
                d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
              />
            </svg>
          </WaffleTrigger>
          <WaffleDropdown
            innerRef={(node) => (this.menuRef = node)}
            style={{
              display: menuOpen ? 'flex' : 'none',
            }}
          >
            {data.map(
              (datum, index) =>
                datum.type === 'box' && <MenuItem key={index} {...datum} />
            )}

            {data.map(
              (datum, index) =>
                datum.type === 'footer' && (
                  <WaffleDropdownFooter key={index}>
                    <a href={datum.link}>{datum.label}</a>
                  </WaffleDropdownFooter>
                )
            )}
          </WaffleDropdown>
        </WaffleMenuContainer>
      )
    );
  }

  // The component mounted. Work the magic.
  componentDidMount() {
    // grab the props passed to the component, parse the JSON
    const { buttoncolor } = this.props;

    this.fetchMenuData();

    this.setState({ buttonColor: buttoncolor });

    // listen for outside clicks to close the dropdown
    window.addEventListener('click', this.handleOutsideClick);
  }
}

export default WaffleMenu;
