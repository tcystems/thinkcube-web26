import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  faCircleCheck = faCircleCheck;

  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.heroVideo) {
      return;
    }
    // SSR hydration can leave the `muted` IDL property false even though the
    // attribute is present, which silently blocks autoplay. Set it explicitly.
    const video = this.heroVideo.nativeElement;
    video.muted = true;
    video.play().catch(() => {});
  }
}
