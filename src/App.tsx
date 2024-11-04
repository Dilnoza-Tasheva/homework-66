
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import NewMeal from './Containers/NewMeal/NewMeal.tsx';
import EditMeal from './Containers/EditMeal/EditMeal.tsx';
import Layout from './Components/Layout/Layout.tsx';


const App = () => (

  <>
    <Layout>
      <div className="row">
        <Routes>
          <Route path="/newMeal" element={<NewMeal/>}/>
          <Route path="/editMeal/:id" element={<EditMeal/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<h4>Not found</h4>}/>
        </Routes>
      </div>
    </Layout>
  </>
);

export default App;
