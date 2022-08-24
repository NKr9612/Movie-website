import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChangeLibraryComponent } from "./pages/http-test/change-library/change-library.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { MoviesInCategoryComponent } from "./pages/categories/movies-in-category/movies-in-category.component";
import { MovieDetailsComponent } from "./pages/movies/movie-details/movie-details.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { MovieInYearsComponent } from "./years/movie-in-years/movie-in-years.component";
import { YearsComponent } from "./years/years/years.component";


const routes:Routes = [
    {path:"", redirectTo:"/movies", pathMatch:"full"},
    {path: "movies", component: MoviesComponent},
    {path: "movies/:id", component:MovieDetailsComponent},
    {path: "category", component:CategoriesComponent},
    {path: "category/:category", component:MoviesInCategoryComponent},
    {path:'years', component: YearsComponent},
    {path:"years/:year", component:MovieInYearsComponent},
    {path:"change-library", component:ChangeLibraryComponent},
    {path:"**", component:PageNotFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{

}