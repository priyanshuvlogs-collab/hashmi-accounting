export function YearRoundVisual() {
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const marks = [2, 5, 7, 10];
  return (
    <div className="border border-line bg-paper p-5 shadow-[8px_8px_0_0_#10233d12]">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Year-round file</p>
      <p className="serif mt-2 text-2xl text-ink">Not an April stall.</p>
      <ol className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {months.map((m, i) => (
          <li
            key={m}
            className={`border px-2 py-3 text-center text-sm ${
              marks.includes(i) ? "border-ink bg-ink text-paper" : "border-line text-muted"
            }`}
          >
            {m}
            {marks.includes(i) ? <span className="mt-1 block text-[0.7rem] text-brass-light">due</span> : null}
          </li>
        ))}
      </ol>
      <ul className="mt-5 space-y-2 text-sm text-charcoal">
        <li className="flex justify-between border-b border-line pb-2">
          <span>GST/HST</span>
          <span className="text-muted">quarterly or monthly</span>
        </li>
        <li className="flex justify-between border-b border-line pb-2">
          <span>Payroll / WSIB</span>
          <span className="text-muted">on the remittance calendar</span>
        </li>
        <li className="flex justify-between border-b border-line pb-2">
          <span>T1 / T2</span>
          <span className="text-muted">from books that already exist</span>
        </li>
        <li className="flex justify-between">
          <span>CRA letter</span>
          <span className="text-muted">answered from the file</span>
        </li>
      </ul>
    </div>
  );
}
