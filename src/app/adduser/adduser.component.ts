// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
//
//
// @Component({
//   selector: 'app-adduser',
//   templateUrl: './adduser.component.html',
//   styleUrls: ['./adduser.component.css'] // Use styleUrls instead of styleUrl
// })
// export class AdduserComponent {
//   formData = {
//     name: '',
//     mobile: '',
//     email: ''
//   };
//
//   showSuccessMessage = false;
//
//   // @ts-ignore
//   onSubmit(form: NgForm) {
//     if (form.valid) {
//       // Perform form submission logic here
//       this.showSuccessMessage = true;
//       // Optionally, you can reset the form after submission
//       form.reset();
//     }
//   }
//   // @ts-ignore
//   onSubmit(form: any) {
//     if (form.valid) {
//       // Perform action like saving to database
//       // For now, just show an alert
//       alert('Successfully added: ' + JSON.stringify(this.formData));
//     } else {
//       alert('Please fill all the fields');
//     }
//   }
// }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdduserService } from "../aservice/adduser.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent {
  formData: any = {};
  showSuccessMessage: boolean = false;

  constructor(private userService: AdduserService) {}

  onSubmit(form: NgForm) {
    this.userService.addUser(this.formData)
      .subscribe(
        response => {
          console.log(response);
          this.showSuccessMessage = true;
          form.resetForm();
          setTimeout(() => this.showSuccessMessage = false, 3000); // hide success message after 3 seconds
        },
        error => console.error(error)
      );
  }
}

