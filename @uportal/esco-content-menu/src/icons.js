import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
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
