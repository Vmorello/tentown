export type representation = {
  icon: string
  x: number, y: number
  data: string[]
  id: string
  visible_name: string
  radius: number
  link: string | null
  map_id: string
  hidden: boolean
  width: number
  height: number
  image_storage: string[]
  order: number
}

export type preview= {
  item: representation;
  file: File;
}
