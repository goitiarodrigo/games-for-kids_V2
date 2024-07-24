import CardDetail from '@/Components/CardDetail/CardDetail';

const RelatedGames = ({ data }) => {
    return (
        <>
            <h3 className="text-white mb-3">Juegos relacionados</h3>
            <div className="w-full flex flex-wrap gap-5">
                {data.map((element) => (
                    <CardDetail data={element} key={element.id} size="small" />
                ))}
            </div>
        </>
    );
};

export default RelatedGames;
