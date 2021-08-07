import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/model/friend.class';

@Component({
  selector: 'app-friends-manager',
  templateUrl: './friends-manager.component.html',
  styleUrls: ['./friends-manager.component.css']
})
export class FriendsManagerComponent implements OnInit {

  title: string="Friends Manager";
  friends: Friend[]= [];
  friend: Friend=new Friend();
  submitBtnTitle: string= 'Save';

  constructor() { }

  ngOnInit(): void {
    let friend1: Friend= new Friend("Dave Grohl", 52, "dave@ff.com", true);
    let friend2: Friend= new Friend("Jessie Fecher", 32, "jess@ff.com", true);
    let friend3: Friend= new Friend("Amanda Wallace", 64, "awallace@ff.com", false);
    let friend4: Friend= new Friend("Maggie Kohli", 35, "maggie@ff.com", false);
    let friend5: Friend= new Friend("Fred Bob", 48, "fred@ff.com", false);
   
    this.friends= [friend1, friend2, friend3, friend4, friend5];

  }

  save() {
    //add friend to friends list
    this.friends.push(this.friend);
  }
}
