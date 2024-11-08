import { OriginPlanet } from "./origin-planet"

export interface CharacterById {
    id: string
    name: string
    ki: string,
    maxKi: string,
    afiliatin: string,
    race: string,
    gender: string,
    description: string,
    image: string,
    affiliation: string,
    deletedAt: any
    originPlanet: OriginPlanet,
    transformations: any[]
}
