import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

type Project = {
  id?: string;
  name?: string;
  icon?: string;
  description?: string;
  link?: string;
  date?: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coturiv';

  projects: Project[] = [
    {
      name: 'Arbitral',
      icon: 'assets/images/p-arbitral.svg',
      description: 'Crowd Sourced Fact Checking Media Bias',
      link: 'https://arbitral.app'
    },
    {
      name: 'Comparrot',
      icon: 'assets/images/p-cprt.jpg',
      description: 'Finds the cheapest prices as you shop automatically',
      link: 'https://comparrot.web.app/'
    },
    {
      name: 'Karrot',
      icon: 'assets/images/p-karrot.png',
      description: 'the Innovative and Cost Effective Social Media Marketing Platform',
      link: 'https://karrot.app'
    },
    {
      name: 'VciteMobile',
      icon: 'assets/images/p-vcitem.png',
      description: 'Companion app for Velosum citation system',
      link: 'http://velosum.com'
    // }, {
    //   name: 'Monkey Method',
    //   icon: 'assets/images/p-mm.png',
    //   description: 'Monkey Method Gymnastics & Weightlifting Training',
    //   link: 'https://apps.apple.com/us/app/monkey-method/id1222654341'
    }
  ];

  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      'stacko',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/stackoverflow.svg')
    );
  }
}
