import { ImageList } from '@mui/material';
import { ComponentCommonTwoColumnBlock } from 'graphql/types';

type Props = {
    data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
    const {
        data: {
            Image: {
                data: {
                    attributes: { previewUrl, width, height, alternativeText },
                },
            },
        },
    } = props;

    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
            <img
                src={previewUrl}
                width={width}
                height={height}
                alt={alternativeText}
            />
        </ImageList>
    );
};

export default TwoColumnBlock;
