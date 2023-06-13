export interface ApiResponse {
    drinks: Drink[]
  }
  
  export interface Drink {
    id: string
    strDrink: string
    strDrinkAlternate: string | null
    strTags?: string
    strVideo: string | null
    strCategory: string
    strIBA?: string
    strAlcoholic: string
    strGlass: string
    strInstructions: string
    strInstructionsES: string | null
    strInstructionsDE?: string
    strInstructionsFR: string | null
    strInstructionsIT: string
    strInstructionsZHHANS: string 
    strInstructionsZHHANT: string 
    strDrinkThumb?: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4?: string
    strIngredient5?: string
    strIngredient6?: string
    strIngredient7?: string
    strIngredient8: string | null
    strIngredient9: string | null
    strIngredient10: string | null
    strIngredient11: string | null
    strIngredient12: string | null
    strIngredient13: string | null
    strIngredient14: string | null
    strIngredient15: string | null
    strMeasure1: string
    strMeasure2: string
    strMeasure3: string
    strMeasure4?: string| null
    strMeasure5?: string| null
    strMeasure6?: string| null
    strMeasure7?: string| null
    strMeasure8: string | null
    strMeasure9: string | null
    strMeasure10: string | null
    strMeasure11: string | null
    strMeasure12: string | null
    strMeasure13: string | null
    strMeasure14: string | null
    strMeasure15: string | null
    strImageSource?: string
    strImageAttribution?: string
    strCreativeCommonsConfirmed: string
    dateModified?: string
  }
  
  
  
  export interface DrinkTransformedI {
    idDrink: string
    strDrink: string
    strAlcoholic: string
    strInstructions: string
    strInstructionsES: string | null
    strInstructionsDE?: string
    strDrinkThumb: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4?: string| null
    strIngredient5?: string| null
    strIngredient6?: string| null
    strIngredient7?: string| null
    strIngredient8: string | null
   
  }


  export interface Apijson {
    id: string
    strDrink: string
    strAlcoholic: string
    strInstructions: string
    strInstructionsES: string | null
    strInstructionsDE?: string
    strDrinkThumb: string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: string
    strIngredient4?: string| null
    strIngredient5?: string| null
    strIngredient6?: string| null
    strIngredient7?: string| null
    strIngredient8: string | null
   
  }

