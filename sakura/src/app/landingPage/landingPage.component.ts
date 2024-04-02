import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-landingPage', // il selettore é il tag HTML che identifica il componente. Questo ci permette di inserire questo componente all'interno di alri componenti tramite il tag <app-landingPage></app-landingPage>
    standalone: true, // con questa proprietá su true, diciao che il componente é a se stante;
    imports: [CommonModule, NavbarComponent], // la proprietá imports ci permette di importare altri componenti o servizi come quelli che sono in alto "CommonModule etc"
    templateUrl: './landingPage.component.html', // questa prorpietá puo chiamarsi template dove all'interno scriviamo il codice HTML direttamente, oppure puó chiamarsi templateUrl, dove assegniamo il percorso del file html del componente
    styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {   // per rendere questa classe sempre accesibile, anche dagli altri componenti si usa export

}