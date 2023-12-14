import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

describe('Image Component', () => {
    const src = 'test.jpg';
    const alt = 'Test Image';

    it('renders an image with the provided src and alt', () => {
        const { getByAltText } = render(<Image src={src} alt={alt} />);
        const image = getByAltText(alt) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image.src).toContain(src);
    });

    it('does not render an image when showImage is false', () => {
        const { queryByAltText } = render(<Image src={src} alt={alt} showImage={false} />);
        expect(queryByAltText(alt)).toBeNull();
    });

    it('renders a chevron icon when showChevron is true', () => {
        const { container } = render(<Image src={src} alt={alt} showChevron={true} chevronDirection="left" />);
        const chevronIcon = container.querySelector('.fa-chevron-left');
        expect(chevronIcon).toBeInTheDocument();
    });

    it('does not render a chevron icon when showChevron is false', () => {
        const { container } = render(<Image src={src} alt={alt} showChevron={false} />);
        const chevronIcon = container.querySelector('.fa-chevron');
        expect(chevronIcon).toBeNull();
    });
});
