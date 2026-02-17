import { useMemo } from "react";
import usePatientStore from "../store/usePatientStore";

const Search = () => {
  const {
    patients,
    searchQuery,
    ageFilter,
    idFilter,
    lastVisitFilter,
    setSearchQuery,
    setAgeFilter,
    setIdFilter,
    setLastVisitFilter,
    resetFilters,
    setFiltersApplied,
  } = usePatientStore();

  const suggestions = useMemo(() => {
    if (!searchQuery) return [];

    return patients
      .filter((patient) =>
        patient.name?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 6);
  }, [searchQuery, patients]);

  const handleSearch = () => setFiltersApplied(true);

  const handleNameChange = (e) => {
    setSearchQuery(e.target.value);
    setFiltersApplied(false);
  };

  const handleIdChange = (e) => {
    setIdFilter(e.target.value);
    setFiltersApplied(false);
  };

  const handleAgeChange = (e) => {
    setAgeFilter(e.target.value);
    setFiltersApplied(false);
  };

  const handleVisitChange = (e) => {
    setLastVisitFilter(e.target.value);
    setFiltersApplied(false);
  };

  return (
    <section
      className="dashboard-panel animate-fade-in-up p-5 sm:p-6"
      style={{ animationDelay: "200ms" }}
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Records Search</h2>
          <p className="text-sm text-slate-400">
            Search by name, patient ID, age, or recent visits.
          </p>
        </div>
        <span className="inline-flex rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300">
          Quick Lookup
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr_0.7fr_0.95fr_auto_auto]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleNameChange}
            className="input-control"
          />

          {suggestions.length > 0 && (
            <div className="absolute z-20 mt-2 max-h-56 w-full overflow-y-auto rounded-xl border border-slate-700/70 bg-slate-900/95 p-1 shadow-2xl shadow-black/40 backdrop-blur">
              {suggestions.map((patient) => (
                <button
                  type="button"
                  key={patient.id}
                  onClick={() => {
                    setSearchQuery(patient.name);
                    setFiltersApplied(false);
                  }}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-cyan-400/10 hover:text-cyan-100"
                >
                  {patient.name}{" "}
                  <span className="text-xs text-slate-500">
                    ({patient.patientId})
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Filter by ID..."
          value={idFilter}
          onChange={handleIdChange}
          className="input-control"
        />

        <input
          type="number"
          placeholder="Exact Age..."
          value={ageFilter}
          onChange={handleAgeChange}
          className="input-control"
        />

        <select
          value={lastVisitFilter}
          onChange={handleVisitChange}
          className="input-control appearance-none"
        >
          <option value="">Any Visit</option>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
        </select>

        <button
          type="button"
          onClick={handleSearch}
          className="btn-primary min-h-[46px] whitespace-nowrap"
        >
          Run Search
        </button>

        <button
          type="button"
          onClick={resetFilters}
          className="min-h-[46px] whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Search;
