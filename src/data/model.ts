export type PuzzleItem = {
    theme: string;
    title: string;
    previewImg: string;
    price: string;
    numberOfPieces: number;
    description: string;
    image: string;
};

export interface PuzzleSliceState {
    items: PuzzleItem[];
}
