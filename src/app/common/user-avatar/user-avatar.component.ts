import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() avatarUrl: string = 'assets/images/7a049a671d198491f899b5aac9fae7014d7ba926.jpg'; // URL аватара
  @Input() username: string = 'Denis 3D'; // Имя пользователя
}