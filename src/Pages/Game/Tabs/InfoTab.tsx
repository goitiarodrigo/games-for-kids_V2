import { Chip } from '@mui/material';
import DomPurify from 'dompurify';

import { IGameInfo } from '@/interfaces/game.interface';

interface IProps {
    data: IGameInfo;
}

const InfoTab = ({ data }: IProps) => {
    const { descriptionFirst, descriptionRest, tags } = data;

    const sanitizedDescriptionFirst = DomPurify.sanitize(descriptionFirst);
    const sanitizedDescriptionRest = DomPurify.sanitize(descriptionRest);

    return (
        <div className="w-full">
            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: sanitizedDescriptionFirst }} />
            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: sanitizedDescriptionRest }} />
            <div className="flex flex-wrap gap-3">
                {tags?.map((tag, index) => <Chip key={index} label={tag.name} />)}
            </div>
        </div>
    );
};

export default InfoTab;
