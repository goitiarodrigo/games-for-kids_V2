export const URL_API_CG = "https://api.crazygames.com/v3"
export const URL_IMAGES_CG = "https://images.crazygames.com/"
export const URL_VIDEOS_CG = "https://videos.crazygames.com/"

export const getUrlForGames = (type: string) => {
    return `${URL_API_CG}/en_US/games?paginationPage=1&paginationSize=10&sorting=${type}&device=desktop`
}