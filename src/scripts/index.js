import selectGenre from "./genre.js"
import applyInputRangeStyle from "./inputRange.js"
import createAlbumCard from "./albumsDatabase.js"
import themeAnalysis from "./theme.js"

function routine () {
    selectGenre()
    applyInputRangeStyle()
    createAlbumCard()
    themeAnalysis()
} 

routine()