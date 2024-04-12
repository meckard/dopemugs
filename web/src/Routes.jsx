// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import DopemugLayout from './layouts/DopemugsLayout/DopemugsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DopemugLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={ScaffoldLayout} title="DopeMugs" titleTo="dopeMugs" buttonLabel="New DopeMug" buttonTo="newDopeMug">
          <Route path="/dope-mugs/new" page={DopeMugNewDopeMugPage} name="newDopeMug" />
          <Route path="/dope-mugs/{id:Int}/edit" page={DopeMugEditDopeMugPage} name="editDopeMug" />
          <Route path="/dope-mugs/{id:Int}" page={DopeMugDopeMugPage} name="dopeMug" />
          <Route path="/dope-mugs" page={DopeMugDopeMugsPage} name="dopeMugs" />
        </Set>
        <Route path="/mugs" page={MugsPage} name="mugs" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
