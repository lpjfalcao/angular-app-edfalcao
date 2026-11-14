import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ObrasComponent } from './pages/obras/obras.component';
import { PremiacoesComponent } from './pages/premiacoes/premiacoes.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EventoSelecionadoComponent } from './pages/evento-selecionado/evento-selecionado.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'obras', component: ObrasComponent },
    { path: 'premiacoes', component: PremiacoesComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'eventos/:id', component: EventoSelecionadoComponent},
    { path: 'biografia', component: BiografiaComponent },
    { path: 'contato', component: ContatoComponent },
    { path: '**', redirectTo: '' }
];

