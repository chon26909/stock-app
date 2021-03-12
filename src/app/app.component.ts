import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  moblieQueryMax: MediaQueryList;

  private _moblieQueryListener: ()=> void;

  constructor(changeDectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this._moblieQueryListener = () => changeDectorRef.detectChanges();
    this.moblieQueryMax = media.matchMedia("(max-width:600px)");
    this.moblieQueryMax.addListener(this._moblieQueryListener);
  }
  ngOnDestroy(): void {
    this.moblieQueryMax.removeListener(this._moblieQueryListener);
  }

  title = 'stock-app';
}
