import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = this.formBuilder.group({
    id: [],
    firstName: [''],
    lastName: [''],
    age: [0],
  });

  successMessage: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  async createUser() {
    const user = this.userForm.value;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const userAdded = await this.userService.createUser(user);
      this.successMessage = 'User added with id ' + userAdded.id;
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }

}
