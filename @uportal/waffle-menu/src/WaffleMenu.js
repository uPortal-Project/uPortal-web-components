import React, { Component } from 'react';
import styled from 'styled-components';
import oidc from '@uportal/open-id-connect';
import { portletRegistryToArray } from '@uportal/portlet-registry-to-array';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

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
  top: 150%;
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
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 220px;
  flex-flow: row wrap;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const MIListItem = styled.li`
  display: block;
  flex: 0 0 46%;
  margin: 0 2%;
  line-height: 1rem;
  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
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

const WaffleTriangleBack = styled.div`
  border-color: transparent transparent #fff transparent;
  border-style: dashed dashed solid;
  border-width: 0 8.5px 8.5px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  width: 0;
  height: 0;
  position: absolute;
  top: 31px;
  right: 20px;
  z-index: 2000;
`;

const WaffleTriangle = styled.div`
  border-color: transparent transparent #fff transparent;
  border-style: dashed dashed solid;
  border-width: 0 8.5px 8.5px;
  width: 0;
  height: 0;
  position: absolute;
  top: 32px;
  right: 20px;
  z-index: 2000;
`;

// --------  done with fancy styling magic ------- //

// menu item stateless component
const MenuItem = props => {
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
    debug: PropTypes.bool,
    buttonColor: PropTypes.string,
    defaultIcon: PropTypes.string,
    truncateLength: PropTypes.string
  };

  static defaultProps = {
    url: '/uPortal/api/v4-3/dlm/portletRegistry.json',
    oidcUrl: '/uPortal/api/v5-1/userinfo',
    buttonColor: '#fff',
    debug: false,
    // prettier-ignore
    // eslint-disable-next-line max-len
    defaultIcon: '/ResourceServingWebapp/rs/tango/0.8.90/32x32/categories/applications-other.png',
    truncateLength: 50
  };

  // Default component state
  state = {
    menuOpen: false,
    data: [],
    dataLoaded: false
  };

  handleOidcError = err => {
    console.error(err);
    this.setState({
      hasError: true,
      errorMessage: 'There was a problem authorizing this request.'
    });
  };

  handleWflError = err => {
    const message = 'There was a problem cooking your waffle.';
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

  truncateTitle = title => {
    const truncate = parseInt(this.props.truncateLength, 10);
    return title.substring(0, truncate + 1) + '...';
  };

  wafflePress = registry => {
    const { defaultIcon } = this.props;
    const menuItems = portletRegistryToArray(registry).map(
      ({ alternativeMaximizedLink, fname, parameters, title }) => {
        let imgUrl = get(parameters, 'iconUrl.value') || defaultIcon;
        return {
          link: alternativeMaximizedLink || '/uPortal/p/' + fname,
          image: imgUrl
            ? process.env.NODE_ENV === 'development'
              ? 'proxy/' + imgUrl
              : imgUrl
            : undefined,
          label: this.truncateTitle(title),
          type: 'box'
        };
      }
    );
    this.setState({
      data: menuItems,
      dataLoaded: true
    });
  };

  fetchMenuData = async () => {
    const { url, debug } = this.props;

    const token = debug ? null : (await this.getToken()).encoded;

    try {
      const response = await fetch(url, {
        credentials: 'same-origin',
        headers: {
          Authorization: 'Bearer ' + token,
          'content-type': 'application/jwt'
        }
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
    }
  };

  // toggle the menu
  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  // close the menu if we're clicking outside the menu or trigger
  handleOutsideClick = event => {
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
    const { menuOpen, data, dataLoaded } = this.state;
    const { buttonColor } = this.props;

    return (
      dataLoaded && (
        <WaffleMenuContainer>
          <WaffleTrigger
            innerRef={node => (this.buttonRef = node)}
            onClick={() => this.toggleMenu()}
          >
            <FontAwesomeIcon icon={faTh} color={buttonColor} size="2x" />
            {menuOpen && (
              <div>
                <WaffleTriangleBack />
                <WaffleTriangle />
              </div>
            )}
          </WaffleTrigger>
          <WaffleDropdown
            innerRef={node => (this.menuRef = node)}
            style={{
              display: menuOpen ? 'flex' : 'none'
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
    this.fetchMenuData();

    // listen for outside clicks to close the dropdown
    window.addEventListener('click', this.handleOutsideClick);
  }
}

export default WaffleMenu;
