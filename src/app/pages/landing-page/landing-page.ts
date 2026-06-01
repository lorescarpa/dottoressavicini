import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSection } from './components/hero-section/hero-section';
import { Contacts } from './components/contacts/contacts';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericSection } from './components/generic-section/generic-section';
import Button from '../../@ui/button/button.component';

export type Section = {
  id: string;
  header: string;
  content: string;
  buttonText?: string;
  direction: 'row' | 'row-reverse';
  type: 'primary' | 'secondary';
  imgSrc: string | null;
};

@Component({
  selector: 'av-landing-page',
  imports: [CommonModule, HeroSection, GenericSection],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements AfterViewInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private subscription!: Subscription;

  sections: Section[] = [
    {
      id: 'about-me',
      header: 'Chi sono',
      content: `
    Mi chiamo <strong>Alessia Vicini</strong> e sono una <strong>psicologa clinica a Torino</strong>. <br />
    Accompagno adulti, giovani adulti e adolescenti in percorsi di supporto psicologico, in presenza e online. <br />
    Lavoro con chi affronta ansia, difficoltà emotive o relazionali, creando insieme uno spazio sicuro e su misura.
    Un luogo in cui poter dare senso a ciò che si sta vivendo, senza sentirsi giudicati.`,
      direction: 'row',
      type: 'primary',
      imgSrc: null,
      buttonText: 'Scopri di più su di me',
    },
    {
      id: 'services',
      header: 'I miei servizi',
      content: `
    Offro percorsi di <strong>supporto psicologico a Torino e online</strong> rivolti ad adulti, giovani adulti e adolescenti.
    Mi occupo di <strong>ansia, attacchi di panico, difficoltà emotive e relazionali, depressione e trauma</strong>, oltre a percorsi di crescita personale e autostima.<br />
    Ogni percorso è personalizzato e costruito insieme, a partire dai bisogni e dagli obiettivi della persona, in uno spazio di ascolto accogliente e non giudicante.`,
      direction: 'row-reverse',
      type: 'secondary',
      imgSrc: 'assets/resources/hands.jpg',
      buttonText: 'Scopri nel dettaglio i miei servizi',
    },
    // {
    //   id: 'psychotherapy',
    //   header: 'Sulla psicoterapia',
    //   content: `La definizione ufficiale afferma che "la psicoterapia è l'uso consapevole e intenzionale di metodi clinici e interventi interpersonali
    //     derivati da principi psicologici riconosciuti per aiutare le persone a cambiare i propri comportamenti,
    //     cognizioni, emozioni e/o altre caratteristiche personali in una direzione che lo psicoterapeuta considera auspicabile".
    //     In poche parole, si tratta di un incontro tra un terapeuta e un cliente/paziente volto a cambiare le loro esperienze,
    //     il loro modo di pensare e il loro comportamento, a eliminare sintomi fastidiosi e le loro cause...`,
    //   direction: 'row',
    //   type: 'primary',
    //   imgSrc: null,
    //   buttonText: 'Scopri di più',
    // },
    // {
    //   id: 'reading-room',
    //   header: 'La stanza della lettura',
    //   content: `Vi invito a esplorare l'affascinante mondo della psicologia attraverso citazioni stimolanti
    //   che gettano luce su aspetti profondi della mente e del comportamento umano.
    //   Scoprite la saggezza di grandi pensatori nel campo della psicologia, che rivelano
    //   verità essenziali sulla natura della psiche umana.
    //   Qui troverete una raccolta di perle di riflessione che non solo vi
    //   incuriosiranno, ma vi incoraggeranno anche a riflettere sulle vostre
    //   esperienze e sulle vostre relazioni interpersonali.`,
    //   direction: 'row',
    //   type: 'secondary',
    //   imgSrc: 'assets/resources/bookshelf.jpg',
    //   buttonText: 'Scopri di più',
    // },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.subscription = this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToComponent(fragment);
      }
    });
  }

  navigateTo(id: string) {
    this.router.navigate([id]);
  }

  scrollToComponent(tag: string) {
    const element = document.getElementById(tag) || document.querySelector(tag);
    if (element) {
      (element as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
