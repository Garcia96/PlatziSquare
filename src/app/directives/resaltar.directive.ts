import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit{
    constructor(private elRef: ElementRef, private rederer: Renderer2){

    }
    @Input('resaltar') plan: string="";
    ngOnInit(){
        if (this.plan === 'pagado') {
            this.rederer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
            this.rederer.setStyle(this.elRef.nativeElement, 'font-weight','blod');
        }
    }
}