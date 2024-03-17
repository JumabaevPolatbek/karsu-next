export type Menus = Menu[]

export interface Menu {
  id: string
  title: string
  content: string
  lang: string
  translations: Translations
  children: Children[]
}

export interface Translations {
  en: any
  ru: any
  uz: number
  kk: any
}

export interface Children {
  id: string
  title: string
  slug: string
  lang: string
  parent_slug: string
  parent_title: string
  parent_id: string
  children: Children2[]
}

export interface Children2 {
  id: string
  title: string
  slug: string
  lang: string
  parent_slug: string
  parent_title: string
  parent_id: string
}
