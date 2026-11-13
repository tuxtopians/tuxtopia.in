/**
 * Tuxtopia Enterprise ERP Interactive Module Switcher & UI Controller
 */

const TUXTOPIA_ERP_MODULES = {
  finance: {
    id: 'finance',
    tabLabel: 'Financial Accounting & Ledgers',
    dotColor: '#38bdf8',
    breadcrumb: 'Tuxtopia Suite / Financial Accounting / Consolidated General Ledger',
    statusTag: 'Multi-Book IFRS & GAAP Synced',
    primaryAction: '+ New Journal Entry',
    title: 'Financial Accounting & Multi-Book Ledgers',
    description: 'Real-time double-entry accounting across unlimited legal entities, cost centers, dimensions, and currencies with automated bank feeds and tax compliance.',
    capabilities: [
      'Multi-company tree & automated inter-company journal elimination',
      'Dimensional cost center & project profitability P&L reporting',
      'Automated bank statement reconciliation & SWIFT/SEPA/ACH payouts',
      'Configurable tax templates, e-Invoicing, and deferred revenue schedules'
    ],
    workflowSteps: [
      { step: '1. Sales / AP Voucher Submitted', state: 'Auto-Validated' },
      { step: '2. Dimensional Tax & Cost Allocation', state: 'Rule Engine' },
      { step: '3. Immutable GL Posting & Audit Hash', state: 'Posted' }
    ],
    kpis: [
      { label: 'CONSOLIDATED EBITDA (YTD)', value: '$4,284,910', delta: '+21.4% vs Plan' },
      { label: 'DAYS SALES OUTSTANDING', value: '24.2 Days', delta: '-6.8 Days YoY' },
      { label: 'UNRECONCILED BANK LINES', value: '0 Items', delta: '100% Auto-Matched' },
      { label: 'MULTI-CURRENCY EXPOSURE', value: '$612,400', delta: 'Hedged (EUR/GBP/JPY)' }
    ],
    tableTitle: 'Live General Ledger & Sub-Ledger Voucher Stream',
    tableBadge: 'Real-Time Double-Entry Posting',
    headers: ['Voucher ID', 'Account / Party', 'Cost Dimension', 'Debit / Credit', 'Ledger State'],
    rows: [
      { id: 'TX-ACC-2026-09412', col1: '1100 - Accounts Receivable (Aether GmbH)', col2: 'EU-Robotics-Div', col3: '$184,500.00 DR', status: 'Posted to GL', pill: 'green' },
      { id: 'TX-JV-2026-03108', col1: '2140 - Intercompany Clearing (UK ↔ US)', col2: 'HQ-Consolidation', col3: '$92,000.00 CR', status: 'Eliminated', pill: 'blue' },
      { id: 'TX-PINV-2026-07741', col1: '5010 - Raw Material COGS (Nordic Silicon)', col2: 'Plant-Austin-01', col3: '$64,890.00 DR', status: '3-Way Matched', pill: 'green' },
      { id: 'TX-DEP-2026-00419', col1: '6420 - Automated CNC Asset Depreciation', col2: 'Mfg-Machinery', col3: '$18,240.00 DR', status: 'Scheduled', pill: 'purple' }
    ],
    telemetryTitle: 'Statutory & Financial Close Readiness',
    telemetryItems: [
      { label: 'AP / AR Sub-Ledger Reconciliation', value: '100%', percent: 100 },
      { label: 'Automated Bank Feed Matching', value: '99.4%', percent: 99 },
      { label: 'Multi-Currency Revaluation Run', value: 'Complete', percent: 100 },
      { label: 'Q4 Audit Trail & Tax Lock', value: '94%', percent: 94 }
    ]
  },

  inventory: {
    id: 'inventory',
    tabLabel: 'Inventory & Multi-Warehouse',
    dotColor: '#10b981',
    breadcrumb: 'Tuxtopia Suite / Stock & Logistics / Multi-Warehouse Control Tower',
    statusTag: 'Perpetual Valuation Active',
    primaryAction: '+ New Stock Transfer',
    title: 'Inventory & Multi-Warehouse Management',
    description: 'Hierarchical bin/rack warehouse topology with full batch & serial number traceability, FIFO/Moving Average valuation, and automated reorder rules.',
    capabilities: [
      'Tree-structured warehouses, transit hubs, quarantine & bin zones',
      'End-to-end Serial Number & Expiry-Driven Batch traceability',
      'Automated Material Request generation on safety-stock thresholds',
      'Landed Cost Vouchers distributing freight, customs & insurance to SKU cost'
    ],
    workflowSteps: [
      { step: '1. ASN / Barcode Putaway Scan', state: 'Mobile WMS' },
      { step: '2. Quality Inspection Gate (AQL)', state: 'Passed' },
      { step: '3. Bin Valuation & Stock Ledger Post', state: 'Synced' }
    ],
    kpis: [
      { label: 'TOTAL STOCK VALUATION', value: '$3,412,890', delta: 'FIFO + Landed Cost' },
      { label: 'ACTIVE WAREHOUSE BINS', value: '1,840 Bins', delta: '14 Global Hubs' },
      { label: 'CYCLE COUNT ACCURACY', value: '99.94%', delta: '+0.42% vs Q3' },
      { label: 'AUTO-REPLENISHMENT ORDERS', value: '19 Active', delta: 'Zero Stockouts' }
    ],
    tableTitle: 'Perpetual Stock Ledger & Bin Movement Log',
    tableBadge: 'Serial & Batch Tracked',
    headers: ['Stock Entry', 'SKU / Item Description', 'Warehouse Route', 'Qty & UOM', 'Valuation Status'],
    rows: [
      { id: 'TX-SLE-2026-88210', col1: 'SKU-SV900 • Brushless Servo Motor 48V', col2: 'Receiving → Bin A-14-02', col3: '+450 Nos', status: 'Batch #B26-11A', pill: 'green' },
      { id: 'TX-SLE-2026-88211', col1: 'SKU-PCB42 • Industrial Controller Board', col2: 'US-East → ShopFloor WIP', col3: '-120 Nos', status: 'Serial Verified', pill: 'blue' },
      { id: 'TX-LCV-2026-00914', col1: 'Landed Duty & Air Freight Allocation', col2: 'EU-Rotterdam Bonded Hub', col3: '+$8,420.00', status: 'Cost Capitalized', pill: 'purple' },
      { id: 'TX-MR-2026-04102', col1: 'SKU-TI64 • Aerospace Titanium Rod 12mm', col2: 'Auto-Reorder Trigger', col3: '1,000 Kg', status: 'RFQ Dispatched', pill: 'amber' }
    ],
    telemetryTitle: 'Global Warehouse Capacity & Turnover',
    telemetryItems: [
      { label: 'US-East Automated Distribution Hub', value: '92% Utilized', percent: 92 },
      { label: 'EU-Central Cold & ESD Storage', value: '78% Utilized', percent: 78 },
      { label: 'APAC Assembly Staging Zone', value: '85% Utilized', percent: 85 },
      { label: 'Batch & Serial Compliance Coverage', value: '100%', percent: 100 }
    ]
  },

  manufacturing: {
    id: 'manufacturing',
    tabLabel: 'Manufacturing & BOM / MRP',
    dotColor: '#f59e0b',
    breadcrumb: 'Tuxtopia Suite / Manufacturing / Shop Floor & MRP Execution',
    statusTag: 'Shop-Floor OEE Telemetry Live',
    primaryAction: '+ Create Work Order',
    title: 'Manufacturing, Multi-Level BOM & Work Orders',
    description: 'Complete discrete and process manufacturing suite featuring multi-level Bills of Materials, capacity-aware Production Planning (MRP), workstation Job Cards, and subcontracting.',
    capabilities: [
      'Multi-level nested BOMs with routing operations, scrap % & alternative items',
      'MRP Production Plan exploding sales forecasts into Work Orders & Purchase RFQs',
      'Shop-floor tablet Job Cards with operator timer, workstation cost & QC gates',
      'Subcontracting workflows tracking raw material transfers to external vendors'
    ],
    workflowSteps: [
      { step: '1. MRP Production Plan Explosion', state: 'Capacity Checked' },
      { step: '2. Material Backflush to WIP', state: 'Issued' },
      { step: '3. Job Card QC & Finished Goods Receipt', state: 'Completed' }
    ],
    kpis: [
      { label: 'ACTIVE WORK ORDERS', value: '128 Runs', delta: '96.2% On-Schedule' },
      { label: 'SHOP FLOOR OEE SCORE', value: '91.8%', delta: '+4.1% Efficiency' },
      { label: 'FIRST-PASS QUALITY YIELD', value: '99.3%', delta: 'ISO-9001 Gate' },
      { label: 'VARIANCE VS STANDARD BOM', value: '-1.2%', delta: 'Under Target Cost' }
    ],
    tableTitle: 'Active Work Orders, Routing Operations & Job Cards',
    tableBadge: 'Real-Time Workstation Feed',
    headers: ['Work Order', 'BOM & Finished Assembly', 'Workstation / Routing', 'Progress', 'Shop Status'],
    rows: [
      { id: 'TX-WO-2026-01184', col1: 'BOM-TX900-v4 • 6-Axis Actuator Unit', col2: 'CNC-Cell-03 → Laser Weld', col3: '420 / 500 Nos', status: 'In Operation', pill: 'blue' },
      { id: 'TX-JC-2026-09451', col1: 'Op #20: Stator Winding & Thermal Cure', col2: 'Automated Line B2', col3: '250 / 250 Nos', status: 'QC Passed', pill: 'green' },
      { id: 'TX-SUB-2026-00319', col1: 'Anodized Housing Surface Treatment', col2: 'Subcontract: EloxTech AG', col3: '800 / 800 Nos', status: 'Received in Stock', pill: 'green' },
      { id: 'TX-PP-2026-00087', col1: 'Q1 Master Production Schedule (MRP)', col2: '14 Assemblies • 86 Sub-SKUs', col3: '100% Planned', status: 'MRs Generated', pill: 'purple' }
    ],
    telemetryTitle: 'Workstation Load & Capacity Planning',
    telemetryItems: [
      { label: '5-Axis CNC Machining Center', value: '94% Load', percent: 94 },
      { label: 'SMT Pick-and-Place Line #1', value: '88% Load', percent: 88 },
      { label: 'Robotic Calibration & Burn-In Rig', value: '79% Load', percent: 79 },
      { label: 'In-Line Optical Quality Inspection', value: '99.3% Pass', percent: 99 }
    ]
  },

  sales: {
    id: 'sales',
    tabLabel: 'Sales & Omnichannel CRM',
    dotColor: '#ec4899',
    breadcrumb: 'Tuxtopia Suite / Selling & CRM / Pipeline & Order-to-Cash',
    statusTag: 'Dynamic Pricing Rules Active',
    primaryAction: '+ New Quotation',
    title: 'Sales, Omnichannel CRM & Order-to-Cash',
    description: 'Unify lead capture, opportunity scoring, CPQ quotations, dynamic price lists, credit limit enforcement, and automated recurring subscription billing.',
    capabilities: [
      '360° Customer timeline combining emails, calls, quotes, orders & support tickets',
      'Rule-based Price Lists, promotional schemes, volume tiers & margin guards',
      'Automated credit limit & overdue receivable holds prior to dispatch',
      'Available-to-Promise (ATP) stock reservation & drop-ship order routing'
    ],
    workflowSteps: [
      { step: '1. Lead & Opportunity Qualification', state: 'CRM Scored' },
      { step: '2. Multi-Currency CPQ Quotation', state: 'Approved' },
      { step: '3. Sales Order → Delivery → Invoice', state: 'Automated' }
    ],
    kpis: [
      { label: 'QUARTERLY PIPELINE VALUE', value: '$8,940,000', delta: '3.8x Quota Coverage' },
      { label: 'QUOTE-TO-CLOSE VELOCITY', value: '6.4 Days', delta: '-42% Faster CPQ' },
      { label: 'ON-TIME IN-FULL (OTIF)', value: '98.7%', delta: 'ATP Stock Reserved' },
      { label: 'NET REVENUE RETENTION', value: '118.5%', delta: 'Subscription Engine' }
    ],
    tableTitle: 'Enterprise Opportunities, Quotations & Sales Orders',
    tableBadge: 'Margin & Credit Verified',
    headers: ['Document ID', 'Customer Account', 'Price List / Terms', 'Net Value', 'Fulfillment Stage'],
    rows: [
      { id: 'TX-SO-2026-06412', col1: 'Vanguard Aerospace Systems Inc.', col2: 'Enterprise USD • Net 30', col3: '$342,800.00', status: 'Reserved & Picking', pill: 'green' },
      { id: 'TX-QTN-2026-02918', col1: 'KronoMed Diagnostics GmbH', col2: 'EU MedTech Tier 1 • EUR', col3: '$128,450.00', status: 'Awaiting E-Sign', pill: 'blue' },
      { id: 'TX-SO-2026-06409', col1: 'Pacific Grid Infrastructure Ltd.', col2: 'Contract Pricing • LC', col3: '$519,000.00', status: 'Partial Delivery', pill: 'amber' },
      { id: 'TX-SUB-2026-01044', col1: '240 Active Enterprise SLA Contracts', col2: 'Auto-Recurring Monthly', col3: '$196,000.00', status: 'Auto-Invoiced', pill: 'purple' }
    ],
    telemetryTitle: 'Order-to-Cash Funnel Performance',
    telemetryItems: [
      { label: 'CPQ Margin Policy Compliance', value: '100%', percent: 100 },
      { label: 'Automated Credit Check Clearance', value: '96.5%', percent: 96 },
      { label: 'Same-Day Warehouse Pick Release', value: '94.2%', percent: 94 },
      { label: 'Customer Portal Self-Service Usage', value: '82%', percent: 82 }
    ]
  },

  procurement: {
    id: 'procurement',
    tabLabel: 'Procurement & Supplier Portal',
    dotColor: '#6366f1',
    breadcrumb: 'Tuxtopia Suite / Buying / Strategic Sourcing & Supplier Portal',
    statusTag: '3-Way Match Enforced',
    primaryAction: '+ Issue Request for Quotation',
    title: 'Procurement, RFQs & Self-Service Supplier Portal',
    description: 'Eliminate maverick spend with automated material requisitions, vendor RFQ bidding portals, comparative supplier scorecards, blanket orders, and strict 3-way matching.',
    capabilities: [
      'Dedicated Supplier Portal for vendors to submit RFQ bids, ASNs & invoices',
      'Side-by-side Supplier Quotation comparison by lead time, price & quality rating',
      'Strict 3-Way Matching (Purchase Order ↔ Purchase Receipt ↔ Supplier Invoice)',
      'Multi-tier approval matrices based on department budget and capex thresholds'
    ],
    workflowSteps: [
      { step: '1. MRP / Dept Material Requisition', state: 'Budget Checked' },
      { step: '2. Supplier Portal RFQ Bid Comparison', state: 'Best Bid Selected' },
      { step: '3. PO → Goods Receipt → 3-Way AP Match', state: 'Verified' }
    ],
    kpis: [
      { label: 'MANAGED SPEND UNDER PO', value: '99.1%', delta: 'Zero Maverick Spend' },
      { label: 'PROCUREMENT COST SAVINGS', value: '$742,000', delta: '11.4% via Portal RFQs' },
      { label: 'SUPPLIER ON-TIME DELIVERY', value: '96.8%', delta: '185 Active Vendors' },
      { label: '3-WAY MATCH AUTOMATION', value: '98.2%', delta: 'Touchless AP Posting' }
    ],
    tableTitle: 'Active RFQs, Purchase Orders & 3-Way Match Queue',
    tableBadge: 'Vendor Portal Connected',
    headers: ['Procurement Doc', 'Vendor / Supplier', 'Sourcing Category', 'Total Amount', 'Portal / Match State'],
    rows: [
      { id: 'TX-PO-2026-04821', col1: 'Nordic Silicon Wafer Foundry AB', col2: 'Semiconductors • Blanket PO', col3: '$218,500.00', status: 'ASN Confirmed', pill: 'green' },
      { id: 'TX-RFQ-2026-00912', col1: '4 Invited Precision Casting Vendors', col2: 'CNC Aluminum Enclosures', col3: 'Est. $85,000', status: '4/4 Bids Received', pill: 'blue' },
      { id: 'TX-PR-2026-08320', col1: 'Kyoto Linear Motion Co., Ltd.', col2: 'Ball Screws & Guides', col3: '$94,120.00', status: '3-Way Matched', pill: 'green' },
      { id: 'TX-BO-2026-00145', col1: 'Global Packaging & Cold-Chain Corp', col2: 'Annual Blanket Agreement', col3: '$150,000.00', status: '68% Drawn Down', pill: 'purple' }
    ],
    telemetryTitle: 'Vendor Scorecard & Spend Governance',
    telemetryItems: [
      { label: 'Touchless 3-Way Invoice Matching', value: '98.2%', percent: 98 },
      { label: 'Departmental Budget Adherence', value: '100%', percent: 100 },
      { label: 'Supplier Quality Acceptance Rate', value: '99.1%', percent: 99 },
      { label: 'Vendor Portal Bid Participation', value: '91%', percent: 91 }
    ]
  },

  hr: {
    id: 'hr',
    tabLabel: 'HR, Payroll & Shift Ops',
    dotColor: '#a855f7',
    breadcrumb: 'Tuxtopia Suite / Human Capital / Global Payroll & Workforce',
    statusTag: 'Biometric & Tax Engine Live',
    primaryAction: '+ Run Payroll Entry',
    title: 'Human Resources, Multi-Region Payroll & Workforce Management',
    description: 'Manage the complete employee lifecycle from recruitment and onboarding to biometric shift attendance, leave accruals, expense claims, appraisals, and multi-jurisdiction payroll.',
    capabilities: [
      'Configurable salary structures with formula-based earnings, deductions & tax slabs',
      'Biometric & mobile geofenced attendance synced directly to shift rosters',
      'Employee Self-Service (ESS) portal for leave requests, tax declarations & payslips',
      'Automated payroll journal posting to General Ledger cost centers'
    ],
    workflowSteps: [
      { step: '1. Shift Roster & Biometric Attendance', state: 'Synced' },
      { step: '2. Leave, Overtime & Expense Cutoff', state: 'Approved' },
      { step: '3. Bulk Salary Slip & Bank ACH File', state: 'Disbursed' }
    ],
    kpis: [
      { label: 'ACTIVE GLOBAL HEADCOUNT', value: '642 Staff', delta: '6 Legal Entities' },
      { label: 'PAYROLL PROCESSING TIME', value: '18 Mins', delta: '100% Formula-Driven' },
      { label: 'SHIFT ATTENDANCE SYNC', value: '99.8%', delta: 'Biometric + Mobile ESS' },
      { label: 'EXPENSE REIMBURSEMENT SLA', value: '48 Hours', delta: 'OCR Receipt Verified' }
    ],
    tableTitle: 'Payroll Runs, Shift Rosters & Employee Lifecycle Stream',
    tableBadge: 'ESS Portal & GL Integrated',
    headers: ['HCM Record', 'Department / Cohort', 'Period / Cycle', 'Financial Impact', 'Compliance Status'],
    rows: [
      { id: 'TX-PAY-2026-11-US', col1: 'US Engineering, Sales & Operations (310)', col2: 'Nov 2026 Monthly', col3: '$2,148,900.00', status: 'ACH Disbursed & GL', pill: 'green' },
      { id: 'TX-PAY-2026-11-EU', col1: 'DACH Manufacturing & R&D Hub (195)', col2: 'Nov 2026 SEPA', col3: '€1,190,400.00', status: 'SEPA XML Ready', pill: 'blue' },
      { id: 'TX-SFT-2026-W46', col1: '24/7 Plant Shift Rotation (3-Shift)', col2: 'Week 46 Biometric Log', col3: '7,840 Roster Hrs', status: 'Overtime Calculated', pill: 'purple' },
      { id: 'TX-EXP-2026-04192', col1: 'Field Service & Implementation Travel', col2: '48 Verified Claims', col3: '$31,420.00', status: 'Reimbursed', pill: 'green' }
    ],
    telemetryTitle: 'Workforce & Payroll Automation Metrics',
    telemetryItems: [
      { label: 'Statutory Tax & Social Contribution Accuracy', value: '100%', percent: 100 },
      { label: 'Employee Self-Service Portal Adoption', value: '97%', percent: 97 },
      { label: 'Biometric Device Real-Time Sync', value: '99.8%', percent: 99 },
      { label: 'Automated Cost-Center Salary Allocation', value: '100%', percent: 100 }
    ]
  },

  projects: {
    id: 'projects',
    tabLabel: 'Projects & Timesheets',
    dotColor: '#14b8a6',
    breadcrumb: 'Tuxtopia Suite / Projects & PSA / Milestone Billing & Costing',
    statusTag: 'Real-Time Margin Tracking',
    primaryAction: '+ New Project / Task',
    title: 'Projects, Timesheet Costing & Milestone Billing',
    description: 'Connect engineering, R&D, and client delivery projects directly to timesheets, procurement expenses, inventory issues, and automated milestone or T&M invoicing.',
    capabilities: [
      'Work Breakdown Structure (WBS) with Gantt dependencies, Kanban boards & milestones',
      'Activity-based Timesheet costing linking employee billing rates to project P&L',
      'Automated Time & Materials (T&M) and fixed-milestone progress invoicing',
      'Direct attribution of Purchase Orders and Stock Entries to project budgets'
    ],
    workflowSteps: [
      { step: '1. Project WBS & Resource Allocation', state: 'Baseline Set' },
      { step: '2. Timesheet & Material Cost Capture', state: 'Costed' },
      { step: '3. Milestone Sign-Off & Progress Invoice', state: 'Billed' }
    ],
    kpis: [
      { label: 'ACTIVE ENTERPRISE PROJECTS', value: '46 Live', delta: '$12.4M Contract Value' },
      { label: 'BILLABLE UTILIZATION RATE', value: '87.4%', delta: '+6.2% vs Target' },
      { label: 'AVERAGE PROJECT GROSS MARGIN', value: '44.8%', delta: 'Real-Time Costing' },
      { label: 'UNBILLED WORK-IN-PROGRESS', value: '$142,000', delta: 'Auto-Billing Queued' }
    ],
    tableTitle: 'Active Portfolio, Timesheet Costing & Milestone Billing',
    tableBadge: 'PSA & Ledger Connected',
    headers: ['Project ID', 'Project & Client / Internal Initiative', 'Billing Model', 'Budget vs Actual', 'Milestone State'],
    rows: [
      { id: 'TX-PRJ-2026-0108', col1: 'Automated Warehouse Robotics Rollout — Apex Corp', col2: 'Milestone + Material', col3: '$680k / $950k', status: 'Phase 3 Billed', pill: 'green' },
      { id: 'TX-PRJ-2026-0114', col1: 'Global Multi-Entity ERP Deployment — HelioEnergy', col2: 'Time & Materials', col3: '1,420 Billable Hrs', status: 'On Track (94%)', pill: 'blue' },
      { id: 'TX-TS-2026-09812', col1: 'Engineering & Solution Architecture Timesheets', col2: 'Week 45 Approved Batch', col3: '$118,400 Billable', status: 'Invoiced to AR', pill: 'green' },
      { id: 'TX-PRJ-2026-0119', col1: 'Next-Gen Servo Firmware R&D Capitalization', col2: 'Internal Capex Project', col3: '$210k / $250k', status: 'Asset Capitalized', pill: 'purple' }
    ],
    telemetryTitle: 'Portfolio Delivery & Margin Health',
    telemetryItems: [
      { label: 'On-Time Milestone Completion Rate', value: '95.4%', percent: 95 },
      { label: 'Timesheet Submission Compliance', value: '99.1%', percent: 99 },
      { label: 'Budget Variance Control (< 3% Drift)', value: '93%', percent: 93 },
      { label: 'Automated T&M Invoice Conversion', value: '100%', percent: 100 }
    ]
  },

  pos: {
    id: 'pos',
    tabLabel: 'Retail & Cloud POS',
    dotColor: '#f97316',
    breadcrumb: 'Tuxtopia Suite / Omnichannel Retail / Offline-First Cloud POS',
    statusTag: 'Offline IndexedDB Sync Ready',
    primaryAction: '+ New POS Closing Voucher',
    title: 'Omnichannel Retail & Offline-First Point of Sale',
    description: 'High-speed touchscreen and barcode POS engineered for multi-store retail, showrooms, and trade counters—with offline browser resilience, split tender payments, and loyalty points.',
    capabilities: [
      'Offline-first local caching allowing uninterrupted checkout during internet outages',
      'Instant barcode/serial scanning, weighted scales, promo bundles & loyalty redemption',
      'Multi-tender split payments (Card terminal, Cash, Store Credit, Gift Voucher, QR)',
      'Automated end-of-shift POS Closing Voucher consolidating cash/card to GL & Stock'
    ],
    workflowSteps: [
      { step: '1. POS Opening Entry & Float Count', state: 'Register Open' },
      { step: '2. High-Speed Barcode & Split Checkout', state: 'Sub-Second' },
      { step: '3. Shift Closing & Consolidated GL Post', state: 'Reconciled' }
    ],
    kpis: [
      { label: 'ACTIVE RETAIL REGISTERS', value: '84 Terminals', delta: '100% Uptime (Offline-Capable)' },
      { label: 'DAILY POS TRANSACTIONS', value: '14,280 Sales', delta: 'Avg Checkout: 4.8s' },
      { label: 'OMNICHANNEL STOCK SYNC', value: '< 1.2 Sec', delta: 'Store + eCommerce Unified' },
      { label: 'CASH DRAWER VARIANCE', value: '$0.00', delta: 'All Shifts Reconciled' }
    ],
    tableTitle: 'Live Store Registers, Shift Closings & Omnichannel Orders',
    tableBadge: 'Real-Time Store Telemetry',
    headers: ['POS Voucher', 'Store / Terminal Location', 'Tender Breakdown', 'Net Settlement', 'Sync Status'],
    rows: [
      { id: 'TX-POS-2026-44910', col1: 'Flagship Trade Counter #1 — Munich', col2: 'Card (82%) • Cash (18%)', col3: '$48,920.00', status: 'Shift Closed & Posted', pill: 'green' },
      { id: 'TX-POS-2026-44911', col1: 'Austin Industrial Parts Showroom', col2: 'B2B Account + Card Split', col3: '$64,150.00', status: 'Live Register Active', pill: 'blue' },
      { id: 'TX-BOPIS-2026-1904', col1: 'Buy-Online-Pickup-In-Store (38 Orders)', col2: 'Web Store → Retail Bin', col3: '$19,480.00', status: 'Picked & Handed Over', pill: 'green' },
      { id: 'TX-LYL-2026-00812', col1: 'Tuxtopia Tiered Loyalty & Rebate Engine', col2: '4,120 Points Redeemed', col3: '$12,360.00', status: 'Liability Adjusted', pill: 'purple' }
    ],
    telemetryTitle: 'Retail Checkout & Inventory Accuracy',
    telemetryItems: [
      { label: 'Offline-to-Cloud Queue Synchronization', value: '100%', percent: 100 },
      { label: 'Terminal Payment Gateway Authorization', value: '99.9%', percent: 99 },
      { label: 'Real-Time Store Shelf Depletion Sync', value: '100%', percent: 100 },
      { label: 'Loyalty Member Repeat Purchase Rate', value: '68%', percent: 68 }
    ]
  },

  workflows: {
    id: 'workflows',
    tabLabel: 'Custom ERP Workflows & API',
    dotColor: '#38bdf8',
    breadcrumb: 'Tuxtopia Suite / Platform Studio / Custom Doctypes, Workflows & API Bus',
    statusTag: 'Zero-Downtime Metadata Engine',
    primaryAction: '+ New Custom Workflow',
    title: 'Custom ERP Workflows, Doctypes & Integration Studio',
    description: 'Adapt the ERP to your exact business DNA without brittle core forks. Build custom data models, multi-stage state machines, server scripts, PDF print formats, and REST/Webhook integrations.',
    capabilities: [
      'Visual Document Type & Custom Field builder with upgrade-safe schema migrations',
      'Multi-step role-based approval state machines with conditional branching & SLA alerts',
      'Sandboxed Python server hooks, scheduled background workers & custom REST endpoints',
      'Pre-built connectors for Shopify, WooCommerce, Stripe, Plaid, 3PLs, EDI & BI warehouses'
    ],
    workflowSteps: [
      { step: '1. Custom Doctype & Field Schema Defined', state: 'Metadata Synced' },
      { step: '2. Role-Based State Machine & Webhook Rule', state: 'Active' },
      { step: '3. Automated Execution & Audit Logging', state: '99.99% SLA' }
    ],
    kpis: [
      { label: 'CUSTOM WORKFLOWS DEPLOYED', value: '38 Pipelines', delta: 'Zero Core Code Forks' },
      { label: 'DAILY API & WEBHOOK EVENTS', value: '1.42M Calls', delta: '99.99% Delivery SLA' },
      { label: 'MANUAL DATA ENTRY SAVED', value: '1,240 Hrs/Mo', delta: 'End-to-End Automation' },
      { label: 'SCHEMA UPGRADE COMPATIBILITY', value: '100%', delta: 'Metadata-Driven Fixtures' }
    ],
    tableTitle: 'Active Custom Workflows, Server Hooks & Integration Streams',
    tableBadge: 'Tuxtopia Automation Engine',
    headers: ['Automation ID', 'Custom Workflow / Integration Pipeline', 'Trigger Event', 'Execution Volume', 'Health'],
    rows: [
      { id: 'TX-WFL-2026-001', col1: 'Multi-Tier Capex PO Approval ($10k / $50k / CFO)', col2: 'On PO Submit', col3: '412 Approvals/Mo', status: 'Active • 0 Bottlenecks', pill: 'green' },
      { id: 'TX-INT-2026-014', col1: 'Shopify Plus + Amazon FBA 2-Way Order & Stock Sync', col2: 'Webhook + 60s Delta', col3: '48,500 Orders/Mo', status: 'Synced (140ms)', pill: 'blue' },
      { id: 'TX-SCR-2026-029', col1: 'Automated Vendor Quality Hold & NCR Creation', col2: 'On QC Inspection Fail', col3: '100% Automated', status: 'Enforced', pill: 'purple' },
      { id: 'TX-BI-2026-008', col1: 'Incremental CDC Stream to Snowflake & PowerBI', col2: 'Every 5 Minutes', col3: '2.8M Rows/Day', status: 'Streaming Live', pill: 'green' }
    ],
    telemetryTitle: 'Integration Bus & Custom Engine Telemetry',
    telemetryItems: [
      { label: 'Webhook & REST API Uptime SLA', value: '99.99%', percent: 100 },
      { label: 'Background Queue Worker Throughput', value: '96%', percent: 96 },
      { label: 'Role-Based Permission & Field-Level Security', value: '100%', percent: 100 },
      { label: 'Automated Regression Test Coverage', value: '94%', percent: 94 }
    ]
  }
};

function renderErpModule(moduleKey) {
  const mod = TUXTOPIA_ERP_MODULES[moduleKey];
  if (!mod) return;

  // Update active button state
  document.querySelectorAll('.module-tab-btn').forEach((btn) => {
    const isMatch = btn.getAttribute('data-module') === moduleKey;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });

  // Update topbar elements
  const breadcrumbEl = document.getElementById('erp-breadcrumb-text');
  const statusTagEl = document.getElementById('erp-status-tag');
  const primaryActionEl = document.getElementById('erp-primary-action');

  if (breadcrumbEl) breadcrumbEl.textContent = mod.breadcrumb;
  if (statusTagEl) statusTagEl.textContent = mod.statusTag;
  if (primaryActionEl) primaryActionEl.textContent = mod.primaryAction;

  // Update sidebar details
  const titleEl = document.getElementById('erp-mod-title');
  const descEl = document.getElementById('erp-mod-desc');
  const capListEl = document.getElementById('erp-cap-list');
  const workflowEl = document.getElementById('erp-workflow-steps');

  if (titleEl) titleEl.textContent = mod.title;
  if (descEl) descEl.textContent = mod.description;

  if (capListEl) {
    capListEl.innerHTML = mod.capabilities
      .map(
        (cap) => `
        <li class="erp-capability-item">
          <span class="check">✓</span>
          <span>${cap}</span>
        </li>`
      )
      .join('');
  }

  if (workflowEl) {
    workflowEl.innerHTML = mod.workflowSteps
      .map(
        (wf) => `
        <div class="workflow-step">
          <span>${wf.step}</span>
          <span class="step-state">${wf.state}</span>
        </div>`
      )
      .join('');
  }

  // Update KPI Cards
  const kpiRowEl = document.getElementById('erp-kpi-row');
  if (kpiRowEl) {
    kpiRowEl.innerHTML = mod.kpis
      .map(
        (k) => `
        <div class="erp-kpi-card">
          <div class="erp-kpi-label">${k.label}</div>
          <div class="erp-kpi-value">${k.value}</div>
          <div class="erp-kpi-delta">${k.delta}</div>
        </div>`
      )
      .join('');
  }

  // Update Data Table
  const tableTitleEl = document.getElementById('erp-table-title');
  const tableBadgeEl = document.getElementById('erp-table-badge');
  const tableHeadEl = document.getElementById('erp-table-head');
  const tableBodyEl = document.getElementById('erp-table-body');

  if (tableTitleEl) tableTitleEl.textContent = mod.tableTitle;
  if (tableBadgeEl) tableBadgeEl.textContent = mod.tableBadge;

  if (tableHeadEl) {
    tableHeadEl.innerHTML = `<tr>${mod.headers.map((h) => `<th>${h}</th>`).join('')}</tr>`;
  }

  if (tableBodyEl) {
    tableBodyEl.innerHTML = mod.rows
      .map(
        (r) => `
        <tr>
          <td><span class="erp-doc-id">${r.id}</span></td>
          <td><strong style="color: var(--text-primary);">${r.col1}</strong></td>
          <td>${r.col2}</td>
          <td class="mono" style="color: var(--text-primary); font-weight: 600;">${r.col3}</td>
          <td><span class="status-pill ${r.pill}">${r.status}</span></td>
        </tr>`
      )
      .join('');
  }

  // Update Telemetry Panel
  const telemetryTitleEl = document.getElementById('erp-telemetry-title');
  const telemetryListEl = document.getElementById('erp-telemetry-list');

  if (telemetryTitleEl) telemetryTitleEl.textContent = mod.telemetryTitle;
  if (telemetryListEl) {
    telemetryListEl.innerHTML = mod.telemetryItems
      .map(
        (t) => `
        <div class="telemetry-item">
          <div class="telemetry-item-top">
            <span>${t.label}</span>
            <span>${t.value}</span>
          </div>
          <div class="telemetry-bar-bg">
            <div class="telemetry-bar-fill" style="width: ${t.percent}%;"></div>
          </div>
        </div>`
      )
      .join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Module Switcher Tabs
  const tabContainer = document.getElementById('erp-module-tabs');
  if (tabContainer) {
    tabContainer.innerHTML = Object.values(TUXTOPIA_ERP_MODULES)
      .map(
        (m, idx) => `
        <button
          type="button"
          class="module-tab-btn ${idx === 0 ? 'active' : ''}"
          data-module="${m.id}"
          role="tab"
          aria-selected="${idx === 0 ? 'true' : 'false'}"
        >
          <span class="module-tab-dot" style="background-color: ${m.dotColor};"></span>
          <span>${m.tabLabel}</span>
        </button>`
      )
      .join('');

    tabContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.module-tab-btn');
      if (!btn) return;
      const moduleKey = btn.getAttribute('data-module');
      renderErpModule(moduleKey);
    });
  }

  // Render default module (Finance)
  renderErpModule('finance');

  const closeEnterpriseNav = () => {
    document.body.classList.remove('nav-open');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-item.has-menu').forEach((item) => {
      item.classList.remove('is-open');
      const trigger = item.querySelector('.nav-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  };

  const isCompactNav = () => window.matchMedia('(max-width: 1080px)').matches;

  const setMenuOpen = (item, open) => {
    item.classList.toggle('is-open', open);
    const trigger = item.querySelector('.nav-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  document.querySelectorAll('.nav-item.has-menu').forEach((item) => {
    const trigger = item.querySelector('.nav-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      if (!isCompactNav()) return;
      e.preventDefault();
      const willOpen = !item.classList.contains('is-open');
      document.querySelectorAll('.nav-item.has-menu').forEach((other) => {
        if (other !== item) setMenuOpen(other, false);
      });
      setMenuOpen(item, willOpen);
    });

    item.addEventListener('mouseenter', () => {
      if (isCompactNav()) return;
      document.querySelectorAll('.nav-item.has-menu').forEach((other) => {
        setMenuOpen(other, other === item);
        if (other !== item) other.querySelector('.nav-trigger')?.blur();
      });
    });

    item.addEventListener('mouseleave', () => {
      if (isCompactNav()) return;
      setMenuOpen(item, false);
    });
  });

  const menuBtn = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('nav-overlay');
  const drawerClose = document.getElementById('drawer-close');
  const header = document.getElementById('site-header');

  const openDrawer = () => {
    document.body.classList.add('nav-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (document.body.classList.contains('nav-open')) {
        closeEnterpriseNav();
      } else {
        openDrawer();
      }
    });
  }

  if (overlay) overlay.addEventListener('click', closeEnterpriseNav);
  if (drawerClose) drawerClose.addEventListener('click', closeEnterpriseNav);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEnterpriseNav();
  });

  window.addEventListener('resize', () => {
    if (!isCompactNav()) closeEnterpriseNav();
  });

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });

  document.querySelectorAll('#primary-nav a').forEach((link) => {
    link.addEventListener('click', () => closeEnterpriseNav());
  });

  // Allow clicking any module card in the 9-module grid to jump to & activate that module in the live command center
  document.querySelectorAll('[data-jump-module]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetMod = el.getAttribute('data-jump-module');
      renderErpModule(targetMod);
      closeEnterpriseNav();
      const showcase = document.getElementById('interactive-platform');
      if (showcase) {
        showcase.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Consultation Form Handler
  const consultForm = document.getElementById('tuxtopia-consultation-form');
  const formStatus = document.getElementById('consultation-form-status');
  if (consultForm && formStatus) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(consultForm);
      const company = formData.get('company') || 'your organization';
      const scope = formData.get('scope') || 'Enterprise ERP Rollout';
      formStatus.style.display = 'block';
      formStatus.textContent = `✓ Blueprint request logged for ${company} (${scope}). A Tuxtopia Principal ERP Architect will reach out within 4 business hours with a tailored sandbox & rollout plan.`;
      consultForm.reset();
    });
  }
});
