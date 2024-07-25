interface FetchPortletResult {
  registry: FetchPortletRegistry;
}

interface PortletRegistry {
  categories: array<FetchPortletCategory>;
  portlets: array<FetchPortlet>;
}

interface PortletCategory {
  description: string;
  id: string;
  name: string;
  portlets: array<FetchPortlet>;
  subcategories: array<FetchPortletCategory>;
}

interface Portlet {
  averageRating: number;
  description: string;
  favorite: boolean;
  fname: string;
  id: number;
  keywords: array<string>;
  name: string;
  parameters: {
    [parameter: string]: FetchPortletParameter;
  };
  ratingsCount: number;
  state: string;
  title: string;
  typeId: number;
  canAdd?: boolean;
  categories?: array<string>;
  layoutObject?: {
    parameters: {
      [parameter: string]: string | number | boolean;
    };
    [layoutObjectAttr: string]: string | number | boolean;
  };
}

interface FetchPortletParamater {
  description: string;
  name: string;
  value: string | number | boolean;
}

interface FetchLayout {
  user: string;
  authenticated: boolean;
  hostname: string;
  fragmentAdmin: boolean;
  locale: string;
  layout: {
    globals: {
      userLayoutRoot: string;
      hasFavorites: boolean;
      activeTabGroup: string;
      tabsInTabGroup: number;
      userImpersonation: boolean;
    };
    regions: [
      {
        name: string;
        title: string;
        folders: [string];
        content: [
          {
            _objectType: string;
            url: string;
            iconUrl: string;
            ID: string;
            chanID: number;
            description: string;
            fragment: number;
            precedence: number;
            fname: string;
            locale: string;
            name: string;
            timeout: number;
            title: string;
            typeID: number;
            windowState: string;
            portletMode: string;
            portletName: string;
            lifecycleState: string;
            frameworkPortlet: boolean;
            parameters: {
              [parameter: string]: string | number | boolean;
            };
          }
        ];
      }
    ];
    navigation: {
      allowAddTab: boolean;
      tabGroupsList: {
        activeTabGroup: string;
        tabGroups: [
          {
            name: string;
            firstTabId: string;
          }
        ];
        tabs: [TabContent];
      };
    };
    favorites: [LayoutContentGroup];
    favoriteGroups: [LayoutContentGroup];
  };
}

interface LayoutContentGroup {
  _objectType?: string;
  ID: string;
  addChildAllowed?: boolean;
  deleteAllowed: boolean;
  editAllowed?: boolean;
  fragment: number;
  moveAllowed?: boolean;
  precedence: number;
  hidden: boolean;
  immutable: boolean;
  locale: string;
  name: string;
  type: string;
  unremovable: boolean;
  externalId?: string;
  tabGroup: string;
  width: string;
  content: [LayoutContentGroup] | [LayoutContentItem];
}

interface LayoutContentItem {
  _objectType: string;
  url: string;
  iconUrl: string;
  ID: string;
  chanID: number;
  class?: string;
  description: string;
  deleteAllowed?: boolean;
  fragment?: number;
  moveAllowed?: boolean;
  precedence?: number;
  fname: string;
  locale: string;
  name: string;
  timeout: number;
  title: string;
  typeID: number;
  windowState: string;
  portletMode: string;
  portletName: string;
  lifecycleState: string;
  frameworkPortlet: boolean;
  webAppName: string;
  parameters: {
    hideFromDesktop?: boolean;
    blockImpersonation?: boolean;
    locale?: boolean;
    secure?: boolean;
    hideFromMobile?: boolean;
    highlight?: boolean;
    iconUrl: string;
    showChrome?: boolean;
    disablePortletEvents?: boolean;
    mobileIconUrl?: string;
    hasAbout?: boolean;
    editable?: boolean;
    alternate?: boolean;
    disableDynamicTitle?: boolean;
    printable?: boolean;
    configurable?: boolean;
    hasHelp?: boolean;
  };
}

interface OrganizationFetchResult {
  user: UserInfo | JWT | null;
  organizations: OrgInfo | null;
}

interface OrgInfo {
  [id: string]: Organization;
}
interface Organization {
  description: string;
  displayName: string;
  id: string;
  name: string;
  otherAttributes: {
    [attribute: string]: string | number | boolean;
  };
}

interface UserInfo {
  ESCOSIREN: [string];
  ESCOSIRENCourant: [string];
  aud: string;
  email: string;
  exp: number;
  family_name: string;
  gender: string;
  given_name: string;
  groups: [string];
  iat: number;
  iss: string;
  name: string;
  phone_number: string;
  sub: string;
  picture?: string;
}

interface LangRef {
  locales: string[];
  messages: {
    message: {
      [section: string]: {
        [translation: string]: string;
      };
    };
  };
}
