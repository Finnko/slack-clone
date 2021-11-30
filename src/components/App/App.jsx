import React from 'react';
import constructPath from '@src/routes';

const appRoutes = [
  {
    path: constructPath.root(),
    element: <Dashboard />,
  },
  {
    path: constructPath.login(),
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]
//   function App() {
//   let element = useRoutes([
//     {
//       path: "/",
//       element: <Dashboard />,
//       children: [
//         {
//           path: "messages",
//           element: <DashboardMessages />
//         },
//         { path: "tasks", element: <DashboardTasks /> }
//       ]
//     },
//     { path: "team", element: <AboutPage /> }
//   ]);
//
//   return element;
// }

const App = () => {
  return (
    <div>1132</div>
  );
};

export default App;
