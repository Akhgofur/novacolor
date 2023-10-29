export interface INavItem {
    name: string,
    id: number,
    url: string
}

export interface IProductVariant {
    id: number,
    image: string
}

export interface IProductItem {
    name: string,
    description_uz: string,
    description_ru: string,
    image: string,
    variants: IProductVariant[],
    id: number,
    category_id: number[]
}