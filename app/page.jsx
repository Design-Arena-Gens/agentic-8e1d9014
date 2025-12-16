const capitalRequirements = [
  { item: 'Land acquisition (5,000 hectares)', year1: '$7,500,000', year2: '$0', year3: '$0' },
  { item: 'Nursery infrastructure & biotech lab', year1: '$2,400,000', year2: '$250,000', year3: '$250,000' },
  { item: 'Irrigation & fertigation systems', year1: '$1,050,000', year2: '$120,000', year3: '$120,000' },
  { item: 'Field planting & mechanization', year1: '$2,250,000', year2: '$650,000', year3: '$420,000' },
  { item: 'Working capital & staffing', year1: '$1,800,000', year2: '$2,250,000', year3: '$2,400,000' },
  { item: 'Certification & regulatory compliance', year1: '$220,000', year2: '$160,000', year3: '$110,000' }
];

const revenueForecast = [
  { year: 'Year 1', seedlings: '$0', carbonCredits: '$0', timber: '$0', byProducts: '$0', total: '$0' },
  {
    year: 'Year 3',
    seedlings: '$1,050,000',
    carbonCredits: '$1,350,000',
    timber: '$0',
    byProducts: '$180,000',
    total: '$2,580,000'
  },
  {
    year: 'Year 5',
    seedlings: '$1,450,000',
    carbonCredits: '$3,150,000',
    timber: '$4,800,000',
    byProducts: '$420,000',
    total: '$9,820,000'
  },
  {
    year: 'Year 7',
    seedlings: '$1,900,000',
    carbonCredits: '$3,800,000',
    timber: '$20,250,000',
    byProducts: '$650,000',
    total: '$26,600,000'
  },
  {
    year: 'Year 10',
    seedlings: '$2,200,000',
    carbonCredits: '$4,750,000',
    timber: '$38,800,000',
    byProducts: '$850,000',
    total: '$46,600,000'
  }
];

const costStructure = [
  {
    category: 'Biotechnology & R&D',
    details: 'Genome editing, trait validation, regulatory dossiers, laboratory QA/QC',
    annual: '$1,200,000'
  },
  {
    category: 'Nursery & Field Operations',
    details: 'Tissue culture, acclimatization, planting, silviculture, drone monitoring',
    annual: '$3,350,000'
  },
  {
    category: 'Logistics & Processing',
    details: 'Harvesting equipment leases, transport, chipping, pelletization partnerships',
    annual: '$1,850,000'
  },
  {
    category: 'Corporate & Compliance',
    details: 'Salaries, insurance, ESG reporting, legal, certifications',
    annual: '$2,100,000'
  }
];

const timeline = [
  {
    phase: 'Phase 1: Foundation (Months 0-12)',
    activities: [
      'Secure land concessions and finalize environmental impact assessments',
      'Construct biotech lab and smart greenhouse nursery with 12M seedlings capacity',
      'Regulatory submissions for genetically modified (GM) pine cultivars in target jurisdictions',
      'Anchor offtake letters of intent for carbon credits and future timber supply'
    ]
  },
  {
    phase: 'Phase 2: Deployment (Months 12-36)',
    activities: [
      'Plant 1,250 hectares per year with high-density GM pine clones',
      'Deploy IoT soil monitoring network and autonomous drone surveillance',
      'Begin monetizing carbon credits through VERRA and Gold Standard registries',
      'Launch branded GM pine seedling sales to regional forestry cooperatives'
    ]
  },
  {
    phase: 'Phase 3: Scale & Harvest (Months 36-84)',
    activities: [
      'Commission onsite biochar and pelletization unit for thinnings and residues',
      'Negotiate 10-year supply agreements with engineered wood manufacturers',
      'Initiate selective harvesting at 6-7 year rotation with mechanized forwarders',
      'Expand plantation by 2,000 hectares via revenue reinvestment and debt facilities'
    ]
  }
];

const riskMitigation = [
  {
    risk: 'Regulatory delays or moratoria on GM tree deployment',
    mitigation:
      'Maintain multi-jurisdictional approvals, invest in community outreach, partner with leading forestry institutes for transparent data sharing'
  },
  {
    risk: 'Biotic stress (pests, pathogens) or climate variability',
    mitigation:
      'Stacked resistance genes, diversified clone portfolio, AI-enabled early warning system, insurance coverage for catastrophic loss'
  },
  {
    risk: 'Carbon credit price volatility',
    mitigation:
      'Blend forward-sale agreements with spot sales, pursue premium-priced biodiversity and blue carbon co-benefit credits, maintain cost discipline'
  },
  {
    risk: 'Timber market fluctuations',
    mitigation:
      'Diversify output mix (engineered lumber, pulp, bioenergy), secure multi-year contracts, invest in onsite semi-processing to capture margin'
  }
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Green Horizon Forestry Inc.</h1>
        <p>
          Green Horizon Forestry Inc. develops and operates large-scale plantations of genetically modified pine trees
          engineered for accelerated growth, pest resistance, and elevated cellulose content. The company targets the
          rising demand for sustainable timber, carbon credits, and bio-based materials while delivering superior yield
          and climate resilience compared to conventional forestry assets.
        </p>
        <div className="metrics-grid">
          <div className="metric">
            <h3>Startup Capital Required</h3>
            <span>$15.8M</span>
            <p>Equity $9.5M · Debt $6.3M</p>
          </div>
          <div className="metric">
            <h3>Projected IRR</h3>
            <span>22.4%</span>
            <p>Base-case 10-year unlevered IRR</p>
          </div>
          <div className="metric">
            <h3>Breakeven Year</h3>
            <span>Year 5</span>
            <p>Positive cumulative cash flow in year 5</p>
          </div>
          <div className="metric">
            <h3>EBITDA Margin</h3>
            <span>41%</span>
            <p>Stabilized year 7 onwards</p>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Executive Summary</h2>
        <div className="two-column">
          <div>
            <p>
              Green Horizon capitalizes on CRISPR-enabled pine cultivars that mature 35% faster, store 28% more carbon,
              and yield 22% higher fiber content than leading conventional hybrids. Located across 5,000 hectares of
              leased land in the U.S. Southeast, the project serves three revenue pillars: premium timber supply,
              high-veracity carbon credits, and licensing of enhanced seedlings to regional forestry operators.
            </p>
            <p>
              The venture seeks an initial $15.8M raise to fund land acquisition, biotech infrastructure, and first-wave
              planting. With conservative assumptions, revenue grows from $0 in year 1 to $46.6M in year 10, delivering
              cumulative free cash flow of $72.4M, a 3.6x equity multiple, and 22.4% IRR. Long-term upside stems from
              expanding plantation acreage and integrating downstream processing.
            </p>
          </div>
          <div>
            <blockquote>
              GM pine yields allow a 6-7 year harvest cycle relative to the industry standard of 10-12 years, unlocking
              a compounding advantage in asset turnover, carbon sequestration, and revenue diversity.
            </blockquote>
            <ul>
              <li>Founding team: forestry biotech, carbon finance, industrial operations</li>
              <li>Competitive moat: patent-backed traits, proprietary phenotyping data</li>
              <li>Exit pathways: IPO as sustainable timber REIT, strategic sale to timberland REIT, or infrastructure fund recap</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Market Opportunity</h2>
        <p>
          Global demand for engineered wood products, pulp, and biomass energy is expanding at ~4.9% CAGR, driven by
          urbanization, decarbonization mandates, and bans on native forest logging. Simultaneously, corporate net-zero
          commitments are set to triple demand for high-quality nature-based carbon credits, especially those featuring
          quantifiable permanence and co-benefits. Traditional forestry struggles to provide dependable volumes due to
          climate stress, pests, and longer rotations, producing a $18B supply-demand gap in North America alone by 2030.
        </p>
        <ul>
          <li>Addressable timber market: $56B in the U.S.; engineered lumber demand projected to double by 2035.</li>
          <li>Premium carbon credits: Buyers pay $18-28/tCO₂e for forestry projects with advanced MRV and genetic traceability.</li>
          <li>Seedling licensing: Regional cooperatives seek disease-resistant stock to offset rising losses (12% average).</li>
        </ul>
      </section>

      <section className="content-card">
        <h2>Value Proposition & Technology</h2>
        <div className="two-column">
          <div>
            <h3>Genetic Traits</h3>
            <ul>
              <li>Accelerated Cambial Growth: 35% faster diameter expansion via overexpression of growth hormone genes.</li>
              <li>Pitch Canker & Bark Beetle Resistance: RNAi constructs targeting pathogen and pest effectors.</li>
              <li>Enhanced Cellulose Synthesis: Up-regulated CesA pathways boosting pulp yield by 22%.</li>
            </ul>
            <h3>Biotech Pipeline</h3>
            <ul>
              <li>Tissue culture propagation with cryopreserved germplasm for clonal fidelity.</li>
              <li>Genome-wide selection using AI phenomics on UAV LiDAR datasets.</li>
              <li>Regenerative testing across variable soil profiles, validating climate resilience.</li>
            </ul>
          </div>
          <div>
            <h3>Digital Forestry Stack</h3>
            <ul>
              <li>Edge IoT sensors feeding carbon flux data into MRV dashboards (VERRA MRV API compliant).</li>
              <li>Satellite analytics predicting stress events up to 14 days ahead.</li>
              <li>Blockchain-anchored seed-to-sale registry for carbon credit provenance and timber traceability.</li>
            </ul>
            <h3>Customer Value</h3>
            <ul>
              <li>30-40% lower cost per cubic meter for timber buyers compared to imported softwood.</li>
              <li>Verified carbon removal with permanence modeling accepted by major compliance-aligned markets.</li>
              <li>Risk-mitigated supply for ESG-focused investors seeking nature-positive assets.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Operational Plan</h2>
        <div className="two-column">
          <div>
            <h3>Nursery & Propagation</h3>
            <ul>
              <li>4-hectare smart greenhouse with automated fertigation and climate control.</li>
              <li>Annual capacity of 12M saplings, supporting plantation expansion and third-party sales.</li>
              <li>In-vitro propagation ensures trait stability; genetic QC every propagation cycle.</li>
            </ul>
            <h3>Plantation Management</h3>
            <ul>
              <li>Plant spacing optimized to 1,250 trees/ha with dynamic thinning protocols.</li>
              <li>Precision fertilization based on real-time soil analytics reduces nutrient waste by 28%.</li>
              <li>Autonomous drones for canopy surveying, pest detection, and spot spraying.</li>
            </ul>
          </div>
          <div>
            <h3>Harvest & Processing</h3>
            <ul>
              <li>Selective harvest begins Year 6; full rotation harvest at Year 7 with continuous replanting.</li>
              <li>Mobile sawmills and chippers reduce transport costs by 18%.</li>
              <li>Residue conversion into biochar and pellets for additional revenue and soil health.</li>
            </ul>
            <h3>Human Capital</h3>
            <ul>
              <li>Management team of 12 covering biotech, silviculture, finance, ESG compliance.</li>
              <li>Operational workforce of 55, with partnerships for seasonal labor during planting and harvest.</li>
              <li>Ongoing training in biosafety, drone piloting, and advanced silviculture practices.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Capital Requirements (USD)</h2>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Use of Funds</th>
              <th>Year 1</th>
              <th>Year 2</th>
              <th>Year 3</th>
            </tr>
          </thead>
          <tbody>
            {capitalRequirements.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.year1}</td>
                <td>{row.year2}</td>
                <td>{row.year3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Financing Structure: $9.5M equity (Series A) paired with $6.3M in green bonds/asset-backed loans secured by
          land and forward carbon credit contracts. Debt terms modeled at 6.8% fixed interest, 10-year amortization.
        </p>
      </section>

      <section className="content-card">
        <h2>Projected Revenue Streams</h2>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Seedling & Licensing</th>
              <th>Carbon Credits</th>
              <th>Timber & Engineered Wood</th>
              <th>Biochar & Biomass</th>
              <th>Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {revenueForecast.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.seedlings}</td>
                <td>{row.carbonCredits}</td>
                <td>{row.timber}</td>
                <td>{row.byProducts}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Carbon credit forecast assumes 18 tCO₂e/ha/yr sequestration validated via LiDAR-based MRV and sold at $25/t
          average. Timber pricing modeled at $46/m³ for sawlogs and $31/m³ for pulpwood, with yield reaching 385 m³/ha by
          Year 10. Biochar sales include soil amendment contracts with regenerative agriculture collectives.
        </p>
      </section>

      <section className="content-card">
        <h2>Cost Structure & Profitability</h2>
        <table className="financial-table">
          <thead>
            <tr>
              <th>Cost Category</th>
              <th>Description</th>
              <th>Annual (steady state)</th>
            </tr>
          </thead>
          <tbody>
            {costStructure.map((row) => (
              <tr key={row.category}>
                <td>{row.category}</td>
                <td>{row.details}</td>
                <td>{row.annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Gross margin reaches 58% in Year 7 as timber output scales and nursery leverage improves. EBITDA margin
          stabilizes at 41% with operating cash flow sufficient to fund 2,000 hectares of annual expansion without
          additional equity by Year 6. Modeled sensitivity analysis shows positive NPV even under 20% price compression
          and 15% yield reduction scenarios.
        </p>
      </section>

      <section className="content-card">
        <h2>Implementation Timeline</h2>
        {timeline.map((item) => (
          <div key={item.phase}>
            <h3>{item.phase}</h3>
            <ul>
              {item.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="content-card">
        <h2>Risk & Mitigation</h2>
        <ul>
          {riskMitigation.map((risk) => (
            <li key={risk.risk}>
              <strong>{risk.risk}:</strong> {risk.mitigation}
            </li>
          ))}
        </ul>
      </section>

      <section className="content-card">
        <h2>Environmental & Social Impact</h2>
        <div className="two-column">
          <div>
            <h3>Climate Benefits</h3>
            <ul>
              <li>Net carbon removal of 720,000 tCO₂e across first rotation after leakage adjustments.</li>
              <li>Biochar application sequesters an additional 45,000 tCO₂e while improving soil fertility.</li>
              <li>Renewable biomass displaces 120 GWh of fossil-based energy annually at full scale.</li>
            </ul>
          </div>
          <div>
            <h3>Community Programs</h3>
            <ul>
              <li>5-year scholarship fund for forestry and biotech students in partner universities.</li>
              <li>Local employment preference and training pipeline for drone operations and lab technicians.</li>
              <li>Agroforestry buffer zones supporting indigenous plant species and pollinator habitats.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Financial Outlook & Exit</h2>
        <p>
          Base-case projections deliver $72.4M cumulative free cash flow over 10 years, with equity investors receiving a
          3.6x MOIC. Downside case (20% price, 10% yield haircut) maintains 14.2% IRR, while upside case (10% price
          premium, 5% extra yield) reaches 29.7% IRR. Exit flexibility includes listing as a timber-focused yield vehicle,
          strategic sale to timberland REITs seeking ESG assets, or refinancing via green infrastructure funds.
        </p>
        <p>
          Capital recycling plan reinvests $6M annually post-Year 6 into new acreage, nursery expansion, and R&D,
          supporting steady growth to 12,000 hectares by Year 10 and positioning for multi-jurisdictional replication.
        </p>
      </section>
    </main>
  );
}
