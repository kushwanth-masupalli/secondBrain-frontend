function FilterSortBar({ sortBy, setSortBy, filterBy, setFilterBy, tasks }) {
  const intents = [...new Set(tasks.map(task => task.intent))]

  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="timestamp">Sort by Time</option>
        <option value="intent">Sort by Intent</option>
      </select>

      <select
        value={filterBy}
        onChange={e => setFilterBy(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">All Intents</option>
        {intents.map(intent => (
          <option key={intent} value={intent}>{intent}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterSortBar