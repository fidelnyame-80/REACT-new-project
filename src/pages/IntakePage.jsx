import { Link } from "react-router-dom";
import PatientForm from "../components/PatientForm";

const IntakePage = () => (
  <section className="space-y-6">
    <div className="dashboard-panel animate-fade-in-up p-6">
      <h3 className="text-lg font-semibold text-white">Patient Intake</h3>
      <p className="mt-2 text-sm text-slate-400">
        Save a new patient profile, then review it in the records page.
      </p>
      <div className="mt-4">
        <Link
          to="/records"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          Go to Patient Records
        </Link>
      </div>
    </div>

    <div className="max-w-2xl">
      <PatientForm />
    </div>
  </section>
);

export default IntakePage;
