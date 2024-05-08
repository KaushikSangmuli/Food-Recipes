import React from "react";
console.log(React)
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
console.log(root)

function MyRecipe(id, image, name, ingredients, instructions, cuisine, prepTimeMinutes, cookTimeMinutes, caloriesPerServing) {
    const handleClick = () => {
        window.origin = "k"
        let text = "This will redirect you to BlinkIt";
        if (confirm(text) == true) {
            window.location.href = "https://www.blinkit.com/";
        } 
    }
    return (
        <div key={id} className="recipe">
            <div className="image-div">
                <img src={image} />
            </div>
            <div className="recipe-content">
                <h2 >{name} </h2>
                <p> This <b>{cuisine} cuisine </b>just has <b> {caloriesPerServing}</b> calories. </p>
                <div className=" ingredients">
                    <span className="subheading"> Ingredients :</span>
                    <div className="ingredient-name">
                          { ingredients.map((ingredient , index)=>{
                             return <span  key={index}>{ingredient} {index<ingredients.length-1? ",":"."} </span>
                          })
                          }
                    </div>
                    <button onClick={handleClick} className="order-btn"> Order here</button>
                    
                </div>
                <p> This recipe just need {prepTimeMinutes+cookTimeMinutes} minutes to prepare </p>
                <div className="instructions">
                    <span className="subheading">Instructions</span>
                    {
                        instructions.map((instruction, index) => {
                            return <p key={index}> {"\u00A0"}{"\u00A0"} {index + 1}.{"\u00A0"} {instruction} </p>
                        })
                    }
                    <button className="connect-btn"> <a href="https://wa.me/8308494066"> Connect with MasterChef</a></button>
                </div>
            </div>
            <p className="copyright"> Made with ♥ by Kaushik Sangmuli</p>
        </div>
    )
}


fetch("https://dummyjson.com/recipes")
    .then((res) => {
        return res.json()
    }).then((data) => {
        return data.recipes
    }).then((recipes) => {
        console.log(recipes)


        root.render(

            <div className="recipe-container">
                {
                    recipes.map((recipe) => {
                        return MyRecipe(
                            recipe.id,
                            recipe.image,
                            recipe.name,
                            recipe.ingredients,
                            recipe.instructions,
                            recipe.cuisine,
                            recipe.prepTimeMinutes,
                            recipe.cookTimeMinutes,
                            recipe.caloriesPerServing

                        )
                    })
                }
            </div>

        )
    })

