import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() avatarUrl: string = 'assets/images/user-avatar.jpg'; 
  @Input() username: string = 'Denis 3D'; 
}