/**
 * Created by Nikunj on 6/8/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MyNewComponentComponent} from 'app/my-new-component/my-new-component.component';
import {NikitacmdComponent} from 'app/nikitacmd/nikitacmd.component';
import {PinkalcmdComponent} from 'app/pinkalcmd/pinkalcmd.component';


const appRoutes: Routes = [
    // { path: '/**',component: AppComponent},
    //{ path: '/*',component: AppComponent},

    { path: '', component: MyNewComponentComponent},
    {path: 'nikita', component: NikitacmdComponent},
    {path:'pinkal', component:PinkalcmdComponent}

    // { path: 'content', component: ContentComponent,outlet:'content'},
];


export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });