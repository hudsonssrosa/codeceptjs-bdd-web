/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./tests/pages/home_page.js');
type resultsPage = typeof import('./tests/pages/results_page.js');
type profilePage = typeof import('./tests/pages/profile_page.js');
type SetupHelper = import('./tests/helpers/setup_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, resultsPage: resultsPage, profilePage: profilePage }
  interface Methods extends Playwright, SetupHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<SetupHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
