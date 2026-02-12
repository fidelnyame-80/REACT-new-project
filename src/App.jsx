import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";


const App = () => {
  return (
    <div className="p-10">
     

      <div className="flex justify-center">
        <ContactList />
        <ContactForm />

      </div>
      <EditContact />

    </div>
  );
};

export default App;
