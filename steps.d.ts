/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./tests/pages/home_page.js');
type resultsPage = typeof import('./tests/pages/results_page');
type profilePage = typeof import('./tests/pages/profile_page');

declare namespace CodeceptJS {

  interface SupportObject { I: I, current: any, homePage: homePage, resultsPage: resultsPage, profilePage: profilePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  
  namespace Translation {
    interface Actions {}
  }
}
