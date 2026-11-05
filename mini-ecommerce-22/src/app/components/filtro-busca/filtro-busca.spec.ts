import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltroBuscaComponent } from './filtro-busca';

describe('FiltroBuscaComponent', () => {
  let component: FiltroBuscaComponent;
  let fixture: ComponentFixture<FiltroBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroBuscaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('updates the model while typing and emits only on submit', () => {
    const input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    const onSearch = vi.fn();
    component.aoPesquisar.subscribe(onSearch);

    input.value = 'teclado';
    input.dispatchEvent(new Event('input'));

    expect(component.termoBusca()).toBe('teclado');
    expect(onSearch).not.toHaveBeenCalled();

    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(onSearch).toHaveBeenCalledWith('teclado');
  });
});
