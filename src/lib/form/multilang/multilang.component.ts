import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {ConfigService} from '../../core/config/config.service';

@Component({
  selector: 'cause-multilang',
  templateUrl: './multilang.component.html',
  styleUrls: ['./multilang.component.styl']
})
export class MultilangComponent implements OnInit {
  @Input()
  get value(): object { return this._value; }
  set value(val: object) {
    this.languages.forEach((lang) => {
      this._value[lang] = (val && val[lang] ? val[lang] : '');
    });

    this._value['idLanguageContent'] = (
      val && val['idLanguageContent'] ? val['idLanguageContent'] : ''
    );
    this.selectedTabValue = this._value[this.selectedTab];
  }
  private _value: object = {
    'idLanguageContent': ''
  };

  public labels: string[] = [];
  public languages: string[] = [];
  public selectedTab: string;
  public selectedTabValue: string;

  @Output() onValueChanged = new EventEmitter();

  constructor(private translate: TranslateService, private config?: ConfigService) {
    this.languages = this.config.getConfig('languages') || ['fr'];
    this.languages.forEach((lang) => {
      this._value[lang] = '';
    });

    // If we use the PIPE "translate" inside the "title" of "dxi-item" the view bug
    this.translate.get(this.languages).subscribe(labels => {
      for (const i in labels) {
        if (labels[i]) {
          this.labels.push(labels[i]);
        }
      }
    });
  }

  ngOnInit() {
    this.selectedTab = this.languages[0];
    this.selectedTabValue = this._value[this.selectedTab];
  }

  public onTabValueChanged(e) {
    const oldValue = Object.assign({}, this.value);

    this._value[this.selectedTab] = e.element.find('input').val();
    this.onValueChanged.emit({
      value: this.value,
      oldValue: oldValue
    });
  }

  public onTabChanged(e) {
    this.selectedTab = this.languages[e.component.option('selectedIndex')];
    this.selectedTabValue = this._value[this.selectedTab];
  }
}
