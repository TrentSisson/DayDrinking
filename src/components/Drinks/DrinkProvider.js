import React, { useState, } from "react"
import { key }from "../ApiKey"




export const DrinksContext = React.createContext()

export const DrinkProvider = (props) => {
    const [drinks, setDrinks] = useState([])

    
    const getDrinksA = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=a`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
             })
    }
    const getDrinksB = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=b`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
             })
    }
    const getDrinksC = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=c`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksD = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=d`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksE = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=e`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksF = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=f`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksG = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=g`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksH = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=h`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksI = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=i`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksJ = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=j`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksK = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=k`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksL = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=l`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksM = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=m`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksN = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=n`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksO = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=o`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksP = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=p`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksQ = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=q`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksR = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=r`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksS = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=s`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksT = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=t`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksU = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=u`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksV = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=v`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksW = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=w`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksX = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=x`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksY = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=y`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
    }
    const getDrinksZ = () => {
        return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/search.php?f=z`)
        .then(res => res.json())
        .then(objDrinks => {
            setDrinks(objDrinks.drinks)
                })
            }
            const getDrinksById = (idDrink) => {
                return fetch (`https://www.thecocktaildb.com/api/json/v2/${key}/lookup.php?i=${idDrink}`)
                .then(res => res.json())
                .then(objDrinks => {
                    setDrinks(objDrinks.drinks)
                        })
            }


    // console.log(setDrinks)

    return (
        <DrinksContext.Provider value={{
            drinks, getDrinksA, getDrinksB, getDrinksC, getDrinksD, getDrinksE, getDrinksF, getDrinksG, getDrinksH,
             getDrinksI, getDrinksJ, getDrinksK, getDrinksL, getDrinksM, getDrinksN, getDrinksO, getDrinksP,
              getDrinksQ, getDrinksR, getDrinksS, getDrinksT, getDrinksU, getDrinksV, getDrinksW, getDrinksX, getDrinksY, getDrinksZ,
              getDrinksById
        }}>
            {props.children}
        </DrinksContext.Provider>
    )
}
