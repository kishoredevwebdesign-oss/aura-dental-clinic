export type Language = 'en' | 'ta';

export interface TreatmentItem {
  id: string;
  name: string;
  nameTa: string;
  category: string;
  tagline: string;
  taglineTa: string;
  description: string;
  descriptionTa: string;
  startingPrice: number;
  priceRange: string;
  priceRangeTa: string;
  turnaround: string;
  turnaroundTa: string;
  sessions: string;
  sessionsTa: string;
  warranty: string;
  warrantyTa: string;
  emiAvailable: boolean;
  minEmi: number;
  highlights: string[];
  highlightsTa: string[];
  icon: string;
}

export interface Doctor {
  id: string;
  name: string;
  nameTa: string;
  qualification: string;
  specialty: string;
  specialtyTa: string;
  experienceYears: number;
  regNumber: string;
  bio: string;
  bioTa: string;
  almaMater: string;
}

export interface Review {
  id: string;
  patientName: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  commentTa: string;
  verifiedVisit: boolean;
}

export const CLINIC_CONTACT = {
  name: "Aura Aesthetic & Dental Clinic",
  nameTa: "ஆரா எஸ்தெடிக் & பல் மருத்துவமனை",
  tagline: "Painless Dental Treatments in Chennai",
  taglineTa: "சென்னையில் வலியற்ற அதிநவீன பல் சிகிச்சை",
  phoneDisplay: "+91 98401 23456",
  phoneTel: "+919840123456",
  landlineDisplay: "044 - 2621 4455",
  whatsappNumber: "919840123456",
  email: "care@auradentalchennai.com",
  address: "Plot No. 1244, 2nd Avenue, Near Roundtana, Anna Nagar West, Chennai, Tamil Nadu 600040",
  addressTa: "மனை எண். 1244, 2வது அவென்யூ, ரவுண்டானா அருகில், அண்ணா நகர் மேற்கு, சென்னை, தமிழ்நாடு 600040",
  landmark: "Opposite to Anna Nagar Tower Club & 350m from Anna Nagar Tower Metro",
  landmarkTa: "அண்ணா நகர் டவர் கிளப் எதிரில் & மெட்ரோ நிலையத்திலிருந்து 350மீ",
  regNo: "TNDSC/Reg/14208/TN",
  nabhStatus: "NABH Pre-Accredited Dental Healthcare Provider",
  nabhStatusTa: "NABH அங்கீகாரம் பெற்ற பல் மருத்துவ மையம்",
  workingHoursWeekday: "Mon - Sat: 9:00 AM - 8:30 PM",
  workingHoursWeekdayTa: "திங்கள் - சனி: காலை 9:00 - இரவு 8:30",
  workingHoursSunday: "Sunday: 10:00 AM - 2:00 PM (By Appointment)",
  workingHoursSundayTa: "ஞாயிறு: காலை 10:00 - மதியம் 2:00 (முன்பதிவு மட்டும்)",
  emergency24x7: "Emergency Dental Line: +91 98401 23456",
  emergency24x7Ta: "அவசர பல் சிகிச்சை உதவி: +91 98401 23456",
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'laser-rct',
    name: 'Laser Root Canal Therapy',
    nameTa: 'லேசர் ரூட் கெனால் சிகிச்சை',
    category: 'Painless Endodontics',
    tagline: 'Single-sitting painless root canal with Zeiss micro-magnification',
    taglineTa: 'ஒரே அமர்வில் வலியற்ற அதிநவீன லேசர் ரூட் கெனால் சிகிச்சை',
    description: 'Advanced dental laser eliminates 99.8% bacterial infection in a single comfortable 45-minute sitting with 3D obturation.',
    descriptionTa: 'அதிநவீன பல் லேசர் மூலம் 45 நிமிடங்களில் தொற்று நீக்கப்பட்டு ஒரே அமர்வில் வலியற்ற சிகிச்சை அளிக்கப்படுகிறது.',
    startingPrice: 4500,
    priceRange: '₹4,500 - ₹8,500 (incl. digital X-ray)',
    priceRangeTa: '₹4,500 - ₹8,500 (டிஜிட்டல் எக்ஸ்ரே உட்பட)',
    turnaround: 'Single Sitting (45 mins)',
    turnaroundTa: 'ஒரே அமர்வு (45 நிமிடங்கள்)',
    sessions: '1 - 2 Visits',
    sessionsTa: '1 - 2 வருகைகள்',
    warranty: '10-Year Crown Warranty',
    warrantyTa: '10 ஆண்டுகள் பற்கிரீடம் வாரண்டி',
    emiAvailable: true,
    minEmi: 1500,
    highlights: ['Painless Computerized Anesthesia', '99.8% Bacterial Sterilization', '3D Digital Apex Locator', 'Zero Swelling Recovery'],
    highlightsTa: ['வலியற்ற கம்ப்யூட்டர் மயக்க மருந்து', '99.8% பாக்டீரியா கிருமி நீக்கம்', '3D டிஜிட்டல் தொழில்நுட்பம்', 'வீக்கம் இல்லாத விரைவு குணம்'],
    icon: 'Zap',
  },
  {
    id: 'clear-aligners',
    name: 'Invisible Clear Aligners',
    nameTa: 'கண்ணுக்குத் தெரியாத கிளியர் அலைனர்ஸ்',
    category: 'Orthodontics',
    tagline: 'Straighten crooked teeth discreetly with 3D digital smile simulation',
    taglineTa: 'கம்பிகள் இல்லாமல் பற்களை நேராக்கும் நவீன டிஜிட்டல் சிகிச்சை',
    description: 'Custom-crafted transparent dental aligners with iTero 3D intraoral digital preview. Eat comfortably with zero metal wires or ulcers.',
    descriptionTa: 'கம்பிகள் இல்லா வெளிப்படையான அலைனர்கள். 3D ஸ்கேன் மூலம் உங்கள் புதிய புன்னகையை முன்கூட்டியே பார்க்கலாம்.',
    startingPrice: 42000,
    priceRange: '₹42,000 - ₹85,000 (Complete Plan)',
    priceRangeTa: '₹42,000 - ₹85,000 (முழு சிகிச்சை)',
    turnaround: '4 to 9 Months',
    turnaroundTa: '4 முதல் 9 மாதங்கள்',
    sessions: 'Digital Scans + Bi-monthly Check-in',
    sessionsTa: 'டிஜிட்டல் ஸ்கேன் + 2 மாதங்களுக்கு ஒருமுறை',
    warranty: 'Smile Refinement Guarantee',
    warrantyTa: 'புன்னகை நேர்த்தி உத்திரவாதம்',
    emiAvailable: true,
    minEmi: 3500,
    highlights: ['iTero 3D Digital Scan in 5 Mins', '100% Transparent & Removable', 'No Food Restrictions', '0% EMI with Bajaj & HDFC'],
    highlightsTa: ['5 நிமிட iTero 3D டிஜிட்டல் ஸ்கேன்', '100% வெளிப்படையான கழற்றி மாற்றக்கூடியவை', 'உணவுக் கட்டுப்பாடுகள் இல்லை', '0% வட்டி தவணை முறை வசதி'],
    icon: 'Sparkles',
  },
  {
    id: 'dental-implants',
    name: 'Swiss Titanium Dental Implants',
    nameTa: 'சுவிஸ் டைட்டானியம் பல் இம்ப்ளான்ட்',
    category: 'Implantology',
    tagline: 'Permanent replacement for missing teeth matching natural strength',
    taglineTa: 'இழந்த பற்களுக்கு நிரந்தர வலிமையான இயற்கை போன்ற மாற்று',
    description: 'Computer-guided keyhole implant surgery with lifetime warranty. Preserves jawbone density and restores 100% chew power.',
    descriptionTa: 'வலியற்ற வழிகாட்டப்பட்ட துல்லியமான அறுவைசிகிச்சை. தாடை எலும்பை பாதுகாத்து இயல்பான மெல்லும் சக்தியை மீட்டெடுக்கிறது.',
    startingPrice: 24000,
    priceRange: '₹24,000 - ₹45,000 per tooth',
    priceRangeTa: '₹24,000 - ₹45,000 ஒரு பல்லுக்கு',
    turnaround: 'Same-day temporary or 3-month integration',
    turnaroundTa: 'அன்றைய தினமே தற்காலிக பல் அல்லது 3 மாதங்கள்',
    sessions: '2 - 3 Visits',
    sessionsTa: '2 - 3 வருகைகள்',
    warranty: 'Lifetime Implant Guarantee',
    warrantyTa: 'வாழ்நாள் உத்திரவாதம்',
    emiAvailable: true,
    minEmi: 2800,
    highlights: ['Computer-Guided Keyhole Surgery', 'Medical Grade 5 Titanium', 'Natural Bite Strength Restored', 'Lifetime Manufacturer Warranty'],
    highlightsTa: ['துல்லியமான வழிகாட்டப்பட்ட முறை', 'தரம் வாய்ந்த டைட்டானியம்', 'இயற்கையான கடிக்கும் சக்தி', 'வாழ்நாள் தயாரிப்பாளர் வாரண்டி'],
    icon: 'ShieldCheck',
  },
  {
    id: 'smile-makeover',
    name: 'Porcelain Veneers & Smile Makeover',
    nameTa: 'பீங்கான் வினியர்ஸ் & புன்னகை மேக்ஓவர்',
    category: 'Cosmetic Dentistry',
    tagline: 'Fix chipped, stained, or spaced teeth for a camera-ready smile',
    taglineTa: 'கறை படிந்த, உடைந்த பற்களை சீரமைக்கும் சினிமா நட்சத்திர புன்னகை',
    description: 'Ultra-thin E-max ceramic veneers designed with Digital Smile Design (DSD) to match facial contours and aesthetic harmony.',
    descriptionTa: 'அல்ட்ரா-மெல்லிய E-max செராமிக் பற்கவசங்கள் உங்கள் முக அமைப்பிற்கு ஏற்ற கவர்ச்சிகரமான புன்னகையை வழங்குகின்றன.',
    startingPrice: 9000,
    priceRange: '₹9,000 - ₹14,000 per tooth',
    priceRangeTa: '₹9,000 - ₹14,000 ஒரு பல்லுக்கு',
    turnaround: '5 - 7 Days (2 Visits)',
    turnaroundTa: '5 - 7 நாட்கள் (2 வருகைகள்)',
    sessions: '2 Visits',
    sessionsTa: '2 வருகைகள்',
    warranty: '15-Year Fracture Warranty',
    warrantyTa: '15 ஆண்டுகள் விரிசல் வாரண்டி',
    emiAvailable: true,
    minEmi: 2000,
    highlights: ['Ultra-thin 0.3mm Prep', 'Stain-resistant E-max Glass Ceramic', 'Custom Shade Matching', 'Digital Smile Preview before bonding'],
    highlightsTa: ['மிக மெல்லிய 0.3mm அமைப்பு', 'கறை படியாத E-max கண்ணாடி செராமிக்', 'இயற்கை நிற தேர்வு', 'பொருத்துவதற்கு முன்பே 3D முன்னோட்டம்'],
    icon: 'Smile',
  },
  {
    id: 'laser-whitening',
    name: 'Instant Laser Teeth Whitening',
    nameTa: 'உடனடி லேசர் பல் வெண்மையாக்கல்',
    category: 'Aesthetic Dentistry',
    tagline: 'Up to 8 shades brighter in just 45 minutes with zero sensitivity',
    taglineTa: '45 நிமிடங்களில் 8 மடங்கு பிரகாசமான வெண்மையான புன்னகை',
    description: 'Cold-light blue laser technology activates professional whitening gel, safely lifting tea, coffee, and tobacco stains without enamel erosion.',
    descriptionTa: 'பாதுகாப்பான குளிர் லேசர் தொழில்நுட்பம் மூலம் பற்களின் எனாமலுக்கு சேதமின்றி காபி, டீ கறைகள் நீக்கப்படுகின்றன.',
    startingPrice: 6500,
    priceRange: '₹6,500 - ₹9,500 (Complete In-Office)',
    priceRangeTa: '₹6,500 - ₹9,500 (முழு சிகிச்சை)',
    turnaround: '45 Minutes (Single Visit)',
    turnaroundTa: '45 நிமிடங்கள் (ஒரே வருகை)',
    sessions: '1 Visit',
    sessionsTa: '1 வருகை',
    warranty: '12-Month Stain Resistance Guide',
    warrantyTa: '12 மாத கறை தடுப்பு ஆலோசனை',
    emiAvailable: false,
    minEmi: 0,
    highlights: ['Zero Sensitivity Desensitizer', 'Removes Years of Coffee/Smoke Stains', 'Instant Wedding & Event Glow', 'Free Polish & Enamel Sealant'],
    highlightsTa: ['கூச்சம் இல்லாத சிகிச்சை', 'வருடக்கணக்கான கறைகளை நீக்கும்', 'திருமணம் மற்றும் விசேஷங்களுக்கு ஏற்றது', 'இலவச பளபளப்பு சிகிச்சை'],
    icon: 'Sun',
  },
  {
    id: 'pediatric-preventive',
    name: 'Kids Dentistry & Preventive Care',
    nameTa: 'குழந்தைகள் பல் மருத்துவம் & தடுப்பு பராமரிப்பு',
    category: 'Pediatric Care',
    tagline: 'Gentle, friendly cavity prevention in a stress-free environment',
    taglineTa: 'குழந்தைகளுக்கான பயமில்லாத, கனிவான பல் பராமரிப்பு',
    description: 'Pit and fissure sealants, fluoride varnish, gentle painless milk-tooth restorations, and pediatric habit-breaking appliances.',
    descriptionTa: 'ஃப்ளூரைடு சிகிச்சை, சொத்தை தடுப்பு சீலண்டுகள் மற்றும் குழந்தைகளின் பயத்தைப் போக்கும் கனிவான சிகிச்சை சூழல்.',
    startingPrice: 1500,
    priceRange: '₹1,500 - ₹3,500 per visit',
    priceRangeTa: '₹1,500 - ₹3,500 ஒரு வருகைக்கு',
    turnaround: '30 Minutes',
    turnaroundTa: '30 நிமிடங்கள்',
    sessions: '1 Visit',
    sessionsTa: '1 வருகை',
    warranty: '6-Month Free Check-up',
    warrantyTa: '6 மாத இலவச பரிசோதனை',
    emiAvailable: false,
    minEmi: 0,
    highlights: ['Child-Friendly Video Screen Chair', 'No-Shot Cavity Sealants', 'Gentle Fluoride Shield Therapy', 'Fun Goodie Bag for Brave Little Smiles'],
    highlightsTa: ['குழந்தைகள் கார்ட்டூன் திரை கொண்ட நாற்காலி', 'ஊசி இல்லாத சொத்தை தடுப்பு', 'மென்மையான ஃப்ளூரைடு பாதுகாப்பு', 'குழந்தைகளுக்கான பரிசுப் பை'],
    icon: 'HeartHandshake',
  },
];

export const ESTIMATOR_DATA = [
  {
    id: 'laser-rct',
    name: 'Laser Root Canal + Crown',
    nameTa: 'ரூட் கெனால் + பற்கிரீடம்',
    tiers: [
      { name: 'Standard Ceramic Crown', nameTa: 'ஸ்டாண்டர்ட் செராமிக் கிரீடம்', price: 6500, duration: '1-2 Days', sessions: '2 Visits', emi: '₹1,625 x 4 mos' },
      { name: 'German Zirconia (10 Yr Warranty)', nameTa: 'ஜெர்மன் சிர்கோனியா (10 வருட வாரண்டி)', price: 9500, duration: '1-2 Days', sessions: '2 Visits', emi: '₹2,375 x 4 mos' },
      { name: 'Premium Monolithic Zirconia (Lifetime)', nameTa: 'பிரீமியம் சிர்கோனியா (வாழ்நாள் வாரண்டி)', price: 13500, duration: '2 Days', sessions: '2 Visits', emi: '₹2,250 x 6 mos' },
    ],
  },
  {
    id: 'clear-aligners',
    name: 'Clear Aligners (Invisible Braces)',
    nameTa: 'கிளியர் அலைனர்ஸ் (கம்பியில்லா பிரேசஸ்)',
    tiers: [
      { name: 'Mild Spacing / Crowding (Single Arch)', nameTa: 'லேசான இடைவெளி (ஒற்றை தாடை)', price: 38000, duration: '3 - 5 Months', sessions: 'Digital Monitoring', emi: '₹3,800 x 10 mos' },
      { name: 'Moderate Alignment (Both Arches)', nameTa: 'நடுத்தர சீரமைப்பு (இரண்டு தாடைகள்)', price: 58000, duration: '6 - 9 Months', sessions: 'Digital Monitoring', emi: '₹4,833 x 12 mos' },
      { name: 'Complex Bite Correction (Full Case)', nameTa: 'முழுமையான பல் சீரமைப்பு', price: 82000, duration: '9 - 14 Months', sessions: 'Bi-monthly In-clinic', emi: '₹6,833 x 12 mos' },
    ],
  },
  {
    id: 'dental-implants',
    name: 'Single Tooth Dental Implant',
    nameTa: 'ஒற்றை பல் இம்ப்ளான்ட்',
    tiers: [
      { name: 'Korean NeoBioTech + Porcelain Crown', nameTa: 'நியோ பயோடெக் + செராமிக் கிரீடம்', price: 24000, duration: 'Immediate + 3 Mos Osseointegration', sessions: '2 Visits', emi: '₹3,000 x 8 mos' },
      { name: 'Swiss Straumann SLA + Zirconia Crown', nameTa: 'சுவிஸ் ஸ்ட்ராமேன் + சிர்கோனியா கிரீடம்', price: 38000, duration: 'Faster Bone Bonding', sessions: '2 Visits', emi: '₹4,750 x 8 mos' },
      { name: 'Nobel Biocare Active (Immediate Loading)', nameTa: 'நோபல் பயோகேர் (அன்றே பல் பொருத்துதல்)', price: 48000, duration: 'Same-day Tooth Option', sessions: '2 Visits', emi: '₹4,000 x 12 mos' },
    ],
  },
  {
    id: 'smile-makeover',
    name: 'Veneers & Aesthetic Bonding',
    nameTa: 'வினியர்ஸ் & அழகியல் சிகிச்சை',
    tiers: [
      { name: 'Composite Veneer (Per Tooth)', nameTa: 'காம்போசிட் வினியர் (ஒரு பல்லுக்கு)', price: 3500, duration: 'Same Day (1 Hour)', sessions: '1 Visit', emi: 'Cash / Card' },
      { name: 'German E-Max Porcelain Veneer (Per Tooth)', nameTa: 'ஜெர்மன் E-Max பீங்கான் வினியர்', price: 9500, duration: '4 - 5 Days', sessions: '2 Visits', emi: '₹2,375 x 4 mos' },
      { name: 'Complete 6-Tooth Smile Makeover (E-Max)', nameTa: 'முழு 6 பற்கள் ஸ்மைல் மேக்ஓவர்', price: 52000, duration: '5 - 7 Days', sessions: '2 Visits', emi: '₹5,200 x 10 mos' },
    ],
  },
  {
    id: 'cleaning-whitening',
    name: 'Scaling, Polishing & Whitening',
    nameTa: 'பல் சுத்தம் & வெண்மையாக்குதல்',
    tiers: [
      { name: 'Ultrasonic Deep Scaling & Air Polishing', nameTa: 'அல்ட்ராசோனிக் கிளீனிங் & ஏர் பாலிஷிங்', price: 1500, duration: '30 Minutes', sessions: '1 Visit', emi: 'Direct Pay' },
      { name: 'In-Office Cold Laser Whitening', nameTa: 'இன்-ஆபீஸ் கோல்ட் லேசர் வெண்மையாக்கல்', price: 6500, duration: '45 Minutes', sessions: '1 Visit', emi: 'Direct Pay' },
      { name: 'Bridal/Groom Glow: Cleaning + Laser Whitening', nameTa: 'மணமகன்/மணமகள் ஸ்பெஷல் பேக்கேஜ்', price: 7500, duration: '60 Minutes', sessions: '1 Visit', emi: '₹2,500 x 3 mos' },
    ],
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-soundarya',
    name: 'Dr. K. Soundarya MDS',
    nameTa: 'டாக்டர் கே. சௌந்தர்யா MDS',
    qualification: 'MDS (Conservative Dentistry & Endodontics), Fellow in Cosmetic Dentistry (FCD)',
    specialty: 'Chief Aesthetic Dentist & Endodontist',
    specialtyTa: 'தலைமை அழகியல் பல் மருத்துவர் & எண்டோடோன்டிஸ்ட்',
    experienceYears: 14,
    regNumber: 'TNDSC 14208',
    bio: 'Pioneered micro-endodontics and painless laser dentistry in Chennai with over 12,000 successful root canal treatments and smile redesigns.',
    bioTa: 'சென்னையில் மைக்ரோ-எண்டோடோன்டிக்ஸ் மற்றும் லேசர் பல் மருத்துவத்தில் 14 வருட அனுபவமும் 12,000+ வெற்றிகரமான சிகிச்சைகளும் வழங்கியவர்.',
    almaMater: 'Government Dental College & Hospital, Chennai',
  },
  {
    id: 'dr-vignesh',
    name: 'Dr. R. Vignesh MDS',
    nameTa: 'டாக்டர் ஆர். விக்னேஷ் MDS',
    qualification: 'MDS (Orthodontics & Dentofacial Orthopedics), Certified Clear Aligner Specialist',
    specialty: 'Senior Orthodontist & Aligner Specialist',
    specialtyTa: 'முதுநிலை பல் சீரமைப்பு & அலைனர் நிபுணர்',
    experienceYears: 11,
    regNumber: 'TNDSC 16542',
    bio: 'Diamond certified invisible aligner specialist with expertise in non-extraction teeth alignment for adults and adolescents.',
    bioTa: 'பற்களை எடுக்காமல் அலைனர்கள் மூலம் நேராக்கும் அதிநவீன சிகிச்சையில் 11 வருட அனுபவம் பெற்ற சான்றளிக்கப்பட்ட நிபுணர்.',
    almaMater: 'Saveetha Dental College, Chennai',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Karthik Subramanian',
    location: 'Anna Nagar West, Chennai',
    treatment: 'Laser Root Canal & Zirconia Crown',
    rating: 5,
    date: 'February 2026',
    comment: 'I walked in terrified of root canal pain, but Dr. Soundarya finished it in 45 minutes with zero discomfort. The computerized anesthesia was literally painless. Best dental experience in Chennai!',
    commentTa: 'ரூட் கெனால் என்றாலே பயந்து நடுங்குவேன், ஆனால் டாக்டர் சௌந்தர்யா 45 நிமிடங்களில் துளியும் வலியின்றி செய்து முடித்தார். அண்ணா நகரில் சிறந்த கிளினிக்!',
    verifiedVisit: true,
  },
  {
    id: 'rev-2',
    patientName: 'Priya Meenakshi',
    location: 'Kilpauk, Chennai',
    treatment: 'Invisible Clear Aligners',
    rating: 5,
    date: 'January 2026',
    comment: 'Got my clear aligners here. Within 6 months my forward front teeth were completely straightened. Nobody at my office even noticed I was wearing aligners. 0% EMI was very helpful.',
    commentTa: '6 மாதத்தில் எனது பற்கள் அழகாக நேராகிவிட்டன. அலுவலகத்தில் யாருக்கும் நான் அலைனர் போட்டிருந்தது கூட தெரியவில்லை. தவணை முறை வசதி மிக பயனுள்ளதாக இருந்தது.',
    verifiedVisit: true,
  },
  {
    id: 'rev-3',
    patientName: 'Senthil Nathan',
    location: 'Shenoy Nagar, Chennai',
    treatment: 'Dental Implant & Crown',
    rating: 5,
    date: 'March 2026',
    comment: 'Replaced a missing molar that had bothered me for 3 years. The implant surgery was over in 20 minutes with zero swelling. Cleanliness and sterilization are top tier European standards.',
    commentTa: '3 வருடமாக காணாமல் இருந்த கடவாய்ப் பல்லுக்கு இம்ப்ளான்ட் வைத்தேன். 20 நிமிடங்களில் எந்த வலியும் வீக்கமும் இன்றி முடிந்தது. தூய்மை மிக அருமை.',
    verifiedVisit: true,
  },
  {
    id: 'rev-4',
    patientName: 'Ananya S. Rao',
    location: 'Mogappair East, Chennai',
    treatment: 'Bridal Laser Whitening & Veneers',
    rating: 5,
    date: 'Last month',
    comment: 'Got my smile makeover done just two weeks before my wedding. The laser whitening lifted 5 years of coffee stains, and the porcelain veneers look so natural. My wedding photos turned out gorgeous!',
    commentTa: 'எனது திருமணத்திற்கு முன் ஸ்மைல் மேக்ஓவர் செய்தேன். பற்கள் மிக பிரகாசமாகவும் இயற்கையாகவும் உள்ளன. எனது திருமண புகைப்படங்கள் மிகவும் அழகாக வந்தன!',
    verifiedVisit: true,
  },
];

export const CLINIC_FEATURES = [
  {
    title: 'Painless Wand Anesthesia',
    titleTa: 'வலியற்ற கம்ப்யூட்டர் மயக்க மருந்து',
    desc: 'Computer-controlled precision flow eliminates traditional injection pain completely.',
    descTa: 'பாரம்பரிய ஊசி வலி இல்லாமல் துல்லியமாக மயக்க மருந்து செலுத்தும் நவீன முறை.',
  },
  {
    title: 'iTero 3D Digital Scanner',
    titleTa: 'iTero 3D டிஜிட்டல் ஸ்கேனர்',
    desc: 'No gooey impression pastes. Digital 3D colored scan of your entire mouth in 5 minutes.',
    descTa: 'ஒட்டும் மாவு இல்லாமல் 5 நிமிடங்களில் வாயின் முப்பரிமாண வண்ண டிஜிட்டல் ஸ்கேன்.',
  },
  {
    title: 'Class-B European Sterilization',
    titleTa: 'ஐரோப்பிய தர கிருமி நீக்கம்',
    desc: 'Strict 6-step medical autoclave sterilization exceeding international safety norms.',
    descTa: 'சர்வதேச மருத்துவ வழிகாட்டுதல்களை விஞ்சிய கடுமையான 6-படி கிருமி நீக்க நடைமுறை.',
  },
  {
    title: 'Transparent Pricing & 0% EMI',
    titleTa: 'வெளிப்படையான கட்டணம் & 0% EMI',
    desc: 'No hidden charges. Flexible zero-interest installment options with instant approval.',
    descTa: 'மறைமுக கட்டணங்கள் இல்லை. எளிய வட்டி இல்லா மாதத் தவணை வசதிகள்.',
  },
];
