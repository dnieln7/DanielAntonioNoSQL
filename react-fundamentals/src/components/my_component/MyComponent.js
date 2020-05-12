import React from "react";

export default class MyComponent extends React.Component {
    render() {
        let recipe = {
            name: "pizza",
            ingredients: ["Tomato", "Cheese", "Pepper"],
            calories: 400,
        };

        return (
            <React.Fragment>
                <h1>{"Recipe " + recipe.name}</h1>
                <h2>Ingredients</h2>
                <ul>
                    {
                        recipe.ingredients.map((ingredient, index) =>
                             <li key={index}>
                                {ingredient}
                            </li>
                        )
                    }
                </ul>
            </React.Fragment>
        );
    }
}
