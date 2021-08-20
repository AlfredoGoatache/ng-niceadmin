import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private _script: ScriptService) { }

  ngOnInit(): void {

    window.scroll(0,0);

    this._script.loadScripts();
  }

}
