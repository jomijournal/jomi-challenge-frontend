import { ImageList } from '@mui/material';
import { ComponentCommonCarousel } from 'graphql/types';
type Props = {
    data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
    return (
        <ImageList sx={{ height: 450 }} cols={2} rowHeight={164}>
            {data?.Item?.map((item) => (
                <img
                    key={item.Image.data.attributes.url}
                    src={item.Image.data.attributes.previewUrl}
                    width={item.Image.data.attributes.width}
                    height={item.Image.data.attributes.height}
                    alt={item.Image.data.attributes.alternativeText}
                />
            ))}
        </ImageList>
    );
};

export default CarouselBlock;
