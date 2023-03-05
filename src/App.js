import './App.css';
import MethodSelection from "./UIComponents/MethodSelection.js";
import ClassSelection from "./UIComponents/ClassSelection.js";
import ClassSelectionColumn from "./UIComponents/ClassSelectionColumn.js";
import CreateView from './UIComponents/CreateView';
import ReadView from "./UIComponents/ReadView.js";
import DeleteView from "./UIComponents/DeleteView.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateView from './UIComponents/UpdateView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Lab 0 - Ingesoft II
        </p>
      </header>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<>
              <ClassSelection/>
            </>}/>
            {/*----------------------------------------------Vistas Create-------------------------------------------------------------*/}
            <Route path="/create/persona" element={<>
              <MethodSelection  type="persona"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <CreateView classType="persona"/>
              </div>
            </>}/>
            
            <Route path="/create/vivienda" element={<>
              <MethodSelection  type="vivienda"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <CreateView classType="vivienda"/>
              </div>
            </>}/>
            
            <Route path="/create/municipio" element={<>
              <MethodSelection  type="municipio"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <CreateView classType="municipio"/>
              </div>
            </>}/>
            {/*------------------------------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------Vistas Read---------------------------------------------------------------*/}
            <Route path="/read/persona" element={<>
              <MethodSelection type="persona"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <ReadView classType="persona"/>
              </div>
            </>}/>
            
            <Route path="/read/vivienda" element={<>
              <MethodSelection type="vivienda"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <ReadView classType="vivienda"/>
              </div>
            </>}/>
            
            <Route path="/read/municipio" element={<>
              <MethodSelection type="municipio"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <ReadView classType="municipio"/>
              </div>
            </>}/>
            {/*------------------------------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------Vistas Update-------------------------------------------------------------*/}
            <Route path="/update/persona" element={<>
              <MethodSelection  type="persona"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <UpdateView classType="persona"/>
              </div>
            </>}/>
            
            <Route path="/update/vivienda" element={<>
              <MethodSelection type="vivienda"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <UpdateView classType="vivienda"/>
              </div>
            </>}/>
            
            <Route path="/update/municipio" element={<>
              <MethodSelection type="municipio"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <UpdateView classType="municipio"/>
              </div>
            </>}/>
            {/*------------------------------------------------------------------------------------------------------------------------*/}
            {/*----------------------------------------------Vistas Delete-------------------------------------------------------------*/}
            <Route path="/delete/persona" element={<>
              <MethodSelection  type="persona"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <DeleteView/>
              </div>
            </>}/>

            <Route path="/delete/vivienda" element={<>
              <MethodSelection type="vivienda"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <DeleteView/>
              </div>
            </>}/>
            
            <Route path="/delete/municipio" element={<>
              <MethodSelection type="municipio"/>
              <div className='App-view'>
                <ClassSelectionColumn/>
                <DeleteView/>
              </div>
            </>}/>
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;