/* ============================================================
   Vantage Point Financial — Advisor Career Path ("The Ascent")
   Plain vanilla JavaScript. No framework, no build step.
   All content lives in the DATA object below — edit it freely.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. DATA  — single source of truth for the whole page
     --------------------------------------------------------- */
  var DATA = {
    roles: [
      {
        id: "csa", title: "Client Service Advisor", track: "advisor", trackLabel: "Advisor Track",
        level: "Levels I–III", experience: "Approx. 0–3 years",
        designation: "Series 65 and Life/Health within first 120 days",
        mission: "Create a dependable service and meeting-support runway below the second-chair seat, working hand in hand with the client service team.",
        focus: [
          "Sit in client and prospect meetings, capture notes, and own follow-up discipline.",
          "Maintain service dashboards, CRM detail, new-business checklists, and client task flow.",
          "Coordinate pre- and post-appointment work so advisors can focus on client leadership.",
          "Learn VPF language, the Vantage Point Experience, and the foundations of the Elevated Retirement Plan."
        ],
        promotion: [
          "Reliable client follow-up with low rework.",
          "Meeting notes are complete, accurate, and action-oriented.",
          "Data integrity is trusted across CRM, service systems, and planning inputs.",
          "Licensing completed within the 120-day standard."
        ],
        levels: [
          { name: "CSA I", text: "Learns VPF service standards, Strategy Session support, meeting flow, CRM hygiene, and ERP vocabulary." },
          { name: "CSA II", text: "Runs routine service tasks independently, prepares Experience meetings, and owns follow-up reliability." },
          { name: "CSA III", text: "Handles complex service work, trains newer team members, and shows readiness for second-chair development." }
        ]
      },
      {
        id: "paraplanner", title: "Paraplanner", track: "planning", trackLabel: "Planning Specialist Track",
        level: "Paraplanner I → Senior Paraplanner", experience: "Approx. 0–5+ years",
        designation: "Series 65 within first 120 days; CFP preferred for senior levels",
        mission: "Build a respected technical planning path for professionals who want planning depth without being pushed into lead-advisor sales leadership.",
        focus: [
          "Prepare plans, financial models, tax models, and decision-ready ERP recommendations.",
          "Translate client data into planning insights and advisor-ready meeting material.",
          "Improve consistency of Elevated Retirement Plan deliverables and planning quality control.",
          "Support complex cases, high-net-worth planning, and internal planning training."
        ],
        promotion: [
          "Planning work is accurate, timely, and easy for advisors to use.",
          "Models show judgment, not just software output.",
          "Recommendations connect to the six crucial elements of the Elevated Retirement Plan.",
          "Senior levels can train others and protect planning standards."
        ],
        levels: [
          { name: "Paraplanner I", text: "Owns data organization, planning software inputs, basic ERP meeting prep, and plan maintenance." },
          { name: "Paraplanner II", text: "Creates planning ideas, prepares scenario analysis, drafts ERP recommendations, and supports advisor inquiries." },
          { name: "Senior Paraplanner", text: "Handles complex planning, reviews ERP deliverables, trains the team, and protects planning standards while developing toward Director." }
        ]
      },
      {
        id: "planning-director", title: "Director of Financial Planning", track: "planning", trackLabel: "Planning Specialist Track",
        level: "Specialist leadership", experience: "Approx. 8+ years",
        designation: "CFP required; advanced planning or investment credentials preferred",
        mission: "Own the firm's financial-planning methodology and the technical quality of every Elevated Retirement Plan — the deepest planning authority at the firm.",
        focus: [
          "Set and protect ERP standards, templates, and the planning quality bar across every team.",
          "Lead the most complex, high-net-worth, and multi-generational planning cases.",
          "Develop the planning bench and own planning training and technical standards.",
          "Partner with advisors and leadership on planning strategy, tools, and capacity."
        ],
        promotion: [
          "ERP methodology is consistent, current, and trusted firmwide.",
          "Complex cases are handled with authority and sound judgment.",
          "Planning-team capability and retention improve under their leadership.",
          "Operates as a firm-first technical leader across advisor teams."
        ],
        levels: [
          { name: "Director of Financial Planning", text: "The top rung of the planning track — owns planning methodology, leads the most complex cases, develops the planning bench, and may progress toward partner-level stewardship." }
        ]
      },
      {
        id: "second-chair", title: "Second Chair Advisor", track: "advisor", trackLabel: "Advisor Track",
        level: "Levels I–III", experience: "Approx. 3–7 years",
        designation: "CFP coursework started; advanced designation expected before Lead",
        mission: "Develop client-facing advisors through household task ownership, supervised relationship leadership, planning support, and controlled business-development reps.",
        focus: [
          "Serve as second chair for AAA/A relationships and support Lead Advisors at a high standard.",
          "Lead appropriate C and B client relationships as readiness increases.",
          "Act as the project manager for each household they sit second chair on.",
          "Own prep, follow-up, required tasks, planning support, and communication continuity across the Experience.",
          "Coordinate with the client service team and CSA so every task has an owner and deadline.",
          "Develop sales skill without being pushed into full rainmaker expectations too early."
        ],
        promotion: [
          "Can lead 10 new clients with a Lead Advisor present to observe, support, and coach.",
          "Progresses from observing Strategy Sessions to leading them independently.",
          "Competently presents VPF's core strategies with clients and prospects: the ERP, The Bucket Plan, planning materials, recommended portfolios, review meeting documents, and software projections and modeling.",
          "Creates client confidence through preparation, clear communication, and steady follow-through.",
          "Manages household task flow so Lead Advisors trust nothing will fall through the cracks.",
          "Demonstrates light to moderate business-development activity appropriate to level.",
          "Shows clear readiness across the 4 Cs."
        ],
        levels: [
          { name: "Second Chair I", text: "Supports Lead Advisors, tracks meeting tasks, coordinates follow-up, and begins supervised delivery of ERP concepts." },
          { name: "Second Chair II", text: "Project-manages household work, gets proficient leading Strategy Sessions with a Lead Advisor sitting shotgun, and co-presents webinars and AFC classes." },
          { name: "Second Chair III", text: "Leads Strategy Sessions independently, owns household execution, operates as lead on B/C clients, and delivers larger portions of the ERP." }
        ]
      },
      {
        id: "lead", title: "Lead Advisor", track: "advisor", trackLabel: "Advisor Track",
        level: "Levels I–III", experience: "Approx. 5–10+ years",
        designation: "Advanced designation required; CFP preferred",
        mission: "Own client relationships, lead business development, mentor the advisory bench, and carry the VPF client experience.",
        focus: [
          "Lead AAA/A client relationships and appropriate prospects through the Vantage Point Experience.",
          "Generate, nurture, and close new business through referrals, COIs, events, and client advocacy.",
          "Develop Second Chair Advisors and reinforce the two-chair model.",
          "Choose the right compensation lane as production, leadership, and capacity mature."
        ],
        promotion: [
          "Demonstrated ability to retain, grow, and lead complex relationships through the ERP process.",
          "Annual NAUA or new-revenue goals are met at level-appropriate targets.",
          "Advisor bench is stronger because of the Lead Advisor's coaching.",
          "Client trust, team trust, and firm-first behavior remain visible under pressure."
        ],
        levels: [
          { name: "Lead Advisor I", text: "Relationship lead for selected A/B clients, ERP delivery mastery, and a first-full-year production goal of $15M–$20M NAUA (draft)." },
          { name: "Lead Advisor II", text: "Lead advisor on A clients, strong Strategy Session and ERP leadership, and a production goal of $20M–$30M NAUA (draft)." },
          { name: "Lead Advisor III", text: "Lead advisor on AAA clients, strong mentoring leverage across the Experience, and a production goal of $30M+ NAUA (draft)." }
        ]
      },
      {
        id: "partner", title: "Partner", track: "firm", trackLabel: "Firm Leadership",
        level: "Summit role", experience: "Approx. 10+ years",
        designation: "CFP preferred; recognized firm expert",
        mission: "Steward the firm, protect culture, lead growth, develop people, and carry ownership-level accountability.",
        focus: [
          "Lead the largest client relationships and highest-impact growth opportunities through the Experience.",
          "Set strategy, protect profitability, and make firm-first decisions.",
          "Build leadership capacity across advisors, planning, service, operations, and recruiting.",
          "Represent VPF in the community and model ownership behavior."
        ],
        promotion: [
          "Believes in and can help build the business for the next 20 years.",
          "Puts the business first and can handle ownership economics responsibly.",
          "Creates durable growth beyond personal production and protects the ERP standard.",
          "Consistently demonstrates all six core values at leadership scale."
        ],
        levels: [
          { name: "Partner Candidate", text: "Trusted Lead Advisor with firm leadership responsibilities, strategic contribution, ERP stewardship, and ownership readiness under review." },
          { name: "Partner", text: "Equity or ownership-level role with firmwide leadership, premier client stewardship, and growth accountability." },
          { name: "Senior Partner", text: "Future optional stage for enterprise leadership, succession, M&A, and multi-market stewardship." }
        ]
      }
    ],

    // Who currently sits in each role.
    seats: {
      "csa": { people: [], note: "Proposed new role" },
      "paraplanner": { people: [], note: "Vacant — hiring" },
      "planning-director": { people: [], note: "Proposed new role" },
      "second-chair": { people: ["Andrew", "Brennan", "Luke", "Sophia"], note: "" },
      "lead": { people: ["Nick", "Tim", "Don"], note: "" },
      "partner": { people: ["Nick", "Tim"], note: "" }
    },

    // Position of each role node on the mountain stage (percent of the stage box).
    // x = horizontal %, b = vertical % from the bottom.
    stations: {
      "csa":          { x: 12, b: 27 },
      "second-chair": { x: 37, b: 45 },
      "lead":         { x: 63, b: 64 },
      "partner":      { x: 88, b: 80 },
      "paraplanner":  { x: 33, b: 9 },
      "planning-director": { x: 60, b: 20 }
    },

    // The advisor ladder, in climbing order, plus the planning branch.
    mapOrder: ["csa", "second-chair", "lead", "partner", "paraplanner", "planning-director"],

    matrix: {
      cols: ["Client workflow", "CSA", "Paraplanner", "Second Chair", "Lead Advisor", "Partner"],
      rows: [
        { step: "Strategy Session", cells: ["Coordinate", "Prep", "Own prep & observe, then lead with shotgun support", "Lead", "Guide"] },
        { step: "Envision Meeting", cells: ["Notes", "Prep", "Manage household task list, support or co-lead", "Lead AAA/A/B clients", "Lead largest relationships"] },
        { step: "What's Possible Meeting", cells: ["Materials & notes", "Planning support", "Present portions & coordinate follow-up", "Lead", "Lead or sponsor"] },
        { step: "Build Your ERP", cells: ["Data & follow-up", "Lead technical build", "Review, frame & manage action items", "Approve direction", "Strategic review"] },
        { step: "90-Day Check-In + Advanced Planning", cells: ["Materials & notes", "Planning refresh", "Support or lead smaller clients, own follow-up", "Lead", "Lead or sponsor"] },
        { step: "Ongoing Support & Maintenance", cells: ["Task owner", "Planning refresh", "Project-manage household tasks", "Relationship lead", "Top-client stewardship"] },
        { step: "Referrals, COIs & growth", cells: ["None expected", "None expected", "Light to moderate", "Major", "Firm-level"] }
      ]
    },

    fourCs: [
      { n: "01", title: "Competency", text: "Performs the role with quality, consistency, judgment, and measurable business results where applicable." },
      { n: "02", title: "Confidence", text: "Brings calm, prepared conviction to the chair so clients, teammates, and leadership trust their judgment." },
      { n: "03", title: "Connection", text: "Builds trust with clients, teammates, lead advisors, COIs, and the wider VPF community." },
      { n: "04", title: "Core Values", text: "Lives Growth, Ownership, Teamwork, Client Obsession, Community Impact, and Leadership." }
    ],

    gates: [
      { from: "CSA → Second Chair", text: "Service execution, meeting-note quality, follow-up reliability, licensing within 120 days, and Experience readiness." },
      { from: "Second Chair level progression", text: "Household task ownership, service-team coordination, Strategy Session readiness, 10 new clients led with a Lead Advisor observing, and competent presentation of VPF's core strategies: the ERP, The Bucket Plan, planning materials, recommended portfolios, review meeting documents, and software projections and modeling." },
      { from: "Second Chair → Lead Advisor", text: "Advanced designation, relationship readiness, ability to close and retain clients, referral discipline, and consistent 4 Cs." },
      { from: "Lead Advisor → Partner", text: "Durable growth, firm-first leadership, culture stewardship, top-client trust, economics, and a clear ownership mindset." }
    ],

    scorecards: [
      { role: "Client Service Advisor", type: "Service quality", metrics: ["Meeting notes completed same or next business day", "Follow-up tasks completed by committed date", "CRM and service-dashboard data accuracy", "Experience meeting prep and follow-up quality", "New-business checklist accuracy and low rework", "Licensing completed within 120 days"] },
      { role: "Paraplanner", type: "Planning quality", metrics: ["Plan-prep turnaround by meeting deadline", "Planning model accuracy and review-pass rate", "Actionable planning ideas per case", "ERP deliverables are advisor- and client-ready", "Advisor satisfaction with deliverable readiness", "Series 65 completed within first 120 days"] },
      { role: "Second Chair Advisor", type: "Development & delivery", metrics: ["Prep and follow-up reliability for Lead teams", "Household task ownership & project-management quality", "Client service team and CSA coordination", "Supervised new clients led toward the 10-client gate", "C/B client relationship ownership and retention", "Strategy Session proficiency by level", "Webinar and AFC class co-presentation (SC II)", "ERP, Bucket Plan, portfolio, review document, and software-modeling presentation competency"] },
      { role: "Lead Advisor", type: "Growth & leadership", metrics: ["AAA/A client retention and Experience quality", "NAUA or new-revenue goals by level", "Referrals and COI activity", "Second Chair Advisor development outcomes", "ERP delivery consistency across teams", "Firm-first behavior in client assignment"] },
      { role: "Partner", type: "Firm stewardship", metrics: ["Firm growth and profitability health", "Leadership bench development", "Largest relationship retention and expansion", "Culture and core-values stewardship", "Elevated Retirement Plan stewardship", "Strategic initiatives completed with ownership discipline"] },
      { role: "Shared standards", type: "VPF operating rhythm", metrics: ["At least one weekly buffer day for prep and follow-up", "Focus days used for appointments, COIs, prospects, referrals", "Clients experience VPF as a team-based firm", "Strategy Sessions led by the right chair", "Career conversations use the role ladder and 4 Cs", "Individual plans reviewed on a predictable cadence"] }
    ],

    comp: {
      cols: ["Role", "Total target", "Base", "Variable", "Profit stake"],
      rows: [
        ["Client Service Advisor", "$40k–$61k", "90%", "0%", "10%"],
        ["Paraplanner", "$50k–$83k", "85%", "0%", "15%"],
        ["Second Chair Advisor", "$66k–$120k", "60–70%", "20–30%", "10–15%"],
        ["Lead Advisor", "$138k–$248k", "40–50%", "25–35%", "20–30%"],
        ["Partner", "$250k–$425k", "30–60%", "0%", "30–60%"]
      ]
    },

    decisions: [
      { priority: "High", title: "Define the 4 Cs scoring rubric", items: ["Spell out what each C means by role and level.", "Add sales goals under Competency for Second Chair, Lead, and Partner.", "Set pass, caution, and not-ready standards."] },
      { priority: "High", title: "Build the compensation programs", items: ["A general calculator advisors can model with — no individual production shown.", "Dedicated Second Chair and Lead Advisor comp templates.", "Confirm which figures are visible to all advisors."] },
      { priority: "Medium", title: "Lock KPI and production targets", items: ["Define NAUA, new revenue, and revenue credit.", "Lead Advisor production starts at $15M–$20M NAUA in the first full year.", "Set CSA, Paraplanner, Strategy Session, and ERP-delivery metrics."] },
      { priority: "Medium", title: "Finish Partner readiness", items: ["Decide equity buy-in vs. grant philosophy.", "Set ownership economics guardrails.", "List the leadership, client, and growth evidence required."] },
      { priority: "Low", title: "Publish the recruiting version", items: ["Polished public page that mirrors the internal portal.", "Strip comp formulas, internal scorecards, and open decisions.", "Lead with building a great career and life at VPF."] }
    ]
  };

  /* ---------------------------------------------------------
     2. Tiny helpers
     --------------------------------------------------------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function roleById(id) {
    for (var i = 0; i < DATA.roles.length; i++) if (DATA.roles[i].id === id) return DATA.roles[i];
    return null;
  }
  function seatLabel(id) {
    var s = DATA.seats[id];
    if (!s) return "—";
    if (s.people && s.people.length) return "Seated today · " + s.people.join(", ");
    return s.note || "—";
  }

  var state = { activeId: "csa" };

  /* ---------------------------------------------------------
     3. The interactive mountain map
     --------------------------------------------------------- */
  function buildMap() {
    var stage = $("#stage");
    if (!stage) return;
    DATA.mapOrder.forEach(function (id) {
      var role = roleById(id);
      var pos = DATA.stations[id];
      if (!role || !pos) return;
      var btn = el("button", "node");
      btn.type = "button";
      btn.setAttribute("data-track", role.track);
      btn.setAttribute("data-id", id);
      btn.style.left = pos.x + "%";
      btn.style.bottom = pos.b + "%";
      var tag = role.track === "planning" ? "Planning track" : (role.track === "firm" ? "Firm leadership" : "Advisor track");
      var sub = role.track === "firm" ? "Summit role" : (role.track === "planning" ? "Specialist track" : "Levels I–III");
      btn.innerHTML =
        '<span class="node__tag">' + esc(tag) + "</span>" +
        '<strong class="node__label">' + esc(role.title) + "</strong>" +
        '<span class="node__sub">' + esc(sub) + "</span>";
      btn.addEventListener("click", function () { select(id); });
      stage.appendChild(btn);
    });
  }

  function select(id) {
    state.activeId = id;
    var nodes = document.querySelectorAll(".node");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].classList.toggle("is-selected", nodes[i].getAttribute("data-id") === id);
    }
    renderRole(id);
  }

  /* ---------------------------------------------------------
     4. Role detail card (re-rendered on select)
     --------------------------------------------------------- */
  function renderRole(id) {
    var role = roleById(id);
    var host = $("#role-card");
    if (!role || !host) return;

    var facts =
      fact("Levels", role.level) + fact("Experience", role.experience) + fact("Credential", role.designation);

    var focus = role.focus.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");
    var promo = role.promotion.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    var levels = role.levels.map(function (lv) {
      return '<div class="level"><b>' + esc(lv.name) + "</b><p>" + esc(lv.text) + "</p></div>";
    }).join("");

    host.innerHTML =
      '<div class="role-head">' +
        '<div class="role-head__main">' +
          '<p class="eyebrow">' + esc(role.trackLabel) + "</p>" +
          "<h2>" + esc(role.title) + "</h2>" +
          '<p class="role-head__mission">' + esc(role.mission) + "</p>" +
          '<div class="seat-pill"><i></i>' + esc(seatLabel(id)) + "</div>" +
        "</div>" +
        '<div class="role-head__facts">' + facts + "</div>" +
      "</div>" +
      '<div class="role-cols">' +
        '<div class="role-col"><p class="col-title col-title--focus">Primary focus</p><ul class="role-list role-list--focus">' + focus + "</ul></div>" +
        '<div class="role-col"><p class="col-title col-title--promo">Promotion evidence</p><ul class="role-list role-list--promo">' + promo + "</ul></div>" +
      "</div>" +
      '<div class="levels"><p class="levels__title">Levels within the role</p><div class="levels__grid">' + levels + "</div></div>";

    // tint the level top-borders + seat dot to the role's track accent
    var accent = role.track === "planning" ? "#2f7d6d" : (role.track === "firm" ? "#b9852b" : "#001f60");
    var lv = host.querySelectorAll(".level");
    for (var i = 0; i < lv.length; i++) lv[i].style.borderTopColor = accent;
    var dot = host.querySelector(".seat-pill i");
    if (dot) dot.style.background = accent;
  }
  function fact(label, value) {
    return '<div class="fact"><span>' + esc(label) + "</span><b>" + esc(value) + "</b></div>";
  }

  /* ---------------------------------------------------------
     5. Static-data sections (tables, cards) rendered once
     --------------------------------------------------------- */
  function buildMatrix() {
    var t = $("#matrix-table");
    if (!t) return;
    var head = "<thead><tr>" + DATA.matrix.cols.map(function (c) {
      return "<th>" + esc(c) + "</th>";
    }).join("") + "</tr></thead>";
    var body = "<tbody>" + DATA.matrix.rows.map(function (r) {
      return "<tr><td>" + esc(r.step) + "</td>" + r.cells.map(function (c) {
        return "<td>" + esc(c) + "</td>";
      }).join("") + "</tr>";
    }).join("") + "</tbody>";
    t.innerHTML = head + body;
  }

  function buildFourCs() {
    var host = $("#cs-grid");
    if (!host) return;
    host.innerHTML = DATA.fourCs.map(function (c) {
      return '<article class="card card--c"><span class="cnum">' + esc(c.n) + "</span><h3>" +
        esc(c.title) + "</h3><p>" + esc(c.text) + "</p></article>";
    }).join("");
  }

  function buildGates() {
    var host = $("#gates");
    if (!host) return;
    host.innerHTML = DATA.gates.map(function (g) {
      return '<div class="gate"><b>' + esc(g.from) + "</b><span>" + esc(g.text) + "</span></div>";
    }).join("");
  }

  function buildScorecards() {
    var host = $("#sc-grid");
    if (!host) return;
    host.innerHTML = DATA.scorecards.map(function (s) {
      var items = s.metrics.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");
      return '<article class="card sc"><span class="sc__type">' + esc(s.type) + "</span><h3>" +
        esc(s.role) + "</h3><ul>" + items + "</ul></article>";
    }).join("");
  }

  function buildComp() {
    var t = $("#comp-table");
    if (!t) return;
    var head = "<thead><tr>" + DATA.comp.cols.map(function (c) {
      return "<th>" + esc(c) + "</th>";
    }).join("") + "</tr></thead>";
    var body = "<tbody>" + DATA.comp.rows.map(function (row) {
      return "<tr>" + row.map(function (cell) { return "<td>" + esc(cell) + "</td>"; }).join("") + "</tr>";
    }).join("") + "</tbody>";
    t.innerHTML = head + body;
  }

  function buildDecisions() {
    var host = $("#dec-grid");
    if (!host) return;
    host.innerHTML = DATA.decisions.map(function (d) {
      var cls = "dec--" + d.priority.toLowerCase();
      var items = d.items.map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("");
      return '<article class="card dec ' + cls + '"><span class="dec__chip">' + esc(d.priority) +
        ' priority</span><h3>' + esc(d.title) + "</h3><ul>" + items + "</ul></article>";
    }).join("");
  }

  /* ---------------------------------------------------------
     5b. Interactive compensation calculator
     --------------------------------------------------------- */
  function initCalc() {
    if (!$("#calc")) return;
    var YEARS = 10;
    var P = {
      salaryY1:     { label: "Year-1 salary ($)",         val: 75000, type: "money" },
      rate2nd:      { label: "2nd Chair payout",           val: 0.025, type: "pct" },
      rateShotgun:  { label: "2nd Chair (shotgun) payout", val: 0.10,  type: "pct" },
      rateGiven:    { label: "Given client recurring",     val: 0.15,  type: "pct" },
      rateClosed:   { label: "Lead-closed payout",         val: 0.25,  type: "pct" },
      aumMix:       { label: "AUM mix",                    val: 0.70,  type: "pct" },
      aumFee:       { label: "AUM avg fee",                val: 0.01,  type: "pct" },
      insComm:      { label: "Insurance avg commission",   val: 0.07,  type: "pct" },
      recurGrowth:  { label: "Recurring growth / yr",      val: 0.03,  type: "pct" },
      bonusPct:     { label: "Company bonus (% salary)",   val: 0.10,  type: "pct" },
      givenReduce:  { label: "Salary cut: given rev",      val: 1.00,  type: "pct" },
      closedReduce: { label: "Salary cut: closed rev",     val: 0.75,  type: "pct" }
    };
    var CATS = [
      { key: "second",  label: "2nd Chair" },
      { key: "shotgun", label: "2nd Chair (shotgun)" },
      { key: "given",   label: "Lead — given clients" },
      { key: "closed",  label: "Lead — self-closed" }
    ];
    function m(x) { return x * 1000000; }
    var assets = {};
    CATS.forEach(function (c) { assets[c.key] = new Array(YEARS).fill(0); });

    var PRESETS = {
      blank: function () {
        CATS.forEach(function (c) { assets[c.key] = new Array(YEARS).fill(0); });
        P.salaryY1.val = 60000;
      },
      second: function () {
        P.salaryY1.val = 60000;
        assets.second  = [10, 10, 8, 6, 4, 2, 0, 0, 0, 0].map(m);
        assets.shotgun = [5, 8, 8, 6, 4, 2, 0, 0, 0, 0].map(m);
        assets.given   = new Array(YEARS).fill(0);
        assets.closed  = new Array(YEARS).fill(0);
      },
      lead: function () {
        P.salaryY1.val = 75000;
        assets.second  = [10, 5, 2, 0, 0, 0, 0, 0, 0, 0].map(m);
        assets.shotgun = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(m);
        assets.given   = [0, 10, 10, 10, 0, 0, 0, 0, 0, 0].map(m);
        assets.closed  = [0, 10, 13, 15, 17, 20, 20, 25, 25, 25].map(m);
      }
    };

    function compute() {
      var p = {};
      Object.keys(P).forEach(function (k) { p[k] = P[k].val; });
      var insMix = 1 - p.aumMix;
      var blend = p.aumMix * p.aumFee + insMix * p.insComm;  // first-year revenue per $
      var ru = p.aumMix * p.aumFee;                          // recurring AUM per $ (insurance = first year only)
      var R = { salary: [], c2nd: [], cShot: [], givenRec: [], closed1st: [], closedRec: [], bonus: [], total: [], vc: [] };
      for (var i = 0; i < YEARS; i++) {
        R.c2nd[i]  = assets.second[i]  * blend * p.rate2nd;
        R.cShot[i] = assets.shotgun[i] * blend * p.rateShotgun;
        R.closed1st[i] = assets.closed[i] * blend * p.rateClosed;
        R.givenRec[i] = (i > 0 ? R.givenRec[i - 1] * (1 + p.recurGrowth) : 0) + assets.given[i] * ru * p.rateGiven;
        R.closedRec[i] = (i > 0 ? R.closedRec[i - 1] * (1 + p.recurGrowth) : 0) + (i > 0 ? assets.closed[i - 1] * ru * p.rateClosed : 0);
        if (i === 0) {
          R.salary[i] = p.salaryY1;
        } else {
          var gInc = R.givenRec[i] - R.givenRec[i - 1];
          var cInc = R.closedRec[i] - R.closedRec[i - 1];
          R.salary[i] = Math.max(0, R.salary[i - 1] - gInc * p.givenReduce - cInc * p.closedReduce);
        }
        R.bonus[i] = R.salary[i] * p.bonusPct;
        R.total[i] = R.salary[i] + R.c2nd[i] + R.cShot[i] + R.givenRec[i] + R.closed1st[i] + R.closedRec[i] + R.bonus[i];
        R.vc[i] = R.c2nd[i] + R.cShot[i] + R.bonus[i];
      }
      return R;
    }

    var fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
    function money(x) { return fmt.format(Math.round(x)); }

    function buildParams() {
      var host = $("#calc-params");
      host.innerHTML = "";
      Object.keys(P).forEach(function (k) {
        var f = P[k];
        var div = el("div", "calc__field");
        var val = f.type === "pct" ? +(f.val * 100).toFixed(4) : f.val;
        div.innerHTML = '<label>' + esc(f.label) + (f.type === "pct" ? " (%)" : "") + '</label>' +
          '<input type="number" step="any" data-pk="' + k + '" value="' + val + '">';
        host.appendChild(div);
      });
      host.querySelectorAll("input").forEach(function (inp) {
        inp.addEventListener("input", function () {
          var v = parseFloat(inp.value); if (isNaN(v)) v = 0;
          var k = inp.getAttribute("data-pk");
          P[k].val = P[k].type === "pct" ? v / 100 : v;
          render();
        });
      });
    }

    function buildAssets() {
      var t = $("#calc-assets");
      var head = "<thead><tr><th>Category ($M)</th>";
      for (var y = 1; y <= YEARS; y++) head += "<th>Yr " + y + "</th>";
      head += "</tr></thead>";
      var body = "<tbody>";
      CATS.forEach(function (c) {
        body += "<tr><td>" + esc(c.label) + "</td>";
        for (var y = 0; y < YEARS; y++) {
          body += '<td><input class="calc__cell" data-cat="' + c.key + '" data-yr="' + y + '" type="number" step="any"></td>';
        }
        body += "</tr>";
      });
      body += "</tbody>";
      t.innerHTML = head + body;
      t.querySelectorAll(".calc__cell").forEach(function (inp) {
        inp.addEventListener("input", function () {
          var v = parseFloat(inp.value); if (isNaN(v)) v = 0;
          assets[inp.getAttribute("data-cat")][+inp.getAttribute("data-yr")] = v * 1000000;
          render();
        });
      });
    }
    function syncAssets() {
      document.querySelectorAll("#calc-assets .calc__cell").forEach(function (inp) {
        var v = assets[inp.getAttribute("data-cat")][+inp.getAttribute("data-yr")] / 1000000;
        inp.value = v ? +v.toFixed(2) : "";
      });
    }

    var ROWS = [
      { key: "salary",    label: "Base salary" },
      { key: "c2nd",      label: "2nd Chair payout" },
      { key: "cShot",     label: "2nd Chair (shotgun)" },
      { key: "givenRec",  label: "Given recurring" },
      { key: "closed1st", label: "Lead-closed (1st yr)" },
      { key: "closedRec", label: "Lead-closed recurring" },
      { key: "bonus",     label: "Company bonus" }
    ];
    function buildResults(R) {
      var t = $("#calc-results");
      var head = "<thead><tr><th>Component</th>";
      for (var y = 1; y <= YEARS; y++) head += "<th>Yr " + y + "</th>";
      head += "</tr></thead>";
      var body = "<tbody>";
      ROWS.forEach(function (r) {
        body += '<tr class="calc__sub"><td>' + esc(r.label) + "</td>";
        for (var y = 0; y < YEARS; y++) body += "<td>" + money(R[r.key][y]) + "</td>";
        body += "</tr>";
      });
      body += '<tr class="calc__total"><td>Total comp</td>';
      for (var y = 0; y < YEARS; y++) body += "<td>" + money(R.total[y]) + "</td>";
      body += "</tr>";
      body += '<tr class="calc__vc"><td>of which bonus / variable</td>';
      for (var y = 0; y < YEARS; y++) body += "<td>" + money(R.vc[y]) + "</td>";
      body += "</tr></tbody>";
      t.innerHTML = head + body;
    }

    var SEGS = [
      { key: "salary",    label: "Base salary",           color: "#001f60" },
      { key: "c2nd",      label: "2nd Chair payout",       color: "#3a57a8" },
      { key: "cShot",     label: "2nd Chair (shotgun)",    color: "#6f88c9" },
      { key: "givenRec",  label: "Given recurring",        color: "#2f7d6d" },
      { key: "closed1st", label: "Lead-closed (1st yr)",   color: "#b9852b" },
      { key: "closedRec", label: "Lead-closed recurring",  color: "#e0b56a" },
      { key: "bonus",     label: "Company bonus",          color: "#9aa3b2" }
    ];
    function buildLegend() {
      var host = $("#calc-legend");
      if (!host) return;
      host.innerHTML = SEGS.map(function (s) {
        return '<span class="calc__leg"><i style="background:' + s.color + '"></i>' + esc(s.label) + "</span>";
      }).join("");
    }
    function buildChart(R) {
      var host = $("#calc-chart");
      if (!host) return;
      var maxTotal = Math.max.apply(null, R.total) || 1;
      var cols = "";
      for (var y = 0; y < YEARS; y++) {
        var segs = "";
        for (var s = 0; s < SEGS.length; s++) {
          var v = R[SEGS[s].key][y];
          var h = (v / maxTotal) * 100;
          if (h > 0.15) segs += '<span class="calc__seg" style="height:' + h.toFixed(2) + '%;background:' + SEGS[s].color + '" title="' + esc(SEGS[s].label) + ': ' + money(v) + '"></span>';
        }
        cols += '<div class="calc__col"><span class="calc__coltot">' + money(R.total[y]).replace("$", "$") + '</span>' +
          '<span class="calc__stack">' + segs + '</span><span class="calc__xlab">Yr ' + (y + 1) + '</span></div>';
      }
      host.innerHTML = cols;
    }

    function explainer(R) {
      var peak = Math.max.apply(null, R.total);
      var peakYr = R.total.indexOf(peak) + 1;
      var host = $("#calc-explain");
      if (!host) return;
      host.innerHTML = "<strong>Reading this scenario:</strong> total comp moves from " + money(R.total[0]) +
        " in Year 1 to " + money(R.total[YEARS - 1]) + " by Year 10, peaking around " + money(peak) +
        " (Yr " + peakYr + "). As recurring revenue builds, base salary steps down and pay shifts toward variable and recurring streams.";
    }

    function render() {
      var R = compute();
      buildResults(R);
      buildChart(R);
      explainer(R);
    }

    document.querySelectorAll(".calc__preset").forEach(function (b) {
      b.addEventListener("click", function () {
        PRESETS[b.getAttribute("data-preset")]();
        buildParams();
        syncAssets();
        render();
      });
    });

    PRESETS.lead();
    buildParams();
    buildAssets();
    buildLegend();
    syncAssets();
    render();
  }

  /* ---------------------------------------------------------
     6. Internal / Recruiting view toggle
     --------------------------------------------------------- */
  function wireToggle() {
    var btns = document.querySelectorAll("[data-view-btn]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var view = this.getAttribute("data-view-btn");
        document.body.setAttribute("data-view", view);
        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.toggle("is-active", btns[j] === this);
        }
      });
    }
  }

  /* ---------------------------------------------------------
     7. Boot
     --------------------------------------------------------- */
  function init() {
    buildMap();
    buildMatrix();
    buildFourCs();
    buildGates();
    buildScorecards();
    buildComp();
    buildDecisions();
    initCalc();
    wireToggle();
    select(state.activeId);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
