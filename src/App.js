import { El } from './library/El';
// import { home, onBoardingPageOne } from './screen';
// import { auth } from './screen/auth';
// import { onBoardingPageTwo } from './screen/onBoardingPage/pages/pageTwo';
// import { StartSlider } from './screen/onBoardingPage/pages/sliderPage';
// import { home } from './screen';
import { search } from './screen/searchPage';

// home().then((res) => {
//   document.getElementById('app').append(res);
// });
export const app = () => {
  return El({
    element: 'div',
    className: 'h-full',
    children: [search()],
  });
};
