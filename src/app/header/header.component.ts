import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input("media_query") moblieQueryMax: boolean | undefined;
  @Output() navToggle = new EventEmitter();

  constructor() { }

  img_profile = "https://scontent.fbkk5-7.fna.fbcdn.net/v/t31.0-8/966951_524915017575552_106824054_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFFSb20QuKJw_3rSQCzle35lpkMdvSOJPyWmQx29I4k_C-gQIIz9ZFeq_H3AiOx7n4HJOLxygWY3U8WwWq02M7t&_nc_ohc=aspTtVmFVFAAX-vEs81&_nc_ht=scontent.fbkk5-7.fna&oh=21952c01d127fdd2426d243063ac6036&oe=60716B11";

  emailBadge = 15;
  notiBadge = 10;

  onClickNavToggle() {
    this.navToggle.emit();
  }

  ngOnInit(): void {
  }

}
