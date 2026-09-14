import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppChart } from './app/chart.component';

bootstrapApplication(AppChart).catch((err) => console.error(err));
