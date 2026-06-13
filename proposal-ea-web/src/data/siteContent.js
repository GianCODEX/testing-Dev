import completedHomeFacade from '../assets/achievements/completed-home-facade.png'
import constructionProgressTownhouse from '../assets/achievements/construction-progress-townhouse.png'
import finishedResidenceFront from '../assets/achievements/finished-residence-front.png'
import gateAndLandscapeDetail from '../assets/achievements/gate-and-landscape-detail.png'
import interiorLivingDetail from '../assets/achievements/interior-living-detail.png'
import kitchenInteriorFinish from '../assets/achievements/kitchen-interior-finish.png'
import landscapeGardenDetail from '../assets/achievements/landscape-garden-detail.png'
import rowhouseExterior from '../assets/achievements/rowhouse-exterior.png'

export const company = {
  name: 'EA Architectural and Construction Services',
  address: 'Block 1 Lot 13, Lynville Phase 2, Bagumbayan, Santa Cruz, Laguna',
}

export const serviceColumns = [
  [
    'Architectural Planning',
    'Build and Construct',
    'Landscape',
    'Interior Designing',
    'Exterior Designing',
  ],
  [
    'Repair and Renovation',
    'House Improvement',
    'Commercial / Residential',
    'Anything that deals w/ design',
  ],
]

export const projectTypes = [
  {
    label: 'Plan',
    detail: 'Architectural planning, design direction, and space studies.',
  },
  {
    label: 'Build',
    detail: 'Residential and commercial construction from structure to finish.',
  },
  {
    label: 'Improve',
    detail: 'Repairs, renovations, landscape work, and interior upgrades.',
  },
]

export const achievements = [
  {
    title: 'Completed Residence Facade',
    category: 'Residential Build',
    image: finishedResidenceFront,
  },
  {
    title: 'Townhouse Construction Progress',
    category: 'Build and Construct',
    image: constructionProgressTownhouse,
  },
  {
    title: 'Finished Home Frontage',
    category: 'Exterior Designing',
    image: completedHomeFacade,
  },
  {
    title: 'Gate and Landscape Detail',
    category: 'House Improvement',
    image: gateAndLandscapeDetail,
  },
  {
    title: 'Rowhouse Exterior Works',
    category: 'Commercial / Residential',
    image: rowhouseExterior,
  },
  {
    title: 'Living Area Interior Finish',
    category: 'Interior Designing',
    image: interiorLivingDetail,
  },
  {
    title: 'Kitchen Cabinetry and Lighting',
    category: 'Interior Fit-out',
    image: kitchenInteriorFinish,
  },
  {
    title: 'Landscape Garden Detail',
    category: 'Landscape',
    image: landscapeGardenDetail,
  },
]

export const companyDetails = [
  {
    label: 'Sole Proprietor/Owner',
    value: 'Ericson De Jesus Arevalo',
  },
  {
    label: 'Established date',
    value: 'September 19, 2005',
  },
  {
    label: 'Location',
    value: '#3 Lire 3, Saint Michael Homes, Brgy. Lias, Marilao, Bulacan',
  },
  {
    label: 'Mobile numbers',
    lines: ['Smart - 09494158448', 'Globe - 09064639043'],
  },
  {
    label: 'Email',
    value: '#######@gmail.com',
    href: 'mailto:noscireolavera@example.com',
  },
]
