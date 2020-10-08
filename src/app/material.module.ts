import { NgModule  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule
    ]
})
export class MaterialModule{

}