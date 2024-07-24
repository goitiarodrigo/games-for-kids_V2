import { Chip } from '@mui/material';

import { IGameInfo } from '@/interfaces/game.interface';

interface IProps {
    data: IGameInfo;
}

const InfoTab = ({ data }: IProps) => {
    const { descriptionFirst, descriptionRest, tags } = data;

    return (
        <div className="w-full">
            {/* <div dangerouslySetInnerHTML={{ __html: descriptionFirst }} />
            <div dangerouslySetInnerHTML={{ __html: descriptionRest }} /> */}

            <div className="flex flex-wrap gap-3">
                {tags?.map((tag, index) => <Chip key={index} label={tag.name} />)}
            </div>
        </div>
    );
};

export default InfoTab;
