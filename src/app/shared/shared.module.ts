import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MovieComponent } from "./components/movie/movie.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        MovieComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent,
        MovieComponent
    ]
})

export class SharedModule { }