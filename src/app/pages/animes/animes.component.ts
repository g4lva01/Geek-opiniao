import { Component, OnInit } from '@angular/core';
import { data } from '../../data/data';

interface CardItem {
    id: string;
    title: string;
    photoCover: string;
}

@Component({
    selector: 'app-animes',
    templateUrl: './animes.component.html',
    styleUrls: ['./animes.component.css'],
    standalone: false
})
export class AnimesComponent implements OnInit {
    animeArticles: CardItem[] = [];

    ngOnInit(): void {
        this.animeArticles = data.filter(article => {
            const idNumber = Number(article.id);
            return idNumber >= 1 && idNumber <= 9;
        });
    }
}