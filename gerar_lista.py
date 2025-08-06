# gerar_lista.py
with open('lista_titulos.md', 'w', encoding='utf-8') as f:
    for i in range(3, 345):
        f.write(f'### 1.2.{i}\n')
print("Arquivo 'lista_titulos.md' gerado com sucesso!")

