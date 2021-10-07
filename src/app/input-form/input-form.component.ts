import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})






export class InputFormComponent {
  name: string | undefined;
  yourName: string | undefined;
  em: string | undefined;
  email: string | undefined;
  quote: string | undefined;

  ngOnInit() {
    this.name = "John"
  }
}
