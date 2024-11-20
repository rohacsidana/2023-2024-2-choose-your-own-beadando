import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task3-b',
  templateUrl: './task3-b.component.html',
  styleUrls: ['./task3-b.component.less'],
})
export class Task3BComponent {
  selectedLanguage: string = 'hu';
  changeCounter = 0;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('lang') || 'hu';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
    this.selectedLanguage = savedLanguage;
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.updateLocalStorageLang();
    this.changeCounter++;
  }

  updateLocalStorageLang() {
    localStorage.setItem('lang', this.selectedLanguage);
  }
}
