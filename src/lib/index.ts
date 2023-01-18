export { default as BohrAtom } from './BohrAtom.svelte'
export { default as ColorCustomizer } from './ColorCustomizer.svelte'
export { default as element_data } from './element-data'
export { default as ElementHeading } from './ElementHeading.svelte'
export { default as ElementPhoto } from './ElementPhoto.svelte'
export { default as ElementStats } from './ElementStats.svelte'
export { default as ElementTile } from './ElementTile.svelte'
export { default as Icon } from './Icon.svelte'
export { default, default as PeriodicTable } from './PeriodicTable.svelte'
export { default as ScatterPlot } from './ScatterPlot.svelte'
export { default as TableInset } from './TableInset.svelte'

export type Category =
  | `actinide`
  | `alkali metal`
  | `alkaline earth metal`
  | `diatomic nonmetal`
  | `lanthanide`
  | `metalloid`
  | `noble gas`
  | `polyatomic nonmetal`
  | `post-transition metal`
  | `transition metal`

export type ChemicalElement = {
  'cpk-hex': string | null
  appearance: string
  atomic_mass: number
  atomic_radius: number
  boiling_point: number | null
  category: Category
  column: number // aka group, in range 1 - 18
  covalent_radius: number
  density: number
  discoverer: string
  electron_affinity: number
  electron_configuration_semantic: string
  electron_configuration: string
  electronegativity_pauling: number | null
  electronegativity: number | null
  first_ionization: number
  ionization_energies: number[]
  jmol_color: string
  melting_point: number | null
  metal: boolean | null
  metalloid: boolean | null
  molar_heat: number | null
  n_electrons: number
  n_neutrons: number
  n_protons: number
  n_shells: number
  n_valence: number
  name: string
  natural: boolean | null
  nonmetal: boolean | null
  number_of_isotopes: number
  number: number
  period: number
  phase: 'Gas' | 'Liquid' | 'Solid'
  radioactive: boolean | null
  row: number // != period for lanthanides and actinides
  shells: number[]
  specific_heat: number
  spectral_img: string
  summary: string
  symbol: string
  year: number | string
}

export type PlotPoint = [number, number, ChemicalElement]

export type DispatchPayload = CustomEvent<{
  element: ChemicalElement
  active: boolean // whether the event target tile is currently active
  dom_event: Event // the DOM event that triggered the Svelte dispatch
}>

export type PeriodicTableEvents = {
  click: DispatchPayload
  mouseenter: DispatchPayload
  mouseleave: DispatchPayload
  keyup: DispatchPayload
  keydown: DispatchPayload
}
