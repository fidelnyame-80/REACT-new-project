import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";
import Search  from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-10">
      <PatientForm />
      <Search />
      <PatientList />
      
    </div>
  );
}

export default App;
