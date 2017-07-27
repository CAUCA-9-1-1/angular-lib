import {Injectable} from '@angular/core';

@Injectable()
export class DevextremeDatagrid {

  constructor() { }

  public onCalculateCellValue(field, data) {
    if (typeof (data) === 'undefined') {
      data = field;
      field = 'name';
    }

    return (data[field] ? data[field]['fr'] : '');
  }

  public onEditCellTemplate(cellElement, cellInfo) {
    /*$('<div>').dxMultiLang({
      value: cellInfo.data.name,
      onValueChanged: function (e) {
        cellInfo.setValue(e.value);
      }
    }).appendTo(cellElement);*/
  }
}
