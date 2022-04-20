
export interface ClothingPiece {
    name: string;
    img_url: string;
    note: string
    type: string;
    link: string;
    brand: string;
    cost: string;
}

export interface CreateOutfitType {
    title: string;
    description: string;
    pieces: Array<ClothingPiece>

}

