import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StartService {
  userReady:boolean = false;
  userData!:User;
  constructor(private authService:AuthService) { }

  startApplication() {
    this.authService.afAuth.user.subscribe({
      next: (action) => {
        const data = action as User;
        if (data) {
          this.userData = data;
          this.userReady = true;
        } else {
          this.userReady = false;
        }
      },
      error: (error) => {
        console.error(error);
        this.userReady = false;
      },
      complete: () => console.log("Getting User Data Complete")
    });
  }

}
