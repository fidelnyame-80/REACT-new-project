import React, { useMemo } from "react";
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
    setFilteredPatients,
  } = usePatientStore();

  // 🔹 AUTOCOMPLETE SUGGESTIONS
  const suggestions = useMemo(() => {
    if (!searchQuery) return [];

    return patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, patients]);

  // 🔹 FILTERING LOGIC WHEN BUTTON IS CLICKED
  const handleSearch = () => {
    const results = patients.filter((patient) => {
      const queryMatch =
        patient.name.toLowerCase().includes(searchQuery.toLowerCase());

      const idMatch = idFilter
        ? patient.patientId.toLowerCase().includes(idFilter.toLowerCase())
        : true;

      const ageMatch = ageFilter
        ? Number(patient.age) === Number(ageFilter)
        : true;

      let visitMatch = true;
      if (lastVisitFilter && patient.lastVisit?.toDate) {
        const visitDate = patient.lastVisit.toDate();
        const now = new Date();
        const diffDays = (now - visitDate) / (1000 * 60 * 60 * 24);

        visitMatch = diffDays <= Number(lastVisitFilter);
      }

      return queryMatch && idMatch && ageMatch && visitMatch;
    });

    setFilteredPatients(results);
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <div className="grid md:grid-cols-4 gap-4">

        {/* NAME SEARCH */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded"
          />

          {/* AUTOCOMPLETE DROPDOWN */}
          {suggestions.length > 0 && (
            <div className="absolute bg-white border w-full mt-1 rounded shadow max-h-40 overflow-y-auto z-10">
              {suggestions.map((patient) => (
                <div
                  key={patient.id}
                  onClick={() => setSearchQuery(patient.name)}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                >
                  {patient.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ID FILTER */}
        <input
          type="text"
          placeholder="Filter by ID..."
          value={idFilter}
          onChange={(e) => setIdFilter(e.target.value)}
          className="p-2 border rounded"
        />

        {/* AGE FILTER */}
        <input
          type="number"
          placeholder="Exact Age..."
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
          className="p-2 border rounded"
        />

        {/* LAST VISIT FILTER */}
        <select
          value={lastVisitFilter}
          onChange={(e) => setLastVisitFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Any Visit</option>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
        </select>
      </div>

      {/* SEARCH BUTTON */}
      <div className="mt-4">
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
