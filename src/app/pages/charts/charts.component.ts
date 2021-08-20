import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private _script: ScriptService) { }

  ngOnInit(): void {

    window.scroll(0,0);

    this._script.loadScripts();
    this._script.load(this._script.sources.key32);
  }

}
