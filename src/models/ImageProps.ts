export interface ImageProps {
    src: string;
    alt: string;
    showChevron?: boolean;
    chevronDirection?: 'left' | 'right';
    showImage?: boolean;
    chevronColor?: 'black' | 'white';
    imageFirst?: boolean;
}
