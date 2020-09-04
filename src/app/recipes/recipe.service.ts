import { Recipe } from './recipe.model';

export class RecipeService {
    private recipies: Recipe[] = [
        // tslint:disable-next-line: max-line-length
        new Recipe('A Test Recipe', 'This is a test', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg'),
        // tslint:disable-next-line: max-line-length
        new Recipe('Another Test Recipe', 'This is a test', 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg')
      ];

    getRecipes(): Recipe[] {
        return this.recipies.slice();
    }
}
