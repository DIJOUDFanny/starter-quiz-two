import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

/*@Component({
  // tslint:disable-next-line:component-selector
  selector: 'date-pipe',
  template: <div>
    <p> The time is {{today | date:'h:mm a z'}} </p>
  </div>
})

export class DatePipeComponent {
  today: number = Date.now();
}*/

export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
  }

  deleteQuiz() {
    this.quizDeleted.emit(this.quiz);
  }
}
