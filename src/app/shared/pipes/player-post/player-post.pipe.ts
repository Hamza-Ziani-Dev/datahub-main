import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerPost'
})
export class PlayerPostPipe implements PipeTransform {
  transform(value: string): string {
    const playerPosts = [
      { id: 'G', label: 'Gardien' },
      { id: 'D', label: 'Défenseur' },
      { id: 'AD', label: 'Arrière droit' },
      { id: 'DC', label: 'Défenseur central' },
      { id: 'AG', label: 'Arrière gauche' },
      { id: 'M', label: 'Milieu' },
      { id: 'MDR', label: 'Milieu droit' },
      { id: 'MA', label: 'Milieu axial' },
      { id: 'MG', label: 'Milieu gauche' },
      { id: 'MO', label: 'Milieu offensif' },
      { id: 'MDF', label: 'Milieu défensif' },
      { id: 'A', label: 'Attaquant' },
      { id: 'ALD', label: 'Ailier droit' },
      { id: 'AA', label: 'Attaquant axial' },
      { id: 'ALG', label: 'Ailier gauche' }
    ];

    const matchingPost = playerPosts.find(post => post.id === value);
    return matchingPost ? matchingPost.label : '';
  }
}
