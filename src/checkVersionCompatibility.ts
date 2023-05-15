export function checkVersionCompatibility(
  offeringVersion: string,
  demandingVersion: string
): 'compatible' | 'too behind' | 'too ahead' {
  const [offeringMajor, offeringMinor, offeringPatch] = offeringVersion.split('.').map(part => Number(part))
  const [demandingMajor, demandingMinor, demandingPatch] = demandingVersion.split('.').map(part => Number(part))

  if (
    typeof offeringMajor !== 'number' ||
    Number.isNaN(offeringMajor) ||
    typeof offeringMinor !== 'number' ||
    Number.isNaN(offeringMinor) ||
    typeof offeringPatch !== 'number' ||
    Number.isNaN(offeringPatch)
  )
    return 'too ahead'

  if (
    typeof demandingMajor !== 'number' ||
    Number.isNaN(demandingMajor) ||
    typeof demandingMinor !== 'number' ||
    Number.isNaN(demandingMinor) ||
    typeof demandingPatch !== 'number' ||
    Number.isNaN(demandingPatch)
  )
    return 'too behind'

  if (demandingMajor < offeringMajor) return 'too behind'
  if (demandingMajor > offeringMajor) return 'too ahead'
  if (demandingMinor > offeringMinor) return 'too ahead'

  return 'compatible'
}
