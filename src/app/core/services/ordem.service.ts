import { CrudService } from './crud.service';
import { Injectable } from '@angular/core';
import { OrdemServico } from '../../models/ordem-servico';
import { map, Observable } from 'rxjs';
import { CreateAtribuicao } from '../../models/atribuicao';

@Injectable({
  providedIn: 'root'
})
export class OrdemService extends CrudService<OrdemServico> {

  constructor() {
    super('/v1/os');
  }

  getAllWithCurrentStage(): Observable<OrdemServico[]>{
    return this.http.get<OrdemServico[]>(this.apiUrl).pipe(
      map(ordens => ordens.map(ordem => ({
        ...ordem,
        latestHistorico: ordem.historicoOs[0] || null
      })))
    )
  }

  atribuirUsuario(atribuicao: CreateAtribuicao): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/atribuir`, atribuicao);
  }

  concluirEtapa(historicoId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/concluir-etapa/${historicoId}`, {})
  }
  
  avancarEtapa(historicoId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/avancar-etapa/${historicoId}`, {})
  }

  uploadArquivo(ordemId: string, data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${ordemId}/anexar`, data);
  }
}