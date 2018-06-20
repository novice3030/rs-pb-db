import { Component, OnInit } from '@angular/core';
import { SimpleUrlParamParserService } from '../../services/simple-url-param-parser.service';
@Component({
  selector: 'rsdb-login-catcher',
  templateUrl: './login-catcher.component.html',
  styleUrls: ['./login-catcher.component.css']
})
export class LoginCatcherComponent implements OnInit {

  constructor(private simpleUrlParamParserService: SimpleUrlParamParserService) { }

  ngOnInit() {
   console.log(this.simpleUrlParamParserService.getQueryParams());
  }

}
