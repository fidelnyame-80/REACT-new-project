import { Link } from "react-router-dom";
import usePatientStore from "../store/usePatientStore";

const formatAge = (age) => {
  if (age === null || age === undefined || age === "") return "N/A";
  return `${Number(age)} yrs`;
};

const MetricIcon = ({ type }) => {
  if (type === "patients") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16 20a4 4 0 0 1 4-4h1a1 1 0 0 1 1 1v3h-6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3 20a6 6 0 0 1 12 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M7 3v4M17 3v4M3.5 10h17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="7.5" y="13" width="3" height="3" rx="0.7" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 9v4m0 4h.01M4.6 17.4 10.8 5a1.3 1.3 0 0 1 2.4 0l6.2 12.4A1.3 1.3 0 0 1 18.2 19H5.8a1.3 1.3 0 0 1-1.2-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DashboardPage = () => {
  const patients = usePatientStore((state) => state.patients);

  const withRecordedVisit = patients.filter((item) => item.lastVisit).length;
  const withoutVisit = patients.length - withRecordedVisit;
  const recentPatients = [...patients].slice(-4).reverse();

  const metrics = [
    {
      title: "Total Profiles",
      value: patients.length,
      details: "All patients in registry",
      icon: "patients",
      primary: true,
    },
    {
      title: "Visit Logged",
      value: withRecordedVisit,
      details: "Patients with last-visit data",
      icon: "calendar",
    },
    {
      title: "Missing Visit",
      value: withoutVisit,
      details: "Profiles without visit record",
      icon: "alert",
    },
  ];

  return (
    <section className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <article
            key={metric.title}
            className={`dashboard-panel metric-card animate-fade-in-up p-4 sm:p-5 ${
              metric.primary ? "metric-card-primary" : ""
            }`}
            style={{ animationDelay: `${80 + index * 70}ms` }}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                {metric.title}
              </p>
              <span className="metric-icon">
                <MetricIcon type={metric.icon} />
              </span>
            </div>

            <p
              className={`font-semibold leading-none ${
                metric.primary
                  ? "text-5xl text-white sm:text-6xl"
                  : "text-4xl text-cyan-200 sm:text-5xl"
              }`}
            >
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-slate-400">{metric.details}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.9fr]">
        <section className="dashboard-panel animate-fade-in-up p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">Recent Entries</h3>
            <Link to="/records" className="btn-tertiary">
              Open Records
            </Link>
          </div>

          {recentPatients.length === 0 ? (
            <p className="text-sm text-slate-400">
              No records yet. Start by adding your first patient.
            </p>
          ) : (
            <ul className="divide-y divide-white/10">
              {recentPatients.map((patient) => (
                <li key={patient.id} className="py-3 first:pt-0 last:pb-0">
                  <p className="text-base font-semibold text-white">{patient.name}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    <span className="detail-label">ID</span>{" "}
                    <span className="detail-value">{patient.patientId}</span>
                    <span className="mx-2 text-slate-500">|</span>
                    <span className="detail-label">Age</span>{" "}
                    <span className="detail-value">{formatAge(patient.age)}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section
          className="dashboard-panel animate-fade-in-up p-5"
          style={{ animationDelay: "120ms" }}
        >
          <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
          <p className="mt-1.5 text-sm text-slate-400">
            Move between intake and records using clear action priorities.
          </p>

          <div className="mt-4 grid gap-2.5">
            <Link to="/intake" className="btn-primary justify-between">
              <span>Add New Patient</span>
              <span aria-hidden="true">+</span>
            </Link>
            <Link to="/records" className="btn-secondary justify-between">
              <span>Search Patient Records</span>
              <span aria-hidden="true">&gt;</span>
            </Link>
            <Link to="/records" className="btn-tertiary">
              Review Full Register
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DashboardPage;
