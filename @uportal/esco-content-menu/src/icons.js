import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faExchangeAlt,
  faSignOutAlt,
  faStar as faStarSolid,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

if (process.env.NODE_ENV === 'development') {
  console.log(
      faChevronLeft,
      faChevronRight,
      faExchangeAlt,
      faSignOutAlt,
      faStarRegular,
      faStarSolid,
      faTimes,
      faUser
  );
}

library.add(
    faChevronLeft,
    faChevronRight,
    faExchangeAlt,
    faSignOutAlt,
    faStarRegular,
    faStarSolid,
    faTimes,
    faUser
);
