export type FaqItem = { q: string; a: string };

export const homeFaqs: FaqItem[] = [
  {
    q: "Do you guarantee a bigger refund?",
    a: "No. A return should be correct for your facts and current law. We will not promise a maximum refund, a CRA outcome, or a result we cannot control.",
  },
  {
    q: "What do I bring to a first consult?",
    a: "Who you are (T4 employee, sole prop, or corporation), what is due, and last year’s return if you have it. For a CRA letter, bring the letter. Do not send your SIN by email or through this website.",
  },
  {
    q: "Do you only work in April?",
    a: "No. Bookkeeping, payroll, GST/HST, WSIB, T2, and CRA correspondence run all year. Personal T1 work is cleaner when the books already exist before March.",
  },
  {
    q: "Can you take over mid-year books?",
    a: "Usually yes, if we can get bank exports and whatever was already coded. We will tell you if the file is too incomplete to start this month.",
  },
  {
    q: "Where are you, and do I have to come in?",
    a: "The office is at 1887 Liatris Drive, Pickering, near Brock and Rossland. We work with families and businesses across Durham and the east GTA. Many files move by secure upload or email after the first call.",
  },
];

export const checklistItems = [
  {
    title: "Personal T1",
    items: [
      "Last year’s T1 and Notice of Assessment, if you have them",
      "T4, T4A, T5, T3, and RRSP slips",
      "Rent, property tax, or childcare receipts if they apply",
      "Work-from-home details your employer actually supports",
      "Tuition, medical, or donation receipts you want considered",
    ],
  },
  {
    title: "Self-employed / T2125",
    items: [
      "Business name, GST/HST number if registered, and fiscal year-end",
      "Bank and credit-card exports for the year",
      "Mileage log or a honest estimate with the method you used",
      "Home-office square footage and household costs, if claimed",
      "Prior T1 and any HST returns already filed",
    ],
  },
  {
    title: "Corporation / T2",
    items: [
      "Articles, Ontario corporation number, and year-end",
      "Prior T2, GIFI, and financial statements",
      "Payroll (T4 / T4A), GST/HST, and WSIB filings for the year",
      "Bank statements or bookkeeping file (QuickBooks, Excel, or other)",
      "Shareholder T1 situation — we will ask, because it affects the T2",
    ],
  },
  {
    title: "CRA letter",
    items: [
      "A photo or PDF of every page of the notice",
      "The deadline printed on the letter",
      "The return or period the letter refers to",
      "Anything you already sent to the CRA",
      "Do not include your SIN in the web form or an unsecured email",
    ],
  },
];
