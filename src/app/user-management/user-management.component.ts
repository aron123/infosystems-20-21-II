import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  errorMessage: string;
  successMessage: string;

  userForm: FormGroup = this.formBuilder.group({
    id: [0],
    firstName: [''],
    lastName: [''],
    age: [0]
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id) {
      const user = await this.userService.getUserById(id);
      this.userForm.setValue(user);
    }
  }

  async saveUser() {
    const user = this.userForm.value;

    try {
      this.errorMessage = '';
      this.successMessage = '';
      const userAdded = await this.userService.saveUser(user);
      this.successMessage = 'User added with id ' + userAdded.id;
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }
}
