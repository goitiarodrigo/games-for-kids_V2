import { IGameInfo } from '@/interfaces/game.interface';

interface IProps {
    data: IGameInfo;
}

const DescriptionTab = ({ data }: IProps) => {
    const {
        name,
        rating,
        addedOn,
        developer,
        lastFileUpdatedOn,
        technology,
        hierarchy,
        externalLinks,
    } = data;

    return (
        <div className="flex flex-col">
            <h3>{name}</h3>
            <span>
                Clasificación: <span>{rating || '-'}</span>
            </span>
            <span>
                Desarrollador: <span>{developer || '-'}</span>
            </span>
            <span>
                Publicado en: <span>{addedOn ? new Date(addedOn).toLocaleDateString() : '-'}</span>
            </span>
            <span>
                Última actualización:{' '}
                <span>
                    {lastFileUpdatedOn ? new Date(lastFileUpdatedOn).toLocaleDateString() : '-'}
                </span>
            </span>
            <span>
                Tecnología: <span>{technology?.toUpperCase() || '-'}</span>
            </span>
            <span>
                Clasificación:{' '}
                <span>Juegos {`>> ${hierarchy?.map((el) => el.name).join(' >> ')} `}</span>
            </span>
            <span>
                Páginas Wiki:{' '}
                <a href={externalLinks?.fandom} rel="noreferrer" target="_blank">
                    Fandom
                </a>
            </span>
        </div>
    );
};

export default DescriptionTab;
