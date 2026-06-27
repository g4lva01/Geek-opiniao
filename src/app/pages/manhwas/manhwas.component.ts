import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data';

interface CardItem {
    id: string;
    title: string;
    photoCover: string;
}

@Component({
    selector: 'app-manhwas',
    templateUrl: './manhwas.component.html',
    styleUrls: ['./manhwas.component.css'],
    standalone: false
})
export class ManhwasComponent implements OnInit {
    manhwaArticles: CardItem[] = [];

    ngOnInit(): void {
        this.manhwaArticles = data.filter(article => {
            const idNumber = Number(article.id);
            return idNumber >= 10 && idNumber <= 18;
        });
    }
}
