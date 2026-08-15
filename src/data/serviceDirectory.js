import { serviceCategories } from "./content.js";
import { certifyingBodyLogos } from "./assetLists.js";

export const slugify = (value) => value
  .toLowerCase()
  .replace(/&/g, "and")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const categoryProfiles = {
  "Management System Certification": {
    eyebrow: "Management systems",
    title: "Systems that make good work repeatable.",
    intro: "From quality and energy to information security, these standards turn important controls into everyday habits, owned by the people who run the work.",
    image: "/assets/team/team-photo-3.jpeg",
  },
  "Food & Packaging Safety": {
    eyebrow: "Food and packaging assurance",
    title: "Confidence that travels through the supply chain.",
    intro: "Choose a food, feed or packaging programme that fits your product, hazards, customers and market obligations—from prerequisite controls to retailer-ready evidence.",
    image: "/assets/team/team-photo-2.jpeg",
  },
  "Automotive, Aerospace & Labs": {
    eyebrow: "High-assurance sectors",
    title: "Precision where the stakes are high.",
    intro: "These services are built for exacting technical environments where traceability, competence, risk control and customer-specific requirements must work together.",
    image: "/assets/team/team-photo-1.png",
  },
  "Product & Country Specific": {
    eyebrow: "Product and regulatory access",
    title: "Move a compliant product into the right market.",
    intro: "Product rules vary by destination and risk. Find the route that connects design evidence, testing, declarations and approvals to your intended market.",
    image: "/assets/team/team-photo-11.png",
  },
  "Export Market Compliance": {
    eyebrow: "Export documentation",
    title: "Make every shipment easier to clear.",
    intro: "Country-of-destination programmes can require product evidence before goods leave the port. These services organise the documentation, inspection and approval path for each market.",
    image: "/assets/team/team-photo-3.jpeg",
  },
  "ESG & Sustainability": {
    eyebrow: "Responsible business",
    title: "Put credible sustainability evidence behind your claims.",
    intro: "Address social responsibility, supply-chain transparency, carbon and lifecycle impacts with a programme that can be measured, reviewed and shared with customers.",
    image: "/assets/team/team-photo-11.png",
  },
  "Textile & Recycled Claims": {
    eyebrow: "Textile and material claims",
    title: "Keep product claims traceable from source to sale.",
    intro: "Material standards help brands and manufacturers substantiate organic, recycled and responsible-sourcing claims through purchasing, processing, segregation and transaction records.",
    image: "/assets/team/team-photo-2.jpeg",
  },
  "Management Area Training": {
    eyebrow: "Capability building",
    title: "Give improvement work a shared language.",
    intro: "These workshops turn management ideas into practical routines: clearer workplaces, better flow, useful measures and teams equipped to solve the next problem themselves.",
    image: "/assets/team/team-photo-1.png",
  },
};

const serviceProfiles = {
  "ISO 9001": { title: "Make quality visible in every hand-off.", description: "ISO 9001 brings customer requirements, process ownership and improvement into one workable quality management system.", perspective: "Useful for organisations that want fewer recurring issues and a clearer way to control how work moves from enquiry to delivery.", outcomes: ["Defined process owners", "Evidence-led customer focus", "A practical improvement cycle"] },
  "ISO 13485": { title: "Build control around medical-device quality.", description: "ISO 13485 structures the quality system for medical devices around product safety, traceability, risk and regulatory expectations.", perspective: "It is designed for manufacturers and suppliers that need disciplined documentation without losing sight of patient and product safety.", outcomes: ["Device lifecycle traceability", "Controlled quality records", "Risk-aware process controls"] },
  "ISO 14001": { title: "Turn environmental intent into daily decisions.", description: "ISO 14001 helps organisations identify significant environmental impacts and manage them through measurable operational controls.", perspective: "It suits teams ready to connect resource use, waste, compliance duties and improvement targets to actual site activity.", outcomes: ["Prioritised environmental aspects", "Clear legal-obligation oversight", "Resource-efficiency actions"] },
  "ISO 22000": { title: "Give food safety a dependable operating rhythm.", description: "ISO 22000 combines hazard analysis, prerequisite programmes and management-system discipline across the food chain.", perspective: "The standard is a strong fit where suppliers, production teams and customers need a common way to prevent and verify food-safety failures.", outcomes: ["HACCP-based control plan", "Traceable food-safety records", "Verified communication routes"] },
  "ISO 27001": { title: "Protect information with decisions you can defend.", description: "ISO 27001 establishes a risk-based information-security management system for confidential, accurate and available information.", perspective: "Use it to bring people, technology and supplier controls into a single governance model rather than treating security as an IT-only task.", outcomes: ["Asset and risk visibility", "Applicable control selection", "Security ownership across teams"] },
  "ISO 45001": { title: "Design safer work before an incident happens.", description: "ISO 45001 gives health and safety management a repeatable method for hazards, participation, learning and prevention.", perspective: "It works best when worker knowledge and management responsibility meet in a clear, active safety system.", outcomes: ["Site-specific risk controls", "Worker consultation routes", "Incident-learning discipline"] },
  "ISO 50001": { title: "Treat energy as a managed performance lever.", description: "ISO 50001 creates a structured energy-management system to understand significant uses and improve energy performance.", perspective: "For energy-intensive operations, it turns bills and equipment data into ownership, baselines and focused improvement decisions.", outcomes: ["Energy review and baseline", "Operational energy controls", "Measured performance gains"] },

  HACCP: { title: "Focus every control on the hazards that matter.", description: "HACCP identifies food-safety hazards, sets critical controls and defines the monitoring needed to keep unsafe product out of the market.", perspective: "It gives food operations a direct, product-led method for deciding where prevention must be strongest.", outcomes: ["Hazard-based process map", "Critical limit monitoring", "Actionable deviation response"] },
  "FSSC 22000": { title: "Build food-system confidence at scale.", description: "FSSC 22000 combines ISO 22000 with sector-specific prerequisite requirements and additional scheme controls for food and feed operations.", perspective: "Choose it when globally recognised certification and a detailed food-safety framework are important to customers or supply-chain partners.", outcomes: ["Scheme-specific PRPs", "Food-fraud awareness", "Audit-ready verification"] },
  "BRCGS Food": { title: "Meet retailer expectations at the production line.", description: "BRCGS Food Safety is a detailed standard for food manufacturers focused on site standards, product control, process control and culture.", perspective: "It is especially relevant where branded customers or retailers expect clear proof of factory controls and traceability.", outcomes: ["Factory-standard controls", "Product safety culture", "Retailer-ready site evidence"] },
  "BRCGS Packaging": { title: "Protect the package that protects the product.", description: "BRCGS Packaging Materials addresses hygiene, quality, legality and traceability for packaging manufacturers and converters.", perspective: "The programme helps packaging sites demonstrate that materials will not compromise the safety, quality or integrity of what they contain.", outcomes: ["Hygienic production controls", "Material traceability", "Packaging risk management"] },
  "FAMI-QS": { title: "Strengthen safety across feed ingredients.", description: "FAMI-QS supports the quality and safety management of speciality feed ingredients and their supply chains.", perspective: "It is made for producers and traders that need to demonstrate responsible sourcing, controlled manufacture and reliable distribution of feed inputs.", outcomes: ["Feed-ingredient controls", "Supplier assurance", "Contamination-risk prevention"] },
  GMP: { title: "Make good manufacturing a reliable routine.", description: "Good Manufacturing Practice formalises the conditions, behaviours and records needed to produce consistently controlled products.", perspective: "It is suited to operations where hygiene, line discipline, change control and clean documentation directly affect product integrity.", outcomes: ["Disciplined shop-floor practice", "Controlled production records", "Hygiene and housekeeping standards"] },
  FSSAI: { title: "Align your food business with Indian requirements.", description: "FSSAI support helps food businesses understand applicable licensing, hygiene, labelling and compliance responsibilities in India.", perspective: "Use it to move from a generic understanding of food rules to a site- and product-specific compliance plan.", outcomes: ["Licensing direction", "Hygiene compliance checks", "Food-label readiness"] },

  "IATF 16949": { title: "Engineer quality into the automotive supply chain.", description: "IATF 16949 integrates automotive quality requirements with defect prevention, risk reduction and continuous improvement.", perspective: "It is for suppliers that need to show customers their launch, production, change and problem-solving controls are robust.", outcomes: ["Customer-specific requirement control", "Defect-prevention methods", "Automotive core-tool alignment"] },
  "AS 9100": { title: "Bring aerospace discipline into the system.", description: "AS 9100 applies aerospace quality requirements to configuration, product safety, traceability and risk across the supply chain.", perspective: "The standard supports organisations working where a small variation can have outsized safety, performance or contractual consequences.", outcomes: ["Configuration control", "Aerospace risk management", "Product-safety accountability"] },
  "ISO/IEC 17025 - NABL": { title: "Show that every result is technically credible.", description: "ISO/IEC 17025 with NABL accreditation readiness addresses laboratory competence, impartiality, valid methods and reliable results.", perspective: "It is built for testing and calibration laboratories that need their technical work to be recognised and trusted.", outcomes: ["Method and equipment control", "Measurement traceability", "Competence-based laboratory records"] },
  NABH: { title: "Organise care around patient safety.", description: "NABH preparation helps healthcare organisations align clinical, administrative and facility practices with patient-centred quality expectations.", perspective: "It brings policy and procedure down to the point of care, where safety, communication and continuity are experienced.", outcomes: ["Patient-safety protocols", "Clinical process consistency", "Healthcare quality evidence"] },
  CMMI: { title: "Make development capability measurable.", description: "CMMI provides a maturity model for improving how organisations plan, build, deliver and learn across development or service work.", perspective: "For growing technology and engineering teams, it replaces heroic delivery with predictable, measured capability.", outcomes: ["Maturity-based process improvement", "Predictable project governance", "Performance measurement"] },

  "CE Mark": { title: "Prepare your product for the European market.", description: "CE marking support identifies applicable EU requirements and gathers the technical evidence needed before a product is placed on the market.", perspective: "The route depends on what the product is, how it is used and which directives or regulations apply—not on a one-size certificate.", outcomes: ["Applicable-rule assessment", "Technical file structure", "Declaration-readiness guidance"] },
  PED: { title: "Demonstrate pressure-equipment compliance.", description: "PED assistance supports the classification, technical documentation and conformity route for pressure equipment entering the EU market.", perspective: "It helps manufacturers connect design conditions, materials, testing and notified-body involvement to the correct pressure-equipment category.", outcomes: ["PED category assessment", "Design and test evidence", "Conformity-route coordination"] },
  ATEX: { title: "Control ignition risk in explosive atmospheres.", description: "ATEX support addresses equipment and workplace requirements where explosive gases, vapours or dusts may be present.", perspective: "It is for businesses that need to show their equipment selection, zoning and protective measures are suitable for hazardous locations.", outcomes: ["Hazardous-area classification", "Equipment suitability checks", "Explosion-protection records"] },
  RoHS: { title: "Keep restricted substances out of the product.", description: "RoHS compliance evaluates electrical and electronic products against restrictions on specified hazardous substances.", perspective: "It gives product teams a disciplined way to collect material declarations and manage supplier evidence before market entry.", outcomes: ["Material compliance evidence", "Supplier declaration process", "Restricted-substance screening"] },
  REACH: { title: "Know the chemical obligations behind every article.", description: "REACH consulting clarifies substance, mixture and article obligations for chemicals supplied into the European Union.", perspective: "The work connects supply-chain information with registration, communication and restriction duties that fit your specific product role.", outcomes: ["Substance-obligation review", "Supply-chain communication", "Restriction and SVHC awareness"] },
  BIS: { title: "Navigate Indian product standards with clarity.", description: "BIS support guides manufacturers through applicable Indian Standards, testing, factory assessment and licence preparation.", perspective: "It is a focused pathway for products that need Indian conformity recognition before they can be made, imported or sold.", outcomes: ["Applicable IS identification", "Test-plan coordination", "Licence application readiness"] },
  API: { title: "Meet the expectations of the oil and gas sector.", description: "API programme support helps organisations prepare systems and evidence aligned with relevant American Petroleum Institute specifications.", perspective: "For equipment and service providers, it connects technical requirements, quality planning and field reliability to sector expectations.", outcomes: ["Specification-led quality planning", "Traceable technical evidence", "Oil-and-gas audit readiness"] },
  Trademark: { title: "Protect the identity your business has built.", description: "Trademark assistance supports the process of identifying, applying for and safeguarding a distinctive brand name, mark or logo.", perspective: "It is a different kind of compliance work: protecting commercial identity and reducing the risk of avoidable brand conflicts.", outcomes: ["Mark selection guidance", "Application support", "Brand-protection direction"] },

  HALAL: { title: "Give customers confidence in product suitability.", description: "HALAL certification support reviews ingredients, processing, cleaning and handling against the requirements of the chosen halal scheme.", perspective: "It is valuable for food, ingredients, cosmetics and related producers serving markets where halal assurance is a purchasing requirement.", outcomes: ["Ingredient suitability review", "Segregation controls", "Halal documentation readiness"] },
  KOSHER: { title: "Prepare products for kosher approval.", description: "KOSHER consulting helps organisations review ingredients, equipment, production conditions and records for kosher certification.", perspective: "The work is shaped by the product recipe and processing reality, with careful attention to materials and change control.", outcomes: ["Ingredient review", "Equipment-use evaluation", "Kosher approval preparation"] },
  SASO: { title: "Ready your products for Saudi Arabian entry.", description: "SASO compliance support helps exporters organise product requirements, documentation and conformity steps for Saudi Arabia.", perspective: "It brings together the applicable technical regulations and platform or shipment requirements before goods are dispatched.", outcomes: ["Saudi regulation mapping", "Product-document preparation", "Export conformity support"] },
  "Kuwait TIR": { title: "Coordinate Kuwait’s inspection requirement early.", description: "Kuwait TIR assistance supports the technical inspection and reporting path required for relevant imports into Kuwait.", perspective: "It helps exporters avoid last-minute documentary gaps by preparing product evidence against the destination’s requirement.", outcomes: ["Pre-shipment document review", "Inspection coordination", "Kuwait import readiness"] },
  "Qatar CoC": { title: "Support a smoother route into Qatar.", description: "Qatar Certificate of Conformity support organises the product files, test evidence and approval steps needed for applicable exports.", perspective: "It is a market-entry service focused on matching your product and shipment documents to Qatar’s conformity process.", outcomes: ["Qatar requirement review", "Conformity-file preparation", "Shipment approval coordination"] },
  "Uganda CoC": { title: "Verify compliance before goods reach Uganda.", description: "Uganda CoC support prepares exporters for the pre-export conformity assessment process and its product documentation needs.", perspective: "The aim is to show conformity at the right point in the supply chain, reducing avoidable clearance delays at destination.", outcomes: ["PVoC pathway guidance", "Product evidence collation", "Pre-export verification"] },
  "Egypt CoI": { title: "Put reliable documents behind Egyptian imports.", description: "Egypt Certificate of Inspection support helps exporters assemble the records and inspection evidence required for eligible shipments.", perspective: "It is tailored to the destination route, product scope and document sequence rather than general export paperwork.", outcomes: ["Egyptian import document check", "Inspection-file readiness", "Shipment compliance coordination"] },

  "SA 8000": { title: "Make social accountability part of operations.", description: "SA 8000 creates a structured approach to fair labour, worker rights, working conditions and management accountability.", perspective: "It helps organisations convert social commitments into policies, safeguards, worker voice and demonstrable implementation.", outcomes: ["Worker-rights controls", "Grievance and dialogue routes", "Social-performance evidence"] },
  "SMETA / SEDEX": { title: "Prepare your site for ethical-trade scrutiny.", description: "SMETA and SEDEX support helps sites prepare for ethical trade audits across labour, health and safety, environment and business ethics.", perspective: "It is a practical route for suppliers that need transparent records and responsible practices for customer or retailer review.", outcomes: ["Ethical-audit readiness", "Worker and site records", "Corrective-action planning"] },
  TFS: { title: "Respond to chemical-supply-chain expectations.", description: "Together for Sustainability support prepares chemical businesses for responsible procurement assessment and continuous improvement.", perspective: "It brings environmental, labour, safety and governance evidence into the format buyers increasingly expect from suppliers.", outcomes: ["Supplier sustainability profile", "Responsible-care evidence", "TFS assessment preparation"] },
  GHG: { title: "Put a defensible number on your emissions.", description: "GHG accounting support establishes an inventory of greenhouse-gas emissions using defined organisational and operational boundaries.", perspective: "It is the foundation for organisations that need a credible emissions baseline before setting reduction commitments or responding to customer requests.", outcomes: ["Emission-source inventory", "Boundary and methodology choice", "Verifiable calculation records"] },
  "Carbon Footprint": { title: "Understand the carbon cost of an activity or product.", description: "Carbon footprint work quantifies emissions for an organisation, facility, product or event and identifies the largest contributors.", perspective: "It turns broad climate concerns into a focused picture of where material, energy, logistics or process changes will matter most.", outcomes: ["Impact hotspot visibility", "Activity-data structure", "Reduction opportunity map"] },
  "ISCC Plus": { title: "Trace sustainable materials through the chain.", description: "ISCC PLUS preparation supports chain-of-custody, mass-balance and sustainability declarations for circular and bio-based materials.", perspective: "It is designed for businesses that need robust, auditable proof of sustainability characteristics in complex material flows.", outcomes: ["Mass-balance discipline", "Sustainability declaration control", "Chain-of-custody records"] },
  LCA: { title: "See the environmental story across the lifecycle.", description: "Life Cycle Assessment examines environmental impacts from raw materials through production, use and end of life.", perspective: "It offers a wider lens than a single carbon number, helping teams avoid shifting an impact from one stage of the lifecycle to another.", outcomes: ["Lifecycle boundary definition", "Multi-impact assessment", "Improvement hotspot analysis"] },
  CBAM: { title: "Prepare carbon data for EU border reporting.", description: "CBAM support helps exporters understand embedded-emissions data, reporting responsibilities and supplier information for covered EU imports.", perspective: "It is particularly relevant where carbon information must now travel with goods, alongside conventional product and customs documents.", outcomes: ["Covered-goods review", "Embedded-emissions data plan", "CBAM reporting readiness"] },
  EcoVadis: { title: "Tell a stronger sustainability story to buyers.", description: "EcoVadis support helps companies organise evidence across environment, labour and human rights, ethics and sustainable procurement.", perspective: "It is a practical way to prepare for a buyer-requested assessment and identify where policy must become measurable action.", outcomes: ["Evidence organised by theme", "Supplier-management visibility", "Assessment improvement plan"] },

  GOTS: { title: "Safeguard organic integrity through textile production.", description: "GOTS certification preparation supports organic fibre processing with environmental and social criteria from handling through labelling.", perspective: "It is for textile operations that need their organic claims to stay credible across chemical inputs, production and traceability.", outcomes: ["Organic fibre traceability", "Approved-input controls", "Textile processing evidence"] },
  GRS: { title: "Prove recycled content with a controlled chain.", description: "Global Recycled Standard support tracks recycled material and related social, environmental and chemical requirements through processing.", perspective: "The standard helps brands and manufacturers substantiate recycled-content claims without losing visibility of material movement.", outcomes: ["Recycled-content traceability", "Transaction-certificate controls", "Responsible processing evidence"] },
  RCS: { title: "Verify the recycled material in your product.", description: "Recycled Claim Standard preparation focuses on chain-of-custody verification for recycled content in products.", perspective: "It is a streamlined choice when the core objective is a reliable recycled-material claim across the supply chain.", outcomes: ["Chain-of-custody mapping", "Recycled-input records", "Claim verification readiness"] },
  OCS: { title: "Keep organic content traceable from source.", description: "Organic Content Standard support verifies the presence and flow of organically grown material through a product’s supply chain.", perspective: "It supports manufacturers and traders that need to make a specific organic-content claim with clear transaction evidence.", outcomes: ["Organic-content documentation", "Material-flow control", "Transaction traceability"] },
  RJC: { title: "Build trust in jewellery supply chains.", description: "Responsible Jewellery Council support addresses ethical, human-rights, social and environmental practices in jewellery and precious-metal businesses.", perspective: "It is tailored to a sector where provenance, business integrity and responsible sourcing carry real brand value.", outcomes: ["Responsible-sourcing practices", "Jewellery-sector governance", "Ethical business evidence"] },
  RecyClass: { title: "Understand how recyclable your plastic packaging is.", description: "RecyClass support evaluates plastic-packaging design against recyclability criteria and the realities of collection, sorting and recycling.", perspective: "It helps packaging teams make design decisions that support circularity rather than relying on broad recycling claims.", outcomes: ["Packaging-design review", "Recyclability assessment", "Circularity improvement actions"] },
  "EN 15343": { title: "Control the recycled-plastics journey.", description: "EN 15343 preparation establishes traceability and percentage calculation controls for recycled plastics.", perspective: "It supports recyclers and processors that need to demonstrate how material is received, transformed and accounted for.", outcomes: ["Plastic-input traceability", "Recycled-content calculation", "Process verification records"] },
  NPOP: { title: "Meet India’s organic production requirements.", description: "NPOP certification support guides organic operators through Indian production, handling and traceability requirements.", perspective: "It gives farms, processors and traders a local organic pathway shaped by how their materials are grown, processed and sold.", outcomes: ["Organic operation controls", "Input and segregation records", "Indian organic certification path"] },
  NOP: { title: "Prepare for the US organic market.", description: "NOP support aligns organic production, handling and labelling with the United States Department of Agriculture organic programme.", perspective: "It is for operators selling into the US who need their organic practices and product claims to meet that specific market’s rules.", outcomes: ["US organic rule alignment", "Organic-system plan", "Label and record review"] },
  "EU Organic": { title: "Align organic products with European expectations.", description: "EU Organic preparation supports compliance with European organic production, processing, labelling and traceability requirements.", perspective: "It gives exporters and processors a route to demonstrate the integrity of organic products destined for the EU.", outcomes: ["EU organic compliance review", "Organic traceability system", "Export label readiness"] },

  "5S": { title: "Create a workplace that makes the right action easy.", description: "5S training gives teams a practical method to sort, set in order, shine, standardise and sustain their workplace.", perspective: "It is a hands-on foundation for safer, faster and more visual work environments rather than a one-time clean-up drive.", outcomes: ["Visual workplace standards", "Reduced search and waste", "Team-owned routines"] },
  Kaizen: { title: "Turn small improvements into shared momentum.", description: "Kaizen training equips teams to notice friction, test modest changes and retain what improves quality, flow or safety.", perspective: "It suits organisations that want improvement to come from the people closest to the process, every day.", outcomes: ["Practical problem finding", "Small-step experimentation", "Continuous-improvement habits"] },
  Kanban: { title: "Make the flow of work easier to see and manage.", description: "Kanban training uses visual signals and pull principles to control work in progress, replenishment and bottlenecks.", perspective: "It is useful wherever teams need a calmer, more responsive way to coordinate tasks, materials or service requests.", outcomes: ["Visible work flow", "Controlled work in progress", "Faster bottleneck response"] },
  "Six Sigma": { title: "Use data to reduce variation where it counts.", description: "Six Sigma training introduces structured problem solving, measurement and root-cause analysis for performance-critical processes.", perspective: "It provides a more analytical improvement route when recurring defects, delays or variation need more than intuition to solve.", outcomes: ["Data-led problem definition", "Variation analysis", "Sustained process capability"] },
  TPM: { title: "Make equipment reliability everyone’s concern.", description: "Total Productive Maintenance training brings operators and maintenance teams together around equipment care, loss reduction and reliability.", perspective: "It is appropriate for operations where avoidable downtime and chronic equipment losses constrain output or quality.", outcomes: ["Ownership of basic equipment care", "Loss-focused maintenance", "Improved asset availability"] },
  "Poka-Yoke": { title: "Design mistakes out before they become defects.", description: "Poka-Yoke training develops simple error-proofing ideas that prevent, detect or immediately signal a wrong condition.", perspective: "It gives frontline teams a creative, low-complexity method to make critical tasks safer and more reliable.", outcomes: ["Error-prone step identification", "Simple prevention devices", "Earlier defect detection"] },
  KRA: { title: "Connect roles to the results that matter.", description: "KRA training helps leaders define key responsibility areas so each role has a clear contribution to organisational priorities.", perspective: "It is a management tool for replacing vague expectations with purposeful accountability and meaningful review conversations.", outcomes: ["Role-priority clarity", "Aligned performance expectations", "More useful reviews"] },
  Benchmarking: { title: "Learn deliberately from stronger performance.", description: "Benchmarking training gives teams a structured way to compare practices, identify gaps and adapt relevant lessons.", perspective: "It helps organisations turn external examples into realistic improvements rather than copying another company’s process without context.", outcomes: ["Comparison framework", "Gap-to-action translation", "Informed improvement priorities"] },
};

// These notes are deliberately written as short, service-specific conversations.
// They keep a visitor from meeting the same generic paragraph on every detail page.
const editorialNotes = {
  "ISO 9001": { prompt: "Your customers should not have to discover the same weak hand-off twice.", lens: "When quality needs to travel cleanly from enquiry to delivery.", practice: "We begin by following a real order, request or project through your business. That makes the gaps visible in the places people actually work—not only in a procedure manual." },
  "ISO 13485": { prompt: "A small documentation gap can become a patient-safety question later.", lens: "The controls behind a safe medical-device record.", practice: "The work connects design, purchasing, production and post-market records so a team can answer a simple but vital question: what happened, who approved it and what changed?" },
  "ISO 14001": { prompt: "Environmental improvement becomes credible when it is connected to real site decisions.", lens: "Finding the environmental choices hidden in everyday operations.", practice: "Instead of treating the environment as a yearly report, we look at utilities, waste, chemicals, maintenance and contractors—the practical points where impact and cost are created." },
  "ISO 22000": { prompt: "Food safety only works when every shift knows which controls cannot be missed.", lens: "Turning food-safety intent into a shared routine.", practice: "A useful system joins the HACCP plan to the floor: receiving checks, cleaning, allergen control, temperature records and a calm response when something moves outside its limit." },
  "ISO 27001": { prompt: "Security is strongest when it is understood outside the IT room as well.", lens: "Making information protection part of normal business judgement.", practice: "We map the information people rely on, the risks around it and the decisions that protect it. The aim is clear ownership, not a folder of controls nobody uses." },
  "ISO 45001": { prompt: "The people closest to the job often see the risk first.", lens: "Building a safety system workers can actually use.", practice: "The starting point is the real task, real equipment and real shift pattern. Good safety evidence grows from listening, checking controls in use and learning before a near miss becomes harm." },
  "ISO 50001": { prompt: "Energy data is useful only when someone can act on what it is saying.", lens: "Moving from utility bills to decisions that improve performance.", practice: "We help teams identify their significant energy uses and establish a baseline they trust. From there, operations and maintenance can see where a change will make a measurable difference." },

  HACCP: { prompt: "A food-safety plan must make the critical moment obvious to the person at the line.", lens: "Putting prevention exactly where the hazard can be controlled.", practice: "The process is drawn as product really moves through the site. Hazards, limits, checks and corrective actions are then agreed around the steps that genuinely protect the consumer." },
  "FSSC 22000": { prompt: "A global food-safety scheme should fit the way your site actually makes or handles product.", lens: "Joining management-system discipline with factory-level food controls.", practice: "We bring together food-safety management, sector-specific prerequisite programmes and scheme requirements without losing sight of the people responsible for each activity." },
  "BRCGS Food": { prompt: "Retailers want to see more than a policy—they want confidence in the site behind the product.", lens: "Preparing a factory for the evidence customers and auditors expect.", practice: "The attention goes to the physical site, product controls, hygiene, traceability and culture. Teams work through what an auditor can see, ask and sample during a real visit." },
  "BRCGS Packaging": { prompt: "The package is part of the product-safety story, not an afterthought.", lens: "Protecting the product before it ever reaches the consumer.", practice: "For converters and packaging manufacturers, the work focuses on hygiene, material control, legal suitability and traceability—especially where the pack touches food or other sensitive products." },
  "FAMI-QS": { prompt: "Feed ingredients carry their own safety and sourcing responsibilities.", lens: "Making speciality feed controls visible across the supply chain.", practice: "We follow how an ingredient is sourced, received, made, stored and supplied. That creates a practical line of sight from supplier assurance to contamination prevention." },
  GMP: { prompt: "Consistency on the shop floor is built from ordinary habits done well.", lens: "The discipline that keeps every production day under control.", practice: "The focus is not fancy paperwork. It is clear cleanliness, line discipline, change control, training and records that help supervisors show how each batch was made." },
  FSSAI: { prompt: "Food compliance in India needs to make sense for your actual products and premises.", lens: "Turning broad food rules into a workable site plan.", practice: "We start with what you manufacture, pack, sell or serve, then connect licensing, hygiene, labels and records to the responsibilities that apply to that specific business." },

  "IATF 16949": { prompt: "Automotive customers need confidence long before a part reaches their line.", lens: "Preventing defects through the whole automotive production story.", practice: "The work ties customer-specific requirements to launch planning, production control, change management and problem solving, so quality is designed into the process rather than inspected in at the end." },
  "AS 9100": { prompt: "In aerospace, a small uncontrolled variation can carry a very large consequence.", lens: "Keeping configuration, traceability and product safety connected.", practice: "We help teams show how they control changes, identify product status and protect critical requirements from order through release. The system must stand up to technical and contractual scrutiny." },
  "ISO/IEC 17025 - NABL": { prompt: "A laboratory result is valuable only when its technical basis can be trusted.", lens: "The everyday controls behind a defensible test or calibration result.", practice: "Methods, equipment, people, calculations and reporting are examined as one chain. The result is a laboratory system that makes competence and traceability visible in daily practice." },
  NABH: { prompt: "Patients experience quality in small moments of communication, care and continuity.", lens: "Bringing patient-safety expectations to the point of care.", practice: "The work crosses clinical and support functions: admission, medication, infection control, facilities and discharge. It turns policies into consistent actions that patients and staff can rely on." },
  CMMI: { prompt: "A growing team should not need heroics to deliver dependable work.", lens: "Replacing last-minute rescue with measured delivery capability.", practice: "We look at how work is planned, estimated, reviewed and learned from. Teams gain a clearer way to make commitments, spot risk early and improve their next project." },

  "CE Mark": { prompt: "A CE mark is a manufacturer’s declaration, not a generic certificate to buy.", lens: "Finding the EU route that genuinely applies to your product.", practice: "We begin with the product’s purpose, risks and applicable EU rules. That guides the technical file, testing, declaration and any need for a notified body before market placement." },
  PED: { prompt: "Pressure equipment needs the right conformity path before fabrication gets too far ahead.", lens: "Connecting design conditions to the correct pressure-equipment route.", practice: "The project starts with fluid group, pressure, volume and intended use. Those details drive classification, technical evidence, testing and the right level of third-party involvement." },
  ATEX: { prompt: "Where explosive atmospheres are possible, assumptions are not a safety strategy.", lens: "Making hazardous-area decisions clear and demonstrable.", practice: "We work through the materials present, the zones they create and the equipment used nearby. That helps teams match protective measures to the real ignition risks on site." },
  RoHS: { prompt: "A product claim needs supplier evidence behind every restricted substance decision.", lens: "Building a material-evidence trail before market entry.", practice: "The work is usually a supplier-information exercise as much as a product exercise. Bills of material, declarations and testing evidence are organised so the claim has something solid underneath it." },
  REACH: { prompt: "Chemical obligations depend on your role in the supply chain, not only on what the product looks like.", lens: "Clarifying the responsibilities carried by substances, mixtures and articles.", practice: "We identify what you supply, where it comes from and where it goes. That makes registration, restriction and communication duties easier to separate from general compliance noise." },
  BIS: { prompt: "Indian product compliance works best when the standard and factory evidence are planned together.", lens: "Finding the Indian Standard and licence path for the product in front of you.", practice: "We connect the product scope to the applicable Indian Standard, test plan, factory readiness and application steps, so the licence journey has a practical order." },
  API: { prompt: "Oil and gas customers look for technical discipline they can rely on in demanding conditions.", lens: "Making specification-led quality visible to the energy sector.", practice: "The work aligns quality planning, technical records, traceability and operational controls with the API programme relevant to your equipment or service." },
  Trademark: { prompt: "Your name and logo deserve early protection before a market conflict becomes expensive.", lens: "Taking a practical first step toward protecting your brand identity.", practice: "We help turn a commercial idea into a clearer application path: identify the mark, review the relevant classes and prepare the information needed to pursue protection." },

  HALAL: { prompt: "Ingredient lists and shared equipment can matter just as much as the finished product.", lens: "Showing product suitability with care for materials and handling.", practice: "We review ingredients, processing aids, cleaning, storage and segregation in the context of the chosen halal scheme. The detail comes from the recipe and the production reality." },
  KOSHER: { prompt: "Kosher approval depends on the product’s ingredients and the story of the equipment that made it.", lens: "Preparing a clear picture of materials, process and change control.", practice: "The work brings recipes, supplier details, equipment use and production arrangements into one reviewable record, so the certification conversation starts from accurate information." },
  SASO: { prompt: "Saudi market entry is easier when product evidence is ready before the shipment clock starts.", lens: "Organising the Saudi compliance route around the actual product.", practice: "We map the relevant technical requirements, documents and conformity steps early. That gives exporters time to close evidence gaps instead of discovering them at dispatch." },
  "Kuwait TIR": { prompt: "A missing report or mismatched document can hold up an otherwise ready shipment.", lens: "Getting Kuwait inspection evidence in order before export.", practice: "We check the product scope, technical documents and inspection sequence so exporters know what needs to be ready and when it needs to move." },
  "Qatar CoC": { prompt: "Market access is smoother when the product file and shipment file tell the same story.", lens: "Preparing the conformity evidence Qatar expects to see.", practice: "The support joins applicable requirements, test evidence and shipment documents into a single route. It is about clarity before goods leave, not paperwork after they are delayed." },
  "Uganda CoC": { prompt: "Pre-export conformity is easier when evidence is gathered before the consignment is booked.", lens: "Putting the right proof behind goods headed for Uganda.", practice: "We work through the route, product documents and verification needs early, helping exporters avoid the scramble that comes from treating conformity as a port-side task." },
  "Egypt CoI": { prompt: "Export documents need to match the destination process as closely as the product matches the order.", lens: "Sequencing inspection and shipment evidence for Egypt.", practice: "The work is built around product scope, supporting records and timing. That gives the export team a clear checklist rather than a last-minute search for documents." },

  "SA 8000": { prompt: "Social accountability becomes meaningful when workers have real safeguards and a real voice.", lens: "Turning fair-work commitments into everyday management practice.", practice: "We examine the policies and the lived conditions behind them: recruitment, hours, safety, grievances and dialogue. The goal is evidence of respect, not a statement on a wall." },
  "SMETA / SEDEX": { prompt: "An ethical-trade audit asks whether site records match the way people are actually treated.", lens: "Preparing responsibly for customer and retailer scrutiny.", practice: "We help sites bring labour, health and safety, environmental and ethics evidence together, then work through issues before an audit exposes them under pressure." },
  TFS: { prompt: "Chemical customers increasingly expect sustainability information they can compare and trust.", lens: "Bringing responsible chemical-supply evidence into one useful view.", practice: "We organise environment, labour, health and safety and governance information around the way suppliers are assessed, making improvement priorities clearer for the business." },
  GHG: { prompt: "An emissions total is only credible when everyone understands what it includes and why.", lens: "Creating a greenhouse-gas inventory that can answer follow-up questions.", practice: "We set organisational and operational boundaries first, then trace the activity data and calculation method. That gives management a baseline it can explain to customers, investors or auditors." },
  "Carbon Footprint": { prompt: "The most useful carbon number points to the next decision, not just the next report.", lens: "Seeing where an activity, site or product creates its biggest emissions.", practice: "We turn energy, materials, transport and process data into a picture of hotspots. Teams can then focus effort where a change is likely to matter most." },
  "ISCC Plus": { prompt: "Sustainable-material claims need records that can follow material through a complex chain.", lens: "Keeping mass balance and sustainability declarations under control.", practice: "The system follows material inputs, processing, allocation and output declarations. It gives each commercial claim a traceable operational basis." },
  LCA: { prompt: "A single carbon figure cannot tell the whole environmental story of a product.", lens: "Looking beyond one stage to understand lifecycle trade-offs.", practice: "We define the product system and collect the data needed to see where impacts occur. That broader view helps teams avoid solving one issue by quietly moving it somewhere else." },
  CBAM: { prompt: "Carbon data is becoming part of the export conversation for covered EU goods.", lens: "Preparing embedded-emissions information to travel with the product.", practice: "We help exporters identify covered goods, understand the reporting path and request the right production data from suppliers or sites before deadlines create pressure." },
  EcoVadis: { prompt: "Buyers want a sustainability story supported by records, ownership and action.", lens: "Making responsible-business evidence easier to find and improve.", practice: "The work sorts policies and proof across the assessment themes, then highlights the places where a stated commitment needs a clearer measure, record or responsible owner." },

  GOTS: { prompt: "An organic textile claim is only as strong as the controls behind every processing step.", lens: "Keeping organic fibre integrity visible from handling to labelling.", practice: "We follow fibres, chemicals, production records and transaction evidence through the operation so the organic claim stays connected to the material that carries it." },
  GRS: { prompt: "Recycled content needs a disciplined trail through every processor in the chain.", lens: "Backing a recycled-material claim with controlled movement and records.", practice: "The system looks at incoming materials, segregation, production, transaction certificates and related social and environmental requirements—not only the percentage printed on the label." },
  RCS: { prompt: "A focused recycled-content claim still needs a clear chain of custody.", lens: "Proving that recycled input remains connected to the finished product.", practice: "We map material movement and records from certified input to output. It is a practical choice where the main need is reliable verification of recycled content." },
  OCS: { prompt: "Organic content should remain traceable even when the supply chain is not simple.", lens: "Keeping an organic-material claim connected to real transactions.", practice: "The work follows material purchases, handling and sales records so the finished product claim can be traced back through a documented organic-content flow." },
  RJC: { prompt: "Jewellery buyers increasingly want assurance about the story behind precious materials.", lens: "Putting responsible sourcing and business integrity into practice.", practice: "We look at provenance, human-rights safeguards, environmental responsibility and governance in the context of jewellery operations, where trust is part of the product value." },
  RecyClass: { prompt: "Calling a pack recyclable is not enough; its design must work with the recycling reality.", lens: "Testing packaging choices against the route a material takes after use.", practice: "We review the structure, materials, labels, additives and components that affect sorting and recycling, helping design teams make decisions with circularity in mind." },
  "EN 15343": { prompt: "A recycled-plastic percentage needs a calculation and a material trail behind it.", lens: "Controlling the journey from plastic input to verified output.", practice: "We connect reception, processing, stock movement and calculation rules so recyclers and processors can demonstrate how recycled content is accounted for." },
  NPOP: { prompt: "Organic practice in India has to be visible in fields, stores, processing areas and records.", lens: "Preparing a local organic operation to show how integrity is maintained.", practice: "We work through inputs, segregation, traceability and handling in the context of how your farm, processor or trader actually operates." },
  NOP: { prompt: "Selling organic product in the United States means following the route expected by that market.", lens: "Aligning organic operations and labels with the US programme.", practice: "We review the organic system plan, records, handling and claims so the way product is grown or processed supports the specific requirements of the US destination." },
  "EU Organic": { prompt: "European organic claims depend on traceability that survives the export journey.", lens: "Preparing organic controls for the expectations of the EU market.", practice: "The work joins production or processing evidence, material traceability and labelling so exporters can show that organic integrity is protected from source through sale." },

  "5S": { prompt: "A good workplace should make the safe, correct action the easiest one to take.", lens: "Using visual order to remove daily friction from the work.", practice: "This is hands-on training around an actual area. Teams sort what they need, set a visible standard and build simple routines that keep the improvement alive after the first clean-up." },
  Kaizen: { prompt: "The best improvement ideas often come from the people who meet the problem every day.", lens: "Giving teams a repeatable habit for small, useful change.", practice: "Participants learn to notice waste, test a modest improvement and keep the result when it works. The emphasis is momentum and learning, not a grand transformation programme." },
  Kanban: { prompt: "When work is invisible, priorities and bottlenecks are invisible too.", lens: "Making tasks, materials or requests easier for the whole team to manage.", practice: "We use visual signals and pull principles to show what is waiting, what is in progress and what is blocked. That gives teams a calmer way to respond before work piles up." },
  "Six Sigma": { prompt: "Some recurring problems need evidence stronger than a quick guess at the cause.", lens: "Using data to understand and reduce unwanted variation.", practice: "The training gives teams a structured route from a clear problem statement to measurement, analysis and sustainable control—especially where defects, delay or variation are costly." },
  TPM: { prompt: "Equipment reliability improves fastest when operators and maintenance teams share the same picture.", lens: "Turning daily equipment care into a source of performance.", practice: "The focus is on losses, basic conditions and early warning signs. Teams learn how routine ownership can reduce avoidable downtime and protect output quality." },
  "Poka-Yoke": { prompt: "The strongest defect is the one a process makes impossible in the first place.", lens: "Finding simple ways to prevent or catch an error immediately.", practice: "Teams study an error-prone step, then design a practical prompt, fixture, sequence or check that prevents the wrong condition from moving downstream." },
  KRA: { prompt: "People do better work when they can see which results they truly own.", lens: "Linking individual roles to the priorities that move the organisation.", practice: "The training turns vague job expectations into a smaller set of meaningful responsibility areas, giving managers and employees a stronger basis for decisions and reviews." },
  Benchmarking: { prompt: "A better practice is useful only after it has been adapted to your own reality.", lens: "Learning from comparison without copying someone else’s system blindly.", practice: "Teams set a clear comparison question, identify the gap and translate the lesson into an action that fits their people, process and constraints." },
};

// Only use certification-body artwork already supplied with this project. A public
// certificate must not be displayed as if it belongs to SMS or one of its clients.
const serviceVisuals = certifyingBodyLogos.map((src) => ({
  src,
  alt: "Certification-body mark used as a certification reference",
}));

const journeyKinds = {
  "Management System Certification": "certification",
  "Food & Packaging Safety": "certification",
  "Automotive, Aerospace & Labs": "certification",
  "Product & Country Specific": "conformity",
  "Export Market Compliance": "marketAccess",
  "ESG & Sustainability": "assessment",
  "Textile & Recycled Claims": "certification",
  "Management Area Training": "training",
};

const journeyOverrides = {
  "CE Mark": "conformity",
  PED: "conformity",
  ATEX: "conformity",
  RoHS: "conformity",
  REACH: "conformity",
  BIS: "approval",
  API: "certification",
  Trademark: "registration",
  FSSAI: "licence",
  "ISO/IEC 17025 - NABL": "accreditation",
  NABH: "accreditation",
  CMMI: "appraisal",
  HALAL: "certification",
  KOSHER: "certification",
  "SMETA / SEDEX": "audit",
  "ISCC Plus": "certification",
  GHG: "measurement",
  "Carbon Footprint": "measurement",
  LCA: "measurement",
  CBAM: "reporting",
  EcoVadis: "assessment",
};

const journeyBlueprints = {
  certification: (name, outcomes) => ({
    eyebrow: "Certification journey",
    title: `A practical route to ${name} certification.`,
    intro: "The exact audit route depends on your scope and certification body, but the work normally follows these clear stages.",
    steps: [
      ["Agree the scope", `Define the sites, activities, products and teams that ${name} will cover.`],
      ["See the real gaps", `Compare today’s practices and records with the controls behind ${outcomes[0].toLowerCase()}.`],
      ["Build and use the system", `Put practical procedures, responsibilities and evidence in place for ${outcomes[1].toLowerCase()}.`],
      ["Train, check and correct", "Brief the people who run the process, complete an internal review and close the findings that matter."],
      ["Complete the independent audit", "Apply to an appropriate certification body, support the assessment and respond to any observations."],
      ["Keep it working", "Maintain records, review performance and prepare for surveillance so certification remains meaningful."],
    ],
  }),
  accreditation: (name, outcomes) => ({
    eyebrow: "Accreditation journey",
    title: `A practical route to ${name} accreditation readiness.`,
    intro: "Accreditation focuses on demonstrated competence and reliable practice, supported by evidence that stands up to an independent assessment.",
    steps: [
      ["Confirm the scope", `Define the services, locations, methods or departments to be included in ${name}.`],
      ["Review current competence", `Compare the existing system with the requirements behind ${outcomes[0].toLowerCase()}.`],
      ["Strengthen the evidence", `Put controls, records and responsibilities in place for ${outcomes[1].toLowerCase()}.`],
      ["Check readiness internally", "Train the relevant teams, complete internal reviews and address weaknesses before the formal visit."],
      ["Support the assessment", "Submit the application through the applicable route and support the independent assessor with clear evidence."],
      ["Maintain confidence", `Close observations and keep monitoring ${outcomes[2].toLowerCase()} after recognition.`],
    ],
  }),
  licence: (name, outcomes) => ({
    eyebrow: "Licensing pathway",
    title: `A clear route to ${name} licensing readiness.`,
    intro: "Licensing requirements depend on the business activity, product scope and premises, so the first step is always to identify the correct category.",
    steps: [
      ["Identify the right licence", `Confirm the business activity and product scope that determine the ${name} application route.`],
      ["Review site readiness", `Check current arrangements against ${outcomes[0].toLowerCase()}.`],
      ["Prepare the required evidence", `Organise premises, process and product information for ${outcomes[1].toLowerCase()}.`],
      ["Complete the application", "Submit accurate business, product and responsible-person details through the appropriate licensing route."],
      ["Support inspection or review", "Respond promptly if the authority requests clarification, records or a premises visit."],
      ["Keep the licence current", `Manage renewals, changes and continued ${outcomes[2].toLowerCase()} as the business develops.`],
    ],
  }),
  appraisal: (name, outcomes) => ({
    eyebrow: "Appraisal pathway",
    title: `Preparing a credible ${name} appraisal.`,
    intro: "An appraisal examines whether the organisation’s practices are established, used and capable of producing dependable results.",
    steps: [
      ["Set the appraisal scope", `Agree which teams, projects or service areas will be considered for ${name}.`],
      ["Assess today’s capability", `Compare the current way of working with ${outcomes[0].toLowerCase()}.`],
      ["Improve the working methods", `Strengthen planning, evidence and ownership around ${outcomes[1].toLowerCase()}.`],
      ["Run an internal readiness review", "Test whether teams can show the practice in use, not simply describe it in a document."],
      ["Prepare for the appraisal", "Organise relevant project evidence, interviews and leadership participation for the independent review."],
      ["Sustain the capability", `Use feedback and measures to continue improving ${outcomes[2].toLowerCase()}.`],
    ],
  }),
  audit: (name, outcomes) => ({
    eyebrow: "Audit-preparation route",
    title: `Preparing your site for a ${name} audit.`,
    intro: "The aim is not to stage-manage an audit. It is to make sure site practice, worker experience and records tell the same responsible-business story.",
    steps: [
      ["Confirm the audit scope", `Identify the site, activities and customer expectations that sit within the ${name} audit.`],
      ["Review the evidence", `Collect records and interviews that support ${outcomes[0].toLowerCase()}.`],
      ["Walk the site as it operates", `Check whether daily practice reflects the commitments behind ${outcomes[1].toLowerCase()}.`],
      ["Close obvious gaps", "Assign owners and deadlines for issues that can be corrected before the audit."],
      ["Support the audit day", "Make information and responsible people available so the auditor can see an accurate picture."],
      ["Follow through after the audit", `Use the findings to strengthen ${outcomes[2].toLowerCase()} rather than treating them as one-off paperwork.`],
    ],
  }),
  conformity: (name, outcomes) => ({
    eyebrow: "Conformity route",
    title: `How to prepare ${name} evidence before market entry.`,
    intro: "Product conformity is not a one-size certificate. The route is set by the product, its intended use and the rules that apply to it.",
    steps: [
      ["Confirm the product route", `Identify the product scope, market and legal requirements that govern ${name}.`],
      ["Classify the risk", `Use the product’s intended use and technical characteristics to establish the right path for ${outcomes[0].toLowerCase()}.`],
      ["Plan the technical evidence", `Organise design details, supplier information, test reports and records needed for ${outcomes[1].toLowerCase()}.`],
      ["Test or assess where required", "Coordinate any applicable testing, inspection or notified-body activity before a claim is made."],
      ["Complete the declaration and file", `Check that the technical documentation supports ${outcomes[2].toLowerCase()} and keep it available for review.`],
      ["Control changes", "Revisit the evidence whenever the product, supplier, rule or intended use changes."],
    ],
  }),
  approval: (name, outcomes) => ({
    eyebrow: "Approval pathway",
    title: `A clear sequence for ${name} approval.`,
    intro: "Approval programmes combine product requirements with evidence from testing, the factory or an authorised authority.",
    steps: [
      ["Confirm what applies", `Identify the product scope and applicable requirement for ${name}.`],
      ["Prepare the product and factory", `Review current arrangements against ${outcomes[0].toLowerCase()}.`],
      ["Plan testing and evidence", `Set up samples, records and technical information for ${outcomes[1].toLowerCase()}.`],
      ["Submit the application", "File the required information with the appropriate authority or approved route."],
      ["Support the review", "Coordinate testing, inspection or factory assessment and respond to observations."],
      ["Maintain the approval", "Control changes, renewals and ongoing evidence after acceptance."],
    ],
  }),
  marketAccess: (name, outcomes) => ({
    eyebrow: "Market-entry route",
    title: `Preparing a ${name} shipment for a smoother release.`,
    intro: "Destination requirements are easiest to meet when product evidence is checked before goods are ready to leave.",
    steps: [
      ["Confirm the destination rules", `Check that the product and shipment fall within the ${name} route.`],
      ["Review product evidence", `Collect specifications, test reports and declarations needed for ${outcomes[0].toLowerCase()}.`],
      ["Prepare the document pack", `Align invoices, packing information and supporting records for ${outcomes[1].toLowerCase()}.`],
      ["Arrange inspection or verification", "Schedule the required third-party review at the right point in the export timeline."],
      ["Receive the required document", `Close any document gaps and secure ${outcomes[2].toLowerCase()} before dispatch.`],
      ["Keep the shipment trail", "Retain the final evidence in case the importer, authority or customer requests it."],
    ],
  }),
  assessment: (name, outcomes) => ({
    eyebrow: "Assessment pathway",
    title: `Turning ${name} expectations into a credible improvement plan.`,
    intro: "For buyer, ESG and responsibility programmes, the strongest result comes from evidence, ownership and measurable follow-through.",
    steps: [
      ["Set the boundary", `Agree the business area, sites, suppliers or activities that the ${name} work will cover.`],
      ["Collect the evidence", `Bring together records and data that support ${outcomes[0].toLowerCase()}.`],
      ["Assess the baseline", `Identify the strengths, gaps and risks around ${outcomes[1].toLowerCase()}.`],
      ["Assign practical actions", "Give each improvement a clear owner, timing and measure of completion."],
      ["Review or submit", "Prepare the information for the relevant assessor, buyer, verifier or stakeholder request."],
      ["Track the improvement", `Keep evidence current and monitor progress toward ${outcomes[2].toLowerCase()}.`],
    ],
  }),
  measurement: (name, outcomes) => ({
    eyebrow: "Measurement pathway",
    title: `Building a ${name} result that can stand up to questions.`,
    intro: "A useful environmental result is transparent about its boundary, data and assumptions—not just the final number.",
    steps: [
      ["Define the question", `Agree the organisational, product or activity boundary for ${name}.`],
      ["Choose a method", `Set the data sources and calculation approach needed for ${outcomes[0].toLowerCase()}.`],
      ["Gather and check data", `Collect activity data, supplier information and records with enough detail for ${outcomes[1].toLowerCase()}.`],
      ["Calculate and review", "Check assumptions, data quality and the reasonableness of the result with the responsible teams."],
      ["Explain the result", "Present the findings, limits and major hotspots in language decision-makers can use."],
      ["Turn insight into action", `Use the result to prioritise ${outcomes[2].toLowerCase()} and future data improvements.`],
    ],
  }),
  reporting: (name, outcomes) => ({
    eyebrow: "Reporting pathway",
    title: `Preparing ${name} information before the reporting deadline.`,
    intro: "Good reporting starts with the product and supplier data early, rather than trying to reconstruct it at the end of a period.",
    steps: [
      ["Confirm coverage", `Identify the goods, transactions or activities included in the ${name} obligation.`],
      ["Request source data", `Collect supplier and process information needed for ${outcomes[0].toLowerCase()}.`],
      ["Set the reporting method", `Agree the calculations, evidence checks and ownership needed for ${outcomes[1].toLowerCase()}.`],
      ["Prepare the records", "Organise invoices, quantities, production details and supporting calculations in a reviewable format."],
      ["Complete the submission", "Review the report before it is filed through the relevant reporting route."],
      ["Improve the next cycle", `Use lessons from the first submission to strengthen ${outcomes[2].toLowerCase()} in future periods.`],
    ],
  }),
  registration: (name) => ({
    eyebrow: "Registration pathway",
    title: `A practical route to ${name} registration.`,
    intro: "Registration is a legal process, so the exact requirements depend on the jurisdiction, classes and application details.",
    steps: [
      ["Define what needs protection", "Confirm the name, logo or mark and the goods or services it represents."],
      ["Review the route", "Identify the territory, relevant class of goods or services and the application information required."],
      ["Prepare the application", "Organise the applicant details, mark representation and descriptions carefully before filing."],
      ["File through the right office", "Submit the application and retain the acknowledgement and reference details."],
      ["Respond if questions arise", "Address examination queries or other procedural requests within the required time."],
      ["Maintain the record", "Track publication, registration, renewals and future brand-use evidence."],
    ],
  }),
  training: (name, outcomes) => ({
    eyebrow: "Learning pathway",
    title: `How ${name} training becomes a working habit.`,
    intro: "Training has value when people can apply it in their own work area after the session—not when it ends with a slide deck.",
    steps: [
      ["Choose a real work area", `Select a process, team or challenge where ${name} can be applied immediately.`],
      ["Set a shared starting point", `Observe the current way of working and agree the baseline for ${outcomes[0].toLowerCase()}.`],
      ["Learn by doing", "Use examples, discussion and guided practice rather than theory alone."],
      ["Test the first change", `Apply a small improvement that supports ${outcomes[1].toLowerCase()}.`],
      ["Review what changed", "Check the result with the people involved and adjust the approach where needed."],
      ["Sustain the habit", `Build simple follow-up routines around ${outcomes[2].toLowerCase()}.`],
    ],
  }),
};

const buildJourney = (name, outcomes, kind) => journeyBlueprints[kind](name, outcomes);

const presentationStyles = ["atlas", "signal", "field", "ledger", "studio", "workshop"];

export const serviceDirectory = serviceCategories.map((category, index) => ({
  ...category,
  slug: slugify(category.title),
  index: String(index + 1).padStart(2, "0"),
  profile: categoryProfiles[category.title],
  services: category.items.map((name, serviceIndex) => {
    const profile = serviceProfiles[name];
    const journeyKind = journeyOverrides[name] ?? journeyKinds[category.title];

    return {
      name,
      slug: slugify(name),
      layout: presentationStyles[(index * 2 + serviceIndex) % presentationStyles.length],
      visual: serviceVisuals[(index * 3 + serviceIndex) % serviceVisuals.length],
      ...profile,
      ...editorialNotes[name],
      journey: buildJourney(name, profile.outcomes, journeyKind),
    };
  }),
}));

export const getServiceCategory = (categorySlug) =>
  serviceDirectory.find((category) => category.slug === categorySlug);

export const getService = (categorySlug, serviceSlug) => {
  const category = getServiceCategory(categorySlug);
  return category ? category.services.find((service) => service.slug === serviceSlug) : undefined;
};
