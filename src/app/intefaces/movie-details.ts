export interface MovieDetails {
    genres: Genre[]
    id: number
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
  export interface Genre {
    id: number
    name: string
  }