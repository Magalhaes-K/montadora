% =================================
% ESTOQUE DA MONTADORA
% =================================

estoque(aco, 100).
estoque(plastico, 50).
estoque(aluminio, 30).
estoque(vidro, 20).
estoque(cobre, 10).
estoque(borracha, 40).

% =================================
% MATERIAIS POR UNIDADE DE PRODUTO
% =================================

material(carro, aco, 80).
material(carro, vidro, 8).
material(carro, borracha, 12).
material(carro, cobre, 3).

material(cadeira, aco, 5).
material(cadeira, plastico, 2).
material(cadeira, borracha, 0.5).

material(celular, aluminio, 0.1).
material(celular, vidro, 0.05).
material(celular, cobre, 0.02).
material(celular, plastico, 0.03).

material(portao, aco, 40).
material(portao, aluminio, 5).
material(portao, cobre, 1).
material(portao, plastico, 3).

% =================================
% VERIFICACAO DE UM MATERIAL
% =================================

verificar_item(Produto, Quantidade, Material, PorUnidade) :-
    estoque(Material, Disponivel),
    Necessario is PorUnidade * Quantidade,
    (   Disponivel >= Necessario
    ->  format('OK: ~w - necessario: ~2f, estoque: ~2f~n',
               [Material, Necessario, Disponivel])
    ;   Falta is Necessario - Disponivel,
        format('FALTA: ~w - necessario: ~2f, estoque: ~2f, faltam: ~2f~n',
               [Material, Necessario, Disponivel, Falta])
    ).

% =================================
% REGRA PRINCIPAL DE CONSULTA
% =================================

verificar(Produto, Quantidade) :-
    material(Produto, _, _),
    Quantidade > 0,
    format('~nPedido: ~w x ~d~n', [Produto, Quantidade]),
    forall(
        material(Produto, Material, PorUnidade),
        verificar_item(Produto, Quantidade, Material, PorUnidade)
    ).
