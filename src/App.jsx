import { useEffect, useMemo, useState } from "react";
import {
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./services/firebase";
import usePatientStore from "./store/usePatientStore";
import filterPatients from "./utils/filterPatients";
import DashboardPage from "./pages/DashboardPage";
import IntakePage from "./pages/IntakePage";
import RecordsPage from "./pages/RecordsPage";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Patient Intake", path: "/intake" },
  { label: "Patient Records", path: "/records" },
];

const pageMeta = {
  "/dashboard": {
    eyebrow: "Clinical Workspace",
    title: "Premium Patient Management",
    description:
      "Track metrics and jump directly into intake or records.",
  },
  "/intake": {
    eyebrow: "Patient Intake",
    title: "Create New Patient Profile",
    description:
      "Capture details securely and publish records to the live register.",
  },
  "/records": {
    eyebrow: "Patient Records",
    title: "Search and Manage Records",
    description:
      "Filter by profile details and manage existing entries in one view.",
  },
};

const THEME_STORAGE_KEY = "patient-records-theme";

const getPreferredTheme = () => {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const AppShell = () => {
  const [theme, setTheme] = useState(getPreferredTheme);
  const location = useLocation();
  const {
    patients,
    loading,
    error,
    searchQuery,
    ageFilter,
    idFilter,
    lastVisitFilter,
    filtersApplied,
    setPatients,
    setLoading,
    setError,
  } = usePatientStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = onSnapshot(
      collection(db, "patients"),
      (snapshot) => {
        const patientDocs = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setPatients(patientDocs);
        setError(null);
        setLoading(false);
      },
      (snapshotError) => {
        console.error("Error fetching patients:", snapshotError);
        setError("Failed to fetch patients");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [setError, setLoading, setPatients]);

  const visibleCount = useMemo(() => {
    if (!filtersApplied) return patients.length;

    return filterPatients(patients, {
      searchQuery,
      ageFilter,
      idFilter,
      lastVisitFilter,
    }).length;
  }, [
    ageFilter,
    filtersApplied,
    idFilter,
    lastVisitFilter,
    patients,
    searchQuery,
  ]);

  const activeMeta = pageMeta[location.pathname] ?? pageMeta["/dashboard"];
  const isDarkTheme = theme === "dark";
  const syncState = loading ? "syncing" : error ? "issue" : "live";
  const syncLabel = loading ? "Syncing..." : error ? "Connection issue" : "Live";

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));

  return (
    <div className="app-shell relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -left-28 top-0 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--orb-cyan)" }}
        />
        <div
          className="absolute right-0 top-20 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--orb-blue)" }}
        />
        <div
          className="absolute -bottom-52 -right-28 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--orb-emerald)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside
            className="dashboard-panel animate-fade-in sticky top-6 h-fit p-4 sm:p-5"
            style={{ animationDelay: "80ms" }}
          >
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Medisuite
              </p>
              <h1 className="mt-1.5 text-xl font-semibold text-white">
                Patient Records
              </h1>
              <p className="mt-1.5 text-xs text-slate-400">
                Unified registry for clinical teams and quick lookups.
              </p>
            </div>

            <nav className="space-y-1.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "sidebar-link sidebar-link-active"
                      : "sidebar-link"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="sidebar-status-card mt-5">
              <div className="sidebar-stat-row">
                <p className="sidebar-stat-label">Total Patients</p>
                <p className="sidebar-stat-value">{patients.length}</p>
              </div>

              <div className="sidebar-stat-row">
                <p className="sidebar-stat-label">In Current View</p>
                <p className="sidebar-stat-value text-cyan-300">{visibleCount}</p>
              </div>

              <div className="sidebar-stat-row">
                <p className="sidebar-stat-label">Sync Status</p>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-200">
                  <span
                    className={`status-dot ${
                      syncState === "live"
                        ? "status-dot-live"
                        : syncState === "issue"
                          ? "status-dot-issue"
                          : "status-dot-sync animate-pulse"
                    }`}
                  />
                  {syncLabel}
                </p>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <header
              className="dashboard-panel animate-fade-in px-4 py-3 sm:px-5 sm:py-4"
              style={{ animationDelay: "140ms" }}
            >
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    {activeMeta.eyebrow}
                  </p>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    {activeMeta.title}
                  </h2>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    {activeMeta.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="theme-toggle-btn"
                    aria-label={
                      isDarkTheme
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    <span className="theme-toggle-label">
                      {isDarkTheme ? "Dark mode" : "Light mode"}
                    </span>
                    <span
                      className={`theme-toggle-switch ${
                        isDarkTheme ? "theme-toggle-switch-dark" : ""
                      }`}
                    >
                      <span className="theme-toggle-icon">L</span>
                      <span className="theme-toggle-icon">D</span>
                      <span className="theme-toggle-thumb" />
                    </span>
                  </button>

                  <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Secure Profile
                  </span>
                </div>
              </div>
            </header>

            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/intake" element={<IntakePage />} />
        <Route path="/records" element={<RecordsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
