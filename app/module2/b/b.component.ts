import { Component } from '@angular/core';
import { BSub1Component } from './sub1/bsub1.component';
import { BSub2Component } from './sub2/bsub2.component';
import { BSub3Component } from './sub3/bsub3.component';

@Component({
  selector: 'bcomp',
  directives: [BSub1Component, BSub2Component, BSub3Component],
  template: `<h2>Module2_B</h2>
  			Mod 2 B Navigate:
			<b_sub1></b_sub1>
			<b_sub2></b_sub2>
			<b_sub3></b_sub3>`
		})
export class BComponent { }
