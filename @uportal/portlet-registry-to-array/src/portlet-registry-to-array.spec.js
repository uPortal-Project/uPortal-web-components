import { portletRegistryToArray } from './portlet-registry-to-array';

const sampleRegistry = {
  registry: {
    categories: [
      {
        name: 'All categories',
        description: 'All channel categories',
        id: 'local.1',
        portlets: [],
        subcategories: [
          {
            name: 'Academics',
            description: 'Academic Portlets',
            id: 'local.31',
            portlets: [
              {
                fname: 'courses',
                keywords: [],
                averageRating: 0,
                name: 'Courses',
                description: 'Course links and announcements.',
                ratingsCount: 0,
                typeId: 8,
                id: 52,
                state: 'PUBLISHED',
                title: 'Courses',
                parameters: {
                  mobileIconUrl: {
                    name: 'mobileIconUrl',
                    description: '',
                    value: '/uPortal/media/skins/icons/mobile/courses_alt.png'
                  },
                  iconUrl: {
                    name: 'iconUrl',
                    description: '',
                    value:
                      '/ResourceServingWebapp/rs/tango/0.8.90/32x32/apps/accessories-text-editor.png' // eslint-disable-line max-len
                  },
                  configurable: {
                    name: 'configurable',
                    description: '',
                    value: 'true'
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
};

const expectedOutput = [
  {
    fname: 'courses',
    keywords: [],
    averageRating: 0,
    name: 'Courses',
    description: 'Course links and announcements.',
    ratingsCount: 0,
    typeId: 8,
    id: 52,
    state: 'PUBLISHED',
    title: 'Courses',
    parameters: {
      mobileIconUrl: {
        name: 'mobileIconUrl',
        description: '',
        value: '/uPortal/media/skins/icons/mobile/courses_alt.png'
      },
      iconUrl: {
        name: 'iconUrl',
        description: '',
        value:
          '/ResourceServingWebapp/rs/tango/0.8.90/32x32/apps/accessories-text-editor.png' // eslint-disable-line max-len
      },
      configurable: {
        name: 'configurable',
        description: '',
        value: 'true'
      }
    }
  }
];

test('test nested category', () => {
  expect(portletRegistryToArray(sampleRegistry)).toEqual(expectedOutput);
});
