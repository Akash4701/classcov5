
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Teacher from './Teacher'
import Dashboard from './scenes/dashboard';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Attendence from './scenes/Attendence';
import Form from './scenes/form';
import Calendar from './scenes/calendar/';
import Component from "./upload"
import Student from "./Student"


function App() {
  const [theme, colorMode] = useMode();

  return (
    <Router>
      <Routes>
      <Route path="/Teach" element={<Teacher/>} />
        <Route path="/" element={<Component/>}/>
        <Route path="/Stud" element={<Student/>} />

        </Routes>
     
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
             
                <Route path="/Dash" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/attendence" element={<Attendence />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      
    </Router>
  );
}

export default App;
