const filterPatients = (
  patients,
  { searchQuery, idFilter, ageFilter, lastVisitFilter }
) =>
  patients.filter((patient) => {
    const queryMatch = searchQuery
      ? patient.name?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const idMatch = idFilter
      ? patient.patientId?.toLowerCase().includes(idFilter.toLowerCase())
      : true;

    const ageMatch = ageFilter ? Number(patient.age) === Number(ageFilter) : true;

    let visitMatch = true;
    if (lastVisitFilter && patient.lastVisit?.toDate) {
      const visitDate = patient.lastVisit.toDate();
      const now = new Date();
      const diffDays = (now - visitDate) / (1000 * 60 * 60 * 24);
      visitMatch = diffDays <= Number(lastVisitFilter);
    }

    return queryMatch && idMatch && ageMatch && visitMatch;
  });

export default filterPatients;
