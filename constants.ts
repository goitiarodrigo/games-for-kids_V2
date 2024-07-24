export const URL_API_CG = "https://api.crazygames.com/v3"
export const URL_IMAGES_CG = "https://images.crazygames.com/"
export const URL_VIDEOS_CG = "https://videos.crazygames.com/"

export const getUrlForGames = (type: string) => {
    return `${URL_API_CG}/en_US/games?paginationPage=1&paginationSize=10&sorting=${type}&device=desktop`
}

export const getUrlFormEachGame = (game: string) => {
    return `${URL_API_CG}/en_US/page/tagCategory/${game}?paginationPage=1&paginationSize=70&includeUnreal=true&sorting=default&limitTopGames=15&limitSubRowTags=15&limitDesktopOnly=8&device=desktop&includeDesktopOnly=false&limitTopMobileGames=10&limitRelatedTags=20&desktopPageSize=70`
}

export const getUrlForAnyGame = (game: string) => {
    return `${URL_API_CG}/es_ES/page/game/${game}?limit=15&device=desktop&includeRelatedGames=true&includeDesktopOnly=false`
}