import { Component } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-homme',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './homme.component.html',
  styleUrl: './homme.component.css'
})
export class HommeComponent {
  userA = {name: "alex", email:"alex@gmail.com", job: "programador"}
  userB = {name: "osvaldo", email:"osvaldo@gmail.com", job:"estudante"}
}
